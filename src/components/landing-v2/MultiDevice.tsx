"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Tablet } from "lucide-react";

const devices = [
  { icon: Smartphone, label: "iPhone & Android" },
  { icon: Tablet, label: "iPad & tablettes" },
  { icon: Monitor, label: "Mac & PC" },
];

export function MultiDevice() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="border border-[var(--brand)] text-[var(--brand-dark)]">PWA — Tous vos appareils</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Un seul outil, partout où vous travaillez.
            </h2>
            <p className="text-lg leading-relaxed text-[var(--muted-foreground)]">
              Gramme s&apos;adapte instantanément à tous vos appareils. Créez une recette sur l&apos;ordinateur
              du bureau, suivez la production sur la tablette du laboratoire, vérifiez vos marges sur votre
              téléphone entre deux rendez-vous.
            </p>
            <p className="text-lg leading-relaxed text-[var(--muted-foreground)]">
              Aucune installation lourde, synchronisation en temps réel et fluidité absolue.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {devices.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-white px-5 py-2.5 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-[var(--brand-dark)]" />
                  <span className="text-sm font-medium text-[var(--foreground)]">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-green-900/10 ring-1 ring-black/5">
              <Image
                src="/images/multi-device.png"
                alt="Gramme sur iMac, iPad et iPhone"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
