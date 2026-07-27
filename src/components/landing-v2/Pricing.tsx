"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "39€",
    period: "/mois",
    setup: "Sans engagement",
    pitch: "Pour sortir d'Excel et structurer vos recettes proprement.",
    items: [
      "Fiches techniques illimitées",
      "Calcul automatique des coûts & marges",
      "Sous-recettes en cascade",
      "Fiches imprimables atelier",
      "Support par chat",
    ],
    cta: "Commencer à 39€",
  },
  {
    name: "Pilotage & Rentabilité",
    price: "89€",
    period: "/mois",
    setup: "Rentabilisé dès le 1er mois",
    pitch: "L'outil complet pour sécuriser vos marges face à l'inflation.",
    items: [
      "Tout du plan Essentiel",
      "Scan IA de factures fournisseurs",
      "Mercuriale & alertes anti-inflation",
      "Simulateur de rentabilité",
      "Stock & décrémentation active",
      "Accès pour 3 employés",
    ],
    cta: "Essayer gratuitement",
    featured: true,
  },
  {
    name: "Réseau & Franchise",
    price: "Sur devis",
    period: "",
    setup: "Accompagnement dédié",
    pitch: "Pour standardiser la production sur plusieurs boutiques.",
    items: [
      "Pilotage multi-boutiques",
      "Centralisation des achats",
      "API & intégrations caisse",
      "Formation des équipes",
      "Chef de projet dédié",
    ],
    cta: "Contacter l'équipe",
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="bg-[var(--secondary)] py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 border border-[var(--brand)] text-[var(--brand-dark)]">
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Modèle en cours de déploiement
          </Badge>
          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Un investissement minime pour une rentabilité assurée.
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Tarifs premium mais accessibles. Un retour sur investissement immédiat pour l&apos;artisan,
            tout en assurant le développement continu de nos intelligences artificielles.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className={`flex h-full flex-col p-8 ${
                  plan.featured
                    ? "relative z-10 scale-[1.02] border-[var(--brand)] bg-white shadow-2xl shadow-green-900/10"
                    : "border-[var(--border)] bg-white"
                }`}
              >
                {plan.featured ? (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--brand)] px-4 py-1 text-sm text-white">
                    Le plus complet
                  </Badge>
                ) : null}
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{plan.name}</h3>
                <p className="mt-2 h-10 text-sm text-[var(--muted-foreground)]">{plan.pitch}</p>
                <p className="mt-6 text-4xl font-extrabold text-[var(--foreground)]">
                  {plan.price}
                  <span className="text-base font-medium text-[var(--muted-foreground)]">{plan.period}</span>
                </p>
                <p className="mt-1 text-xs font-medium text-[var(--brand-dark)]">{plan.setup}</p>
                <ul className="mt-8 flex-1 space-y-3.5 text-sm text-[var(--muted-foreground)]">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-8 h-12 w-full text-base ${
                    plan.featured
                      ? "bg-[var(--brand)] text-white shadow-lg shadow-green-900/10 hover:bg-[#96be7d]"
                      : "border border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-gray-50"
                  }`}
                  aria-label={`Choisir l'offre ${plan.name}`}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="mx-auto mt-10 max-w-3xl border-[var(--brand)]/30 bg-white p-8 text-center">
          <h3 className="text-lg font-bold text-[var(--foreground)]">Conciergerie — Mise en service</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
            L&apos;échec principal des logiciels de gestion ? L&apos;abandon lors de la saisie initiale.
            Nos frais de mise en service garantissent le succès : importation de vos recettes manuscrites,
            configuration de votre mercuriale, formation rapide de vos équipes. Un outil prêt à l&apos;emploi
            dès le premier jour.
          </p>
        </Card>
      </div>
    </section>
  );
}
