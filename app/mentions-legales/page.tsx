import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { EDITEUR, SITE_EMAIL, SITE_URL, SUPPORT_EMAIL, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mentions légales et éditeur du site",
  description:
    "Mentions légales de Gramme : éditeur, hébergeur, directeur de la publication et coordonnées de la société YUFU CAPITAL.",
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
};

/** Une ligne du tableau d'identification, pour ne pas répéter le balisage. */
function Ligne({ libelle, children }: { libelle: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-[#eef5e8] py-3 last:border-0 sm:grid-cols-[14rem_1fr] sm:gap-4">
      <dt className="text-sm font-semibold text-[#3e6134]">{libelle}</dt>
      <dd className="text-[#4d6952]">{children}</dd>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Mentions légales",
          description:
            "Informations légales du site gramme.app : éditeur YUFU CAPITAL, hébergement et contact.",
          path: "/mentions-legales",
        })}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Mentions légales" />
        <article className="mt-8 space-y-10 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
          <div>
            <h1 className="text-3xl font-black text-[#27421f] md:text-4xl">Mentions légales</h1>
            <p className="mt-3 text-[#4d6952]">
              Informations légales relatives au site {SITE_URL.replace("https://", "")} et à l&apos;application
              Gramme, conformément à l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
              l&apos;économie numérique.
            </p>
          </div>

          <section aria-labelledby="editeur">
            <h2 id="editeur" className="text-xl font-bold text-[#2f4f26]">
              Éditeur du site
            </h2>
            <dl className="mt-4">
              <Ligne libelle="Dénomination sociale">{EDITEUR.raisonSociale}</Ligne>
              <Ligne libelle="Nom commercial">Gramme</Ligne>
              <Ligne libelle="Forme juridique">{EDITEUR.formeJuridique}</Ligne>
              <Ligne libelle="Capital social">{EDITEUR.capital}</Ligne>
              <Ligne libelle="Siège social">{EDITEUR.adresse}</Ligne>
              <Ligne libelle="SIREN">{EDITEUR.siren}</Ligne>
              <Ligne libelle="SIRET (siège)">{EDITEUR.siret}</Ligne>
              <Ligne libelle="Immatriculation">{EDITEUR.rcs}</Ligne>
              <Ligne libelle="N° de TVA intracommunautaire">{EDITEUR.tva}</Ligne>
              <Ligne libelle="Code APE / NAF">{EDITEUR.ape}</Ligne>
              <Ligne libelle="Directeur de la publication">{EDITEUR.directeurPublication}</Ligne>
              <Ligne libelle="Contact">
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="font-semibold text-[#355329] underline-offset-2 hover:underline"
                >
                  {SITE_EMAIL}
                </a>
              </Ligne>
              <Ligne libelle="Support client">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-[#355329] underline-offset-2 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </Ligne>
            </dl>
          </section>

          <section aria-labelledby="hebergement">
            <h2 id="hebergement" className="text-xl font-bold text-[#2f4f26]">
              Hébergement
            </h2>
            <div className="mt-4 space-y-4 text-[#4d6952]">
              <p>
                <strong className="text-[#3e6134]">Site vitrine et application</strong> : Vercel Inc., 440 N Barranca
                Ave #4133, Covina, CA 91723, États-Unis. Diffusion depuis les points de présence européens du
                réseau.
              </p>
              <p>
                <strong className="text-[#3e6134]">Base de données et traitements applicatifs</strong> : Supabase,
                sur une infrastructure hébergée en Union européenne. Vos recettes, factures et prix fournisseurs sont
                cloisonnés par établissement.
              </p>
              <p>
                <strong className="text-[#3e6134]">Envoi des courriels transactionnels</strong> : Resend.
              </p>
              <p>
                Le détail des mesures de sécurité et de la localisation des données figure sur la page{" "}
                <Link
                  href="/securite"
                  className="font-semibold text-[#355329] underline-offset-2 hover:underline"
                >
                  Sécurité
                </Link>
                .
              </p>
            </div>
          </section>

          <section aria-labelledby="propriete">
            <h2 id="propriete" className="text-xl font-bold text-[#2f4f26]">
              Propriété intellectuelle
            </h2>
            <div className="mt-4 space-y-4 text-[#4d6952]">
              <p>
                L&apos;ensemble des éléments du site et de l&apos;application : textes, visuels, photographies,
                interfaces, marques, logos, bases de données et code source : est la propriété exclusive de{" "}
                {EDITEUR.raisonSociale} ou fait l&apos;objet d&apos;une licence d&apos;utilisation. Toute
                reproduction, représentation, adaptation ou extraction, totale ou partielle, par quelque procédé que
                ce soit et sur quelque support que ce soit, est interdite sans autorisation écrite préalable.
              </p>
              <p>
                <strong className="text-[#3e6134]">Vos contenus restent les vôtres.</strong> Les recettes, fiches
                techniques, factures, prix d&apos;achat et données de production que vous déposez dans Gramme
                demeurent votre propriété pleine et entière. {EDITEUR.raisonSociale} n&apos;en acquiert aucun droit,
                ne les revend pas, ne les partage pas avec d&apos;autres établissements et n&apos;y accède que pour
                assurer le support ou la mise en service, à votre demande.
              </p>
            </div>
          </section>

          <section aria-labelledby="donnees">
            <h2 id="donnees" className="text-xl font-bold text-[#2f4f26]">
              Données personnelles et cookies
            </h2>
            <p className="mt-4 text-[#4d6952]">
              Les traitements de données à caractère personnel, leurs finalités, leurs durées de conservation et les
              modalités d&apos;exercice de vos droits sont détaillés dans la{" "}
              <Link
                href="/politique-de-confidentialite"
                className="font-semibold text-[#355329] underline-offset-2 hover:underline"
              >
                politique de confidentialité
              </Link>
              . Pour toute demande relative à vos données, écrivez à{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="font-semibold text-[#355329] underline-offset-2 hover:underline"
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="responsabilite">
            <h2 id="responsabilite" className="text-xl font-bold text-[#2f4f26]">
              Responsabilité
            </h2>
            <div className="mt-4 space-y-4 text-[#4d6952]">
              <p>
                Les informations publiées sur ce site sont fournies à titre indicatif et peuvent évoluer. Les
                exemples chiffrés (coûts de revient, marges, coefficients) illustrent le fonctionnement de
                l&apos;outil et ne constituent ni un engagement de résultat, ni un conseil comptable ou fiscal.
              </p>
              <p>
                Les résultats produits par Gramme dépendent des données saisies ou importées par l&apos;utilisateur.
                Il appartient à chaque établissement de vérifier ses fiches techniques et ses prix d&apos;achat avant
                d&apos;en tirer une décision commerciale.
              </p>
            </div>
          </section>

          <section aria-labelledby="litiges">
            <h2 id="litiges" className="text-xl font-bold text-[#2f4f26]">
              Droit applicable et litiges
            </h2>
            <p className="mt-4 text-[#4d6952]">
              Le présent site et les services Gramme sont régis par le droit français. Gramme s&apos;adresse
              exclusivement à des professionnels dans le cadre de leur activité. Tout différend relève, à défaut de
              résolution amiable, de la compétence des tribunaux du ressort de Paris. Les conditions contractuelles
              figurent aux{" "}
              <Link href="/cgv" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                conditions générales de vente
              </Link>
              .
            </p>
          </section>

          <p className="text-sm text-[#6e9f55]">Dernière mise à jour : août 2026.</p>
        </article>
        <RelatedLinks
          links={[
            { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
            { href: "/cgv", label: "Conditions générales de vente" },
            { href: "/contact", label: "Nous contacter" },
          ]}
        />
      </main>
    </>
  );
}
