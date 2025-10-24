import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";
import { DEFAULT_RETRY, DEFAULT_STALE_TIME } from "../config/env";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: DEFAULT_STALE_TIME,
            gcTime: 5 * 60 * 1000,
            retry: DEFAULT_RETRY,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
        },
        mutations: {
            retry: 0,
        },
    },
    queryCache: new QueryCache({
        onError: (err) => {
            // central error handling (toast/log) if you want
            // console.error("Query error:", err);
        },
    }),
    mutationCache: new MutationCache({
        onError: (err) => {
            // console.error("Mutation error:", err);
        },
    }),
});
