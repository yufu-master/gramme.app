"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "À qui s'adresse Gramme ?",
    a: "Gramme est dédié aux artisans boulangers, pâtissiers et chocolatiers d'exception. C'est une application mobile-first pensée pour les petites structures artisanales, pas pour l'industrie.",
  },
  {
    q: "Comment fonctionne le scan IA des recettes ?",
    a: "Photographiez votre carnet manuscrit, importez un PDF ou un JPEG. L'intelligence artificielle de Gramme numérise automatiquement les ingrédients, les quantités et les étapes pour créer une fiche technique chiffrée en quelques secondes.",
  },
  {
    q: "Puis-je utiliser Gramme sur plusieurs appareils ?",
    a: "Oui. Gramme est une PWA (Progressive Web App) qui s'adapte à iPhone, Android, iPad, tablettes et ordinateurs Mac/PC. Synchronisation en temps réel, sans installation lourde.",
  },
  {
    q: "Comment Gramme protège-t-il mes marges face à l'inflation ?",
    a: "Dès qu'un prix fournisseur change, l'effet domino se répercute sur toutes vos recettes et sous-recettes. L'application vous alerte et calcule le prix de vente à ajuster pour maintenir votre marge cible.",
  },
  {
    q: "Qu'est-ce que la conciergerie de mise en service ?",
    a: "C'est notre accompagnement pour garantir votre succès dès le jour 1 : importation de vos recettes existantes, configuration de votre mercuriale de base et formation rapide de vos équipes.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Oui. Vos fiches techniques, prix fournisseurs et données de production sont hébergées de manière sécurisée avec synchronisation chiffrée.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="mb-12 text-center">
          <Badge className="mb-4 border border-[var(--brand)] text-[var(--brand-dark)]">FAQ</Badge>
          <h2 className="text-3xl font-bold text-[var(--foreground)]">Questions fréquentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="pr-4 font-semibold text-[var(--foreground)]">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i ? (
                <p className="border-t border-[var(--border)] px-6 py-4 leading-relaxed text-[var(--muted-foreground)]">
                  {faq.a}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
