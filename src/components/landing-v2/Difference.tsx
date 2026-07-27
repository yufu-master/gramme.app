"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const differences = [
  {
    title: "La technologie qui s'efface",
    text: "Grâce à notre IA, la saisie disparaît. Gramme s'efface pour laisser toute la place à l'artisanat et la création.",
    icon: "/images/icons/icon-scan.png",
  },
  {
    title: "Le terrain avant le bureau",
    text: "Interface ultra-épurée, utilisable en pleine production sur smartphone ou tablette, au cœur du laboratoire.",
    icon: "/images/icons/icon-mobile.png",
  },
  {
    title: "De la réaction à l'anticipation",
    text: "Fini le pilotage à l'aveugle. Anticipez vos coûts et sécurisez votre trésorerie au quotidien.",
    icon: "/images/icons/icon-automation.png",
  },
  {
    title: "L'excellence enfin accessible",
    text: "Une puissance d'analyse digne des grands groupes, pensée pour le budget et la réalité des artisans indépendants.",
    icon: "/images/icons/icon-precision.png",
  },
  {
    title: "La valorisation de la filière",
    text: "Traçabilité totale et maîtrise des coûts au gramme près. Choisissez des fournisseurs d'exception sans danger.",
    icon: "/images/icons/icon-security.png",
  },
];

export function Difference() {
  return (
    <section className="bg-[var(--secondary)] py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-4 border border-[var(--brand)] text-[var(--brand-dark)]">La différence Gramme</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Nous ne vendons pas un logiciel de comptabilité complexe.
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Les artisans ont les mains dans la farine, pas sur une souris.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differences.map((diff, i) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="h-full border-[var(--border)] bg-white p-7 transition-shadow hover:shadow-md">
                <Image src={diff.icon} alt="" width={40} height={40} className="mb-4 h-10 w-10 object-contain" />
                <h3 className="text-lg font-bold text-[var(--foreground)]">{diff.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{diff.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
