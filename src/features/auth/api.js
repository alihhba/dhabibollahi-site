import { apiFetch } from "@/lib/apiClient";

export function loginRequest({ email, password }, { signal } = {}) {
    return apiFetch("/auth/signin", { method: "POST", body: { email, password }, signal });
}
