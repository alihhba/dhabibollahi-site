import {
    useQuery,
    useMutation,
    useInfiniteQuery,
    useQueryClient,
} from "@tanstack/react-query";
import {
    getExperiences,
    getExperience,
    createExperience as apiCreateExperience,
    updateExperience as apiUpdateExperience,
    deleteExperience as apiDeleteExperience,
} from "./api";
import {qk} from "@/lib/utils/queryKeys.js";

export function useExperiencesList(params) {
    return useQuery({
        queryKey: qk.experiences.list(params || {}),
        queryFn: ({ signal }) => getExperiences(params || {}, { signal }),
    });
}

export function useExperienceDetail(id, enabled = true) {
    return useQuery({
        queryKey: qk.experiences.detail(id),
        enabled: Boolean(enabled && id),
        queryFn: ({ signal }) => getExperience(id, { signal }),
    });
}

export function useCreateExperience() {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (body) => apiCreateExperience(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: qk.experiences.all });
        },
    });
}

export function useUpdateExperience() {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (input) => apiUpdateExperience(input),
        onSuccess: (updated) => {
            if (updated?.id !== undefined) {
                qc.setQueryData(qk.experiences.detail(updated.id), updated);
            }
            qc.invalidateQueries({ queryKey: qk.experiences.all });
        },
    });
}

export function useDeleteExperience() {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: ({ id }) => apiDeleteExperience(id),
        onSuccess: (_res, vars) => {
            qc.invalidateQueries({ queryKey: qk.experiences.all });
            if (vars?.id !== undefined) {
                qc.removeQueries({ queryKey: qk.experiences.detail(vars.id) });
            }
        },
    });
}

/** OPTIONAL: INFINITE LIST (cursor-based) */
export function useInfiniteExperiences(params) {
    return useInfiniteQuery({
        queryKey: qk.experiences.list({ ...(params || {}), mode: "infinite" }),
        initialPageParam: params?.cursor ?? undefined,
        getNextPageParam: (lastPage) => lastPage?.nextCursor ?? undefined,
        queryFn: ({ pageParam, signal }) =>
            getExperiences(
                { ...(params || {}), cursor: pageParam ?? params?.cursor },
                { signal }
            ),
    });
}
