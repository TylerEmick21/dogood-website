"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface ROICalculatorProps {
  className?: string;
}

// Pricing tiers
const TIERS = [
  { name: "Starter", monthlyFee: 25, rate: 0.05, threshold: 0 },
  { name: "Growth", monthlyFee: 50, rate: 0.04, threshold: 100_000 },
  { name: "Impact", monthlyFee: 100, rate: 0.03, threshold: 250_000 },
];

const PAYMENT_FEE = 0.029; // ~2.9% card processing
const OWN_501C3_COST = 6_000; // mid-range estimate
const OWN_501C3_HOURS = 60;

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function ROICalculator({ className }: ROICalculatorProps) {
  const [monthly, setMonthly] = useState(5_000);

  const result = useMemo(() => {
    const annual = monthly * 12;

    // Determine tier
    const tier = annual >= 250_000 ? TIERS[2] : annual >= 100_000 ? TIERS[1] : TIERS[0];

    const doGoodFee = tier.monthlyFee * 12 + annual * tier.rate + annual * PAYMENT_FEE;
    const net = annual - doGoodFee;

    // Hypothetical own-501c3 path
    const own501c3TotalFirstYear = OWN_501C3_COST + annual * PAYMENT_FEE;
    const ownNet = annual - own501c3TotalFirstYear;

    const savings = net - ownNet;

    return { annual, doGoodFee, net, tier, savings, ownNet };
  }, [monthly]);

  return (
    <div className={cn("rounded-card-lg bg-white p-8 shadow-card max-w-2xl mx-auto", className)}>
      <h2 className="text-h3 font-semibold text-brand-black">
        How much could you raise?
      </h2>
      <p className="mt-2 text-body text-brand-gray-dark">
        See your net revenue with [Do Good] vs. starting your own 501(c)(3).
      </p>

      {/* Slider */}
      <div className="mt-8">
        <label htmlFor="monthly-donations" className="block text-body font-semibold text-brand-black">
          Estimated monthly donations:{" "}
          <span className="text-coral">{formatUSD(monthly)}</span>
        </label>
        <input
          id="monthly-donations"
          type="range"
          min={500}
          max={50_000}
          step={500}
          value={monthly}
          onChange={(e) => setMonthly(Number(e.target.value))}
          className="mt-3 w-full h-2 rounded-full appearance-none cursor-pointer bg-brand-gray-light accent-coral"
          aria-valuetext={formatUSD(monthly)}
        />
        <div className="flex justify-between text-caption text-brand-gray-dark mt-1">
          <span>$500/mo</span>
          <span>$50,000/mo</span>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {/* Do Good column */}
        <div className="rounded-card bg-coral-light p-5 border border-coral/20">
          <p className="text-caption font-semibold uppercase tracking-wider text-coral">With [Do Good]</p>
          <p className="text-caption text-brand-gray-dark mt-1">{result.tier.name} plan</p>
          <p className="mt-3 text-display-lg font-bold text-coral leading-none">
            {formatUSD(result.net)}
          </p>
          <p className="mt-1 text-caption text-brand-gray-dark">net per year</p>
          <p className="mt-2 text-caption text-brand-gray-dark">
            Fees: {formatUSD(result.doGoodFee)}/yr
          </p>
        </div>

        {/* Own 501c3 column */}
        <div className="rounded-card bg-brand-gray-light p-5 border border-gray-200">
          <p className="text-caption font-semibold uppercase tracking-wider text-brand-gray-dark">Own 501(c)(3)</p>
          <p className="text-caption text-brand-gray-dark mt-1">First year estimate</p>
          <p className="mt-3 text-display-lg font-bold text-brand-gray-dark leading-none">
            {formatUSD(result.ownNet < 0 ? 0 : result.ownNet)}
          </p>
          <p className="mt-1 text-caption text-brand-gray-dark">net per year</p>
          <p className="mt-2 text-caption text-brand-gray-dark">
            Setup: {formatUSD(OWN_501C3_COST)} + {OWN_501C3_HOURS}h of your time
          </p>
        </div>
      </div>

      {/* Savings callout */}
      <div className="mt-4 rounded-card bg-teal-light px-5 py-4 border border-teal/20 flex items-center justify-between gap-4">
        <p className="text-body text-brand-black">
          You <strong>keep {formatUSD(Math.max(0, result.savings))} more</strong> in year 1 with [Do Good]
        </p>
        <Button href="/apply" variant="primary" size="sm">
          Apply Now
        </Button>
      </div>

      <p className="mt-4 text-caption text-brand-gray-dark text-center">
        *Estimates only. Payment processing ~2.9% + $0.30/transaction. Own 501(c)(3) setup cost range: $2,000–$10,000. Donors can cover fees at checkout.
      </p>
    </div>
  );
}

export default ROICalculator;
