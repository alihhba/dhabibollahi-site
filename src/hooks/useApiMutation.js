import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "../lib/apiClient";

export function useApiMutation({
                                   path,
                                   method = "POST",
                                   getToken,
                                   options = {},
                               }) {
    return useMutation({
        mutationFn: (body) =>
            apiFetch(typeof path === "function" ? path(body) : path, {
                method,
                body,
                getToken,
            }),
        ...options,
    });
}
