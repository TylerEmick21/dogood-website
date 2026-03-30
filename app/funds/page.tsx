import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FundsGrid } from "@/components/sections/FundsGrid";
import { FUNDS } from "@/lib/funds";

export const metadata: Metadata = {
  title: "Give — Explore Active Funds",
  description:
    "Discover and donate to Do Good-powered funds supporting communities, independent artists, international education, faith initiatives, and more. Every dollar is tax-deductible.",
};

export default function FundsPage() {
  return (
    <>
      <Nav />

      {/* Hero header */}
      <section className="bg-brand-black text-brand-white">
        <div className="section-container py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-display-lg font-bold leading-tight text-brand-white">
              Find a fund.{" "}
              <span className="text-teal">Make an impact.</span>
            </h1>
            <p className="mt-5 text-body-lg text-brand-white/70 max-w-xl">
              Browse active funds powered by Do Good Foundation — from community relief and
              independent film to global education and faith scholarships. Every donation is
              tax-deductible and processed securely.
            </p>
          </div>
        </div>
      </section>

      {/* Search + grid */}
      <section className="section-y bg-brand-gray-light">
        <FundsGrid funds={FUNDS} />
      </section>

      {/* Legal footer strip */}
      <div className="border-t border-gray-200 bg-brand-white py-5 text-center">
        <p className="text-caption text-brand-gray-dark">
          Powered by{" "}
          <span className="font-medium text-brand-black">Do Good Foundation</span>
          , a 501(c)(3) organization (EIN 85-4368754)
        </p>
      </div>

      <Footer />
    </>
  );
}
