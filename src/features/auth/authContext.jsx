import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiFetch } from "@/lib/apiClient";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [bootstrapping, setBootstrapping] = useState(true);

    // Check auth status on mount - with better error handling
    useEffect(() => {
        let isMounted = true;

        const bootstrapAuth = async () => {
            try {
                const response = await apiFetch("/auth/me");

                if (isMounted) {
                    // Check the actual structure of your response
                    if (response?.data) {
                        setUser(response.data); // If response has { data: user }
                    } else if (response?.user) {
                        setUser(response.user); // If response has { user: user }
                    } else {
                        setUser(response); // If response is the user object directly
                    }
                }
            } catch (error) {
                if (isMounted) {
                    setUser(null);
                }
            } finally {
                if (isMounted) {
                    setBootstrapping(false);
                }
            }
        };

        bootstrapAuth();

        return () => {
            isMounted = false;
        };
    }, []);

    const logout = async () => {
        try {
            await apiFetch("/auth/logout", { method: "POST" });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setUser(null);
        }
    };

    const setUserData = (userData) => {
        console.log('👤 Setting user data:', userData);
        setUser(userData);
    };

    const value = useMemo(() => ({
        user,
        bootstrapping,
        setUser: setUserData,
        logout
    }), [user, bootstrapping]);

    return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthCtx);
    if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
    return ctx;
}
