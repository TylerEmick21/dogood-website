"use client";

import { useState } from "react";

interface Props {
  fundName: string;
  fundSlug: string;
}

export function FundPagePortalClient({ fundName, fundSlug }: Props) {
  const publicUrl = `dogoodnaas.com/funds/${fundSlug}`;
  const [editRequest, setEditRequest] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(`https://${publicUrl}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleSubmitEdit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to HubSpot / email in Phase 5
    setSubmitted(true);
    setEditRequest("");
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="px-6 py-8 md:px-8 md:py-10 max-w-content mx-auto">
      <h1 className="text-h2-sm font-semibold text-brand-black mb-6">Your Fund Page</h1>

      {/* Status banner */}
      <div className="flex items-start gap-3 bg-marigold-light border border-marigold/30 rounded-card px-5 py-4 mb-6">
        <span className="inline-flex items-center rounded-full bg-marigold px-2.5 py-0.5 text-caption font-semibold text-white flex-shrink-0 mt-0.5">
          Pending Review
        </span>
        <p className="text-body text-brand-black">
          Your fund page is under review. We&apos;ll notify you when it&apos;s live.
        </p>
      </div>

      {/* Preview section */}
      <div className="bg-white rounded-card-lg shadow-card overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-h3-sm font-semibold text-brand-black">Preview</h2>
        </div>
        {/* Replace with actual iframe embed of live fund page once approved */}
        <div className="bg-brand-gray-light border-2 border-dashed border-gray-200 rounded-card m-5 min-h-[320px] flex items-center justify-center">
          <div className="text-center px-8 py-12 max-w-sm mx-auto">
            <p className="text-caption font-semibold text-brand-gray-dark uppercase tracking-wide mb-3">
              Fund Preview
            </p>
            <h3 className="text-h3-sm font-semibold text-brand-black mb-2">{fundName}</h3>
            <p className="text-body text-brand-gray-dark mb-6">
              We&apos;re making a difference through fiscal sponsorship with Do Good Foundation, a 501(c)(3).
            </p>
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center rounded-btn bg-coral text-white px-6 py-3 text-btn font-semibold opacity-60 cursor-default"
            >
              Donate Now
            </button>
            <p className="text-caption text-brand-gray-dark mt-3">
              Live preview will appear here once your page is approved.
            </p>
          </div>
        </div>
      </div>

      {/* Public URL */}
      <div className="bg-white rounded-card-lg shadow-card px-6 py-5 mb-6">
        <h2 className="text-h3-sm font-semibold text-brand-black mb-3">Public URL</h2>
        <p className="text-caption text-brand-gray-dark mb-3">
          Your fund URL (will be live once approved):
        </p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={publicUrl}
            className="flex-1 rounded-btn border border-gray-200 bg-brand-gray-light px-4 py-2.5 text-body text-brand-black font-mono focus:outline-none"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-btn bg-transparent text-coral border-2 border-coral px-4 py-2.5 text-sm font-semibold hover:bg-coral-light transition-all duration-200 focus-ring"
          >
            {copied ? (
              "Copied!"
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Request edits — wire to HubSpot / email in Phase 5 */}
      <div className="bg-white rounded-card-lg shadow-card px-6 py-6">
        <h2 className="text-h3-sm font-semibold text-brand-black mb-2">Request Edits</h2>
        <p className="text-body text-brand-gray-dark mb-4">
          Need to update your fund description, goals, or imagery? Submit a request and our team will make the changes.
        </p>
        {submitted && (
          <div className="mb-4 rounded-btn bg-teal-light border border-teal/30 px-4 py-3">
            <p className="text-body font-semibold text-teal">Request submitted — we&apos;ll be in touch shortly.</p>
          </div>
        )}
        <form onSubmit={handleSubmitEdit} className="space-y-4">
          <textarea
            rows={5}
            value={editRequest}
            onChange={(e) => setEditRequest(e.target.value)}
            placeholder="Describe the changes you'd like to make to your fund page…"
            className="w-full rounded-card border border-gray-200 bg-brand-gray-light px-4 py-3 text-body text-brand-black placeholder:text-brand-gray-dark focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={!editRequest.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-btn bg-coral text-white px-6 py-3 text-btn font-semibold shadow-btn hover:bg-coral-hover transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Edit Request
          </button>
        </form>
      </div>
    </div>
  );
}
