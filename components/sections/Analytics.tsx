"use client";

/**
 * Analytics — GA4 script loader + UTM capture
 *
 * Renders the GA4 global site tag and captures UTM params from
 * the URL into sessionStorage on every page load. Drop this once
 * inside <RootLayout> so it runs on every route.
 */

import Script from "next/script";
import { useEffect } from "react";
import { captureUTM } from "@/lib/utm";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  // Capture UTM params on every client-side navigation
  useEffect(() => {
    captureUTM();
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      {/* GA4 — load async, after page is interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}
