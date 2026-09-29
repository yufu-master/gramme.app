"use client";

import { LayoutGroup, motion } from "motion/react";
import { useId } from "react";
import type { BillingPeriod } from "@/lib/pricing";

/** Sélecteur Mensuel / Annuel partagé entre la page d'accueil et la page Tarifs. */
export function BillingPeriodToggle({
  period,
  onChange,
  className,
}: {
  period: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
  className?: string;
}) {
  const groupId = useId();

  return (
    <div
      role="group"
      aria-label="Périodicité de facturation"
      className={`relative isolate inline-flex rounded-2xl border border-[#dcead2] bg-white p-1 shadow-sm ${className ?? ""}`}
    >
      {/* Un groupe par sélecteur : deux sélecteurs sur une page ne se
          disputent pas la même pastille. */}
      <LayoutGroup id={groupId}>
      <PeriodButton
        id={`${groupId}-monthly`}
        active={period === "monthly"}
        onClick={() => onChange("monthly")}
      >
        Mensuel
      </PeriodButton>
      <PeriodButton
        id={`${groupId}-yearly`}
        active={period === "yearly"}
        onClick={() => onChange("yearly")}
        badge="2 mois offerts"
      >
        Annuel
      </PeriodButton>
      </LayoutGroup>
    </div>
  );
}

function PeriodButton({
  id,
  active,
  onClick,
  children,
  badge,
}: {
  id: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <button
      id={id}
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
        active ? "text-white" : "text-[#355329] hover:bg-[#f6fbf2]"
      }`}
    >
      {/* La pastille foncée glisse d'un bouton à l'autre (29/09/2026). */}
      {active ? (
        <motion.span
          layoutId="periode-active"
          aria-hidden
          className="absolute inset-0 -z-10 rounded-xl bg-[#264021]"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      ) : null}
      {children}
      {badge ? (
        <span
          className={`ml-2 inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
            active ? "bg-[#a8cf8c] text-[#264021]" : "bg-[#a8cf8c]/40 text-[#355329]"
          }`}
        >
          {badge}
        </span>
      ) : null}
    </button>
  );
}
