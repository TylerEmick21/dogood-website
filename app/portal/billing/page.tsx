import type { Metadata } from "next";
import { MOCK_USER } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Billing — Client Portal",
};

const invoices = [
  { date: "Mar 1, 2026", description: "Starter Plan — March 2026", amount: "$25.00", status: "Paid" },
  { date: "Feb 1, 2026", description: "Starter Plan — February 2026", amount: "$25.00", status: "Paid" },
  { date: "Jan 1, 2026", description: "Starter Plan — January 2026", amount: "$25.00", status: "Paid" },
];

export default function BillingPage() {
  // MOCK_USER imported to gate this page; swap with Clerk session in production
  void MOCK_USER;

  return (
    <div className="px-6 py-8 md:px-8 md:py-10 max-w-content mx-auto">
      <h1 className="text-h2-sm font-semibold text-brand-black mb-6">Billing</h1>

      {/* Current plan + next invoice row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Current plan card */}
        <div className="bg-white rounded-card-lg shadow-card px-6 py-5">
          <p className="text-caption font-semibold text-brand-gray-dark uppercase tracking-wide mb-3">
            Current Plan
          </p>
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <p className="text-h3-sm font-semibold text-brand-black">Starter</p>
              <p className="text-body text-brand-gray-dark mt-0.5">$25/month + 5% of donations</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-light px-3 py-1.5 text-caption font-semibold text-teal-hover flex-shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Active
            </span>
          </div>

          {/* Payment method */}
          <div className="border-t border-gray-100 pt-4">
            <p className="text-caption font-semibold text-brand-gray-dark mb-1">Payment Method</p>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-body text-brand-black">Visa ending in 4242</span>
              </div>
              {/* Links to Stripe Customer Portal */}
              <a
                href="#"
                className="text-caption font-semibold text-coral hover:underline focus-ring rounded-sm whitespace-nowrap"
              >
                Update Payment Method →
              </a>
            </div>
          </div>
        </div>

        {/* Next invoice card */}
        <div className="bg-white rounded-card-lg shadow-card px-6 py-5">
          <p className="text-caption font-semibold text-brand-gray-dark uppercase tracking-wide mb-3">
            Next Invoice
          </p>
          <div className="flex items-end gap-3 mb-1">
            <p className="text-h3-sm font-semibold text-brand-black">$25.00 + fees</p>
          </div>
          <p className="text-body text-brand-gray-dark">Due on April 1, 2026</p>

          <div className="mt-4 rounded-btn bg-brand-gray-light px-4 py-3">
            <p className="text-caption text-brand-gray-dark">
              Your invoice will include the $25 monthly fee plus 5% of donations processed in March.
            </p>
          </div>
        </div>
      </div>

      {/* Invoice history */}
      <div className="bg-white rounded-card-lg shadow-card overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-h3-sm font-semibold text-brand-black">Invoice History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-gray-light">
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Date</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Description</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Amount</th>
                <th className="px-6 py-3 text-caption font-semibold text-brand-gray-dark">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invoices.map((inv, i) => (
                <tr key={i} className="hover:bg-brand-gray-light/50 transition-colors">
                  <td className="px-6 py-3.5 text-caption text-brand-gray-dark whitespace-nowrap">{inv.date}</td>
                  <td className="px-6 py-3.5 text-body text-brand-black">{inv.description}</td>
                  <td className="px-6 py-3.5 text-body font-semibold text-brand-black">{inv.amount}</td>
                  <td className="px-6 py-3.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-light px-2.5 py-0.5 text-caption font-semibold text-teal-hover">
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stripe note */}
      <p className="text-caption text-brand-gray-dark">
        Billing is managed through Stripe. Click &lsquo;Update Payment Method&rsquo; to open the Stripe Customer Portal.
      </p>
    </div>
  );
}
