import type { Metadata } from "next";
import Link from "next/link";
import { MOCK_USER } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Dashboard — Client Portal",
};

const recentDonations = [
  { date: "Mar 28, 2026", donor: "Sarah Mitchell", amount: "$250.00", status: "Disbursed" },
  { date: "Mar 25, 2026", donor: "Anonymous", amount: "$100.00", status: "Disbursed" },
  { date: "Mar 22, 2026", donor: "James Okonkwo", amount: "$500.00", status: "Pending" },
];

const statusColors: Record<string, string> = {
  Disbursed: "bg-teal-light text-teal-hover",
  Pending: "bg-marigold-light text-marigold-hover",
  Processing: "bg-sky-light text-sky-hover",
};

export default function DashboardPage() {
  return (
    <div className="px-6 py-8 md:px-8 md:py-10 max-w-content mx-auto">
      {/* Greeting */}
      <h1 className="text-h2-sm font-semibold text-brand-black mb-6">
        Good to see you, {MOCK_USER.name}.
      </h1>

      {/* Fund status card */}
      <div className="bg-white rounded-card-lg shadow-card px-6 py-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-caption font-semibold text-brand-gray-dark uppercase tracking-wide mb-1">
            Your Fund
          </p>
          <h2 className="text-h3-sm font-semibold text-brand-black">{MOCK_USER.fundName}</h2>
          <p className="text-caption text-brand-gray-dark mt-0.5">
            Powered by Do Good Foundation
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-light px-3 py-1.5 text-caption font-semibold text-teal-hover self-start sm:self-center">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          Active
        </span>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Raised (All Time)", value: "$24,350" },
          { label: "This Month", value: "$3,200" },
          { label: "Pending Disbursement", value: "$2,890" },
          { label: "Next Disbursement", value: "April 10, 2026" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-card shadow-card px-5 py-4 flex flex-col gap-1"
          >
            <p className="text-caption text-brand-gray-dark leading-snug">{stat.label}</p>
            <p className="text-h3-sm font-semibold text-coral leading-tight mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Link
          href={`/funds/${MOCK_USER.fundSlug}`}
          className="inline-flex items-center justify-center gap-2 rounded-btn bg-transparent text-coral border-2 border-coral px-5 py-2.5 text-btn font-semibold hover:bg-coral-light transition-all duration-200 focus-ring text-sm"
        >
          View Fund Page
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-btn bg-transparent text-coral border-2 border-coral px-5 py-2.5 text-btn font-semibold hover:bg-coral-light transition-all duration-200 focus-ring text-sm"
        >
          Share Fund Link
        </button>
        <Link
          href="mailto:hello@dogoodnaas.com"
          className="inline-flex items-center justify-center gap-2 rounded-btn bg-transparent text-brand-gray-dark border-2 border-gray-200 px-5 py-2.5 text-btn font-semibold hover:border-coral hover:text-coral transition-all duration-200 focus-ring text-sm"
        >
          Contact Support
        </Link>
      </div>

      {/* Recent donations */}
      <div className="bg-white rounded-card-lg shadow-card overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-h3-sm font-semibold text-brand-black">Recent Donations</h2>
          <Link
            href="/portal/donations"
            className="text-caption font-semibold text-coral hover:underline focus-ring rounded-sm"
          >
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-gray-light">
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Date</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Donor</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Amount</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentDonations.map((row, i) => (
                <tr key={i} className="hover:bg-brand-gray-light/50 transition-colors">
                  <td className="px-6 py-3.5 text-caption text-brand-gray-dark whitespace-nowrap">{row.date}</td>
                  <td className="px-6 py-3.5 text-body text-brand-black">{row.donor}</td>
                  <td className="px-6 py-3.5 text-body font-semibold text-brand-black">{row.amount}</td>
                  <td className="px-6 py-3.5">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-semibold ${statusColors[row.status] ?? ""}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
