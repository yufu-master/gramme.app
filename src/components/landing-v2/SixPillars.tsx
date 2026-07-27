"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    number: "01",
    title: "Votre livre de recettes digital",
    subtitle: "La magie",
    text: "Fiches techniques interactives avec sous-recettes en cascade. Calcul automatique du poids net et des pertes de cuisson.",
    image: "/images/feature-recette-detail.png",
    icon: "/images/icons/icon-precision.png",
  },
  {
    number: "02",
    title: "Plan de Production Consolidé",
    subtitle: "L'organisation",
    text: "Saisissez vos objectifs du jour. L'outil fusionne les recettes et regroupe instantanément les pesées totales.",
    image: "/images/feature-production.png",
    icon: "/images/icons/icon-automation.png",
  },
  {
    number: "03",
    title: "Scan & importation par IA",
    subtitle: "La magie",
    text: "Photographiez vos carnets manuscrits. L'IA numérise, structure et chiffre vos fiches techniques instantanément.",
    image: "/images/feature-scan-ia.png",
    icon: "/images/icons/icon-scan.png",
  },
  {
    number: "04",
    title: "Stocks & Décrémentation Active",
    subtitle: "Le contrôle",
    text: "Stock vivant mis à jour à chaque production et facture scannée. Valeur totale, filtres par catégorie, inventaire rapide.",
    image: "/images/feature-stock.png",
    icon: "/images/icons/icon-security.png",
  },
  {
    number: "05",
    title: "Connexion & Catalogue Fournisseurs",
    subtitle: "Le partenariat",
    text: "Intégrez la mercuriale de vos fournisseurs d'exception. Anticipez vos commandes et sanctuarisez la qualité.",
    image: "/images/feature-fournisseur.png",
    icon: "/images/icons/icon-mobile.png",
  },
  {
    number: "06",
    title: "Bouclier Anti-Inflation & Marges",
    subtitle: "Le contrôle",
    text: "Prix de revient en temps réel. Alertes dès qu'une recette devient critique pour votre trésorerie.",
    image: "/images/feature-prix.png",
    icon: "/images/icons/icon-precision.png",
  },
];

export function SixPillars() {
  return (
    <section id="piliers" className="bg-[var(--secondary)] py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-4 border border-[var(--brand)] text-[var(--brand-dark)]">Les 6 piliers</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Tout ce dont un artisan a besoin, rien de plus.
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Six modules interconnectés pour piloter votre laboratoire de A à Z.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="group h-full overflow-hidden border-[var(--border)] bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-44 overflow-hidden bg-[var(--muted)]">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[var(--brand-dark)] backdrop-blur-sm">
                    {pillar.number}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Image src={pillar.icon} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{pillar.text}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
