import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-gray-light px-4 text-center">
      <p className="text-display-lg font-bold text-coral leading-none">404</p>
      <h1 className="mt-4 text-h2-sm font-semibold text-brand-black">Page not found</h1>
      <p className="mt-3 text-body text-brand-gray-dark max-w-md">
        That page doesn&apos;t exist — or it moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Button href="/" variant="primary">Back to Home</Button>
        <Button href="/apply" variant="secondary">Apply Now</Button>
      </div>
    </main>
  );
}
