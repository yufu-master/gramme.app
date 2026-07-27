"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    badge: "Fiches techniques intelligentes",
    title: "De la recette manuscrite à la fiche chiffrée en 3 secondes",
    description:
      "Photographiez une fiche papier, importez un PDF ou saisissez manuellement. L'IA identifie ingrédients, quantités et étapes. Sous-recettes imbriquées, coefficient de perte paramétrable, fiches imprimables pour l'atelier.",
    bullets: [
      "Coût matière, marge brute et prix de revient à l'unité",
      "Sous-recettes réutilisables (praliné, crème, biscuit)",
      "Alerte immédiate en cas d'érosion de marge",
    ],
    image: "/images/feature-scan-ia.png",
    visual: "/images/visual-scan-process.jpg",
  },
  {
    badge: "Production maîtrisée",
    title: "Du planning à la feuille de route, zéro gaspillage",
    description:
      "Programmez 50 baguettes, 30 croissants et 20 pains au chocolat. Gramme calcule 37 kg de farine, 4,5 kg de beurre AOP, consolide les pesées et génère votre feuille de route interactive.",
    bullets: [
      "Calendrier & prévisions sur la semaine",
      "Sessions assignées à chaque membre d'équipe",
      "Consolidation des pesées — pesez une seule fois",
    ],
    image: "/images/feature-production.png",
    reverse: true,
  },
  {
    badge: "Achats & mercuriale intelligente",
    title: "Scannez vos factures, pilotez vos cours",
    description:
      "Photographiez vos bons de livraison. L'IA extrait chaque ligne et actualise votre base. Visualisez l'évolution des prix sur 12 mois et l'effet domino sur toutes vos recettes.",
    bullets: [
      "Scan IA des factures fournisseurs",
      "Historique & suivi des cours",
      "Simulateur de rentabilité avec prix conseillé",
    ],
    image: "/images/feature-mercuriale.png",
  },
  {
    badge: "Stock opérationnel",
    title: "Un stock vivant, pas un inventaire figé",
    description:
      "Mis à jour automatiquement à chaque production validée et facture scannée. Filtrez par catégorie, visualisez la valeur totale et anticipez les ruptures.",
    bullets: [
      "Décrémentation active à chaque production",
      "Valeur du stock en temps réel",
      "Réduction du gaspillage matière première",
    ],
    image: "/images/feature-stock.png",
    reverse: true,
  },
  {
    badge: "Fournisseurs centralisés",
    title: "Vos partenaires d'exception, à portée de main",
    description:
      "Catalogue de produits affiliés avec prix à jour. Traçabilité matière-recette : visualisez l'impact de chaque ingrédient sur l'ensemble de votre vitrine.",
    bullets: [
      "Contact fournisseur en un clic",
      "Traçabilité matière → recette",
      "Estimation des volumes d'achats mensuels",
    ],
    image: "/images/feature-fournisseurs-list.png",
  },
];

export function FeatureShowcase() {
  return (
    <section id="fonctionnalites" className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <Badge className="mb-4 border border-[var(--brand)] text-[var(--brand-dark)]">Fonctionnalités</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            De la planification à la recette finale, un rendement maximal.
          </h2>
        </div>

        <div className="space-y-32">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${feature.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="space-y-6">
                <Badge className="border-[var(--brand)]/40 text-[var(--brand-dark)]">
                  {feature.badge}
                </Badge>
                <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed text-[var(--muted-foreground)]">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[var(--muted-foreground)]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl shadow-green-900/10 ring-1 ring-black/5">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>
                {feature.visual ? (
                  <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 overflow-hidden rounded-2xl shadow-lg ring-2 ring-white md:block">
                    <Image src={feature.visual} alt="" width={128} height={128} className="h-full w-full object-cover" />
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
