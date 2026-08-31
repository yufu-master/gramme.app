import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureIcon } from "@/components/features/FeatureIcon";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { features, featurePath } from "@/content/features";
import { formatEuro, pricingPlans } from "@/lib/pricing";
import { SITE_URL, webPageSchema } from "@/lib/seo";

const PATH = "/logiciel-patisserie";

export const metadata: Metadata = {
  title: "Logiciel pâtisserie · recettes, coûts et marges",
  description:
    "Sous-recettes en cascade, coût de revient à l'entremets, pertes de parage et étiquetage : le logiciel pensé pour un laboratoire de pâtisserie.",
  keywords: [
    "logiciel pâtisserie",
    "logiciel gestion pâtisserie",
    "logiciel laboratoire pâtisserie",
    "logiciel pâtissier artisan",
    "fiche technique pâtisserie",
    "coût de revient entremets",
    "calcul marge pâtisserie",
  ],
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Logiciel pâtisserie | Gramme",
    description:
      "Sous-recettes en cascade, coût de revient à l'entremets, pertes de parage et marges en temps réel. Le logiciel de gestion pensé pour les laboratoires de pâtisserie.",
    url: `${SITE_URL}${PATH}`,
    images: [{ url: "/images/feature-recette-detail.png", alt: "Fiche technique de pâtisserie dans le logiciel Gramme" }],
  },
};

const painPoints = [
  {
    title: "Une base peut servir plusieurs fois",
    text: "Un praliné, un biscuit joconde, une ganache montée : en production, une sous-recette peut se retrouver plusieurs fois dans la carte. Recopiée dans chaque fiche, elle est mise à jour nulle part. Dans Gramme, une sous-recette est un objet unique, valorisé à son coût au kilo, relié à toutes les recettes qui l'utilisent, sur autant de niveaux que nécessaire.",
  },
  {
    title: "Les pertes sont rarement intégrées aux calculs",
    text: "Un entremets détaillé en cadre perd à la découpe, une ganache perd au dressage, un appareil perd à la cuisson. Ces pertes font l'écart entre un coût théorique flatteur et la réalité de la caisse. Elles sont saisies étape par étape et appliquées à chaque calcul de coût et de marge.",
  },
  {
    title: "Le prix des matières premières évolue constamment",
    text: "Une couverture, un beurre de cacao, des framboises hors saison peuvent varier de vingt pour cent en un trimestre. Chaque facture scannée met à jour le prix d'achat, et toutes les recettes qui contiennent cette matière (bases comprises) se recalculent.",
  },
  {
    title: "La gamme change, les marges aussi",
    text: "Individuels, entremets, gâteaux de voyage, chocolats, pièces de fête : une pâtisserie gère plus de références qu'une boulangerie, avec des saisonnalités différentes. Les recettes dont la marge se dégrade remontent d'elles-mêmes, au lieu de se découvrir au bilan.",
  },
];

const showcasedFeatures = ["import-recettes-photo", "fiches-techniques", "marges-et-decisions", "scan-factures-mercuriale"];

/**
 * L'exemple chiffré de l'entremets.
 *
 * Les quantités et les coûts au kilo sont les données ; les deux totaux s'en
 * déduisent. Écrits en dur, ils avaient dérivé : 36,04 € annoncés pour 34,13 €
 * réels. Sur une page qui vend un calcul de coût de revient, un lecteur qui
 * pose sa calculatrice est le client qu'on cherche — pas celui qu'on peut se
 * permettre de contredire.
 */
const composantsEntremets = [
  { nom: "Biscuit joconde", niveau: "Sous-recette", quantiteKg: 0.85, coutKg: 5.32 },
  { nom: "Croustillant praliné", niveau: "Sous-recette de sous-recette", quantiteKg: 0.42, coutKg: 11.9 },
  { nom: "Confit de fruits", niveau: "Sous-recette", quantiteKg: 0.6, coutKg: 7.15 },
  {
    nom: "Mousse chocolat (pâte à bombe incluse)",
    niveau: "Sous-recette à 2 niveaux",
    quantiteKg: 1.8,
    coutKg: 9.4,
  },
  { nom: "Glaçage miroir", niveau: "Sous-recette", quantiteKg: 0.5, coutKg: 6.8 },
];

const PARAGE_PCT = 9;

const coutAvantParage = composantsEntremets.reduce(
  (total, ligne) => total + ligne.quantiteKg * ligne.coutKg,
  0,
);
/** Le parage se retire du produit fini : ce qui reste vendable porte tout le coût. */
const coutApresParage = coutAvantParage / (1 - PARAGE_PCT / 100);

