"use client";

import { useRef, useState } from "react";

export function UploadSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0] ?? null);
    setUploaded(false);
  }

  function handleUpload() {
    if (!file) return;
    // Wire to storage in Phase 5
    setUploaded(true);
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="bg-white rounded-card-lg shadow-card px-6 py-6">
      <h2 className="text-h3-sm font-semibold text-brand-black mb-2">Upload Your Project Plan</h2>
      <p className="text-body text-brand-gray-dark mb-5">
        Share your project plan with the Do Good team. Accepted formats: PDF, DOCX (max 25 MB).
      </p>

      {uploaded && (
        <div className="mb-4 rounded-btn bg-teal-light border border-teal/30 px-4 py-3">
          <p className="text-body font-semibold text-teal">File uploaded — our team will review it shortly.</p>
        </div>
      )}

      <div
        role="button"
        tabIndex={0}
        aria-label="Click to select a file"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        className="border-2 border-dashed border-gray-200 rounded-card flex flex-col items-center justify-center gap-3 px-6 py-10 mb-4 hover:border-coral/50 transition-colors cursor-pointer"
      >
        <svg className="h-10 w-10 text-brand-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
        {file ? (
          <p className="text-body font-semibold text-brand-black">{file.name}</p>
        ) : (
          <p className="text-body text-brand-gray-dark">
            Drag and drop, or <span className="text-coral font-semibold">browse</span>
          </p>
        )}
        <p className="text-caption text-brand-gray-dark">PDF or DOCX, up to 25 MB</p>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.docx"
          onChange={handleFileChange}
          className="sr-only"
        />
      </div>

      <button
        type="button"
        disabled={!file}
        onClick={handleUpload}
        className="inline-flex items-center justify-center gap-2 rounded-btn bg-coral text-white px-6 py-3 text-btn font-semibold shadow-btn hover:bg-coral-hover transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Upload File
      </button>
    </div>
  );
}
