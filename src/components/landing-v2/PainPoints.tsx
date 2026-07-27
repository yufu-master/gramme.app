"use client";

import { motion, type Variants } from "framer-motion";
import { AlertTriangle, Keyboard, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const points = [
  {
    title: "Logiciels industriels",
    text: "Des dizaines d'onglets conçus pour l'industrie, inadaptés aux petites structures artisanales.",
    icon: Layers,
  },
  {
    title: "Mains dans la farine",
    text: "Un artisan n'a pas le temps de passer des heures sur un clavier. Il lui faut un outil qui va droit au but.",
    icon: Keyboard,
  },
  {
    title: "Marges à l'aveugle",
    text: "Prix d'achat volatils, prix de vente figés. Vous découvrez vos pertes en fin de mois, pas au quotidien.",
    icon: AlertTriangle,
  },
];

export function PainPoints() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="mb-12 max-w-3xl">
        <Badge className="mb-4 border border-[var(--brand)] text-[var(--brand-dark)]">Notre constat</Badge>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Le marché regorge de logiciels de gestion.
          <span className="mt-2 block text-[var(--muted-foreground)]">
            Le problème ? Ils ne sont pas faits pour vous.
          </span>
        </h2>
        <p className="mt-4 text-lg text-[var(--muted-foreground)]">
          Gramme est la première application mobile-first pensée exclusivement pour les petites
          structures artisanales. En quelques clics, sans friction, une maîtrise totale des coûts.
        </p>
      </div>

      <motion.div
        className="grid gap-5 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {points.map((point) => (
          <motion.div key={point.title} variants={item}>
            <Card className="h-full border-[var(--border)] p-7 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)]/15">
                <point.icon className="h-6 w-6 text-[var(--brand-dark)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--muted-foreground)]">{point.text}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
