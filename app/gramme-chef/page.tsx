import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { FormulaireGrammeChef } from "@/components/chef/FormulaireGrammeChef";
import { ESSAI_CHEF, OFFRES_CHEF, PRIX_FONDATEUR, offresChefSchema } from "@/content/gramme-chef-offres";
import { breadcrumbSchema, SITE_URL, webPageSchema, imageSociale, ogPage } from "@/lib/seo";

/**
 * Gramme Chef : la page de marque, publiée avant le produit.
 *
 * Tout ce qui est propre au chef s'écrit au futur (lancement en janvier
 * 2027) et les visuels sont signés « Aperçu » : ce sont des maquettes de
 * l'écran prévu (`scripts/maquettes-gramme-chef/`), pas des captures. Une page
 * qui décrirait comme livré ce qui ne l'est pas ferait perdre, au premier
 * essai, le crédit que le reste du site a construit.
 *
 * « ERP » reste dans les mots-clés et dans une question de la FAQ, pour les
 * recherches qui l'emploient ; le texte visible parle comme un chef, qui ne
 * cherche pas un ERP mais « de quoi gérer ses devis et ses factures ».
 */

const TITRE = "Gramme Chef · le logiciel du chef à domicile";
const DESCRIPTION =
  "Menus chiffrés par convive, devis signés en ligne, acomptes, factures et suivi des clients : toute la gestion du chef à domicile. Bêta gratuite avant janvier 2027.";

export const metadata: Metadata = {
  title: TITRE,
  description: DESCRIPTION,
  keywords: [
    "Gramme Chef",
    "logiciel chef à domicile",
    "application chef privé",
    "logiciel devis chef à domicile",
    "facturation chef à domicile",
    "gestion chef privé",
    "ERP chef à domicile",
    "suivi prix courses chef",
  ],
  alternates: { canonical: `${SITE_URL}/gramme-chef` },
  openGraph: ogPage({
    images: imageSociale(
      "/images/app/gramme-chef-menu.png",
      "Aperçu de Gramme Chef : un dîner pour huit convives chiffré plat par plat, avec les allergènes des invités et la liste de courses",
    ),
    title: TITRE,
    description: "Le menu chiffré par convive, le devis, l'acompte et la facture au même endroit. Bêta gratuite ouverte avant janvier 2027.",
    url: `${SITE_URL}/gramme-chef`,
  }),
};

const gains = [
  {
    chiffre: "Au centime",
    titre: "Plus jamais un menu vendu à perte",
    texte:
      "Chaque plat est chiffré à vos vrais prix d'achat, sous-recettes comprises. Vous voyez le coût par convive et ce qui vous reste par heure avant d'envoyer le prix, pas au retour des courses.",
  },
  {
    chiffre: "5 minutes",
    titre: "Un devis propre au lieu d'une soirée de traitement de texte",
    texte:
      "Le devis part du menu déjà chiffré : convives, prix, acompte, conditions. Le client le signe en ligne, et vous savez où en est chaque demande.",
  },
  {
    chiffre: "30 %",
    titre: "Un acompte demandé à chaque fois",
    texte:
      "Un acompte systématique, c'est moins d'annulations de dernière minute et une trésorerie qui ne dépend plus des fins de mois de vos clients.",
  },
  {
    chiffre: "Le bon magasin",
    titre: "Vos courses, avec la mémoire des prix",
    texte:
      "Une photo du ticket de caisse, et Gramme Chef retient le prix de chaque produit dans chaque magasin : l'hypermarché du samedi, la supérette au plus près, le primeur du marché. Vous savez où la crème et le beurre sont les moins chers, sans avoir à vous en souvenir.",
  },
  {
    chiffre: "0 %",
    titre: "Vos clients réservent chez vous, sans commission",
    texte:
      "Votre page de réservation, sur votre site et en lien sur Instagram. Sur un dîner de 640 €, une commission de 20 % coûte 128 € : plus de six mois d'abonnement. Un client fidèle revient en direct, et il reste le vôtre.",
  },
  {
    chiffre: "0 oubli",
    titre: "Des factures qui partent, et des relances qui suivent",
    texte:
      "Le devis signé devient la facture une fois la prestation faite. Une facture échue se voit, et la relance se prépare d'un geste.",
  },
];

