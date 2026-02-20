"use client";

import { motion } from "framer-motion";
import { PlayCircle, TrendingUp, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BrandIcon } from "@/components/landing/Brand";

export function Hero() {
  return (
    <section id="hero" className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--primary)]/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-3">
          <Badge className="border border-[#a8cf8c] bg-[#a8cf8c]/10 px-3 py-1 text-sm text-gray-900">
            ✨ Nouveau : Vos factures lues automatiquement
          </Badge>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-6xl lg:leading-[1.1]">
          Pilotez votre marge au <span className="relative inline-block text-[#a8cf8c]">
            Gramme
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 100 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <path d="M2 5 Q 50 10 98 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
            </motion.svg>
          </span> près.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          L&apos;application tout-en-un pour les artisans boulangers. Numérisez vos factures, 
          automatisez vos fiches techniques et sécurisez votre rentabilité face à l&apos;inflation.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="h-12 bg-[#a8cf8c] px-8 text-base text-white shadow-lg shadow-green-900/5 hover:bg-[#96be7d]" aria-label="Optimiser ma production dès maintenant">
            <TrendingUp className="h-5 w-5" />
            Tester gratuitement
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8 text-base" aria-label="Découvrir la démonstration produit">
            <PlayCircle className="h-5 w-5" />
            Voir comment ça marche
          </Button>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-[#a8cf8c]" /> <span>Essai gratuit 14 jours</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-[#a8cf8c]" /> <span>Sans engagement</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto w-full max-w-[600px] lg:max-w-none"
      >
        <HeroMockup />
      </motion.div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      {/* Main App Container */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-2xl">
        <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--secondary)]/50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-gray-200" />
            <div className="h-3 w-3 rounded-full bg-gray-200" />
            <div className="h-3 w-3 rounded-full bg-gray-200" />
          </div>
          <div className="mx-auto h-6 w-64 rounded-md bg-white/50" />
        </div>
        
        {/* Placeholder for App Screenshot - Replace src with your actual image */}
        <div className="relative aspect-[16/10] w-full bg-[var(--muted)]/30">
           <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--muted-foreground)]">
              <BrandIcon className="mb-4 h-16 w-16 opacity-50" />
              <p className="text-sm font-medium">Interface Gramme App</p>
              <p className="text-xs opacity-70">Insérez votre capture d'écran ici</p>
           </div>
           {/* Uncomment below when you have the image */}
           {/* <Image src="/app-screenshot.png" alt="Gramme Dashboard" fill className="object-cover" /> */}
        </div>
      </div>

      {/* Floating Card Animation */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 top-20 z-20 hidden rounded-xl border border-[var(--border)] bg-white p-4 shadow-xl lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a8cf8c]/20 text-[#a8cf8c]">
            <TrendingUp size={18} />
          </div>
          <div>
            <p className="text-xs font-medium text-[var(--muted-foreground)]">Marge Croissant</p>
            <p className="text-sm font-bold text-[#a8cf8c]">+12% cette semaine</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
