import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { webPageSchema, imageSociale, ogPage } from "@/lib/seo";

/**
 * L'API, les webhooks et le connecteur IA de Gramme, EN DÉVELOPPEMENT.
 *
 * Posé le 28/09/2026 après la démonstration à Polypolis (Kapoun), premier
 * atelier pilote. Tout ce qui est décrit ici est annoncé, pas livré : la page
 * le dit en tête, et les chemins sont présentés comme un aperçu susceptible
 * d'évoluer. Le jour où la documentation est publiée, cette page la remplace.
 * Même règle que le comparatif : une fonction non livrée ne se présente
 * jamais comme acquise.
 */

export const metadata: Metadata = {
  title: "API, webhooks et MCP · en développement",
  description:
    "L'API de Gramme arrive : recettes, coûts, allergènes, stock, ventes et pertes, webhooks signés et connecteur MCP pour les assistants IA. Incluse dans l'offre Pro, accès pilote à l'automne 2026.",
  alternates: { canonical: "https://gramme.app/developpeurs" },
  openGraph: ogPage({
    images: imageSociale("/images/app/factures.png", "Les données de l'atelier dans Gramme"),
    title: "API Gramme | En développement",
    description: "API REST, webhooks et connecteur MCP pour relier Gramme à vos outils. Accès pilote à l'automne 2026.",
    url: "https://gramme.app/developpeurs",
  }),
};

const CE_QUE_FERA_L_API = [
  {
    titre: "Lire",
    points: [
      "La mercuriale : matières, conditionnements, prix et leur historique",
      "Les recettes : composition, sous-recettes, coût de revient, coût pour N pièces, allergènes",
      "Le stock des matières et des produits, par lot, avec les dates limites",
      "Les plans de production et leurs besoins en matières",
    ],
  },
  {
    titre: "Écrire",
    points: [
      "Les ventes de la journée, depuis une caisse ou une boutique en ligne",
      "Les pertes et invendus",
      "L'import en masse de la mercuriale et des recettes (CSV)",
      "Le lancement d'un export complet ou comptable",
    ],
  },
];

const EVENEMENTS = [
  { nom: "prix.modifie", quand: "le prix d'une matière change après une facture" },
  { nom: "stock.bas", quand: "un stock passe sous son seuil" },
  { nom: "marge.sous_seuil", quand: "la marge d'un produit passe sous votre seuil" },
  { nom: "production.planifiee", quand: "une production est planifiée" },
  { nom: "vente.importee", quand: "les ventes d'une journée sont enregistrées" },
  { nom: "export.pret", quand: "un export est prêt à télécharger" },
];

const APERCU = `GET  /v1/matieres
GET  /v1/recettes/{id}?pieces=150
GET  /v1/stock
POST /v1/ventes
POST /v1/pertes
GET  /v1/production/plans/{id}/besoins
POST /v1/exports

Authorization: Bearer <clé de l'atelier>`;

