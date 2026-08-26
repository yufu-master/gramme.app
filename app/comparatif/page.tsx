import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, SITE_URL, webPageSchema } from "@/lib/seo";
import {
  blocsComparatif,
  cheminsDeChoix,
  concurrents,
  RELEVE_LE,
  type Valeur,
} from "@/content/comparatif";

export const metadata: Metadata = {
  title: "Comparatif des logiciels de gestion boulangerie & pâtisserie",
  description:
    `Gramme, Otami, LogiBake, ChefsTouch et Melba comparés fonction par fonction et tarif public à l'appui : factures, mercuriale, coût de revient, production, stock, HACCP et allergènes. Relevé du ${RELEVE_LE}.`,
  keywords: [
    "comparatif logiciel boulangerie",
    "meilleur logiciel gestion boulangerie",
    "alternative Otami",
    "alternative LogiBake",
    "logiciel pâtisserie comparaison",
    "prix logiciel gestion boulangerie",
    "logiciel fiches techniques boulangerie comparatif",
  ],
  alternates: { canonical: `${SITE_URL}/comparatif` },
  openGraph: {
    title: "Comparatif des logiciels de gestion boulangerie & pâtisserie",
    description:
      "Cinq logiciels comparés fonction par fonction, tarifs publics à l'appui — y compris là où les autres font mieux que nous.",
    url: `${SITE_URL}/comparatif`,
  },
};

const ORDRE = concurrents.map((c) => c.id);

/**
 * Une case du tableau.
 *
 * Cinq états, et chacun gagne sa place contre la tentation de simplifier :
 *
 * - « option » — la fonction existe mais se paie en plus. Ni un oui ni un non,
 *   et c'est justement la nuance qui décide de la facture réelle.
 * - « en développement » — annoncée, pas livrée. La confondre avec « oui » est
 *   exactement la publicité trompeuse que la loi interdit, et la promesse qui
 *   se retourne le jour où le client la cherche dans l'application. Elle porte
 *   donc sa date, et le lecteur juge sur ce qui existe.
 */
