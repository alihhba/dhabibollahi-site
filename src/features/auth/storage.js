const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";

export function saveToken(token) {
    try { localStorage.setItem(ACCESS_TOKEN_KEY, token); } catch {}
}

export function loadToken() {
    try { return localStorage.getItem(ACCESS_TOKEN_KEY); } catch { return null; }
}

export function clearToken() {
    try { localStorage.removeItem(ACCESS_TOKEN_KEY); } catch {}
}
