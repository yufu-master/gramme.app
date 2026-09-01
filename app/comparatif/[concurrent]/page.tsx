import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CadreAppareil } from "@/components/produit/CadreAppareil";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, imageSociale, webPageSchema } from "@/lib/seo";
import {
  blocsComparatif,
  concurrents,
  pageConcurrent,
  pagesConcurrent,
  panierCompare,
  RELEVE_LE,
  SCENARIO_PANIER,
  type Valeur,
} from "@/content/comparatif";

type Params = { concurrent: string };

export function generateStaticParams(): Params[] {
  return pagesConcurrent.map((p) => ({ concurrent: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { concurrent } = await params;
  const page = pageConcurrent(concurrent);
  if (!page) return {};
  const url = `${SITE_URL}/comparatif/${page.id}`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      images: imageSociale(
        "/images/app/haccp-temperatures.png",
        page.hygiene.altSociale,
      ),
    },
  };
}

/** Même vocabulaire que le comparatif : cinq états, pas trois. */
const MARQUES: Record<Valeur, { libelle: string; classe: string }> = {
  oui: { libelle: "Oui", classe: "bg-[#e8f4de] text-[#2f4f26]" },
  non: { libelle: "Non", classe: "bg-[#f4f2ee] text-[#8a8377]" },
  partiel: { libelle: "Partiel", classe: "bg-[#fdf3e0] text-[#8a6a2f]" },
  option: { libelle: "En option payante", classe: "bg-[#fdf3e0] text-[#8a6a2f]" },
  prevu: { libelle: "En développement", classe: "bg-[#e6eefb] text-[#2f4a7a]" },
};

export default async function PageConcurrentPage({ params }: { params: Promise<Params> }) {
  const { concurrent } = await params;
  const page = pageConcurrent(concurrent);
  if (!page) notFound();

  const fiche = concurrents.find((c) => c.id === page.id);
  const nous = concurrents.find((c) => c.id === "gramme");
  if (!fiche || !nous) notFound();

  const chemin = `/comparatif/${page.id}`;

  /**
   * Le face-à-face se DÉDUIT du tableau du comparatif, il ne se ressaisit pas.
   * Deux listes de critères finiraient par se contredire, et c'est le lecteur
   * qui trouverait l'écart avant nous.
   */
  const lignes = blocsComparatif.flatMap((bloc) =>
    bloc.lignes
      .filter((l) => l.valeurs[page.id] && l.valeurs.gramme)
      .map((l) => ({ bloc: bloc.titre, ...l })),
  );

  const panierLui = panierCompare.find((p) => p.id === page.id);
  const panierNous = panierCompare.find((p) => p.id === "gramme");

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: page.metaTitle,
            description: page.metaDescription,
            path: chemin,
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${SITE_URL}${chemin}#faq`,
            mainEntity: page.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs
          currentLabel={fiche.nom}
          items={[
            { name: "Accueil", path: "/" },
            { name: "Comparatif", path: "/comparatif" },
            // Son vrai chemin, pas « # » : `Breadcrumbs` écarte les « # » du
            // balisage, et un fil d'Ariane qui omet la page où l'on se trouve
            // n'en est pas un pour un moteur. À l'écran, le dernier maillon
            // reste du texte — il est déjà rendu ainsi parce qu'il est dernier.
            { name: fiche.nom, path: chemin },
          ]}
        />

        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6e9f55]">
            {fiche.site} · relevé le {RELEVE_LE}
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-[#27421f] md:text-4xl">{page.h1}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4d6952] md:text-lg">{page.chapeau}</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#dcead2] bg-white p-5">
              <p className="text-sm font-bold text-[#27421f]">{fiche.nom}</p>
              <p className="mt-1 text-lg font-black tabular-nums text-[#3e6134]">{fiche.tarifCourt}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{fiche.tarif}</p>
            </div>
            <div className="rounded-2xl border border-[#a8cf8c] bg-[#f6fbf2] p-5">
              <p className="text-sm font-bold text-[#27421f]">Gramme</p>
              <p className="mt-1 text-lg font-black tabular-nums text-[#3e6134]">{nous.tarifCourt}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{nous.tarif}</p>
            </div>
          </div>
        </section>

        {/* Ce qu'il fait mieux, AVANT ce que nous faisons mieux.
            L'ordre n'est pas de la politesse : un lecteur qui utilise déjà
            l'outil comparé sait ce qu'il vaut. Commencer par lui donner raison
            est la seule façon d'être cru sur la suite. */}
        <section className="mt-10 md:mt-14" aria-labelledby="mieux">
          <h2 id="mieux" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Ce que {fiche.nom} fait mieux que nous
          </h2>
          <p className="mt-3 max-w-3xl text-[#4d6952]">
            Trois points, et ils sont réels. Si l&apos;un d&apos;eux est votre priorité, la suite de cette page ne
            vous fera pas changer d&apos;avis, et c&apos;est très bien ainsi.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {page.mieuxQueNous.map((point) => (
              <article key={point.titre} className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm">
                <h3 className="text-base font-bold leading-snug text-[#27421f]">{point.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{point.texte}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Le comparatif écrit noir sur blanc « demandez à voir l'écran de
            saisie sur un téléphone, pas sur une capture d'ordinateur ». Le lui
            montrer vaut mieux que de le lui conseiller. */}
        <section className="mt-10 md:mt-14" aria-labelledby="a-quoi-ca-ressemble">
          <h2 id="a-quoi-ca-ressemble" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            À quoi ça ressemble, chez nous
          </h2>
          {/* Cette phrase parle d'un TIERS : elle vient de sa fiche, jamais du
              gabarit. Écrite ici en dur, elle affirmait « ce que {nom} ne
              documente pas » — vrai d'Otami, faux de Melba qui documente la
              traçabilité dans un module payant. */}
          <p className="mt-3 max-w-3xl leading-relaxed text-[#4d6952]">{page.hygiene.intro}</p>
          <div className="mt-6 flex flex-wrap items-end justify-center gap-8 rounded-3xl border border-[#dcead2] bg-[#f6fbf2] p-6 sm:gap-12 sm:p-10">
            <div className="w-[168px] sm:w-[200px]">
              <CadreAppareil
                appareil="telephone"
                src="/images/app/haccp-temperatures-telephone.png"
                alt="Relevé de températures dans Gramme sur téléphone : chaque enceinte, ses bornes et le bouton Noter"
                sizes="200px"
              />
              <p className="mt-3 text-center text-xs font-semibold text-[#4d6952]">Relevé de températures</p>
            </div>
            <div className="w-[168px] sm:w-[200px]">
              <CadreAppareil
                appareil="telephone"
                src="/images/app/haccp-nettoyage-telephone.png"
                alt="Plan de nettoyage dans Gramme sur téléphone : les tâches par zone et leur pointage"
                sizes="200px"
              />
              <p className="mt-3 text-center text-xs font-semibold text-[#4d6952]">Plan de nettoyage</p>
            </div>
          </div>
        </section>

        {panierLui && panierNous ? (
          <section className="mt-10 md:mt-14" aria-labelledby="facture">
            <h2 id="facture" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
              Ce que la même boulangerie paie chez l&apos;un et chez l&apos;autre
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-[#4d6952]">
              Un prix d&apos;entrée ne se compare pas, il s&apos;additionne. Voici le même atelier chiffré des deux
              côtés : {SCENARIO_PANIER}
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[panierLui, panierNous].map((ligne) => (
                <article
                  key={ligne.id}
                  className={`rounded-2xl border p-5 shadow-sm sm:p-6 ${
                    ligne.id === "gramme" ? "border-[#a8cf8c] bg-[#f6fbf2]" : "border-[#dcead2] bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-bold text-[#27421f]">{ligne.offre}</h3>
                    <p className="text-lg font-black tabular-nums text-[#3e6134]">
                      {ligne.totalMensuelHt === null ? (
                        <span className="text-base font-bold text-[#8a6a2f]">Non calculable</span>
                      ) : (
                        <>
                          {ligne.totalMensuelHt.toLocaleString("fr-FR", {
                            minimumFractionDigits: Number.isInteger(ligne.totalMensuelHt) ? 0 : 2,
                            maximumFractionDigits: 2,
                          })}{" "}
                          € HT<span className="text-sm font-semibold text-[#6e7c66]"> /mois</span>
                        </>
                      )}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{ligne.detail}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#6e7c66]">{ligne.nuance}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#6e7c66]">
              Additions faites à partir des tarifs publics affichés par chaque éditeur le {RELEVE_LE}, hors frais
              d&apos;installation et hors remises négociées.{" "}
              <Link href="/comparatif#facture-reelle" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                Les quatre solutions comparées
              </Link>
              .
            </p>
          </section>
        ) : null}

        <section className="mt-10 md:mt-14" aria-labelledby="face">
          <h2 id="face" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            {fiche.nom} face à Gramme, ligne par ligne
          </h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#dcead2] bg-white shadow-sm">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <caption className="sr-only">
                Comparaison de {fiche.nom} et de Gramme, relevée le {RELEVE_LE}
              </caption>
              <thead>
                <tr className="bg-[#f6fbf2]">
                  <th scope="col" className="w-72 px-4 py-3 text-sm font-bold text-[#27421f]">
                    Critère
                  </th>
                  <th scope="col" className="px-3 py-3 text-sm font-bold text-[#4d6952]">
                    {fiche.nom}
                  </th>
                  <th scope="col" className="px-3 py-3 text-sm font-bold text-[#2f4f26]">
                    Gramme
                  </th>
                </tr>
              </thead>
              <tbody>
                {lignes.map((ligne) => (
                  <tr key={ligne.critere} className="align-top">
                    <th scope="row" className="border-t border-[#eef5e8] px-4 py-3 text-left">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#6e9f55]">
                        {ligne.bloc}
                      </span>
                      <span className="mt-0.5 block text-sm font-bold text-[#27421f]">{ligne.critere}</span>
                      <span className="mt-1 block text-xs leading-snug text-[#6e7c66]">{ligne.pourquoi}</span>
                    </th>
                    {[page.id, "gramme"].map((id) => {
                      const cellule = ligne.valeurs[id];
                      const m = MARQUES[cellule.v];
                      return (
                        <td key={id} className="border-t border-[#eef5e8] px-3 py-3 align-top">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${m.classe}`}
                          >
                            {m.libelle}
                          </span>
                          {cellule.note ? (
                            <p className="mt-1.5 text-xs leading-snug text-[#6e7c66]">{cellule.note}</p>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 md:mt-14" aria-labelledby="lequel">
          <h2 id="lequel" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Lequel prendre, selon ce que vous cherchez
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {page.quandLuiQuandNous.map((cas) => (
              <article
                key={cas.profil}
                className={`rounded-2xl border p-5 shadow-sm ${
                  cas.verdict === "nous" ? "border-[#a8cf8c] bg-[#f6fbf2]" : "border-[#dcead2] bg-white"
                }`}
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#6e9f55]">
                  {cas.verdict === "nous" ? "Plutôt Gramme" : `Plutôt ${fiche.nom}`}
                </p>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-[#27421f]">{cas.profil}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{cas.texte}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 md:mt-14" aria-labelledby="questions">
          <h2 id="questions" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Les questions qu&apos;on nous pose sur {fiche.nom}
          </h2>
          <div className="mt-5 space-y-3">
            {page.faq.map((item) => (
              <details
                key={item.q}
                className="group overflow-hidden rounded-2xl border border-[#dcead2] bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 p-5">
                  <h3 className="min-w-0 flex-1 text-base font-bold leading-snug text-[#27421f]">{item.q}</h3>
                  <span
                    aria-hidden
                    className="shrink-0 text-xl font-black leading-none text-[#6e9f55] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="border-t border-[#eef5e8] px-5 py-4 leading-relaxed text-[#4d6952]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dcead2] bg-[#264021] p-6 text-white sm:p-8 md:mt-16 md:p-12">
          <h2 className="text-2xl font-black md:text-3xl">
            La seule comparaison qui tranche se fait sur vos fiches
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/85 md:text-lg">
            Une heure en visio, vos vraies fiches techniques et une de vos factures importées en direct. À la fin,
            vous avez le coût de revient et la marge de vos propres produits, et vous saurez tout de suite lequel
            des deux outils parle votre métier.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021] transition-colors hover:bg-[#b8d99c]"
            >
              Voir à quoi ressemble une démonstration
            </Link>
            <Link
              href="/comparatif"
              className="inline-flex rounded-xl border border-white/35 bg-white/10 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/20"
            >
              Le comparatif complet, à quatre
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs leading-relaxed text-[#6e7c66]">
          {fiche.nom} est une marque appartenant à son éditeur, citée ici à des fins de comparaison objective. Les
          informations proviennent de ses pages publiques et ont été relevées le {RELEVE_LE} ; elles peuvent avoir
          changé depuis. Cette page est publiée par Gramme, son concurrent : vérifiez auprès de l&apos;éditeur les
          éléments qui pèsent dans votre décision, et{" "}
          <Link href="/contact" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
            signalez-nous
          </Link>{" "}
          toute information devenue fausse.
        </p>

        <RelatedLinks
          links={[
            { href: "/comparatif", label: "Le comparatif complet" },
            { href: "/tarifs", label: "Nos tarifs, en clair" },
            { href: "/fonctionnalites", label: "Les fonctionnalités en détail" },
          ]}
        />
      </main>
    </>
  );
}
