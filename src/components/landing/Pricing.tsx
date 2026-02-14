"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Essentiel Atelier",
    price: "149€",
    period: "/mois",
    setup: "Mise en place: 490€",
    pitch: "Pour les artisans qui veulent sortir d'Excel sans complexité.",
    items: ["1 site de production", "OCR factures (200/mois)", "Mercuriale + alertes", "Calcul coût de revient & marge"],
    cta: "Lancer Essentiel",
  },
  {
    name: "Pro Laboratoire",
    price: "299€",
    period: "/mois",
    setup: "Mise en place: 990€",
    pitch: "Le meilleur levier ROI pour piloter recettes, sous-recettes et production.",
    items: ["2-5 postes utilisateurs", "OCR factures (illimité raisonnable)", "Sous-recettes en cascade", "Prix de vente conseillé selon marge cible", "Support prioritaire"],
    cta: "Choisir Pro",
    featured: true,
  },
  {
    name: "Réseau Multi-sites",
    price: "Sur devis",
    period: "",
    setup: "Mise en place: à partir de 1 990€",
    pitch: "Pour les groupes artisanaux qui veulent standardiser la rentabilité.",
    items: ["Multi-sites & gouvernance", "Onboarding équipes + process", "Connecteurs sur mesure", "CSM dédié + SLA"],
    cta: "Parler à un expert",
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-[var(--foreground)]">Des tarifs pensés pour être rentables dès le 1er mois.</h2>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Notre stratégie est simple: un abonnement aligné sur votre maturité, avec des frais de mise en place pour
          garantir une base de données propre, des recettes fiables et un ROI rapide.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={`h-full p-6 ${plan.featured ? "border-[var(--dashboard-foreground)] shadow-md" : ""}`}>
              {plan.featured ? <Badge className="mb-4 bg-[var(--dashboard)] text-[var(--dashboard-foreground)]">Le plus choisi</Badge> : null}
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{plan.name}</h3>
              <p className="mt-2 text-[var(--muted-foreground)]">{plan.pitch}</p>
              <p className="mt-6 text-3xl font-extrabold text-[var(--foreground)]">
                {plan.price}
                <span className="text-base font-medium text-[var(--muted-foreground)]">{plan.period}</span>
              </p>
              <p className="mt-1 text-sm text-[var(--dashboard-foreground)]">{plan.setup}</p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted-foreground)]">
                {plan.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Button
                className={`mt-6 w-full ${plan.featured ? "bg-[var(--dashboard)] text-[var(--dashboard-foreground)]" : ""}`}
                aria-label={`Choisir l'offre ${plan.name}`}
              >
                {plan.cta}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
