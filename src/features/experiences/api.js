import {apiFetch} from "@/lib/apiClient.js";

export const getExperiences = async (params = {}, { signal } = {}) => {
    return apiFetch("/experiences", { query: params, signal });
};

export const getExperience = async (id, { signal } = {}) => {
    return apiFetch(`/experiences/${id}`, { signal });
};

export const createExperience = async (body, { signal } = {}) => {
    return apiFetch("/admin/experiences", { method: "POST", body, signal });
};

export const updateExperience = async (input, { signal } = {}) => {
    const { id, ...body } = input;
    return apiFetch(`/admin/experiences/${id}`, { method: "PATCH", body, signal });
};

export const deleteExperience = async (id, { signal } = {}) => {
    return apiFetch(`/admin/experiences/${id}`, { method: "DELETE", signal });
};
