"use client";

import Link from "next/link";
import { useState } from "react";
import { FeatureIcon } from "@/components/features/FeatureIcon";
import { CadreAppareil } from "@/components/produit/CadreAppareil";
import { features, featurePath } from "@/content/features";
import { trackEvent } from "@/lib/analytics";

/**
 * Accordéon des fonctionnalités (page d'accueil).
 * Résumé toujours visible, détail replié, lien vers la page dédiée.
 *
 * Le panneau déplié montre l'ÉCRAN du module. C'est la plus grosse section
 * produit du site et elle est restée longtemps en texte pur, alors que la
 * donnée était déjà là : `features` porte une `image` par module, et ce
 * composant l'importait sans jamais s'en servir. Une liste de puces décrit ce
 * que fait un logiciel ; une capture montre à quoi il ressemble, et c'est la
 * question que se pose vraiment quelqu'un qui hésite.
 *
 * L'image n'est montée QUE lorsque le panneau s'ouvre : neuf captures chargées
 * d'avance sur une page d'accueil coûteraient plus cher qu'elles ne rapportent.
 */
export function FeatureAccordion() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="mt-8 divide-y divide-[#dcead2] overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-sm">
      {features.map((feature) => {
        const isOpen = openSlug === feature.slug;
        const panelId = `feature-panel-${feature.slug}`;
        const buttonId = `feature-button-${feature.slug}`;

        return (
          <div key={feature.slug}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenSlug(isOpen ? null : feature.slug)}
                className="flex w-full items-start gap-3.5 px-4 py-4 text-left transition hover:bg-[#f8fbf5] sm:gap-4 sm:px-6"
              >
                <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#a8cf8c]/25 text-[#355329]">
                  <FeatureIcon name={feature.icon} className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-[#1a2e14] sm:text-lg">{feature.name}</span>
                  <span className="mt-0.5 block text-sm leading-snug text-[var(--muted-foreground)]">
                    {feature.summary}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#a8cf8c]/25 text-[#355329] transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <div className="px-4 pb-5 pl-[3.75rem] sm:px-6 sm:pb-6 sm:pl-[4.5rem]">
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-[#6e9f55]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                {/* Montée seulement à l'ouverture, voir le commentaire du composant. */}
                <div className="mt-4 max-w-xl">
                  <CadreAppareil
                    appareil="navigateur"
                    src={feature.image.src}
                    alt={feature.image.alt}
                    sizes="(max-width: 640px) 88vw, 576px"
                  />
                </div>
                <Link
                  href={featurePath(feature.slug)}
                  onClick={() => trackEvent("feature_detail_click", { feature: feature.slug })}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#355329] underline-offset-2 hover:underline"
                >
                  Voir le détail : {feature.name.toLowerCase()}
                  <ArrowIcon className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4 10.5 8 14l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