const gestion = [
  { titre: "Réservations en ligne", texte: "Une page à votre nom, en lien sur Instagram, et un module à coller sur votre site : date, convives, occasion. La demande arrive déjà rangée." },
  { titre: "Questionnaire automatique", texte: "Dès la demande, le client reçoit un questionnaire : allergies et régimes de chaque convive, goûts, équipement de la cuisine, accès. Les réponses remplissent la prestation." },
  { titre: "Menus proposés", texte: "Vous proposez deux ou trois menus, déjà chiffrés. Le client choisit en ligne, et le devis se prépare tout seul." },
  { titre: "Agenda", texte: "Vos prestations, vos demandes et vos courses, synchronisées avec Google Agenda et le calendrier de l'iPhone, y compris les dates prises ailleurs." },
  { titre: "Menus et fiches", texte: "Vos recettes chiffrées, vos menus composés, le coût par convive et la marge de chaque prestation." },
  { titre: "Convives et allergènes", texte: "Les restrictions de chaque invité, et les plats qui posent problème à qui, avant le service." },
  { titre: "Liste de courses", texte: "Tirée du menu et du nombre d'invités, quantités ajustées quand huit deviennent douze." },
  { titre: "Devis signés en ligne", texte: "Générés depuis le menu, envoyés par e-mail, acceptés par le client en un clic." },
  { titre: "Paiement en ligne", texte: "Le client paie l'acompte puis le solde par carte, Apple Pay ou virement, directement sur votre compte, via Stripe. Aucune commission Gramme." },
  { titre: "Factures et relances", texte: "Facture d'acompte, facture de solde, avoirs, numérotation suivie, et relances qui partent toutes seules." },
  { titre: "Espace client", texte: "Un lien unique pour votre client : son menu, son devis, ses factures, ses paiements. Plus de pièces jointes perdues." },
  { titre: "Fichier clients", texte: "L'historique de chaque client : menus servis, préférences, allergies de la famille, ce qu'il a rapporté." },
  { titre: "Tableau de bord", texte: "Chiffre d'affaires du mois, ce qui reste après les courses, devis en attente et sommes à encaisser." },
  { titre: "Courses et prix par magasin", texte: "La liste de courses du menu, et une photo du ticket qui garde le prix de chaque produit, magasin par magasin. Vos menus se recalculent aux prix payés." },
  { titre: "Micro-entreprise", texte: "Le livre des recettes tenu tout seul, le chiffre à déclarer à l'Urssaf, et une alerte avant le plafond." },
  { titre: "Relié à vos outils", texte: "Une API et des notifications pour relier vos réservations à votre propre site ou application, avec l'offre Chef Pro." },
];

