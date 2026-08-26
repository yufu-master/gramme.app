"use client";

import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { BillingPeriodToggle } from "@/components/pricing/BillingPeriodToggle";
import { MISE_EN_SERVICE_EN_CREATION, formatEuro, formatInstallation, pricingFaq, pricingPlans, type BillingPeriod } from "@/lib/pricing";

export function PricingPageContent() {
  const [period, setPeriod] = useState<BillingPeriod>("yearly");

  return (
    <div className="mt-8">
      <div className="flex flex-col items-center gap-3">
        <BillingPeriodToggle period={period} onChange={setPeriod} />
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
                    key={item.label}
                    className={`flex items-start gap-2 ${
                      item.emphasis
                        ? plan.highlight
                          ? "font-bold text-white"
                          : "font-bold text-[#27421f]"
                        : plan.highlight
                          ? "text-white/95"
                          : "text-[#4d6952]"
                    }`}
                  >
                    <CheckIcon
                      className={`mt-0.5 size-4 shrink-0 ${
                        plan.highlight ? "text-[#a8cf8c]" : "text-[#6e9f55]"
                      }`}
                    />
                    {item.label}
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
          C&apos;est plusieurs jours de travail, pas une visite. Nous montons votre compte de bout en
          bout : votre établissement et les profils de votre équipe avec leurs droits, votre carnet de
          fournisseurs, puis votre mercuriale complète — chaque matière première, son unité, son
          conditionnement et son prix d&apos;achat réel. Nous reprenons vos fiches recettes et vos
          sous-recettes, nous traitons vos factures des derniers mois pour que l&apos;historique de prix
          existe dès le départ, nous vérifions les coûts de revient obtenus, et nous formons ceux qui
          utiliseront l&apos;application.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952]">
          Le premier jour, vous n&apos;ouvrez pas un logiciel vide : vous ouvrez vos produits, vos prix
          et vos marges. C&apos;est la différence entre un outil qu&apos;on adopte et un outil
          qu&apos;on abandonne au bout de trois semaines.
        </p>
        <p className="mt-5 text-base font-semibold tabular-nums text-[#355329]">
          Installation accompagnée : {formatInstallation(pricingPlans[0])} pour Starter,{" "}
          {formatInstallation(pricingPlans[1])} pour Pro. Une seule fois, à la mise en service.
          Payable en trois fois sans supplément si vous préférez.
        </p>
        {/* Le cas où le plancher devient le prix : il n'y a rien à reprendre,
            donc la charge est connue d'avance. C'est aussi le profil qui hésite
            le plus sur le coût de départ — autant le lever ici. */}
        <p className="mt-4 rounded-2xl border border-[#a8cf8c]/50 bg-[#f6fbf2] p-4 text-[#4d6952]">
          <strong className="text-[#3e6134]">Vous êtes en cours de création ?</strong> La mise en service
          est alors un forfait ferme de {formatEuro(MISE_EN_SERVICE_EN_CREATION)} HT, quelle que soit
          l&apos;offre : sans historique de factures ni fiches à reprendre, le travail d&apos;installation
          est connu d&apos;avance. Nous partons de vos recettes et nous montons votre mercuriale avec vous.
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4 10.5 8 14l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
