import React, {useState} from "react";
import {useLogin} from "@/features/auth/hooks";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const login = useLogin();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        login.mutate(
            {email, password},
            {
                onSuccess: () => {
                    navigate("/");
                },
            }
        );
    };

    return (
        <div className="max-w-sm w-full mx-auto p-6 bg-gray-100 rounded-2xl">
            <h1 className="text-lg font-semibold text-dark-100 mb-4">Login</h1>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.trim())}
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {login?.isError && (
                    <div className="text-sm text-red-600">
                        {login?.error?.message || "Login failed"}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={login.isPending || !email || !password}
                    className="w-full rounded-xl bg-black text-white py-2 text-sm font-semibold disabled:opacity-50"
                >
                    {login.isPending ? "Signing in…" : "Sign in"}
                </button>
            </form>
        </div>
    );
}
