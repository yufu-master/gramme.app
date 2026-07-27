"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#d5e8d4]/40 via-white to-white" />
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--brand)]/10 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <Badge className="border border-[var(--brand)] bg-[var(--brand)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-dark)]">
            <Sparkles className="mr-1.5 inline h-3.5 w-3.5" />
            L&apos;art de la précision au service de votre savoir-faire
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Pilotez votre marge au{" "}
              <span className="relative inline-block text-[var(--brand-dark)]">
                Gramme
                <span className="absolute -bottom-1 left-0 h-3 w-full -rotate-1 rounded-sm bg-[var(--brand)]/50" />
              </span>{" "}
              près.
            </h1>
            <p className="text-xl font-medium text-[var(--brand-dark)]">
              Sublimez vos créations.
            </p>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)]">
            L&apos;application mobile qui scanne vos recettes par IA, actualise vos prix fournisseurs
            et consolide votre production. Fini les heures de gestion — concentrez-vous sur
            l&apos;excellence de vos créations.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 bg-[var(--brand)] px-8 text-base font-semibold text-white shadow-lg shadow-green-900/10 hover:bg-[#96be7d]"
              aria-label="Tester Gramme gratuitement"
            >
              Tester gratuitement
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 border-[var(--brand)]/30 px-8 text-base hover:bg-[var(--brand)]/5"
              aria-label="Découvrir les fonctionnalités"
              onClick={() => document.getElementById("fonctionnalites")?.scrollIntoView({ behavior: "smooth" })}
            >
              Découvrir l&apos;application
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--muted-foreground)]">
            {["Essai gratuit 14 jours", "Sans engagement", "PWA — tous appareils"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-green-900/15 ring-1 ring-black/5">
              <Image
                src="/images/mockup-phone.png"
                alt="Application Gramme sur smartphone"
                width={800}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-16 z-10 hidden rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-sm lg:block"
            >
              <p className="text-xs font-medium text-[var(--muted-foreground)]">Marge Baguette Tradition</p>
              <p className="text-lg font-bold text-[var(--brand-dark)]">54,5 %</p>
              <p className="text-xs text-[var(--brand)]">+ alerte anti-inflation</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 bottom-24 z-10 hidden rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-sm lg:block"
            >
              <p className="text-xs font-medium text-[var(--muted-foreground)]">Scan IA recette</p>
              <p className="text-lg font-bold text-[var(--brand-dark)]">14 ingrédients</p>
              <p className="text-xs text-[var(--brand)]">détectés en 3 sec.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
