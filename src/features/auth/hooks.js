import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "./api";
import { useAuth } from "@/features/auth/authContext.jsx";

export function useLogin() {
    const { setUser, refreshAuth } = useAuth();

    return useMutation({
        mutationFn: ({ email, password }) => loginRequest({ email, password }),
        onSuccess: (res) => {
            // Backend sets the cookie, now update frontend state
            if (res?.user) {
                setUser(res.user);
            }

            // Alternative: Re-verify auth status to be sure
            // refreshAuth();
        },
        onError: (error) => {
            console.error('Login failed:', error);
        }
    });
}
