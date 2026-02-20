"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "39€",
    period: "/mois",
    setup: "Sans engagement",
    pitch: "Pour sortir d'Excel et structurer vos recettes proprement.",
    items: ["Fiches techniques illimitées", "Calcul automatique des coûts", "Gestion des allergènes", "Etiquettes magasin", "Support par chat"],
    cta: "Commencer à 39€",
  },
  {
    name: "Pilotage & Rentabilité",
    price: "89€",
    period: "/mois",
    setup: "Rentabilisé dès le 1er mois",
    pitch: "L'outil complet pour sécuriser vos marges face à l'inflation.",
    items: ["Tout du plan Essentiel", "Scan de factures (Mise à jour auto des prix)", "Alertes hausse matières premières", "Commandes fournisseurs", "Inventaires", "Accès pour 3 employés"],
    cta: "Essayer gratuitement",
    featured: true,
  },
  {
    name: "Réseau & Franchise",
    price: "Sur devis",
    period: "",
    setup: "Accompagnement dédié",
    pitch: "Pour standardiser la production sur plusieurs boutiques.",
    items: ["Pilotage multi-boutiques", "Centralisation des achats", "API & Intégrations caisse", "Formation des équipes", "Chef de projet dédié"],
    cta: "Contacter l'équipe",
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-[var(--foreground)]">Un investissement minime pour une rentabilité assurée.</h2>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Arrêtez de perdre de l'argent sur vos marges. Nos tarifs sont simples, sans frais cachés et sans engagement.
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
            <Card className={`flex h-full flex-col p-8 ${plan.featured ? "relative border-[#a8cf8c] shadow-2xl shadow-green-900/5 scale-105 z-10 bg-white" : "border-[var(--border)] bg-gray-50/50"}`}>
              {plan.featured ? <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#a8cf8c] text-white px-4 py-1 text-sm hover:bg-[#96be7d]">Le plus vendu</Badge> : null}
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{plan.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] h-10">{plan.pitch}</p>
              <p className="mt-6 text-4xl font-extrabold text-[var(--foreground)]">
                {plan.price}
                <span className="text-base font-medium text-[var(--muted-foreground)]">{plan.period}</span>
              </p>
              <p className="mt-1 text-xs font-medium text-[#a8cf8c]">{plan.setup}</p>
              <ul className="mt-8 space-y-4 text-sm text-[var(--muted-foreground)] flex-1">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#a8cf8c] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full h-12 text-base ${plan.featured ? "bg-[#a8cf8c] text-white hover:bg-[#96be7d] shadow-lg shadow-green-900/10" : "bg-white border border-[var(--border)] text-[var(--foreground)] hover:bg-gray-50"}`}
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
