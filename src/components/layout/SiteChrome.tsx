"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_#f6fbf2,_#ffffff_45%)] text-[var(--foreground)]">
      <SiteHeader />
      <div className={`flex flex-1 flex-col ${isHome ? "" : "pt-[4.25rem] sm:pt-[4.5rem]"}`}>
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
