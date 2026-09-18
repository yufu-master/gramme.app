import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, SITE_URL, webPageSchema, imageSociale, ogPage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Démo logiciel boulangerie · 1 h sur un vrai atelier",
  description:
    "Une heure en visio sur un atelier de démonstration complet : une facture scannée en direct, et le coût de revient d'une recette qui se recalcule sous vos yeux.",
  keywords: [
    "démo logiciel boulangerie",
    "démonstration logiciel pâtisserie",
    "essayer logiciel gestion boulangerie",
    "rendez-vous démonstration Gramme",
    "logiciel boulangerie test",
  ],
  alternates: { canonical: `${SITE_URL}/demo` },
  openGraph: ogPage({
    images: imageSociale("/images/app/recette-couts.png", "Le coût de revient et la marge d'une recette dans Gramme"),
    title: "Démo du logiciel boulangerie · une heure sur un vrai atelier",
    description:
      "Pas un diaporama : une heure sur un atelier en fonctionnement, avec une facture scannée en direct, en visio.",
    url: `${SITE_URL}/demo`,
  }),
};

const deroule = [
  {
    minutes: "0 – 10 min",
    titre: "Votre organisation d'aujourd'hui",
    texte:
      "Comment vous tenez vos fiches, où sont vos prix d'achat, ce que vous savez déjà de vos marges et ce que vous ne savez pas. C'est cette conversation qui décide de la suite : sans elle, une démonstration ne montre que le logiciel.",
  },
  {
    minutes: "10 – 35 min",
    titre: "Un atelier complet, en fonctionnement",
    texte:
      "Une boulangerie-pâtisserie de démonstration, avec une centaine de fiches, leurs sous-recettes, ses fournisseurs, sa mercuriale et son stock. Vous voyez les écrans tels qu'un artisan les ouvre chaque jour, pas des diapositives.",
  },
  {
    minutes: "35 – 50 min",
    titre: "Une facture scannée sous vos yeux",
    texte:
      "Nous photographions une facture fournisseur pendant l'appel. Les prix entrent seuls, et vous voyez le coût de revient et la marge d'une recette se recalculer sans que personne n'ait rien saisi. Vous avez une fiche ou une facture sous la main ? Montrez-la, on la passe au scan aussi : c'est une option, jamais un préalable.",
  },
  {
    minutes: "50 – 60 min",
    titre: "Ce que ça donnerait chez vous",
    texte:
      "Offre adaptée à votre taille, déroulé de l'installation accompagnée, reprise de votre historique, délais. Sans engagement à prendre pendant l'appel.",
  },
];

export default function DemoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Démo du logiciel boulangerie Gramme",
            description:
              "Une heure de démonstration en visio sur un atelier complet, avec une facture fournisseur scannée en direct.",
            path: "/demo",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Démonstration", path: "/demo" },
          ]),
        ]}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Démonstration" />

        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">
            Une heure sur un vrai atelier, pas sur un diaporama
          </h1>
          <p className="mt-5 max-w-3xl text-base text-[#4d6952] md:text-lg">
            La démonstration de Gramme dure une heure et se fait en visio, sur un atelier de démonstration complet.
            Nous y scannons une facture fournisseur en direct et vous voyez la marge d&apos;une recette se recalculer
            sous vos yeux. Rien à préparer de votre côté : si vous avez une fiche ou une facture sous la main, on la
            passe au scan aussi.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021] transition-colors hover:bg-[#98c47a]"
            >
              Réserver une démonstration
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex rounded-xl border border-[#a8cf8c] px-5 py-3 font-semibold text-[#355329] transition-colors hover:bg-[#f3f9ee]"
            >
              Voir les tarifs d&apos;abord
            </Link>
          </div>
          <p className="mt-5 text-sm text-[#6e9f55]">
            Réponse sous 4 heures ouvrées. Aucune carte bancaire demandée, aucun engagement à l&apos;issue de
            l&apos;appel.
          </p>
        </section>

        <section className="mt-10 md:mt-14" aria-labelledby="deroule">
          <h2 id="deroule" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Ce qu&apos;il se passe pendant l&apos;heure
          </h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {deroule.map((etape) => (
              <li
                key={etape.titre}
                className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6e9f55]">{etape.minutes}</p>
                <h3 className="mt-2 text-lg font-bold text-[#27421f]">{etape.titre}</h3>
                <p className="mt-2 leading-relaxed text-[#4d6952]">{etape.texte}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="mt-10 rounded-3xl border border-[#dcead2] bg-[#f6fbf2] p-6 sm:p-8 md:mt-14 md:p-10"
          aria-labelledby="appel"
        >
          <h2 id="appel" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Une heure, c&apos;est trop ? Commencez par vingt minutes
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952] md:text-lg">
            Un appel de découverte de vingt minutes suffit à savoir si Gramme a sa place chez vous : votre
            organisation, votre volume, ce que vous cherchez à voir plus clair. Pas de partage d&apos;écran, pas
            d&apos;import : juste une conversation. Si le sujet mérite la suite, nous posons la démonstration d&apos;une
            heure ensuite.
          </p>
          <p className="mt-4 text-[#4d6952]">
            Précisez simplement « appel de 20 minutes » dans votre message et nous vous proposons trois créneaux.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1e3319]"
          >
            Demander un créneau
          </Link>
        </section>

        <section className="mt-10 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-8 md:mt-14 md:p-10">
          <h2 className="text-2xl font-bold text-[#2f4f26] md:text-3xl">Et si vous montrez une de vos fiches ?</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952] md:text-lg">
            C&apos;est facultatif. Si vous choisissez de nous montrer une fiche ou une facture pendant l&apos;appel,
            elle sert à la démonstration et à rien d&apos;autre. Ils restent votre
            propriété, ne sont partagés avec personne, et sont supprimés à votre demande si vous ne donnez pas suite.
            Le détail se lit sur la page{" "}
            <Link href="/securite" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              Sécurité
            </Link>
            .
          </p>
        </section>

        <RelatedLinks
          links={[
            { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
            { href: "/tarifs", label: "Consulter les tarifs" },
            { href: "/contact", label: "Nous contacter" },
          ]}
        />
      </main>
    </>
  );
}
