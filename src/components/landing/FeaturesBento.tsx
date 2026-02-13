"use client";

import { motion } from "framer-motion";
import { Network, PackageCheck, ScanLine } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FeaturesBento() {
  return (
    <section id="fonctionnalites" className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-slate-900">Une stack pensée pour vos marges, pas pour la complexité.</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-4 md:grid-rows-2">
        <FeatureCard
          className="md:col-span-2"
          title="De la facture à la donnée en 1 clic"
          text="OCR + catégorisation intelligente pour rendre vos coûts exploitables en temps réel."
          icon={<ScanLine className="h-8 w-8 text-emerald-600" />}
        />
        <FeatureCard
          className="md:row-span-2"
          title="Mettez à jour une crème, 10 gâteaux suivent"
          text="Cascade automatique sur toutes vos fiches techniques connectées."
          icon={<Network className="h-8 w-8 text-emerald-600" />}
        />
        <FeatureCard
          title="Maths réelles"
          text="Gestion perte cuisson, poids net et rendements sans tableurs fragiles."
          icon={<div className="text-2xl font-bold text-[#9a7e22]">%</div>}
        />
        <FeatureCard
          title="Bons de commande"
          text="Génération instantanée et partage équipe/fournisseurs."
          icon={<PackageCheck className="h-8 w-8 text-emerald-600" />}
        />
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  text,
  icon,
  className,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full bg-gradient-to-br from-white to-slate-100 p-6">
        {icon}
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-500">{text}</p>
      </Card>
    </motion.div>
  );
}
