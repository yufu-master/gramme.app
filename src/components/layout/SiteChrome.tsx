"use client";

import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Les animations du site suivent le réglage « réduire les animations » du
  // système : sans mouvement, seuls les fondus restent.
  return (
    <MotionConfig reducedMotion="user">
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_#f6fbf2,_#ffffff_45%)] text-[var(--foreground)]">
      <SiteHeader />
      <div className={`flex flex-1 flex-col pb-20 lg:pb-0 ${isHome ? "" : "pt-[4.25rem] sm:pt-[4.5rem]"}`}>
        {children}
      </div>
      <SiteFooter />
      <MobileCtaBar />
    </div>
    </MotionConfig>
  );
}