const faq = [
  {
    q: "Quel logiciel pour une pâtisserie artisanale ?",
    a: "Un logiciel de pâtisserie doit d'abord savoir gérer les sous-recettes en cascade et les pertes de parage, sans quoi les coûts de revient sont faux. Gramme est conçu pour cela : recettes et sous-recettes, coût de revient à jour à partir des prix d'achat réels, mercuriale, stock, production et marges, sur ordinateur, tablette et mobile.",
  },
  {
    q: "Comment calculer le coût de revient d'un entremets ?",
    a: "En calculant d'abord chaque base (biscuit, croustillant, insert, mousse, glaçage) avec son rendement et ses pertes, puis en les faisant entrer dans la recette finale à leur coût au kilo. On applique ensuite la perte de parage et de découpe, avant de diviser par le nombre de parts réellement vendables.",
  },
  {
    q: "Gramme gère-t-il les recettes à plusieurs niveaux de sous-recettes ?",
    a: "Oui. Une sous-recette peut elle-même contenir d'autres sous-recettes, sur autant de niveaux que votre production l'exige. Un changement de prix sur une matière première traverse toute la chaîne jusqu'à la recette finale.",
  },
  {
    q: "Peut-on importer des fiches de pâtisserie existantes ?",
    // La photo et le PDF s'analysent depuis l'application ; le tableur, lui,
    // est repris à l'installation (l'application refuse les .xlsx à l'envoi).
    // Le reste du site le dit déjà ainsi — cette page était la seule à laisser
    // croire à un import en libre-service.
    a: "Oui. Les fiches manuscrites, même anciennes, farinées ou tachées, se photographient depuis l'application et sont reconstruites automatiquement, avec les sous-recettes séparées des recettes finales. Les fichiers Excel, même volumineux, sont repris lors de l'installation accompagnée : vous les envoyez, votre compte arrive rempli.",
  },
  {
    q: "Combien coûte un logiciel de gestion pour une pâtisserie ?",
    a: `Gramme propose deux offres : Starter à ${formatEuro(pricingPlans[0].monthlyPrice)} HT par mois (${formatEuro(pricingPlans[0].yearlyPrice)} HT par an) et Pro à ${formatEuro(pricingPlans[1].monthlyPrice)} HT par mois (${formatEuro(pricingPlans[1].yearlyPrice)} HT par an). L'installation accompagnée, facturée une seule fois, démarre à 300 € HT en Starter et 500 € HT en Pro : forfait ferme de 300 € HT si votre entreprise est en cours de création. Elle reprend vos recettes et vos factures pour que le compte soit utilisable dès le premier jour.`,
  },
];

