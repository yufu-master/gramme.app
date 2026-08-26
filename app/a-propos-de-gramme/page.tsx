import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Qui a créé Gramme — chef pâtissier & entrepreneur",
  description:
    "Gramme est né de la rencontre entre Jeremy, chef pâtissier en R&D, et Clermont Fu, entrepreneur. L'exigence du laboratoire d'un côté, la lecture de la rentabilité de l'autre.",
  keywords: [
    "qui est derrière Gramme",
    "fondateurs Gramme",
    "Jeremy chef pâtissier Gramme",
    "Clermont Fu entrepreneur",
    "logiciel boulangerie conçu par un chef",
    "histoire logiciel pâtisserie",
  ],
  alternates: {
    canonical: `${SITE_URL}/a-propos-de-gramme`,
  },
  openGraph: {
    title: "Qui est derrière Gramme — un chef pâtissier et un entrepreneur",
    description:
      "Un chef pâtissier qui connaît le laboratoire, un entrepreneur qui sait faire tenir des chiffres. Gramme est né de cette rencontre.",
    url: `${SITE_URL}/a-propos-de-gramme`,
    type: "profile",
    images: [
      {
        url: "/images/jeremy-chef-rd.jpg",
        width: 800,
        height: 1000,
        alt: "Jeremy, chef pâtissier et co-fondateur de Gramme",
      },
    ],
  },
};

/**
 * Photo de Clermont Fu.
 *
 * Le fichier n'est pas encore au dépôt : `next/image` échoue à la construction
 * sur une source absente, donc la fiche s'affiche en typographie tant que la
 * photo n'est pas déposée. Poser le fichier ici et remettre le chemin suffit.
 */
const PHOTO_CLERMONT: string | null = null;

const sections = [
  {
    title: "Vos recettes, enfin organisées",
    content:
      "Saisir, modifier et faire évoluer ses recettes prend un temps considérable. Sans organisation claire, les fiches techniques s'accumulent, se perdent, et chaque mise à jour devient une corvée. Avec Gramme, vos recettes vivent au même endroit, dans un format identique et structuré : vous les modifiez en quelques gestes et vous les partagez à l'équipe dans la seconde. Votre savoir-faire mérite un outil à sa hauteur.",
  },
  {
    title: "Vos marges, toujours sous contrôle",
    content:
      "Suivre l'évolution des prix des matières premières relève du casse-tête quand on est une petite structure. Gramme répertorie vos factures, tient votre carnet de fournisseurs et maintient vos tarifs d'achat à jour. Dès qu'un prix bouge, le coût de revient de toutes les recettes concernées est recalculé — et la marge avec. Vous protégez votre rentabilité sans y passer vos soirées.",
  },
  {
    title: "Une structure qui grandit avec vous",
    content:
      "Comme vous, Gramme évolue en permanence. Les meilleurs outils sont ceux qui s'adaptent aux réalités du terrain : chaque retour d'atelier nourrit la version suivante, et il en sort une tous les mois.",
  },
];