function Case({ valeur, note }: { valeur: Valeur; note?: string }) {
  const marques: Record<Valeur, { signe: string; libelle: string; classe: string }> = {
    oui: { signe: "✓", libelle: "Oui", classe: "bg-[#e8f4de] text-[#2f4f26]" },
    non: { signe: "—", libelle: "Non", classe: "bg-[#f4f2ee] text-[#8a8377]" },
    partiel: { signe: "~", libelle: "Partiel", classe: "bg-[#fdf3e0] text-[#8a6a2f]" },
    option: { signe: "€", libelle: "En option payante", classe: "bg-[#fdf3e0] text-[#8a6a2f]" },
    prevu: { signe: "→", libelle: "En développement", classe: "bg-[#e6eefb] text-[#2f4a7a]" },
  };
  const m = marques[valeur];
  return (
    <td className="border-t border-[#eef5e8] px-3 py-3 align-top">
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold ${m.classe}`}
      >
        <span aria-hidden>{m.signe}</span>
        <span className="sr-only">{m.libelle}</span>
        <span aria-hidden className="font-semibold">
          {m.libelle}
        </span>
      </span>
      {note ? <p className="mt-1.5 text-xs leading-snug text-[#6e7c66]">{note}</p> : null}
    </td>
  );
}

export default function ComparatifPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Comparatif des logiciels de gestion boulangerie & pâtisserie",
            description:
              "Comparaison fonction par fonction et tarif par tarif de Gramme, Otami, LogiBake, ChefsTouch et Melba.",
            path: "/comparatif",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Comparatif", path: "/comparatif" },
          ]),
        ]}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Comparatif" />

        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">
            Quel logiciel de gestion pour une boulangerie ou une pâtisserie ?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4d6952] md:text-lg">
            Nous avons comparé Gramme aux quatre logiciels que les artisans nous citent le plus souvent :{" "}
            <strong className="text-[#3e6134]">Otami</strong>, <strong className="text-[#3e6134]">LogiBake</strong>,{" "}
            <strong className="text-[#3e6134]">ChefsTouch</strong> et <strong className="text-[#3e6134]">Melba</strong>.
            Fonction par fonction, tarif public à l&apos;appui — et sans cacher les quatre lignes où ils livrent
            aujourd&apos;hui ce que nous n&apos;avons pas encore.
          </p>

          {/* La méthode AVANT le tableau. Un comparatif publié par un éditeur
              part avec un déficit de crédibilité : la seule façon de le combler
              est de dire d'où viennent les chiffres et à quelle date. */}
          <div className="mt-7 rounded-2xl border border-[#a8cf8c]/50 bg-[#f6fbf2] p-5 sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-[#3e6134]">Notre méthode</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#4d6952]">
              <li>
                <strong className="text-[#3e6134]">Tout vient des pages publiques des éditeurs</strong>, relevées le{" "}
                {RELEVE_LE}. Aucune démonstration commerciale, aucune donnée de seconde main.
              </li>
              <li>
                <strong className="text-[#3e6134]">Un tarif non affiché est noté « non communiqué »</strong>, jamais
                estimé. Inventer le prix d&apos;un concurrent serait le plus sûr moyen de se tromper.
              </li>
              <li>
                <strong className="text-[#3e6134]">Ce que les autres font mieux figure dans le tableau</strong>, au
                même endroit que le reste — voyez la section « Réglementaire », où nous ne livrons aujourd&apos;hui
                aucune des quatre lignes.
              </li>
              <li>
                <strong className="text-[#3e6134]">Une fonction en développement n&apos;est pas une fonction</strong>{" "}
                : elle porte la mention « en développement » et son échéance, jamais un « oui ». Vous jugez sur ce
                qui existe le jour où vous décidez.
              </li>
              <li>
                Les tarifs changent. Vérifiez-les chez l&apos;éditeur avant de décider, et{" "}
                <Link href="/contact" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                  signalez-nous
                </Link>{" "}
                toute information devenue fausse : nous la corrigerons.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 md:mt-14" aria-labelledby="qui-fait-quoi">
          <h2 id="qui-fait-quoi" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Qui fait quoi, et pour qui
          </h2>
          <p className="mt-3 max-w-3xl text-[#4d6952]">
            Cinq fiches, dépliez celles qui vous intéressent.
          </p>

          {/* Fiches repliées par défaut : cinq fiches ouvertes faisaient plus de
              deux écrans avant le premier tableau, et personne ne lit cinq
              descriptions d'affilée. `<details>` natif plutôt qu'un accordéon en
              JavaScript : le texte reste dans le HTML servi, donc lisible par un
              moteur, et la page fonctionne même sans JS. L'en-tête porte le nom
              et le prix d'entrée pour qu'on sache quoi ouvrir. */}
          <div className="mt-5 space-y-3">
            {concurrents.map((c) => (
              <details
                key={c.id}
                className={`group overflow-hidden rounded-2xl border shadow-sm ${
                  c.id === "gramme" ? "border-[#a8cf8c] bg-[#f6fbf2]" : "border-[#dcead2] bg-white"
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 p-5">
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                      <span className="text-lg font-black text-[#27421f]">{c.nom}</span>
                      <span className="text-xs font-semibold text-[#6e9f55]">{c.site}</span>
                    </span>
                    <span className="mt-1 block text-sm font-semibold tabular-nums text-[#3e6134]">
                      {c.tarifCourt}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-xl font-black leading-none text-[#6e9f55] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-[#eef5e8] px-5 py-4">
                  <p className="leading-relaxed text-[#4d6952]">{c.positionnement}</p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-bold text-[#3e6134]">Pour qui</dt>
                      <dd className="mt-0.5 leading-relaxed text-[#4d6952]">{c.cible}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-[#3e6134]">Tarif public</dt>
                      <dd className="mt-0.5 leading-relaxed text-[#4d6952]">{c.tarif}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-[#3e6134]">Ce qu&apos;il fait bien</dt>
                      <dd className="mt-0.5 leading-relaxed text-[#4d6952]">{c.force}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-[#8a6a2f]">Ce qui peut coincer</dt>
                      <dd className="mt-0.5 leading-relaxed text-[#4d6952]">{c.reserve}</dd>
                    </div>
                  </dl>
                </div>
              </details>
            ))}
          </div>
        </section>

        {blocsComparatif.map((bloc) => (
          <section key={bloc.id} id={bloc.id} className="mt-10 scroll-mt-24 md:mt-14" aria-labelledby={`${bloc.id}-t`}>
            <h2 id={`${bloc.id}-t`} className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
              {bloc.titre}
            </h2>
            {/* Le tableau défile dans son propre cadre : cinq colonnes ne tiennent
                pas sur un téléphone, et une page qui part en biais est pire
                qu'un tableau qu'on fait glisser. */}
            <div className="mt-5 overflow-x-auto rounded-2xl border border-[#dcead2] bg-white shadow-sm">
              <table className="w-full min-w-[56rem] border-collapse text-left">
                <caption className="sr-only">
                  {bloc.titre} — comparaison de Gramme, Otami, LogiBake, ChefsTouch et Melba
                </caption>
                <thead>
                  <tr className="bg-[#f6fbf2]">
                    <th scope="col" className="w-64 px-4 py-3 text-sm font-bold text-[#27421f]">
                      Critère
                    </th>
                    {concurrents.map((c) => (
                      <th
                        key={c.id}
                        scope="col"
                        className={`px-3 py-3 text-sm font-bold ${
                          c.id === "gramme" ? "text-[#2f4f26]" : "text-[#4d6952]"
                        }`}
                      >
                        {c.nom}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bloc.lignes.map((ligne) => (
                    <tr key={ligne.critere} className="align-top">
                      <th scope="row" className="border-t border-[#eef5e8] px-4 py-3 text-left">
                        <span className="block text-sm font-bold text-[#27421f]">{ligne.critere}</span>
                        <span className="mt-1 block text-xs leading-snug text-[#6e7c66]">{ligne.pourquoi}</span>
                      </th>
                      {ORDRE.map((id) => {
                        const cellule = ligne.valeurs[id];
                        return cellule ? (
                          <Case key={id} valeur={cellule.v} note={cellule.note} />
                        ) : (
                          <Case key={id} valeur="partiel" note="Non communiqué" />
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section className="mt-12 md:mt-16" aria-labelledby="choisir">
          <h2 id="choisir" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Lequel choisir, selon votre situation
          </h2>
          <p className="mt-3 max-w-3xl text-[#4d6952]">
            Sur ces huit situations, la moitié appelle une réponse nuancée, et plusieurs peuvent vous mener
            ailleurs que chez nous. C&apos;est volontaire : un outil qui ne convient pas se résilie au bout de trois
            mois, ce qui n&apos;arrange personne.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {cheminsDeChoix.map((chemin) => (
              <article
                key={chemin.profil}
                className={`rounded-2xl border p-6 shadow-sm ${
                  chemin.verdict === "gramme"
                    ? "border-[#a8cf8c] bg-[#f6fbf2]"
                    : "border-[#dcead2] bg-white"
                }`}
              >
                <h3 className="text-base font-bold leading-snug text-[#27421f]">{chemin.profil}</h3>
                <p className="mt-3 leading-relaxed text-[#4d6952]">{chemin.conseil}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dcead2] bg-[#264021] p-6 text-white sm:p-8 md:mt-16 md:p-12">
          <h2 className="text-2xl font-black md:text-3xl">
            Le seul comparatif qui tranche vraiment se fait sur vos fiches
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/85 md:text-lg">
            Une heure en visio, vos vraies fiches techniques et une de vos factures importées en direct. À la fin,
            vous avez le coût de revient et la marge de vos propres produits — pas une grille de fonctionnalités.
            C&apos;est la comparaison qui coûte le moins de temps et qui répond le mieux.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021] transition-colors hover:bg-[#b8d99c]"
            >
              Voir le déroulé de la démonstration
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex rounded-xl border border-white/35 bg-white/10 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/20"
            >
              Nos tarifs, en clair
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs leading-relaxed text-[#6e7c66]">
          Otami, LogiBake, ChefsTouch et Melba sont des marques appartenant à leurs éditeurs respectifs, cités ici à
          des fins de comparaison objective. Les informations proviennent de leurs sites publics et ont été relevées
          le {RELEVE_LE} ; elles peuvent avoir changé depuis. Ce comparatif est publié par Gramme : vérifiez les
          éléments qui pèsent dans votre décision auprès de chaque éditeur.
        </p>

        <RelatedLinks
          links={[
            { href: "/fonctionnalites", label: "Les fonctionnalités en détail" },
            { href: "/tarifs", label: "Consulter les tarifs" },
            { href: "/faq", label: "Les questions fréquentes" },
          ]}
        />
      </main>
    </>
  );
}
