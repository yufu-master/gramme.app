"use client";

import { motion } from "framer-motion";
import { PlayCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <section id="hero" className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <Badge className="bg-[var(--accent)] text-[var(--dashboard-foreground)]">ERP nouvelle génération pour artisans exigeants</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">
          Arrêtez de subir vos coûts. Reprenez le contrôle de votre marge.
        </h1>
        <p className="text-lg leading-relaxed text-[var(--muted-foreground)]">
          Gramme transforme vos factures en décisions rentables. Automatisez la gestion de vos matières premières,
          éliminez les erreurs de calculs et retrouvez le temps de créer.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" aria-label="Commencer à maîtriser mes marges">
            <TrendingUp className="h-5 w-5" />
            Maîtriser mes marges
          </Button>
          <Button variant="outline" size="lg" aria-label="Voir la démonstration de Gramme">
            <PlayCircle className="h-5 w-5" />
            Voir la démo
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <HeroMockup />
      </motion.div>
    </section>
  );
}

function HeroMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--secondary)] p-5 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr]">
        <Card className="p-4">
          <p className="text-sm font-semibold text-[var(--foreground)]">Tableau de marge hebdo</p>
          <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-[var(--muted)] to-[var(--accent)]" />
        </Card>
        <Card className="p-4">
          <p className="text-sm font-semibold text-[var(--foreground)]">Alertes mercuriales</p>
          <ul className="mt-4 space-y-2 text-xs text-[var(--muted-foreground)]">
            <li className="rounded-lg bg-[var(--muted)] p-2">Beurre +18%</li>
            <li className="rounded-lg bg-[var(--muted)] p-2">Farine T55 +6%</li>
            <li className="rounded-lg bg-[var(--dashboard)]/40 p-2 text-[var(--dashboard-foreground)]">Ajuster prix conseillé</li>
          </ul>
        </Card>
      </div>
    </motion.div>
  );
}