export default function AProposDeGrammePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Qui est derrière Gramme",
            description:
              "L'histoire de Gramme, logiciel de gestion pour boulangeries et pâtisseries, né de la rencontre entre un chef pâtissier et un entrepreneur.",
            path: "/a-propos-de-gramme",
            type: "AboutPage",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "À propos", path: "/a-propos-de-gramme" },
          ]),
        ]}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="À propos" />

        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">
            Gramme est né d&apos;une rencontre
          </h1>
          <p className="mt-5 max-w-3xl text-base text-[#4d6952] md:text-lg">
            Celle d&apos;un chef pâtissier qui connaît le laboratoire par cœur et d&apos;un entrepreneur qui passe ses
            journées à faire tenir les chiffres des entreprises qu&apos;il accompagne. Ni l&apos;un ni l&apos;autre
            n&apos;aurait fait ce logiciel seul.
          </p>
        </section>

        {/* Le récit avant les fiches : on veut que le lecteur comprenne POURQUOI
            ces deux-là ensemble, avant de savoir qui ils sont chacun. */}
        <section className="mt-10 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-8 md:mt-14 md:p-12" aria-labelledby="rencontre">
          <h2 id="rencontre" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Deux métiers qui ne se parlaient pas
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-[#4d6952] md:text-lg">
            <p>
              D&apos;un côté, Jeremy. Chef pâtissier, formé aux exigences des grandes maisons, aujourd&apos;hui à la
              tête de la recherche et développement d&apos;une entreprise du secteur. Il connaît le poids d&apos;une
              fiche technique mal tenue, le prix d&apos;un beurre qui grimpe sans prévenir, et cette sensation très
              particulière de travailler beaucoup pour une marge qu&apos;on ne sait pas nommer.
            </p>
            <p>
              De l&apos;autre, Clermont Fu. Entrepreneur, il a créé plusieurs entreprises et en a accompagné bien
              d&apos;autres — à structurer leur offre, à clarifier leur stratégie, à faire remonter leur chiffre
              d&apos;affaires là où il devait être. Son métier consiste à regarder une activité et à voir où la valeur
              se perd : dans un processus mal posé, un prix jamais revu, une décision prise à l&apos;instinct faute de
              chiffre fiable.
            </p>
            <p>
              Quand ils se sont rencontrés, le constat a été immédiat. Les artisans boulangers et pâtissiers font un
              métier d&apos;une précision extrême — au gramme près — et pilotent leur rentabilité au doigt mouillé. Non
              par négligence : parce qu&apos;aucun outil ne parlait leur langue. Les logiciels de gestion étaient
              pensés pour des industriels, les tableurs demandaient une vie entière d&apos;entretien, et personne
              n&apos;avait pris la peine de relier une facture fournisseur à la marge d&apos;un croissant.
            </p>
            <p className="font-semibold text-[#355329]">
              C&apos;est exactement là qu&apos;est né Gramme : à l&apos;endroit où l&apos;exigence de l&apos;atelier
              rencontre la rigueur du chiffre.
            </p>
            <p>
              Jeremy décide de ce que fait le logiciel : chaque écran passe l&apos;épreuve du laboratoire avant
              d&apos;exister. Clermont décide de ce qu&apos;il doit produire : une décision plus rapide, une marge
              tenue, une entreprise qui gagne mieux sa vie. Aucune fonctionnalité n&apos;entre dans Gramme si elle ne
              satisfait pas les deux.
            </p>
          </div>
        </section>

        <h2 className="mt-12 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#6e9f55] md:mt-16">
          Les fondateurs
        </h2>

        <section
          className="mt-5 overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-sm"
          aria-labelledby="jeremy-title"
        >
          <div className="grid items-stretch md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-full">
              <Image
                src="/images/jeremy-chef-rd.jpg"
                alt="Jeremy, chef pâtissier et co-fondateur de Gramme"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-7 md:p-10 lg:p-12">
              <h3 id="jeremy-title" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
                Jeremy
              </h3>
              <p className="mt-2 text-sm font-semibold text-[#355329]">
                Chef pâtissier, responsable R&amp;D — co-fondateur
              </p>
              <p className="mt-5 leading-relaxed text-[#4d6952] md:text-lg">
                Issu du terrain et formé aux exigences des grandes structures, Jeremy dirige la recherche et le
                développement d&apos;une entreprise du secteur. Chaque jour, il confronte création, coût matière et
                réalités de production. C&apos;est cette expérience — entre laboratoire d&apos;excellence et
                contraintes économiques — qui a donné sa forme à Gramme.
              </p>
              <p className="mt-4 leading-relaxed text-[#4d6952] md:text-lg">
                Il transpose aux boulangeries et pâtisseries indépendantes les méthodes de R&amp;D des grandes
                maisons : recettes structurées, prix à jour, décisions rapides. Et il refuse tout écran qu&apos;on ne
                pourrait pas utiliser avec les mains dans la farine.
              </p>
            </div>
          </div>
        </section>

        <section
          className="mt-6 overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-sm"
          aria-labelledby="clermont-title"
        >
          <div className="grid items-stretch md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center p-6 sm:p-7 md:p-10 lg:p-12">
              <h3 id="clermont-title" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
                Clermont Fu
              </h3>
              <p className="mt-2 text-sm font-semibold text-[#355329]">
                Entrepreneur, stratégie &amp; développement — co-fondateur
              </p>
              <p className="mt-5 leading-relaxed text-[#4d6952] md:text-lg">
                Clermont a créé plusieurs entreprises et en accompagne d&apos;autres depuis des années : structurer une
                offre, bâtir une stratégie commerciale, installer les outils qui font réellement progresser un chiffre
                d&apos;affaires. Marketing, business, organisation — son métier est de regarder une activité et de dire
                où la valeur se perd.
              </p>
              <p className="mt-4 leading-relaxed text-[#4d6952] md:text-lg">
                Dans l&apos;artisanat, il a trouvé le cas d&apos;école : des entreprises remarquables au produit, et
                sans instrument pour mesurer ce qu&apos;elles gagnent. Gramme est sa réponse — un outil qui rend la
                rentabilité lisible sans jamais demander à un artisan de devenir comptable.
              </p>
            </div>
            <div className="relative min-h-[220px] border-t border-[#dcead2] bg-gradient-to-br from-[#f3f9ee] to-[#e4f0da] md:min-h-full md:border-l md:border-t-0">
              {PHOTO_CLERMONT ? (
                <Image
                  src={PHOTO_CLERMONT}
                  alt="Clermont Fu, entrepreneur et co-fondateur de Gramme"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                  <span
                    aria-hidden
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-[#a8cf8c]/60 bg-white text-2xl font-black tracking-tight text-[#3e6134]"
                  >
                    CF
                  </span>
                  <p className="text-sm font-semibold text-[#3e6134]">Clermont Fu</p>
                  <p className="max-w-[16rem] text-xs leading-relaxed text-[#6e9f55]">
                    Plusieurs entreprises créées, beaucoup d&apos;autres accompagnées.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:mt-14">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-7 md:p-9"
            >
              <h2 className="text-2xl font-bold text-[#2f4f26]">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-[#4d6952] md:text-lg">{section.content}</p>
            </article>
          ))}
        </section>

        <RelatedLinks
          links={[
            { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
            { href: "/securite", label: "Sécurité des données" },
            { href: "/contact", label: "Demander une démonstration" },
          ]}
        />
      </main>
    </>
  );
}
