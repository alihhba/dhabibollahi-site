import { BASE_URL } from "@/config/env";

const buildQuery = (q) => {
    if (!q) return "";
    const usp = new URLSearchParams();
    Object.entries(q).forEach(([k, v]) => {
        if (v !== undefined && v !== null) usp.set(k, String(v));
    });
    const s = usp.toString();
    return s ? `?${s}` : "";
};

export class ApiError extends Error {
    constructor(message, status, data) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.data = data;
    }
}

const extractMessage = (data) => {
    if (!data) return null;

    const m = data.message;

    if (typeof m === 'string') return m;
    if (Array.isArray(m)) return m.join(', ');
    if (m && typeof m === 'object') {
        if (typeof m.message === 'string') return m.message;
        if (Array.isArray(m.message)) return m.message.join(', ');
        if (typeof m.error === 'string') return m.error;
        return JSON.stringify(m);
    }

    if (typeof data.error === 'string') return data.error;
    return null;
};

export async function apiFetch(path, {
    method = "GET",
    headers,
    query,
    body,
    signal,
    skipAuth = false
} = {}) {
    const finalHeaders = { ...headers };
    let finalBody = body;

    // Only set JSON headers if body is NOT FormData
    if (body && !(body instanceof FormData)) {
        finalHeaders["Content-Type"] = "application/json";
        finalBody = JSON.stringify(body);
    } else if (body instanceof FormData) {
        // For FormData, do not set Content-Type; browser will handle it
        // finalHeaders["Content-Type"] = not set
    }

    const url = `${BASE_URL}${path}${buildQuery(query)}`;
    const res = await fetch(url, {
        method,
        headers: finalHeaders,
        body: finalBody,
        signal,
        credentials: "include",
    });

    const text = await res.text();
    const isJson = res.headers.get("content-type")?.includes("application/json");
    const data = text ? (isJson ? JSON.parse(text) : text) : null;

    if (!res.ok) {
        const msg = extractMessage(data) ?? `Request failed with ${res.status}`;
        throw new ApiError(msg, res.status, data);
    }

    return data;
}
