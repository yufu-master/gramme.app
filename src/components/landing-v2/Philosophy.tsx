"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-[var(--foreground)] py-24 text-white">
      <div className="absolute inset-0 opacity-20">
        <Image src="/images/visual-bean.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--foreground)] via-[var(--foreground)]/95 to-[var(--foreground)]/80" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <Badge className="border border-white/20 bg-white/10 text-white">Notre philosophie</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Chaque recette est un acte de création.
            <span className="mt-2 block text-white/70">
              Chaque marge, le reflet d&apos;un équilibre entre passion et pérennité.
            </span>
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-white/80">
            <p>
              Gramme est né d&apos;une conviction profonde : les artisans boulangers, pâtissiers et chocolatiers
              méritent un outil à la hauteur de leur exigence. Un outil qui ne simplifie pas leur art,
              mais qui en révèle la valeur.
            </p>
            <p>
              Nous avons conçu Gramme comme un compagnon de laboratoire discret et puissant. Il ne remplace
              ni le geste ni l&apos;intuition — il les prolonge, les éclaire, et leur donne une dimension
              stratégique.
            </p>
            <p className="font-medium text-[var(--brand)]">
              Parce que l&apos;excellence commence là où la précision rencontre la passion.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/philosophy-balance.jpg"
              alt="Balance Gramme — précision et équilibre"
              width={600}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
