import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../lib/apiClient";

export function useApiQuery({
                                key,
                                path,
                                query,
                                enabled = true,
                                select,     // optional transformer
                                getToken,   // optional auth getter
                                options = {},
                            }) {
    return useQuery({
        queryKey: key,
        enabled,
        select,
        queryFn: ({ signal }) => apiFetch(path, { query, signal, getToken }),
        ...options,
    });
}
