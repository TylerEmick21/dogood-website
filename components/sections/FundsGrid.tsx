"use client";

import { useState, useMemo } from "react";
import { FundCard } from "@/components/ui/FundCard";
import { cn } from "@/lib/utils";
import type { Fund } from "@/lib/funds";

interface FundsGridProps {
  funds: Fund[];
}

const ALL_LABEL = "All";

export function FundsGrid({ funds }: FundsGridProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(ALL_LABEL);

  // Derive sorted category list from the funds prop
  const categories = useMemo(
    () => [ALL_LABEL, ...Array.from(new Set(funds.map((f) => f.category))).sort()],
    [funds]
  );

  // Featured funds first, then active — filter in real-time
  const filtered = useMemo(() => {
    const sorted = [...funds].sort((a, b) => {
      if (a.status === "featured" && b.status !== "featured") return -1;
      if (b.status === "featured" && a.status !== "featured") return 1;
      return 0;
    });

    return sorted.filter((fund) => {
      const matchesCategory =
        activeCategory === ALL_LABEL || fund.category === activeCategory;

      const lowerQuery = query.toLowerCase().trim();
      const matchesSearch =
        lowerQuery === "" ||
        fund.name.toLowerCase().includes(lowerQuery) ||
        fund.organization.toLowerCase().includes(lowerQuery) ||
        fund.description.toLowerCase().includes(lowerQuery) ||
        fund.country.toLowerCase().includes(lowerQuery);

      return matchesCategory && matchesSearch;
    });
  }, [funds, query, activeCategory]);

  return (
    <div>
      {/* Search + filter bar */}
      <div className="section-container mb-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          {/* Search input */}
          <div className="relative flex-1">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center" aria-hidden="true">
              <svg
                className="h-5 w-5 text-brand-gray-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.65 10.65z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search funds, organizations, or countries…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={cn(
                "w-full rounded-card border border-gray-200 bg-white py-3 pl-10 pr-4",
                "text-body text-brand-black placeholder:text-brand-gray-dark",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
                "transition-shadow duration-200 shadow-card hover:shadow-card-hover"
              )}
              aria-label="Search funds"
            />
          </div>
        </div>

        {/* Category filter pills */}
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={cn(
                "rounded-full px-4 py-1.5 text-caption font-semibold transition-all duration-200 focus-ring",
                activeCategory === cat
                  ? "bg-teal text-white shadow-sm"
                  : "bg-brand-gray-light text-brand-gray-dark hover:bg-teal-light hover:text-teal"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Fund card grid */}
      <div className="section-container">
        {filtered.length > 0 ? (
          <ul
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Fund listings"
          >
            {filtered.map((fund) => (
              <li key={fund.slug} className="flex">
                <FundCard
                  slug={fund.slug}
                  name={fund.name}
                  organization={fund.organization}
                  description={fund.description}
                  category={fund.category}
                  country={fund.country}
                  className="flex-1"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg
              className="mb-4 h-14 w-14 text-brand-gray-dark/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.65 10.65z"
              />
            </svg>
            <p className="text-h3-sm font-semibold text-brand-black">No funds match your search</p>
            <p className="mt-2 text-body text-brand-gray-dark">
              Try adjusting your search or clearing the category filter.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveCategory(ALL_LABEL); }}
              className="mt-6 rounded-btn border border-teal px-5 py-2 text-btn text-teal transition-colors hover:bg-teal hover:text-white focus-ring"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FundsGrid;
