import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/sections/Analytics";

export const metadata: Metadata = {
  title: {
    default: "[Do Good] — The Fastest Path to Impact",
    template: "%s | [Do Good]",
  },
  description:
    "Instantly launch a compliant nonprofit — without the lawyers, the board, or the IRS wait. [Do Good] NaaS handles tax-deductible donations, legal structure, and more.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://dogoodnaas.com"
  ),
  openGraph: {
    type: "website",
    siteName: "[Do Good]",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
        {/* GA4 + UTM capture — loads after interactive, no-op without NEXT_PUBLIC_GA_MEASUREMENT_ID */}
        <Analytics />
      </body>
    </html>
  );
}