const faq = [
  {
    q: "Qu'est-ce que Gramme Chef ?",
    a: "Le logiciel de gestion du chef à domicile et du chef privé : il chiffre chaque menu par convive à partir de vos vrais prix d'achat, prépare le devis, suit l'acompte et la facture, garde l'historique de vos clients et vous dit ce que chaque prestation vous a rapporté. Il fonctionne sur téléphone, sans installation.",
  },
  {
    q: "Gramme Chef est-il un ERP pour chef à domicile ?",
    a: "Oui, si l'on appelle ERP le logiciel qui réunit toute la gestion d'une activité. Pour un chef à domicile, cela veut dire concrètement : les menus et leur coût, les devis, les acomptes, les factures, les courses et le fichier clients, au même endroit et sans formation. Pas un progiciel d'entreprise à paramétrer pendant des semaines.",
  },
  {
    q: "Qu'est-ce que la bêta de Gramme Chef ?",
    a: "Un petit groupe de chefs à domicile utilise Gramme Chef avant son lancement de janvier 2027, gratuitement pendant plusieurs mois. En échange, ils nous disent ce qui marche, ce qui manque et ce qui gêne, et l'outil se construit avec eux. Nous choisissons les chefs au fil des candidatures, pour avoir des profils variés.",
  },
  {
    q: "Combien coûtera Gramme Chef ?",
    a: "Trois offres. Le Carnet est gratuit pour toujours : recettes, coût matière, menus, courses, allergènes, page de réservation, agenda et 3 devis par mois. L'offre Chef coûte 19 € TTC par mois et ajoute les réservations sur votre site, le questionnaire automatique, les menus proposés, le paiement en ligne sans commission, les factures, la lecture de vos tickets et le tableau de bord. Chef Pro, à 29 € HT par mois, ajoute l'API, votre nom de domaine, la TVA sur les factures, l'export comptable et le travail à plusieurs. Un seul menu sous-évalué de 5 € par convive pour huit invités fait perdre 40 €, plus de deux mois d'abonnement.",
  },
  {
    q: "Comment fonctionne l'essai de deux mois ?",
    a: ESSAI_CHEF + " Vous gardez vos recettes, vos clients et vos devis, et vous passez à l'offre Chef quand elle vous fait gagner du temps.",
  },
  {
    q: "Qu'est-ce que le prix fondateur ?",
    a: PRIX_FONDATEUR.texte + " C'est notre façon de remercier ceux qui construisent l'outil avec nous, et ceux qui nous font confiance les premiers.",
  },
  {
    q: "Pourquoi l'offre Chef est-elle affichée TTC ?",
    a: "Parce que la plupart des chefs à domicile sont en franchise de TVA et ne la récupèrent pas : 19 € TTC, c'est ce que vous payez vraiment, sans surprise. Chef Pro, pensée pour les chefs qui facturent la TVA, s'affiche hors taxes.",
  },
  {
    q: "Comment mes clients paient-ils l'acompte ?",
    a: "En ligne, depuis le devis signé : par carte, Apple Pay, Google Pay ou virement. L'argent arrive directement sur votre compte, par Stripe, sans passer par Gramme et sans commission de notre part ; seuls les frais de Stripe s'appliquent, par exemple 1,5 % + 0,25 € pour une carte européenne. Le devis précise clairement s'il s'agit d'arrhes ou d'un acompte, parce que la loi ne les traite pas de la même façon en cas d'annulation.",
  },
  {
    q: "Puis-je relier les réservations à mon site ?",
    a: "Oui. Avec l'offre Chef, votre page de réservation se met en lien sur Instagram, et un module se colle sur votre site en une ligne : les demandes arrivent dans Gramme Chef, le questionnaire part tout seul au client, et la date s'inscrit dans votre agenda. Avec Chef Pro, une API et des notifications relient les réservations à votre propre site ou à votre application.",
  },
  {
    q: "Mes clients choisissent-ils leur menu ?",
    a: "Oui, si vous le souhaitez. Vous proposez deux ou trois menus déjà chiffrés, le client choisit en ligne après avoir rempli le questionnaire de ses convives, et le devis se prépare à partir de son choix, allergies comprises.",
  },
  {
    q: "Gramme Chef est-il une autre application que Gramme ?",
    a: "Non. C'est la même application, celle qu'utilisent déjà des pâtissiers, des chocolatiers et des boulangers, avec un espace pensé pour la prestation à domicile. Le calcul du coût des recettes est le même, et il a déjà fait ses preuves en laboratoire.",
  },
  {
    q: "Gramme Chef remplace-t-il une plateforme de réservation ?",
    a: "Non, il la complète. Les plateformes vous apportent des clients ; Gramme Chef vous aide à chiffrer, organiser, facturer et fidéliser ces clients, quel que soit le canal par lequel ils sont arrivés. Et les clients qui reviennent en direct réservent sur votre propre page, sans commission.",
  },
  {
    q: "Mes recettes et mes clients restent-ils à moi ?",
    a: "Oui. Vos recettes et votre fichier clients sont votre propriété, ne sont ni partagés ni réutilisés, et s'exportent en entier à tout moment, y compris si vous arrêtez.",
  },
];

