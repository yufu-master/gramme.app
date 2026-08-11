"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { formatEuro, pricingPlans } from "@/lib/pricing";

export function Pricing() {
  return (
    <section id="tarifs" className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-[var(--foreground)]">Les tarifs</h2>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Sans engagement en mensuel. Annuel avec 2 mois offerts. Installation accompagnée une seule fois.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className={`flex h-full flex-col p-8 ${
                plan.highlight
                  ? "relative z-10 scale-105 border-[#a8cf8c] bg-white shadow-2xl shadow-green-900/5"
                  : "border-[var(--border)] bg-gray-50/50"
              }`}
            >
              {plan.highlight ? (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#a8cf8c] px-4 py-1 text-sm text-white hover:bg-[#96be7d]">
                  Le plus choisi
                </Badge>
              ) : null}
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{plan.name}</h3>
              <p className="mt-2 h-10 text-sm text-[var(--muted-foreground)]">{plan.tagline}</p>
              <p className="mt-6 tabular-nums text-4xl font-extrabold text-[var(--foreground)]">
                {formatEuro(plan.yearlyPrice)}
                <span className="text-base font-medium text-[var(--muted-foreground)]"> HT / an</span>
              </p>
              <p className="mt-1 text-xs font-medium text-[#6e9f55]">
                soit {formatEuro(plan.yearlyMonthlyEquivalent, 2)} HT / mois · ou {formatEuro(plan.monthlyPrice)} HT / mois
              </p>
              <ul className="mt-8 flex-1 space-y-4 text-sm text-[var(--muted-foreground)]">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a8cf8c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/tarifs"
                className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-md text-base font-semibold ${
                  plan.highlight
                    ? "bg-[#a8cf8c] text-white shadow-lg shadow-green-900/10 hover:bg-[#96be7d]"
                    : "border border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-gray-50"
                }`}
                aria-label={`Voir l'offre ${plan.name}`}
              >
                Voir l&apos;offre {plan.name}
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
