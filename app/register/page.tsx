"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-sm space-y-4 rounded-lg border border-zinc-800 p-8"
      >
        <h1 className="text-2xl font-semibold">Create an account</h1>

        {error && (
          <p className="rounded bg-red-500/10 px-3 py-2 text-sm text-red-400">
            {error}
          </p>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm text-zinc-400">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 outline-none focus:border-zinc-500"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="text-sm text-zinc-400">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 outline-none focus:border-zinc-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-white py-2 font-medium text-black transition hover:bg-zinc-200 disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>

        <p className="text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <a href="/login" className="text-white underline">
            Log in
          </a>
        </p>
      </form>
    </main>
  );
}