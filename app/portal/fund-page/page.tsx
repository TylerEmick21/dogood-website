import type { Metadata } from "next";
import { MOCK_USER } from "@/lib/auth";
import { FundPagePortalClient } from "./FundPagePortalClient";

export const metadata: Metadata = {
  title: "Fund Page — Client Portal",
};

export default function FundPagePortalPage() {
  return (
    <FundPagePortalClient
      fundName={MOCK_USER.fundName}
      fundSlug={MOCK_USER.fundSlug}
    />
  );
}
