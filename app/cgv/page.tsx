import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { EDITEUR, SITE_EMAIL, SITE_URL, SUPPORT_EMAIL, webPageSchema } from "@/lib/seo";
import { MISE_EN_SERVICE_EN_CREATION, pricingPlans } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente de Gramme, logiciel de gestion pour boulangeries et pâtisseries : abonnements Starter et Pro, installation accompagnée, durée, résiliation, réversibilité des données et support.",
  alternates: { canonical: `${SITE_URL}/cgv` },
};

const [starter, pro] = pricingPlans;

/** Un article des conditions. Le titre porte son numéro : on s'y réfère par écrit. */
function Article({
  numero,
  titre,
  children,
}: {
  numero: number;
  titre: string;
  children: React.ReactNode;
}) {
  const id = `article-${numero}`;
  return (
    <section aria-labelledby={id} className="scroll-mt-24" id={id}>
      <h2 id={`${id}-titre`} className="text-xl font-bold text-[#2f4f26]">
        <span className="text-[#6e9f55]">Article {numero}.</span> {titre}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed text-[#4d6952]">{children}</div>
    </section>
  );
}

export default function CgvPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Conditions générales de vente",
          description:
            "Conditions générales de vente des abonnements Gramme et de la prestation d'installation accompagnée.",
          path: "/cgv",
        })}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Conditions générales de vente" />
        <article className="mt-8 space-y-9 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
          <div>
            <h1 className="text-3xl font-black text-[#27421f] md:text-4xl">Conditions générales de vente</h1>
            <p className="mt-3 text-[#4d6952]">
              Les présentes conditions régissent la souscription aux abonnements Gramme et à la prestation
              d&apos;installation accompagnée. Elles s&apos;adressent exclusivement à des professionnels agissant dans
              le cadre de leur activité.
            </p>
            <p className="mt-2 text-sm text-[#6e9f55]">En vigueur au 26 août 2026.</p>
          </div>

          <Article numero={1} titre="Éditeur et champ d'application">
            <p>
              Le service Gramme est édité par {EDITEUR.raisonSociale}, {EDITEUR.formeJuridique}, au capital de{" "}
              {EDITEUR.capital}, dont le siège social est situé {EDITEUR.adresse}, immatriculée sous le numéro{" "}
              {EDITEUR.rcs} (ci-après « l&apos;Éditeur »). Les coordonnées complètes figurent aux{" "}
              <Link
                href="/mentions-legales"
                className="font-semibold text-[#355329] underline-offset-2 hover:underline"
              >
                mentions légales
              </Link>
              .
            </p>
            <p>
              Toute souscription emporte acceptation sans réserve des présentes conditions. Elles prévalent sur tout
              document contraire du Client, notamment ses propres conditions d&apos;achat. L&apos;Éditeur se réserve
              la faculté de les modifier ; les conditions applicables sont celles en vigueur au jour de la
              souscription, et toute modification substantielle est notifiée par courriel au moins trente jours avant
              son entrée en vigueur.
            </p>
          </Article>

          <Article numero={2} titre="Description du service">
            <p>
              Gramme est un logiciel accessible en ligne (SaaS) destiné aux boulangeries, pâtisseries et
              chocolateries artisanales. Il permet notamment de digitaliser les recettes et fiches techniques, de
              calculer les coûts de revient et les marges, de scanner les factures fournisseurs, de tenir une
              mercuriale et des alertes de prix, de gérer les stocks et d&apos;organiser la production.
            </p>
            <p>
              Le service est accessible depuis un navigateur web sur ordinateur, tablette et téléphone. Une connexion
              internet est nécessaire. Le service évolue de manière continue : de nouvelles fonctionnalités peuvent
              être ajoutées, et des fonctionnalités marginales modifiées, sans que cela constitue une modification
              substantielle du contrat dès lors que les fonctions essentielles de l&apos;offre souscrite sont
              maintenues.
            </p>
          </Article>

          <Article numero={3} titre="Offres et prix">
            <p>
              Les prix sont exprimés en euros et hors taxes. La TVA applicable est celle en vigueur au jour de la
              facturation. Les tarifs publics sont les suivants :
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                <strong className="text-[#3e6134]">{starter.name}</strong> — {starter.monthlyPrice} € HT par mois,
                ou {starter.yearlyPrice} € HT par an (soit{" "}
                {starter.yearlyMonthlyEquivalent.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} € HT par
                mois).
              </li>
              <li>
                <strong className="text-[#3e6134]">{pro.name}</strong> — {pro.monthlyPrice} € HT par mois, ou{" "}
                {pro.yearlyPrice} € HT par an (soit{" "}
                {pro.yearlyMonthlyEquivalent.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} € HT par mois).
              </li>
              <li>
                <strong className="text-[#3e6134]">Installation accompagnée</strong> — prestation unique, à partir
                de {starter.installPrice} € HT en {starter.name} et de {pro.installPrice} € HT en {pro.name},
                payable en {starter.installInstallments} fois sans supplément. Pour un Client dont
                l&apos;entreprise est en cours de création, il s&apos;agit d&apos;un forfait ferme de{" "}
                {MISE_EN_SERVICE_EN_CREATION} € HT quelle que soit l&apos;offre.
              </li>
            </ul>
            <p>
              Le détail des limites de chaque offre — nombre d&apos;utilisateurs, de fiches techniques, de factures
              scannées par mois et espace de stockage — figure sur la page{" "}
              <Link href="/tarifs" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                Tarifs
              </Link>
              . L&apos;Éditeur peut réviser ses tarifs ; la révision ne s&apos;applique au Client qu&apos;à
              l&apos;échéance suivante et après un préavis de soixante jours, le Client pouvant alors résilier sans
              frais avant la prise d&apos;effet.
            </p>
          </Article>

          <Article numero={4} titre="Installation accompagnée">
            <p>
              L&apos;installation accompagnée est une prestation distincte de l&apos;abonnement, facturée une seule
              fois à la souscription. Son montant dépend du volume de données à reprendre : les tarifs annoncés à
              l&apos;article 3 sont des planchers, et le prix définitif est communiqué au Client par écrit avant
              toute exécution. Il ne peut être révisé une fois accepté. Pour une entreprise en cours de création,
              ce montant est un forfait ferme de {MISE_EN_SERVICE_EN_CREATION} € HT. Elle comprend la création de l&apos;établissement, la reprise des données
              existantes du Client — fiches recettes, tableurs, mercuriale, factures fournisseurs — et la prise en
              main par l&apos;équipe.
            </p>
            <p>
              Sa bonne exécution suppose que le Client transmette les documents nécessaires et désigne un
              interlocuteur. Les scans réalisés par l&apos;Éditeur lors de la mise en service ne sont pas décomptés
              du quota mensuel du Client. La prestation est due dès son commencement et n&apos;est pas remboursable
              une fois la reprise de données engagée.
            </p>
          </Article>

          <Article numero={5} titre="Durée, reconduction et résiliation">
            <p>
              L&apos;abonnement mensuel est conclu sans engagement de durée : il se reconduit tacitement chaque mois
              et peut être résilié à tout moment, la résiliation prenant effet au terme de la période mensuelle en
              cours. L&apos;abonnement annuel est conclu pour douze mois et se reconduit tacitement pour la même
              durée, sauf résiliation notifiée au moins trente jours avant l&apos;échéance.
            </p>
            <p>
              <strong className="text-[#3e6134]">Trente jours satisfait ou remboursé sur l&apos;annuel.</strong> Le
              Client qui souscrit un abonnement annuel peut y renoncer dans les trente jours suivant sa souscription
              et obtenir le remboursement intégral de l&apos;abonnement. Le remboursement intervient dans les
              quatorze jours de la demande. La prestation d&apos;installation accompagnée déjà réalisée reste due.
            </p>
            <p>
              La résiliation s&apos;effectue par simple courriel à{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-semibold text-[#355329] underline-offset-2 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              . Les sommes correspondant à la période entamée restent dues ; aucun prorata n&apos;est remboursé sur
              un abonnement annuel résilié en cours de période au-delà des trente premiers jours, sauf manquement de
              l&apos;Éditeur.
            </p>
            <p>
              L&apos;Éditeur peut suspendre l&apos;accès en cas de défaut de paiement persistant après une relance
              restée sans effet pendant quinze jours, ou en cas d&apos;usage manifestement contraire aux présentes
              conditions.
            </p>
          </Article>

          <Article numero={6} titre="Facturation et paiement">
            <p>
              L&apos;abonnement est payable d&apos;avance, par prélèvement, carte bancaire ou virement selon les
              modalités convenues. Les factures sont adressées par voie électronique et valent facture originale.
            </p>
            <p>
              Conformément aux articles L. 441-10 et D. 441-5 du code de commerce, tout retard de paiement entraîne
              de plein droit des pénalités calculées au taux d&apos;intérêt de la Banque centrale européenne majoré
              de dix points, ainsi qu&apos;une indemnité forfaitaire de recouvrement de 40 €, sans qu&apos;un rappel
              soit nécessaire.
            </p>
          </Article>

          <Article numero={7} titre="Disponibilité, support et maintenance">
            <p>
              L&apos;Éditeur met en œuvre les moyens raisonnables pour assurer la disponibilité du service
              vingt-quatre heures sur vingt-quatre. Le service peut être interrompu pour maintenance ; les
              interventions programmées sont, dans la mesure du possible, réalisées en dehors des heures de
              production.
            </p>
            <p>
              Le support est joignable par courriel à{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-semibold text-[#355329] underline-offset-2 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              , du lundi au vendredi. L&apos;offre {pro.name} bénéficie d&apos;un traitement prioritaire.
            </p>
          </Article>

          <Article numero={8} titre="Données du Client, confidentialité et réversibilité">
            <p>
              Les recettes, fiches techniques, factures, prix d&apos;achat, marges et données de production déposés
              dans Gramme demeurent la propriété exclusive du Client. L&apos;Éditeur ne les exploite ni ne les cède à
              des tiers, ne les partage pas entre établissements et n&apos;y accède que pour assurer le support ou
              l&apos;installation, à la demande du Client. Les données sont cloisonnées par établissement.
            </p>
            <p>
              <strong className="text-[#3e6134]">Réversibilité</strong> — le Client peut à tout moment demander
              l&apos;export de ses données dans un format exploitable. À l&apos;issue du contrat, ses données sont
              conservées douze mois, période pendant laquelle il peut en demander la restitution ou reprendre son
              abonnement sans rien avoir perdu. Passé ce délai, elles sont supprimées. Le Client peut demander leur
              suppression anticipée à tout moment.
            </p>
            <p>
              Les traitements de données personnelles sont décrits dans la{" "}
              <Link
                href="/politique-de-confidentialite"
                className="font-semibold text-[#355329] underline-offset-2 hover:underline"
              >
                politique de confidentialité
              </Link>
              , qui fait partie intégrante du contrat.
            </p>
          </Article>

          <Article numero={9} titre="Obligations du Client">
            <p>
              Le Client est responsable de l&apos;exactitude des données qu&apos;il saisit ou importe, de la
              confidentialité de ses identifiants et de l&apos;usage fait du service par ses collaborateurs. Il
              s&apos;engage à ne pas tenter d&apos;accéder à des données d&apos;autres établissements, à ne pas
              contourner les limites de son offre et à ne pas revendre l&apos;accès au service.
            </p>
          </Article>

          <Article numero={10} titre="Responsabilité">
            <p>
              Gramme est un outil d&apos;aide à la décision. Les coûts de revient, marges et coefficients qu&apos;il
              produit dépendent des données saisies ou importées par le Client, qu&apos;il lui appartient de
              vérifier. Ils ne constituent ni un conseil comptable, ni un conseil fiscal, ni un engagement de
              résultat commercial.
            </p>
            <p>
              La responsabilité de l&apos;Éditeur est limitée aux dommages directs et prévisibles, et plafonnée au
              montant des sommes effectivement versées par le Client au titre des douze mois précédant le fait
              générateur. Sont exclus les préjudices indirects, notamment la perte d&apos;exploitation, de chiffre
              d&apos;affaires ou de clientèle. Aucune limitation ne s&apos;applique en cas de faute lourde ou
              dolosive.
            </p>
          </Article>

          <Article numero={11} titre="Droit de rétractation">
            <p>
              Le service s&apos;adressant exclusivement à des professionnels dans le cadre de leur activité, le droit
              de rétractation prévu par le code de la consommation n&apos;est pas applicable. L&apos;absence
              d&apos;engagement de durée sur l&apos;offre mensuelle permet au Client d&apos;interrompre le service à
              l&apos;échéance suivante.
            </p>
          </Article>

          <Article numero={12} titre="Droit applicable et juridiction">
            <p>
              Les présentes conditions sont soumises au droit français. En cas de différend, les parties
              s&apos;efforcent de trouver une solution amiable. À défaut, compétence expresse est attribuée aux
              tribunaux du ressort de Paris, nonobstant pluralité de défendeurs ou appel en garantie.
            </p>
            <p>
              Pour toute question relative aux présentes conditions :{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="font-semibold text-[#355329] underline-offset-2 hover:underline"
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </Article>
        </article>
        <RelatedLinks
          links={[
            { href: "/tarifs", label: "Consulter les tarifs" },
            { href: "/mentions-legales", label: "Mentions légales" },
            { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
          ]}
        />
      </main>
    </>
  );
}
