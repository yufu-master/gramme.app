import Link from "next/link";
import {
  Calculator,
  ChefHat,
  FlaskConical,
  Layers,
  PackageCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "@/vendor/lucide-react";

/**
 * Le manifeste, en huit repères.
 *
 * Version courte assumée : la première rédaction faisait huit paragraphes de
 * six lignes, personne ne lit ça sur une page d'accueil. Chaque argument tient
 * ici en un titre et une phrase — le développement vit sur les pages qui vont
 * avec (`/comparatif`, `/a-propos-de-gramme`, `/faq`), où le lecteur arrive
 * justement parce qu'il veut le détail.
 *
 * Le texte ne cite aucun concurrent : le comparatif s'en charge, chiffres à
 * l'appui. Et il ne dit rien de méprisant sur les ERP, qui font correctement le
 * travail pour lequel ils ont été conçus — celui d'un groupe, pas d'un artisan.
 */

const piliers = [
  {
    icone: ChefHat,
    titre: "Conçu par un chef pâtissier",
    texte: "En exercice, responsable R&D. Chaque écran passe l'épreuve du laboratoire avant d'exister.",
  },
  {
    icone: Layers,
    titre: "Boulangerie, pas « restauration »",
    texte: "Sous-recettes en cascade, rendement en pièces comme au poids, fournées. Pas des plats.",
  },
  {
    icone: Calculator,
    titre: "La marge au centime",
    texte: "0,4 g de colorant, 0,0045 € la caissette : ailleurs, ces montants s'arrondissent à zéro.",
  },
  {
    icone: FlaskConical,
    titre: "Le taux de perte compté",
    texte: "12 % à la cuisson, 30 % au parage. Sans lui, votre marge est plus belle que la vraie.",
  },
  {
    icone: Smartphone,
    titre: "Dans la poche, pas sur le bureau",
    texte: "Application installable sur le téléphone. Rien à installer, aucune mise à jour à lancer.",
  },
  {
    icone: Zap,
    titre: "Un prix, pas un devis",
    texte: "Une ligne. Sans module à débloquer, sans commission sur votre chiffre d'affaires.",
  },
  {
    icone: PackageCheck,
    titre: "Votre compte monté avant le premier jour",
    texte: "Profils, fournisseurs, mercuriale, fiches. Vous ouvrez vos marges, pas un tutoriel.",
  },
  {
    icone: Sparkles,
    titre: "Une version toutes les semaines",
    texte: "Vos retours passent dans la suivante. Sans surcoût, sans version 2 à racheter.",
  },
];

export function NeDuTerrain() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16"
      aria-labelledby="ne-du-terrain-title"
    >
      <div className="max-w-3xl">
        <h2
          id="ne-du-terrain-title"
          className="text-3xl font-black leading-tight text-[#27421f] md:text-4xl"
        >
          Gramme vient du laboratoire, pas d&apos;un cahier des charges
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4d6952] md:text-lg">
          La plupart des logiciels du secteur ont été conçus pour l&apos;industrie, puis rétrécis pour
          les artisans. Gramme a été fait dans l&apos;autre sens.
        </p>
      </div>

      <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {piliers.map(({ icone: Icone, titre, texte }) => (
          <li
            key={titre}
            className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm transition-colors hover:border-[#a8cf8c]"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#a8cf8c]/20 text-[#3e6134]">
              <Icone className="size-5" />
            </span>
            <h3 className="mt-3.5 text-base font-bold leading-snug text-[#27421f]">{titre}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#4d6952]">{texte}</p>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap items-center gap-3 rounded-2xl border border-[#a8cf8c]/50 bg-[#f6fbf2] p-5 sm:p-6">
        <p className="min-w-[16rem] flex-1 leading-relaxed text-[#4d6952]">
          <strong className="text-[#3e6134]">Ce n&apos;est pas un discours.</strong> Nous avons comparé
          Gramme aux principaux logiciels du secteur, tarifs publics à l&apos;appui — y compris là où ils
          font mieux que nous.
        </p>
        <Link
          href="/comparatif"
          className="inline-flex shrink-0 rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1e3319]"
        >
          Voir le comparatif
        </Link>
      </div>
    </section>
  );
}
