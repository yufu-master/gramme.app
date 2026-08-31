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
 *
 * Deux mises en forme pour un seul contenu. Huit cartes empilées faisaient
 * 2 127 px sur un écran de 375 px — deux écrans et demi de défilement pour une
 * section d'appoint, sur l'appareil où la moitié des visiteurs arrivent. En
 * dessous du format tablette, les cartes deviennent donc des lignes serrées :
 * l'icône à gauche, le texte à droite, un filet entre chaque. Le contenu est
 * identique et l'ordre de lecture aussi — ce n'est pas une version allégée,
 * c'est la même chose dans le bon gabarit.
 */

const piliers = [
  {
    icone: ChefHat,
    titre: "Conçu par un chef pâtissier",
    texte: "Chef en exercice. Chaque écran passe l'épreuve du laboratoire.",
  },
  {
    icone: Layers,
    titre: "Boulangerie, pas « restauration »",
    texte: "Sous-recettes en cascade, rendement en pièces, fournées. Pas des plats.",
  },
  {
    icone: Calculator,
    titre: "La marge au centime",
    texte: "0,4 g de colorant, 0,0045 € la caissette : ailleurs, ça fait zéro.",
  },
  {
    icone: FlaskConical,
    titre: "Le taux de perte compté",
    texte: "12 % à la cuisson, 30 % au parage. Sans lui, la marge est flattée.",
  },
  {
    icone: Smartphone,
    titre: "Dans la poche, pas sur le bureau",
    texte: "Installable sur le téléphone. Rien à installer, rien à mettre à jour.",
  },
  {
    icone: Zap,
    titre: "Un prix, pas un devis",
    texte: "Une ligne. Sans module à débloquer, sans commission sur vos ventes.",
  },
  {
    icone: PackageCheck,
    titre: "Votre compte prêt au premier jour",
    texte: "Profils, fournisseurs, mercuriale, fiches : montés avant votre arrivée.",
  },
  {
    icone: Sparkles,
    titre: "Une version toutes les semaines",
    texte: "Vos retours passent dans la suivante. Sans surcoût.",
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

      <ul
        className="mt-7 divide-y divide-[#dcead2] overflow-hidden rounded-2xl border border-[#dcead2] bg-white sm:mt-9 sm:grid sm:grid-cols-2 sm:gap-4 sm:divide-y-0 sm:overflow-visible sm:rounded-none sm:border-0 sm:bg-transparent lg:grid-cols-4"
      >
        {piliers.map(({ icone: Icone, titre, texte }) => (
          <li
            key={titre}
            className="flex items-start gap-3 px-4 py-3.5 sm:block sm:rounded-2xl sm:border sm:border-[#dcead2] sm:bg-white sm:p-5 sm:shadow-sm sm:transition-colors sm:hover:border-[#a8cf8c]"
          >
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#a8cf8c]/20 text-[#3e6134] sm:size-10">
              <Icone className="size-4.5 sm:size-5" />
            </span>
            <div className="min-w-0 sm:mt-3.5">
              <h3 className="text-[0.9375rem] font-bold leading-snug text-[#27421f] sm:text-base">{titre}</h3>
              <p className="mt-1 text-sm leading-snug text-[#4d6952] sm:mt-1.5 sm:leading-relaxed">{texte}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#a8cf8c]/50 bg-[#f6fbf2] p-5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:p-6">
        <p className="flex-1 text-sm leading-relaxed text-[#4d6952] sm:min-w-[16rem] sm:text-base">
          <strong className="text-[#3e6134]">Ce n&apos;est pas un discours.</strong> Nous avons comparé
          Gramme aux principaux logiciels du secteur, tarifs publics à l&apos;appui, y compris là où ils
          font mieux que nous.
        </p>
        <Link
          href="/comparatif"
          className="inline-flex shrink-0 justify-center rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1e3319]"
        >
          Voir le comparatif
        </Link>
      </div>
    </section>
  );
}