export default function LogicielPatisseriePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Logiciel pâtisserie · gestion des recettes, coûts et marges | Gramme",
            description:
              "Logiciel de gestion pour laboratoires de pâtisserie artisanale : sous-recettes en cascade, coût de revient, pertes de parage, mercuriale et marges en temps réel.",
            path: PATH,
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs
          currentLabel="Logiciel pâtisserie"
          items={[
            { name: "Accueil", path: "/" },
            { name: "Logiciel pâtisserie", path: PATH },
          ]}
        />

        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">
            Le logiciel de pâtisserie qui sait ce qu&apos;est une sous-recette
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[#4d6952] md:text-lg">
            Votre métier nécessite de la précision. Une carte se construit en cascade :
            un entremets contient une mousse qui contient une pâte à bombe, un insert qui contient un confit,
            un croustillant qui contient un praliné. Un logiciel qui traite chaque recette comme une liste
            d&apos;ingrédients à plat vous donnera des coûts faux dès la troisième fiche.
          </p>
          <p className="mt-4 max-w-2xl text-base text-[#4d6952] md:text-lg">
            Gramme a été conçu avec un chef pâtissier, à partir de ce problème-là.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition hover:bg-[#355329]">
              Demander une démonstration
            </Link>
            <Link href="/tarifs" className="rounded-xl border border-[#d8e6cf] bg-white px-5 py-3 font-semibold text-[#355329] transition hover:bg-[#f6fbf2]">
              Voir les tarifs
            </Link>
          </div>
        </section>

        <figure className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#dcead2] bg-[#f6fbf2] shadow-[0_20px_60px_rgba(34,60,23,0.16)] sm:aspect-[16/9]">
          <Image
            src="/images/feature-recette-detail.png"
            alt="Fiche technique de pâtisserie avec sous-recettes et coût de revient dans le logiciel Gramme"
            fill
            priority
            sizes="(max-width: 1024px) 94vw, 960px"
            className="object-cover object-top"
          />
        </figure>

        <section className="mt-12 md:mt-16" aria-labelledby="specificites-title">
          <h2 id="specificites-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Quatre problèmes propres au laboratoire de pâtisserie
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {painPoints.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-bold text-[#355329]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4d6952]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 md:mt-16" aria-labelledby="exemple-title">
          <h2 id="exemple-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Un entremets, quatre niveaux de calcul
          </h2>
          <p className="mt-4 max-w-3xl text-[#4d6952]">
            Voici comment se construit le coût d&apos;un entremets à partir de ses bases. Chaque ligne est une
            sous-recette avec son propre rendement et ses propres pertes, saisie une seule fois et réutilisée
            dans toute la carte.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#dcead2] bg-white">
            <table className="w-full min-w-[34rem] border-collapse text-sm">
              <caption className="sr-only">Décomposition du coût matière d&apos;un entremets</caption>
              <thead>
                <tr className="bg-[#f6fbf2] text-left">
                  <th scope="col" className="px-4 py-3 font-bold text-[#355329]">Composant</th>
                  <th scope="col" className="px-4 py-3 font-bold text-[#355329]">Niveau</th>
                  <th scope="col" className="px-4 py-3 font-bold text-[#355329]">Quantité</th>
                  <th scope="col" className="px-4 py-3 font-bold text-[#355329]">Coût</th>
                </tr>
              </thead>
              <tbody className="text-[#4d6952]">
                {composantsEntremets.map((row) => (
                  <tr key={row.nom} className="border-t border-[#dcead2]">
                    <td className="px-4 py-3 font-semibold text-[#27421f]">{row.nom}</td>
                    <td className="px-4 py-3">{row.niveau}</td>
                    <td className="px-4 py-3 tabular-nums">
                      {row.quantiteKg.toLocaleString("fr-FR", {
                        minimumFractionDigits: 3,
                        maximumFractionDigits: 3,
                      })}{" "}
                      kg
                    </td>
                    <td className="px-4 py-3 tabular-nums">{formatEuro(row.coutKg)} / kg</td>
                  </tr>
                ))}
                {/* Les deux totaux se recalculent depuis les lignes du tableau
                    (#108) : ils étaient écrits en dur, et faux de près de deux
                    euros. Un exemple de calcul de coût qui ne tombe pas juste
                    est le pire argument possible pour un logiciel de calcul de
                    coût : le lecteur qui vérifie est exactement le client
                    qu'on cherche. */}
                <tr className="border-t border-[#dcead2] bg-[#f6fbf2] font-bold text-[#27421f]">
                  <td className="px-4 py-3" colSpan={3}>Coût matière avant parage</td>
                  <td className="px-4 py-3 tabular-nums">{formatEuro(coutAvantParage, 2)}</td>
                </tr>
                <tr className="border-t border-[#dcead2] bg-[#f6fbf2] font-bold text-[#27421f]">
                  <td className="px-4 py-3" colSpan={3}>
                    Après {PARAGE_PCT} % de parage et découpe
                  </td>
                  <td className="px-4 py-3 tabular-nums">{formatEuro(coutApresParage, 2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm text-[#4d6952]">
            Le jour où le prix du chocolat de couverture bouge, ce sont la mousse, le croustillant et le glaçage
            qui changent, donc l&apos;entremets, et tous les autres produits qui partagent ces bases. Ce
            recalcul en cascade est exactement ce qu&apos;un tableur ne tient pas.{" "}
            <Link href="/guides/calcul-cout-de-revient-boulangerie" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              Voir la méthode de calcul complète
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 md:mt-16" aria-labelledby="modules-title">
          <h2 id="modules-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Les modules les plus utilisés en pâtisserie
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {showcasedFeatures.map((slug) => {
              const feature = features.find((item) => item.slug === slug);
              if (!feature) return null;
              return (
                <li key={feature.slug}>
                  <Link
                    href={featurePath(feature.slug)}
                    className="flex h-full gap-3 rounded-2xl border border-[#dcead2] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#a8cf8c]/25 text-[#355329]">
                      <FeatureIcon name={feature.icon} className="size-4" />
                    </span>
                    <span>
                      <span className="block font-bold text-[#27421f]">{feature.name}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-[#4d6952]">{feature.summary}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-12 md:mt-14" aria-labelledby="patisserie-faq-title">
          <h2 id="patisserie-faq-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Questions fréquentes
          </h2>
          <dl className="mt-6 space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#dcead2] bg-white p-5">
                <dt className="font-bold text-[#355329]">{item.q}</dt>
                <dd className="mt-2 leading-relaxed text-[#4d6952]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 rounded-3xl bg-[#264021] p-6 text-white sm:p-8 md:mt-16 md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">Voir Gramme sur vos propres recettes</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Apportez deux ou trois de vos fiches, même manuscrites. On les importe pendant la démonstration et
            vous voyez le coût réel de vos entremets.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">
              Demander une démonstration
            </Link>
            <Link href="/fonctionnalites" className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white">
              Toutes les fonctionnalités
            </Link>
          </div>
        </section>

        <RelatedLinks
          links={[
            { href: "/guides/fiche-technique-patisserie-modele", label: "Modèle de fiche technique de pâtisserie" },
            { href: "/guides/calcul-cout-de-revient-boulangerie", label: "Calculer son coût de revient" },
            { href: "/a-propos-de-gramme", label: "Conçu avec un chef pâtissier" },
          ]}
        />
      </main>
    </>
  );
}
