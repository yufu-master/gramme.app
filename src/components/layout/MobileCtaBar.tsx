"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d8e6cf] bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(38,64,33,0.12)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <Link
          href="/contact"
          onClick={() => trackEvent("cta_demo_click", { source: "mobile_bar" })}
          className="flex-1 rounded-xl bg-[#264021] px-3 py-3 text-center text-sm font-semibold text-white"
        >
          Demander une démo
        </Link>
        <a
          href="mailto:bonjour@gramme.app"
          className="flex-1 rounded-xl border border-[#d8e6cf] bg-[#f6fbf2] px-3 py-3 text-center text-sm font-semibold text-[#355329]"
        >
          Écrire
        </a>
      </div>
    </div>
  );
}
