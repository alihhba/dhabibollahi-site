import { apiFetch } from "@/lib/apiClient.js";

// Public
export const getProjectCategories = (params = {}, { signal } = {}) => {
    return apiFetch("/projects-category", { query: params, signal });
};

export const getProjectCategory = (id, { signal } = {}) => {
    return apiFetch(`/projects-category/${id}`, { signal });
};

// Admin
export const createProjectCategory = (formData, { signal } = {}) => {
    return apiFetch("/admin/projects-category", {
        method: "POST",
        body: formData, // FormData handles multipart
        signal,
    });
};

export const updateProjectCategory = (id, formData, { signal } = {}) => {
    return apiFetch(`/admin/projects-category/${id}`, {
        method: "PATCH",
        body: formData,
        signal,
    });
};

export const deleteProjectCategory = (id, { signal } = {}) => {
    return apiFetch(`/admin/projects-category/${id}`, { method: "DELETE", signal });
};
