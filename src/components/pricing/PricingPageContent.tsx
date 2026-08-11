"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  formatEuro,
  pricingFaq,
  pricingPlans,
  type BillingPeriod,
} from "@/lib/pricing";

export function PricingPageContent() {
  const [period, setPeriod] = useState<BillingPeriod>("yearly");
  const groupId = useId();

  return (
    <div className="mt-8">
      <div className="flex flex-col items-center gap-3">
        <div
          role="group"
          aria-label="Périodicité de facturation"
          className="inline-flex rounded-2xl border border-[#dcead2] bg-white p-1 shadow-sm"
        >
          <PeriodButton
            id={`${groupId}-monthly`}
            active={period === "monthly"}
            onClick={() => setPeriod("monthly")}
          >
            Mensuel
          </PeriodButton>
          <PeriodButton
            id={`${groupId}-yearly`}
            active={period === "yearly"}
            onClick={() => setPeriod("yearly")}
            badge="2 mois offerts"
          >
            Annuel
          </PeriodButton>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {pricingPlans.map((plan) => {
          const isYearly = period === "yearly";
          const bigPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
          const unitLabel = isYearly ? "HT / an" : "HT / mois";

          return (
            <article
              key={plan.id}
              className={`rounded-3xl border p-6 sm:p-8 transition-[opacity,transform] duration-150 ${
                plan.highlight
                  ? "relative border-[#7ca764] bg-[#264021] text-white shadow-[0_20px_60px_rgba(34,60,23,0.35)]"
                  : "border-[#dcead2] bg-white"
              }`}
            >
              {plan.highlight ? (
                <p className="absolute -top-3 left-6 rounded-full bg-[#a8cf8c] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#264021]">
                  Le plus choisi
                </p>
              ) : null}
              <p
                className={`text-sm font-semibold uppercase tracking-wide ${
                  plan.highlight ? "text-[#d7efca]" : "text-[#355329]"
                }`}
              >
                {plan.name}
              </p>
              <p className="mt-4 tabular-nums text-4xl font-black tracking-tight sm:text-5xl">
                {formatEuro(bigPrice)}
                <span
                  className={`ml-1 text-base font-semibold ${
                    plan.highlight ? "text-white/80" : "text-[var(--muted-foreground)]"
                  }`}
                >
                  {unitLabel}
                </span>
              </p>
              <p
                className={`mt-2 text-sm tabular-nums ${
                  plan.highlight ? "text-white/85" : "text-[#4d6952]"
                }`}
              >
                {isYearly ? (
                  <>
                    soit {formatEuro(plan.yearlyMonthlyEquivalent, 2)} HT / mois
                    <span className="mt-1 block font-semibold text-[#a8cf8c]">
                      Économisez {formatEuro(plan.yearlySavings)}
                    </span>
                  </>
                ) : (
                  <>Sans engagement</>
                )}
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? "text-white/85" : "text-[#4d6952]"}`}>
                {plan.tagline}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 ${
                      plan.highlight ? "text-white/95" : "text-[#4d6952]"
                    }`}
                  >
                    <CheckIcon
                      className={`mt-0.5 size-4 shrink-0 ${
                        plan.highlight ? "text-[#a8cf8c]" : "text-[#6e9f55]"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={() =>
                  trackEvent("cta_demo_click", { source: `tarif_${plan.id}_${period}` })
                }
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold ${
                  plan.highlight
                    ? "bg-[#a8cf8c] text-[#264021]"
                    : "bg-[#264021] text-white"
                }`}
              >
                Demander une démonstration
              </Link>
            </article>
          );
        })}
      </div>

      <section
        className="mt-10 rounded-3xl border border-[#dcead2] bg-[#f6fbf2] p-6 sm:p-8"
        aria-labelledby="installation-title"
      >
        <h2 id="installation-title" className="text-2xl font-bold text-[#27421f]">
          On installe tout avec vous
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952]">
          Nous venons une demi-journée dans votre atelier. Nous reprenons votre fichier matières, nous
          traitons vos factures des trois derniers mois pour que vos prix soient à jour dès le premier
          jour, nous saisissons vos recettes principales, nous créons les comptes de votre équipe et
          nous formons ceux qui utiliseront l&apos;application.
        </p>
        <p className="mt-5 text-base font-semibold tabular-nums text-[#355329]">
          Installation accompagnée : {formatEuro(pricingPlans[0].installPrice)} HT pour Starter,{" "}
          {formatEuro(pricingPlans[1].installPrice)} HT pour Pro. Une seule fois, à la mise en service.
          Payable en trois fois sans supplément si vous préférez.
        </p>
      </section>

      <ul className="mt-8 grid gap-2 text-sm text-[#4d6952] sm:grid-cols-2">
        <li>Sans engagement en mensuel, résiliable à tout moment.</li>
        <li>Trente jours satisfait ou remboursé sur l&apos;annuel.</li>
        <li>Données exportables à tout moment, conservées douze mois si vous partez.</li>
        <li>Prix hors taxes, TVA récupérable.</li>
      </ul>

      <section className="mt-14" aria-labelledby="tarifs-faq-title">
        <h2 id="tarifs-faq-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
          Questions fréquentes
        </h2>
        <dl className="mt-6 space-y-4">
          {pricingFaq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-[#dcead2] bg-white p-5">
              <dt className="font-bold text-[#355329]">{item.q}</dt>
              <dd className="mt-2 text-[#4d6952]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
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
      className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
        active ? "bg-[#264021] text-white" : "text-[#355329] hover:bg-[#f6fbf2]"
      }`}
    >
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4 10.5 8 14l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
