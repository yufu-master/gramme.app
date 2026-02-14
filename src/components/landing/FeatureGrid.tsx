"use client";

import { motion } from "framer-motion";
import { Calculator, Network, ScanLine } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  ["Scanner Intelligent", "OCR via N8N pour extraire les prix des factures sans saisie manuelle.", ScanLine],
  ["Mercuriale Dynamique", "Historique des prix sur 12 mois et alertes de variation.", Calculator],
  ["Recettes Multi-niveaux", "Sous-recettes + pertes de cuisson calculées automatiquement.", Network],
  ["Calculateur de Production", "Mise à l'échelle instantanée des besoins matières.", Calculator],
  ["Analyse de Rentabilité", "Prix de vente conseillé selon marge cible.", Network],
  ["Fiches Techniques", "Générez des fiches propres et actionnables en labo.", ScanLine],
] as const;

export function FeatureGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-[var(--foreground)]">Les fonctionnalités qui font gagner du temps et de la marge.</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map(([title, text, Icon]) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <Card className="h-full p-5">
              <Icon className="h-8 w-8 text-[var(--dashboard-foreground)]" />
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