export default function DeveloppeursPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "API, webhooks et connecteur MCP de Gramme",
          description: "API en développement : accès pilote à l'automne 2026, ouverture aux ateliers Pro d'ici fin 2026.",
          path: "/developpeurs",
        })}
      />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="API et développeurs" />

        <section className="mt-8 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
          <p className="inline-flex rounded-full bg-[#f3ead0] px-3 py-1 text-sm font-semibold text-[#6b4f12]">
            En développement · accès pilote à l&apos;automne 2026
          </p>
          <h1 className="mt-4 text-3xl font-black text-[#27421f] md:text-4xl">
            L&apos;API de Gramme, ses webhooks et son connecteur IA
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#4d6952]">
            Relier Gramme à votre boutique en ligne, à votre caisse, à vos automatisations et à votre assistant IA,
            sans double saisie. L&apos;API est en cours de développement avec nos premiers ateliers pilotes. Elle sera
            ouverte à tous les ateliers Pro d&apos;ici fin 2026, <strong>incluse dans l&apos;offre Pro, sans
            supplément</strong>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?sujet=Autre&integration=API"
              className="rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]"
            >
              Devenir atelier pilote
            </Link>
            <Link href="/integrations" className="rounded-xl border border-[#d8e6cf] px-5 py-3 font-semibold text-[#355329]">
              Voir les intégrations à venir
            </Link>
          </div>
        </section>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {CE_QUE_FERA_L_API.map((bloc) => (
            <article key={bloc.titre} className="rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-5">
              <h2 className="text-lg font-bold text-[#355329]">{bloc.titre}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#4d6952]">
                {bloc.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-2" aria-labelledby="authentification">
          <div>
            <h2 id="authentification" className="text-2xl font-bold text-[#27421f]">
              Une clé par atelier
            </h2>
            <ul className="mt-4 space-y-2 text-[#4d6952]">
              <li>Créée et révoquée par l&apos;administrateur de l&apos;atelier, depuis les réglages.</li>
              <li>En lecture seule, ou en lecture et écriture.</li>
              <li>Cloisonnée : une clé ne voit que les données de son atelier, comme l&apos;application.</li>
              <li>Une API REST en JSON, versionnée, avec une documentation publique à l&apos;ouverture.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#4d6952]">Aperçu, susceptible d&apos;évoluer jusqu&apos;à la publication</p>
            <pre className="mt-2 overflow-x-auto rounded-2xl bg-[#264021] p-5 text-sm leading-relaxed text-[#e6f1dc]">
              <code>{APERCU}</code>
            </pre>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="webhooks">
          <h2 id="webhooks" className="text-2xl font-bold text-[#27421f]">
            Des webhooks, pour être prévenu au bon moment
          </h2>
          <p className="mt-3 max-w-3xl text-[#4d6952]">
            Chaque envoi est signé, pour que votre outil vérifie qu&apos;il vient bien de Gramme, et relancé en cas
            d&apos;échec. Les seuils sont ceux que vous réglez déjà dans l&apos;application.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#dcead2] bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f6fbf2] text-[#355329]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Événement</th>
                  <th className="px-4 py-3 font-semibold">Envoyé quand</th>
                </tr>
              </thead>
              <tbody className="text-[#4d6952]">
                {EVENEMENTS.map((e) => (
                  <tr key={e.nom} className="border-t border-[#e8f0e2]">
                    <td className="px-4 py-3 font-mono text-[#27421f]">{e.nom}</td>
                    <td className="px-4 py-3">{e.quand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-[#dcead2] bg-white p-6">
            <h2 className="text-xl font-bold text-[#27421f]">Un connecteur MCP pour les assistants IA</h2>
            <p className="mt-3 text-[#4d6952]">
              Un serveur MCP en lecture, construit sur l&apos;API, pour que votre assistant IA réponde avec les
              chiffres de votre atelier : « combien me coûtent 150 choux, et que me manque-t-il pour samedi ? »
              Fiches, coûts, allergènes, besoins en matières et stock.
            </p>
          </article>
          <article className="rounded-2xl border border-[#dcead2] bg-white p-6">
            <h2 className="text-xl font-bold text-[#27421f]">n8n, Make, Zapier et votre boutique en ligne</h2>
            <p className="mt-3 text-[#4d6952]">
              Ces outils se branchent sur l&apos;API par leurs blocs HTTP et webhook, sans attendre de connecteur
              dédié. Nous publierons des modèles prêts à l&apos;emploi, en commençant par les commandes d&apos;une
              boutique Shopify envoyées vers Gramme.
            </p>
          </article>
        </div>

        <section className="mt-12 rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-6">
          <h2 className="text-xl font-bold text-[#27421f]">Dès aujourd&apos;hui, sans l&apos;API</h2>
          <ul className="mt-3 space-y-2 text-[#4d6952]">
            <li>L&apos;export complet de vos données à tout moment : CSV, classeur Excel, JSON et fiches en PDF.</li>
            <li>L&apos;import des ventes du jour depuis un fichier CSV de caisse, colonnes mémorisées.</li>
            <li>Un dossier comptable mensuel : journaux d&apos;achats et de ventes, pièces jointes.</li>
          </ul>
        </section>

        <section className="mt-14 rounded-3xl bg-[#264021] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-bold md:text-3xl">Vous intégrez des outils pour des artisans ?</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Consultants, intégrateurs, développeurs : rejoignez les ateliers pilotes. Vous testez l&apos;API avant son
            ouverture, et vos retours décident de l&apos;ordre des prochaines briques.
          </p>
          <Link
            href="/contact?sujet=Autre&integration=API"
            className="mt-6 inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]"
          >
            Demander un accès pilote
          </Link>
        </section>

        <RelatedLinks
          links={[
            { href: "/integrations", label: "Intégrations à venir" },
            { href: "/tarifs", label: "Tarifs" },
            { href: "/securite", label: "Sécurité et hébergement" },
          ]}
        />
      </main>
    </>
  );
}
