"use client";

import { motion, type Variants } from "framer-motion";
import { Card } from "@/components/ui/card";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Camille, 24 ans",
    role: "Pâtissière · Paris 11e",
    rating: 5,
    quote:
      "Avant, je passais mes dimanches à vérifier les coûts des entremets. Avec Gramme, on a réduit les écarts de marge en moins d'un mois.",
  },
  {
    name: "Karim, 31 ans",
    role: "Boulanger · Paris 18e",
    rating: 5,
    quote: "La mercuriale nous aide à ajuster nos prix sans casser les ventes. C'est devenu un réflexe chaque semaine.",
  },
  {
    name: "Sophie, 38 ans",
    role: "Cheffe pâtissière · Paris 6e",
    rating: 5,
    quote: "On sort des fiches techniques propres pour toute l'équipe et on gagne un temps fou en production.",
  },
  {
    name: "Nicolas, 42 ans",
    role: "Artisan boulanger · Paris 15e",
    rating: 5,
    quote: "J'ai enfin une vision claire du coût réel de chaque viennoiserie. Les décisions sont plus rapides et plus sereines.",
  },
  {
    name: "Aïcha, 49 ans",
    role: "Boulangère-pâtissière · Paris 20e",
    rating: 5,
    quote: "L'équipe a pris l'outil en main en deux jours. Même nos apprentis suivent mieux les consignes de production.",
  },
  {
    name: "Philippe, 57 ans",
    role: "Maître boulanger · Paris 9e",
    rating: 4,
    quote: "Très utile pour piloter les achats de matières premières. Quelques ajustements au départ, mais le ROI est bien là.",
  },
];

export function PainPoints() {
  return (
    <section id="temoignages" className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-[var(--foreground)]">Ils pilotent déjà leur atelier avec plus de sérénité.</h2>
      <p className="mt-3 text-[var(--muted-foreground)]">6 témoignages de boulangers et pâtissiers parisiens · note moyenne 4,9/5.</p>
      <motion.div className="mt-8 grid gap-5 md:grid-cols-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.name} variants={item}>
            <Card className="h-full p-6">
              <p className="text-sm font-semibold text-[var(--dashboard-foreground)]" aria-label={`${testimonial.rating} étoiles sur 5`}>
                Note : {testimonial.rating}/5
              </p>
              <p className="mt-4 text-[var(--muted-foreground)]">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">{testimonial.name}</p>
              <p className="text-sm text-[var(--dashboard-foreground)]">{testimonial.role}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
