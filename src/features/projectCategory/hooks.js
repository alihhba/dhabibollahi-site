import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    createProjectCategory as apiCreateProjectCategory,
    deleteProjectCategory as apiDeleteProjectCategory,
    getProjectCategories,
    getProjectCategory,
    updateProjectCategory as apiUpdateProjectCategory,
} from "./api";
import {qk} from "@/lib/utils/queryKeys.js";

// List categories
export function useProjectCategories(params) {
    return useQuery({
        queryKey: qk.projectCategory.list(params || {}),
        queryFn: ({signal}) => getProjectCategories(params || {}, {signal}),
    });
}

// Single category detail
export function useProjectCategoryDetail(id, enabled = true) {
    return useQuery({
        queryKey: qk.projectCategory.detail(id),
        enabled: Boolean(enabled && id),
        queryFn: ({signal}) => getProjectCategory(id, {signal}),
    });
}

// Create category
export function useCreateProjectCategory() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (formData) => apiCreateProjectCategory(formData),
        onSuccess: () => {
            qc.invalidateQueries({queryKey: qk.projectCategory.all});
        },
    });
}

// Update category
export function useUpdateProjectCategory() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({id, formData}) => apiUpdateProjectCategory(id, formData),
        onSuccess: (updated) => {
            if (updated?.id) {
                qc.setQueryData(qk.projectCategory.detail(updated.id), updated);
            }
            qc.invalidateQueries({queryKey: qk.projectCategory.all});
        },
    });
}

// Delete category
export function useDeleteProjectCategory() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id) => apiDeleteProjectCategory(id),
        onSuccess: () => qc.invalidateQueries({queryKey: qk.projectCategory.all}),
    });
}
