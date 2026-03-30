"use client";

import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Replace with Clerk signIn() in production
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <>
      {/* Replace form with <SignIn /> from Clerk in production */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-caption font-semibold text-brand-black mb-1.5">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-btn border border-gray-200 bg-brand-gray-light px-4 py-3 text-body text-brand-black placeholder:text-brand-gray-dark focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="password" className="block text-caption font-semibold text-brand-black">
              Password
            </label>
            <a href="/forgot-password" className="text-caption text-coral hover:underline focus-ring rounded-sm">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-btn border border-gray-200 bg-brand-gray-light px-4 py-3 text-body text-brand-black placeholder:text-brand-gray-dark focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 rounded-btn bg-coral text-white px-6 py-3 text-btn font-semibold shadow-btn hover:bg-coral-hover active:bg-coral-hover/90 transition-all duration-200 focus-ring disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-caption text-brand-gray-dark">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={() => alert("Magic link — wire to Clerk in production")}
          className="inline-flex items-center gap-1 text-body text-coral hover:underline focus-ring rounded-sm font-medium"
        >
          Sign in with a magic link →
        </button>
      </div>
    </>
  );
}
