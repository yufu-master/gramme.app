import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";

export function TestBanner() {
  return (
    <div className="sticky top-0 z-[60] border-b border-amber-200/60 bg-amber-50/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2.5 text-sm">
        <p className="flex items-center gap-2 font-medium text-amber-900">
          <FlaskConical className="h-4 w-4 shrink-0" />
          Version 2 — environnement de test (brochure commerciale)
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/80 bg-white px-3 py-1 text-xs font-semibold text-amber-900 transition-colors hover:bg-amber-100"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Retour au site actuel
        </Link>
      </div>
    </div>
  );
}
