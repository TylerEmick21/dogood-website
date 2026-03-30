import { PortalNav } from "@/components/portal/PortalNav";
import { MOCK_USER } from "@/lib/auth";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar nav — desktop only; mobile topbar is rendered inside PortalNav */}
      <PortalNav fundName={MOCK_USER.fundName} />

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-brand-gray-light">
        {children}
      </main>
    </div>
  );
}
