import type { Metadata } from "next";
import { MOCK_USER } from "@/lib/auth";
import { UploadSection } from "./UploadSection";

export const metadata: Metadata = {
  title: "Documents — Client Portal",
};

const documents = [
  {
    name: "Signed MSA",
    description: "Your Master Sponsorship Agreement",
  },
  {
    name: "Fiscal Sponsorship Confirmation Letter",
    description: "Official confirmation from Do Good Foundation",
  },
  {
    name: "IRS Determination Letter",
    description: "501(c)(3) determination letter (EIN 85-4368754)",
  },
  {
    name: "IRS 990 Form",
    description: "Most recent 990 filing",
  },
  {
    name: "Donation Methods Guide",
    description: "How donors can give to your fund",
  },
  {
    name: "Welcome Packet PDF",
    description: "Getting started with Do Good NaaS",
  },
  {
    name: "How Finances Work PDF",
    description: "Fee structure, disbursements, and reconciliation",
  },
  {
    name: "How Receipts Work PDF",
    description: "Donor acknowledgment and tax receipt process",
  },
];

function DocumentIcon() {
  return (
    <svg
      className="h-6 w-6 text-coral flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

export default function DocumentsPage() {
  // MOCK_USER imported to gate this page; swap with Clerk session in production
  void MOCK_USER;

  return (
    <div className="px-6 py-8 md:px-8 md:py-10 max-w-content mx-auto">
      <h1 className="text-h2-sm font-semibold text-brand-black mb-6">Documents</h1>

      {/* Document list */}
      <div className="space-y-3 mb-10">
        {/* Download links — wire to actual file URLs in Phase 5 */}
        {documents.map((doc) => (
          <div
            key={doc.name}
            className="bg-white rounded-card shadow-card flex items-center gap-4 px-5 py-4"
          >
            <DocumentIcon />
            <div className="flex-1 min-w-0">
              <p className="text-body font-semibold text-brand-black leading-snug">{doc.name}</p>
              <p className="text-caption text-brand-gray-dark mt-0.5">{doc.description}</p>
            </div>
            <button
              type="button"
              className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 rounded-btn bg-transparent text-coral border-2 border-coral px-4 py-2 text-sm font-semibold hover:bg-coral-light transition-all duration-200 focus-ring"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Upload section — file interaction handled by client component */}
      <UploadSection />
    </div>
  );
}