export default function GrammeChefPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Gramme Chef, le logiciel du chef à domicile", description: DESCRIPTION, path: "/gramme-chef" }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Gramme Chef", path: "/gramme-chef" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Gramme Chef",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
            url: `${SITE_URL}/gramme-chef`,
            image: `${SITE_URL}/images/app/gramme-chef-menu.png`,
            description: DESCRIPTION,
            audience: { "@type": "BusinessAudience", audienceType: "Chefs à domicile et chefs privés" },
            featureList: gestion.map((f) => f.titre),
            offers: offresChefSchema(),
            publisher: { "@type": "Organization", name: "Gramme", url: SITE_URL },
          },
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
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Gramme Chef" />

        {/* Haut de page : la promesse, et l'écran à côté. */}
        <section className="mt-6 grid items-center gap-10 rounded-3xl bg-[#44624b] p-6 text-white sm:p-8 md:p-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Image
              src="/logos/gramme-chef-logo-fond-fonce.png"
              alt="Gramme Chef"
              width={1600}
              height={249}
              sizes="240px"
              priority
              className="h-8 w-auto md:h-10"
            />
            <p className="mt-7 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#d3e8c4]">
              Nouveau · bêta gratuite avant janvier 2027
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
              Gramme Chef, le logiciel du chef à domicile qui vous fait gagner sur chaque dîner
            </h1>
            <p className="mt-5 text-base text-[#e3efdb] md:text-lg">
              La demande qui arrive de votre site ou de votre Instagram. Le questionnaire des convives, envoyé tout
              seul. Les menus proposés au client, chiffrés par convive avant d&apos;annoncer un prix. Les courses, avec
              les prix de chaque magasin en mémoire. Le devis signé et l&apos;acompte payé en ligne, la facture et la
              relance au bon moment. Tout ce qu&apos;un chef privé gère aujourd&apos;hui entre un carnet, un tableur, un
              agenda et trois applications, réuni dans une seule, sur votre téléphone.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#inscription"
                className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-[#2f4a2c] transition-colors hover:bg-[#eef6e9]"
              >
                Devenir chef bêta-testeur
              </a>
              <a
                href="#gestion"
                className="inline-flex rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Tout ce qu&apos;il gère
              </a>
            </div>
            <p className="mt-5 text-sm text-[#d3e8c4]">
              Carnet gratuit pour toujours. Offre Chef à 19 € TTC par mois, essai de deux mois sans carte bancaire.
            </p>
          </div>
          <figure className="mx-auto w-full max-w-[320px]">
            <Image
              src="/images/app/gramme-chef-menu-telephone.png"
              alt="Aperçu de Gramme Chef sur téléphone : le dîner des Laurent pour huit convives, 65 € par convive, 7,70 € de matières, et les restrictions de Claire et Marc"
              width={1290}
              height={2796}
              priority
              className="h-auto w-full rounded-[2rem] border border-white/20 shadow-[0_30px_80px_rgba(20,35,22,0.35)]"
            />
            <figcaption className="mt-3 text-center text-xs text-[#d3e8c4]">Aperçu de l&apos;écran prévu au lancement</figcaption>
          </figure>
        </section>

        {/* Ce que ça rapporte : l'argument qui décide un indépendant. */}
        <section className="mt-12 md:mt-16" aria-labelledby="gains">
          <h2 id="gains" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Ce que Gramme Chef vous rapporte
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#4d6952] md:text-lg">
            Un chef à domicile ne perd pas d&apos;argent en cuisine. Il en perd dans un prix fixé au jugé, un devis
            envoyé trop tard, un acompte qu&apos;on n&apos;a pas osé demander et une facture qu&apos;on oublie de
            relancer. C&apos;est là que l&apos;outil travaille.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gains.map((g) => (
              <li key={g.titre} className="rounded-2xl border border-[#dcead2] bg-white p-6 shadow-sm">
                <p className="text-3xl font-black text-[#6e9f55]">{g.chiffre}</p>
                <h3 className="mt-2 text-lg font-bold text-[#27421f]">{g.titre}</h3>
                <p className="mt-2 leading-relaxed text-[#4d6952]">{g.texte}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* L'écran de la prestation. */}
        <section className="mt-12 md:mt-16" aria-labelledby="prestation">
          <h2 id="prestation" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Un dîner pour huit, chiffré plat par plat
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#4d6952] md:text-lg">
            Velouté de potimarron, suprême de volaille avec sa purée et son jus, tarte fine aux pommes : 61,60 € de
            matières pour une prestation de 520 €. Il reste 438,40 € après les courses et le trajet, soit 51,58 € par
            heure de travail. Claire ne mange pas de fruits à coque, Marc pas de lactose : vous le voyez sur chaque
            plat, avant de cuisiner.
          </p>
          <figure className="mt-6 overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-[0_20px_70px_rgba(58,92,39,0.10)]">
            <Image
              src="/images/app/gramme-chef-menu.png"
              alt="Aperçu de Gramme Chef : le dîner des Laurent pour huit convives, velouté, suprême de volaille purée jus, tarte fine, coût par convive, allergènes des invités et liste de courses"
              width={2880}
              height={1800}
              className="h-auto w-full"
            />
          </figure>
          <p className="mt-3 text-sm text-[#6e9f55]">
            Aperçu de l&apos;écran prévu. La méthode de calcul est détaillée dans{" "}
            <Link href="/guides/prix-menu-chef-a-domicile" className="font-semibold underline-offset-2 hover:underline">
              notre guide du prix d&apos;un menu de chef à domicile
            </Link>
            .
          </p>
        </section>

        {/* Toute la gestion : le « mini-ERP », dit avec les mots d'un chef. */}
        <section id="gestion" className="mt-12 scroll-mt-24 md:mt-16" aria-labelledby="gestion-titre">
          <h2 id="gestion-titre" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Toute votre gestion, du premier appel à la facture payée
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#4d6952] md:text-lg">
            De la demande qui arrive de votre site jusqu&apos;à la facture payée, chaque prestation suit le même fil,
            sans rien ressaisir, et chaque chiffre vient de vos vraies recettes et de vos vrais prix.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gestion.map((f) => (
              <li key={f.titre} className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm">
                <h3 className="font-bold text-[#27421f]">{f.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{f.texte}</p>
              </li>
            ))}
          </ul>
          <figure className="mt-8 overflow-hidden rounded-3xl border border-[#dcead2] bg-white shadow-[0_20px_70px_rgba(58,92,39,0.10)]">
            <Image
              src="/images/app/gramme-chef-prestations.png"
              alt="Aperçu du tableau de bord de Gramme Chef : chiffre d'affaires du mois, devis en attente, sommes à encaisser, prochaines prestations et factures à relancer"
              width={2880}
              height={1800}
              className="h-auto w-full"
            />
          </figure>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#6e9f55]">
            Et un coup d&apos;avance : la facturation électronique deviendra obligatoire en émission pour les petites
            entreprises, micro-entreprises comprises, à partir du 1er septembre 2027. Gramme Chef est construit en le
            sachant.
          </p>
        </section>

        {/* Les offres (décidées le 24/09/2026, voir `src/content/gramme-chef-offres.ts`). */}
        <section id="tarifs-chef" className="mt-12 scroll-mt-24 md:mt-16" aria-labelledby="tarifs-chef-titre">
          <h2 id="tarifs-chef-titre" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Les tarifs de Gramme Chef
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#4d6952] md:text-lg">
            Commencez gratuitement, et payez quand l&apos;outil vous fait gagner du temps et de l&apos;argent. Sans
            engagement, sans installation. Au lancement, en janvier 2027.
          </p>
          <ul className="mt-6 grid gap-4 lg:grid-cols-3">
            {OFFRES_CHEF.map((o) => (
              <li
                key={o.id}
                className={`flex flex-col rounded-3xl p-6 sm:p-7 ${
                  o.recommandee ? "bg-[#44624b] text-white" : "border border-[#dcead2] bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-xl font-bold ${o.recommandee ? "text-white" : "text-[#27421f]"}`}>{o.nom}</h3>
                  {o.recommandee && (
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-[#d3e8c4]">
                      Recommandée
                    </span>
                  )}
                </div>
                <p className={`mt-1 text-sm ${o.recommandee ? "text-[#e3efdb]" : "text-[#4d6952]"}`}>{o.pour}</p>
                <p className="mt-5">
                  <span className={`text-4xl font-black ${o.recommandee ? "text-white" : "text-[#27421f]"}`}>{o.prix}</span>{" "}
                  <span className={`text-sm font-semibold ${o.recommandee ? "text-[#d3e8c4]" : "text-[#6e9f55]"}`}>{o.unite}</span>
                </p>
                <p className={`mt-1 text-xs ${o.recommandee ? "text-[#d3e8c4]" : "text-[#6e9f55]"}`}>{o.detail}</p>
                <ul className={`mt-5 grid gap-2 text-sm leading-relaxed ${o.recommandee ? "text-[#f1f7ec]" : "text-[#4d6952]"}`}>
                  {o.contenu.map((ligne) => (
                    <li key={ligne} className="flex gap-2">
                      <span aria-hidden="true" className={o.recommandee ? "text-[#a8cf8c]" : "text-[#6e9f55]"}>
                        ✓
                      </span>
                      <span>{ligne}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#4d6952]">{ESSAI_CHEF}</p>
          <div className="mt-6 rounded-2xl border border-[#a8cf8c] bg-[#f6fbf2] p-5 sm:p-6">
            <p className="font-bold text-[#27421f]">Prix fondateur : {PRIX_FONDATEUR.prix}, garanti à vie</p>
            <p className="mt-1 leading-relaxed text-[#4d6952]">
              Pour {PRIX_FONDATEUR.pour}, tant que l&apos;abonnement n&apos;est pas interrompu.{" "}
              <a href="#inscription" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                Réserver ma place
              </a>
            </p>
          </div>
        </section>

        {/* La bêta. */}
        <section
          className="mt-12 rounded-3xl border border-[#dcead2] bg-[#f6fbf2] p-6 sm:p-8 md:mt-16 md:p-10"
          aria-labelledby="beta"
        >
          <h2 id="beta" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            La bêta : quelques chefs, avant tout le monde
          </h2>
          <ul className="mt-5 grid gap-3 text-[#4d6952] md:text-lg">
            <li>
              <strong className="text-[#27421f]">Accès avant janvier</strong>, dès que l&apos;espace chef est utilisable.
            </li>
            <li>
              <strong className="text-[#27421f]">Gratuit pendant plusieurs mois</strong>, sans carte bancaire.
            </li>
            <li>
              <strong className="text-[#27421f]">Un échange direct avec l&apos;équipe</strong> : un chef pâtissier en
              exercice et le développeur de l&apos;outil, qui construisent avec vos retours.
            </li>
            <li>
              <strong className="text-[#27421f]">Le prix fondateur ensuite</strong> : l&apos;offre Chef à 12 € TTC par
              mois, garantie à vie.
            </li>
            <li>
              <strong className="text-[#27421f]">Places limitées</strong>, pour pouvoir accompagner chaque chef.
            </li>
          </ul>
        </section>

        <section id="inscription" className="mt-12 scroll-mt-24 md:mt-16" aria-labelledby="inscription-titre">
          <h2 id="inscription-titre" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Candidater à la bêta ou rejoindre la liste d&apos;attente
          </h2>
          <div className="mt-6 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-8">
            <FormulaireGrammeChef />
          </div>
        </section>

        <section className="mt-12 md:mt-16" aria-labelledby="questions">
          <h2 id="questions" className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Questions fréquentes
          </h2>
          <dl className="mt-6 grid gap-4">
            {faq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm sm:p-6">
                <dt className="font-bold text-[#27421f]">{item.q}</dt>
                <dd className="mt-2 leading-relaxed text-[#4d6952]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <RelatedLinks
          links={[
            { href: "/logiciel-chef-a-domicile", label: "Le logiciel du chef à domicile" },
            { href: "/guides/prix-menu-chef-a-domicile", label: "Calculer le prix d'un menu de chef à domicile" },
            { href: "/logiciel-cout-de-revient", label: "Le coût de revient, calculé une fois pour toutes" },
          ]}
        />
      </main>
    </>
  );
}
