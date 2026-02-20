"use client";

import { motion, type Variants } from "framer-motion";
import { AlertTriangle, Calculator, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const points = [
  { title: "L'Hémorragie", text: "Prix achat volatiles vs prix vente fixes.", solution: "Solution : Mercuriale Auto.", icon: AlertTriangle },
  { title: "La Saisie", text: "50 factures le dimanche soir.", solution: "Solution : OCR N8N.", icon: Clock },
  { title: "L'Incertitude", text: "Erreur de conversion = perte sèche.", solution: "Solution : Calculs natifs (pertes, unités).", icon: Calculator },
];

export function PainPoints() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-[var(--foreground)]">Les douleurs qui freinent votre rentabilité.</h2>
      <motion.div className="mt-8 grid gap-5 md:grid-cols-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        {points.map((point) => (
          <motion.div key={point.title} variants={item}>
            <Card className="h-full p-6">
              <point.icon className="h-8 w-8 text-[var(--dashboard-foreground)]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{point.title}</h3>
              <p className="mt-2 text-[var(--muted-foreground)]">{point.text}</p>
              <p className="mt-3 text-sm font-medium text-[var(--dashboard-foreground)]">{point.solution}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
