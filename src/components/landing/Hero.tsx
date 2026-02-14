"use client";

import { motion } from "framer-motion";
import { PlayCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BrandIcon } from "@/components/landing/Brand";

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
        <div className="flex items-center gap-3">
          <BrandIcon className="h-10 w-10 rounded-xl" />
          <Badge className="bg-[var(--accent)] text-[var(--dashboard-foreground)]">Le copilote rentabilité des boulangers & pâtissiers</Badge>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">
          Maîtrisez votre rentabilité au gramme près.
        </h1>
        <p className="text-lg leading-relaxed text-[var(--muted-foreground)]">
          L&apos;assistant intelligent qui transforme vos factures en fiches techniques dynamiques. Gagnez du temps,
          protégez vos marges et réagissez instantanément à la hausse des matières premières.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" aria-label="Optimiser ma production dès maintenant">
            <TrendingUp className="h-5 w-5" />
            Optimiser ma production
          </Button>
          <Button variant="outline" size="lg" aria-label="Découvrir la démonstration produit">
            <PlayCircle className="h-5 w-5" />
            Découvrir la démo
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
          <p className="text-sm font-semibold text-[var(--foreground)]">Mercuriale dynamique</p>
          <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-[var(--muted)] to-[var(--accent)]" />
        </Card>
        <Card className="p-4">
          <p className="text-sm font-semibold text-[var(--foreground)]">Impact rentabilité</p>
          <ul className="mt-4 space-y-2 text-xs text-[var(--muted-foreground)]">
            <li className="rounded-lg bg-[var(--muted)] p-2">Beurre +18% → Éclair citron</li>
            <li className="rounded-lg bg-[var(--muted)] p-2">Farine T55 +6% → Pain campagne</li>
            <li className="rounded-lg bg-[var(--dashboard)]/40 p-2 text-[var(--dashboard-foreground)]">Prix conseillé recalculé</li>
          </ul>
        </Card>
      </div>
    </motion.div>
  );
}
