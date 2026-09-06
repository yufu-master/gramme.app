import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { pagesLogiciel } from "@/content/logiciels";
import { breadcrumbSchema, imageSociale, webPageSchema } from "@/lib/seo";

/**
 * La page pilier des quatre métiers.
 *
 * Elle ne cherche PAS à se référencer sur un mot d'achat : ce sont les quatre
 * pages plates (`/logiciel-boulangerie` et les autres) qui portent le mot que
 * les gens tapent, et les déplacer sous `/metiers/…` aurait coûté ce mot. Son
 * rôle est le maillage et la navigation : dire ce que les quatre ateliers ont
 * en commun, ce qui les sépare, et conduire à la bonne page.
 */

const METIERS = [
  {
    chemin: "/logiciel-boulangerie",
    nom: "Boulangerie",
    accroche: "Peu de références, beaucoup de fournées",
    texte:
      "La baguette part à un prix que la rue fixe et la farine augmente sans prévenir. Ce qui compte ici, c'est de voir la marge bouger le jour où le prix d'achat bouge, et de décider la fournée du lendemain sur autre chose que la mémoire.",
    cle: "Le prix d'achat remonte jusqu'à la marge de chaque pain.",
  },
  {
    chemin: "/logiciel-patisserie",
    nom: "Pâtisserie",
    accroche: "Des sous-recettes en cascade",
    texte:
      "Un entremets, c'est une génoise, un croustillant, une mousse et un glaçage, chacun avec son rendement et ses pertes. Le coût se perd entre l'entremets entier et la part vendue, et le ratio affiché finit par ne plus vouloir rien dire.",
    cle: "Le coût descend jusqu'à la part, pertes de parage comprises.",
  },
  {
    chemin: "/logiciel-chocolaterie",
    nom: "Chocolaterie",
    accroche: "Le coût au bonbon, pas à la plaque",
    texte:
      "Une boîte de seize se décide au ressenti alors que le beurre de cacao a doublé et que le ruban coûte parfois plus que ce qu'il entoure. Et la conservation d'une ganache se joue sur l'activité de l'eau, que peu d'ateliers mesurent.",
    cle: "L'activité de l'eau estimée depuis la composition, et l'étiquette à la taille de la boîte.",
  },
  {
    chemin: "/logiciel-glacerie",
    nom: "Glacerie",
    accroche: "Cinq chiffres qui se contredisent",
    texte:
      "Plus de sucre adoucit et ramollit, plus de matière grasse enrobe et masque. Le réglage se fait sur un tableur hérité d'un stage, dont plus personne ne sait d'où viennent les coefficients, et le résultat se juge trois heures plus tard.",
    cle: "La courbe de congélation, la température de service, et les dénominations du code des glaces.",
  },
];

export const metadata: Metadata = {
  title: "Métiers : boulangerie, pâtisserie, chocolaterie, glacerie",
  description:
    "Ce que Gramme change dans chacun des quatre métiers : coût de revient, sous-recettes en cascade, activité de l'eau d'une ganache, équilibrage d'un mix à glace.",
  alternates: { canonical: "https://gramme.app/metiers" },
  openGraph: {
    title: "Les quatre métiers que Gramme sert",
    description:
      "Boulangerie, pâtisserie, chocolaterie, glacerie : le même outil, réglé sur ce que chaque atelier compte.",
    url: "https://gramme.app/metiers",
    type: "website",
    locale: "fr_FR",
    siteName: "Gramme",
    images: imageSociale("/images/app/recette-couts.png", "Le coût de revient d'une recette dans Gramme"),
  },
};

export default function MetiersPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Les quatre métiers que Gramme sert",
            description:
              "Boulangerie, pâtisserie, chocolaterie et glacerie : ce que l'outil change dans chacun.",
            path: "/metiers",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Métiers", path: "/metiers" },
          ]),
        ]}
      />

      <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-28 md:px-6 md:pt-32">
        <Breadcrumbs currentLabel="Métiers" />

        <h1 className="mt-6 text-3xl font-black leading-tight text-[#27421f] md:text-5xl">
          Le même outil, réglé sur ce que votre atelier compte
        </h1>

        <div className="mt-6 max-w-3xl space-y-4 text-[#4d6952]">
          <p>
            Les quatre métiers partagent presque tout : des fiches techniques, des sous-recettes qui
            s&apos;emboîtent, des prix d&apos;achat qui bougent, une marge qu&apos;on découvre trop
            tard. Un logiciel qui traite bien l&apos;un traite bien les autres, à une condition :
            qu&apos;il descende jusqu&apos;à l&apos;unité que vous vendez, et pas seulement jusqu&apos;à
            la recette.
          </p>
          <p>
            Ce qui les sépare tient en une phrase par métier, et c&apos;est ce qui décide de
            l&apos;outil. Un boulanger règle des quantités, un pâtissier des cascades de
            sous-recettes, un chocolatier une conservation, un glacier un équilibre entre cinq
            chiffres qui se contredisent. Gramme s&apos;active sur ce dont vous avez besoin :
            l&apos;onglet d&apos;équilibrage ne s&apos;affiche que si vous coulez des glaces ou des
            bonbons.
          </p>
        </div>

        <section className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
          {METIERS.map((m) => (
            <Link
              key={m.chemin}
              href={m.chemin}
              className="group rounded-2xl border border-[#dcead2] bg-white p-5 transition hover:border-[#a8cf8c] hover:shadow-[0_18px_50px_rgba(38,64,33,0.10)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6e9f55]">
                {m.accroche}
              </p>
              <h2 className="mt-1 text-xl font-bold text-[#27421f] group-hover:text-[#355329]">
                {m.nom}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{m.texte}</p>
              <p className="mt-3 border-t border-[#dcead2] pt-3 text-sm font-medium text-[#355329]">
                {m.cle}
              </p>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-2xl bg-[#f6fbf2] p-6 md:mt-16">
          <h2 className="text-2xl font-bold text-[#27421f]">Et si vous en faites plusieurs</h2>
          <p className="mt-3 max-w-3xl text-[#4d6952]">
            C&apos;est le cas le plus fréquent : une boulangerie-pâtisserie qui coule quelques
            bacs l&apos;été, un pâtissier qui fait ses bonbons pour les fêtes. Il n&apos;y a rien à
            configurer deux fois. Les fiches vivent au même endroit, les matières aussi, et chaque
            recette porte les indicateurs de son propre métier : un pain n&apos;affiche pas de
            pouvoir anticryoscopique, un sorbet oui.
          </p>
        </section>

        <RelatedLinks
          links={[
            { href: "/fonctionnalites", label: "Tous les modules, un par un" },
            { href: "/tarifs", label: "Les tarifs, et ce que chaque offre ouvre" },
            { href: "/comparatif", label: "Gramme face aux autres logiciels du métier" },
          ]}
        />
      </main>
    </>
  );
}
