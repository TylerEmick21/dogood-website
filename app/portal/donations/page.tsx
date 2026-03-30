import type { Metadata } from "next";
import { MOCK_USER } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Donations — Client Portal",
};

const donations = [
  { date: "Mar 28, 2026", donor: "Sarah Mitchell", amount: "$250.00", method: "Credit Card", status: "Disbursed" },
  { date: "Mar 25, 2026", donor: "Anonymous", amount: "$100.00", method: "ACH", status: "Disbursed" },
  { date: "Mar 22, 2026", donor: "James Okonkwo", amount: "$500.00", method: "Credit Card", status: "Pending" },
  { date: "Mar 20, 2026", donor: "Anonymous", amount: "$50.00", method: "ACH", status: "Disbursed" },
  { date: "Mar 17, 2026", donor: "Linda Vasquez", amount: "$200.00", method: "Check", status: "Disbursed" },
  { date: "Mar 15, 2026", donor: "Anonymous", amount: "$75.00", method: "Credit Card", status: "Processing" },
  { date: "Mar 12, 2026", donor: "Robert Chen", amount: "$350.00", method: "ACH", status: "Disbursed" },
  { date: "Mar 10, 2026", donor: "Anonymous", amount: "$25.00", method: "Credit Card", status: "Disbursed" },
  { date: "Mar 8, 2026", donor: "Priya Sharma", amount: "$400.00", method: "Credit Card", status: "Pending" },
  { date: "Mar 5, 2026", donor: "Thomas Wright", amount: "$150.00", method: "Check", status: "Disbursed" },
];

const statusBadge: Record<string, string> = {
  Disbursed: "bg-teal-light text-teal-hover",
  Pending: "bg-marigold-light text-marigold-hover",
  Processing: "bg-sky-light text-sky-hover",
};

export default function DonationsPage() {
  // MOCK_USER is imported to gate this page; swap with Clerk session in production
  void MOCK_USER;

  return (
    <div className="px-6 py-8 md:px-8 md:py-10 max-w-content mx-auto">
      <h1 className="text-h2-sm font-semibold text-brand-black mb-6">Donations</h1>

      {/* Summary bar */}
      <div className="bg-white rounded-card-lg shadow-card mb-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
        {[
          { label: "Gross Total", value: "$24,350.00" },
          { label: "Total Fees", value: "$1,217.50" },
          { label: "Net Total", value: "$23,132.50" },
          { label: "Pending Disbursement", value: "$2,890.00" },
        ].map((item) => (
          <div key={item.label} className="px-5 py-4">
            <p className="text-caption text-brand-gray-dark">{item.label}</p>
            <p className="text-h3-sm font-semibold text-brand-black mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Filter row */}
      {/* Filtering is client-side — wire up in Phase 5 */}
      <div className="bg-white rounded-card-lg shadow-card px-6 py-4 mb-4">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex items-end gap-2">
            <div>
              <label className="block text-caption font-semibold text-brand-black mb-1">From</label>
              <input
                type="date"
                className="rounded-btn border border-gray-200 bg-brand-gray-light px-3 py-2 text-caption text-brand-black focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors"
              />
            </div>
            <div>
              <label className="block text-caption font-semibold text-brand-black mb-1">To</label>
              <input
                type="date"
                className="rounded-btn border border-gray-200 bg-brand-gray-light px-3 py-2 text-caption text-brand-black focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-caption font-semibold text-brand-black mb-1">Method</label>
            <select className="rounded-btn border border-gray-200 bg-brand-gray-light px-3 py-2 text-caption text-brand-black focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors">
              <option value="">All</option>
              <option value="card">Credit Card</option>
              <option value="ach">ACH</option>
              <option value="check">Check</option>
            </select>
          </div>

          <div className="ml-auto">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-btn bg-transparent text-coral border-2 border-coral px-4 py-2 text-sm font-semibold hover:bg-coral-light transition-all duration-200 focus-ring"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Donations table */}
      <div className="bg-white rounded-card-lg shadow-card overflow-hidden mb-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-gray-light border-b border-gray-100">
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Date</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Donor</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Amount</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Method</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {donations.map((row, i) => (
                <tr key={i} className="hover:bg-brand-gray-light/50 transition-colors">
                  <td className="px-6 py-3.5 text-caption text-brand-gray-dark whitespace-nowrap">{row.date}</td>
                  <td className="px-6 py-3.5 text-body text-brand-black">{row.donor}</td>
                  <td className="px-6 py-3.5 text-body font-semibold text-brand-black">{row.amount}</td>
                  <td className="px-6 py-3.5 text-caption text-brand-gray-dark">{row.method}</td>
                  <td className="px-6 py-3.5">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-semibold ${statusBadge[row.status] ?? ""}`}
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

      {/* Pagination placeholder */}
      <div className="flex items-center justify-between text-caption text-brand-gray-dark">
        <p>Showing 1–10 of 47 donations</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled
            className="rounded-btn border border-gray-200 px-3 py-1.5 text-caption font-semibold text-brand-gray-dark disabled:opacity-40"
          >
            Previous
          </button>
          <button
            type="button"
            className="rounded-btn border border-gray-200 px-3 py-1.5 text-caption font-semibold text-brand-black hover:border-coral hover:text-coral transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
