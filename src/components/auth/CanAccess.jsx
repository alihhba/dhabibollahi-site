import React from "react";
import { useAuth } from "@/features/auth/authContext.jsx";

export default function CanAccess({
                                      roles = [],
                                      fallback = null,
                                      children
                                  }) {
    const { user, bootstrapping } = useAuth();

    if (bootstrapping) {
        return fallback;
    }

    if (!user) {
        return fallback;
    }

    let userRoles = [];

    if (user.data?.role) {
        userRoles = Array.isArray(user.data.role) ? user.data.role : [user.data.role];
    } else if (user.role) {
        userRoles = Array.isArray(user.role) ? user.role : [user.role];
    }

    if (roles.length > 0 && userRoles.length > 0) {
        const hasRole = userRoles.some(r => roles.includes(r));

        if (!hasRole) {
            return fallback;
        }
    } else if (roles.length > 0) {
        return fallback;
    }

    return <>{children}</>;
}
