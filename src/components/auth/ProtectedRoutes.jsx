// src/components/auth/ProtectedRoute.jsx
import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "@/features/auth/authContext.jsx";
import Loading from "@/pages/profile/components/experiences/Loading.jsx";

export default function ProtectedRoute({
                                           roles = [],
                                           redirectTo = "/",
                                           requireAuth = true
                                       }) {
    const {user, bootstrapping} = useAuth();

    if (bootstrapping) {
        return <div className="flex justify-center items-center min-h-screen">
            <Loading/>
        </div>;
    }

    if (requireAuth && !user) {
        return <Navigate to={redirectTo} replace/>;
    }

    console.log(user)

    if (roles.length > 0 && user) {
        let userRoles = [];

        userRoles = Array.isArray(user?.role) ? user.role : [user.role];

        const hasRole = userRoles.length > 0 && userRoles.some(r => roles.includes(r));

        if (!hasRole) {
            return <Navigate to={redirectTo} replace/>;
        }
    }

    return <Outlet/>;
}
