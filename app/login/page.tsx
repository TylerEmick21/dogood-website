import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/sections/LoginForm";

export const metadata: Metadata = {
  title: "Welcome Back — Client Login",
  description: "Access your fund, donations, and documents.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex focus-ring rounded-sm">
            <span className="text-2xl font-bold">
              <span className="text-coral">do</span>
              <span className="text-teal"> good</span>
            </span>
          </Link>
        </div>

        <h1 className="text-h2-sm font-semibold text-brand-black mb-2 text-center">
          Welcome back.
        </h1>
        <p className="text-body text-brand-gray-dark mb-8 text-center">
          Access your fund, donations, and documents.
        </p>

        <LoginForm />

        <p className="mt-10 text-center text-caption text-brand-gray-dark">
          Powered by Do Good Foundation, a 501(c)(3)
        </p>
      </div>
    </div>
  );
}
