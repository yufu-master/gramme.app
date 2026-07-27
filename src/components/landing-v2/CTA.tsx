"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/hero-affiche.jpg"
            alt="Gramme — Pilotez votre marge"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="relative flex flex-col items-start gap-6 px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand)]">
              gramme.app
            </p>
            <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">
              Prêt à piloter votre marge au gramme près ?
            </h2>
            <p className="max-w-lg text-lg text-white/80">
              Rejoignez les artisans qui ont choisi la précision. Essai gratuit 14 jours, sans engagement.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 bg-[var(--brand)] px-8 text-base font-semibold text-white hover:bg-[#96be7d]"
                aria-label="Démarrer l'essai gratuit"
              >
                Démarrer l&apos;essai gratuit
                <ArrowRight className="h-5 w-5" />
              </Button>
              <a
                href="https://gramme-ia.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-xl border border-white/30 px-8 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Accéder à l&apos;application
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
