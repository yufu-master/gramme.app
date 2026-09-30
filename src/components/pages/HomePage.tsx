"use client";

import Image from "next/image";
import { NeDuTerrain } from "@/components/landing/NeDuTerrain";
import { VisiteInteractive } from "@/components/landing/VisiteInteractive";
import { FilmGramme } from "@/components/landing/FilmGramme";
import { SurInstagram } from "@/components/landing/SurInstagram";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { nombreModules } from "@/content/features";
import { BillingPeriodToggle } from "@/components/pricing/BillingPeriodToggle";
import { formatEuro, pricingPlans, type BillingPeriod } from "@/lib/pricing";
import { trackEvent } from "@/lib/analytics";
import { publishedArticles } from "@/content/articles";
import { publishedGuides } from "@/content/guides";
import { formatGuideDate } from "@/lib/guides";
import { AnimatedGroup, AnimatedItem } from "@/components/motion-primitives/animated-group";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { InView } from "@/components/motion-primitives/in-view";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

/** Écrit un prix pendant qu'il glisse, avec le nombre de décimales de sa valeur d'arrivée. */
function formatPrixAnime(cible: number, chiffres?: number) {
  const d = chiffres ?? (Number.isInteger(cible) ? 0 : 2);
  const p = 10 ** d;
  return (n: number) => formatEuro(Math.round(n * p) / p, d);
}

const trustItems = [
  { label: "Digitalisation des recettes & fiches techniques", icon: BookIcon },
  { label: "Scan de factures & mercuriale", icon: ScanIcon },
  { label: "Calculatrice de coût de revient", icon: CalculatorIcon },
  { label: "Marges en temps réel", icon: PulseIcon },
  { label: "Alertes de prix", icon: BellIcon },
  { label: "Gestion de stocks", icon: BoxIcon },
  { label: "Gestion & planning de production", icon: CalendarIcon },
  { label: "Tout est connecté", icon: LinkIcon },
];

const importSteps = [
  {
    title: "Vous photographiez",
    icon: CameraIcon,
    text: "Une photo prise au labo, depuis le téléphone. Un PDF, un scan ou un fichier Excel font tout aussi bien l'affaire.",
  },
  {
    title: "Gramme comprend",
    icon: BrainIcon,
    text: "Écriture manuscrite, abréviations de métier, colonnes en désordre, ratures : la lecture s'adapte à votre façon de noter, pas l'inverse.",
  },
  {
    title: "La fiche est prête",
    icon: BookIcon,
    text: "Recette créée, sous-recettes rattachées, unités converties, coût de revient et marge à jour dès le premier prix fournisseur.",
  },
];

const plans = pricingPlans;

export default function HomePage() {
  const [period, setPeriod] = useState<BillingPeriod>("yearly");
  const isYearly = period === "yearly";

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const timer = window.setTimeout(() => scrollToSection(hash), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <main>
        {/* Le héros reprend la DA des posts Instagram (27/09/2026) : le plâtre
            sauge, la balance en laiton, le beurre face au poids « gr ». Le titre
            se pose sur le plâtre nu, en haut, comme sur les posts ; la balance
            est dessous et se fond dans le fond par un masque, sans raccord
            visible. Texte foncé : le blanc des posts ne se lit pas assez en
            petit sur le plâtre clair. */}
        <section
          className="relative isolate flex w-full flex-col items-center overflow-hidden bg-gradient-to-b from-[#bfc9ac] via-[#c3ccaf] to-[#d6d8c9]"
          aria-label="Présentation Gramme"
        >
          <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-4 pt-28 text-center sm:px-6 sm:pt-32 lg:pt-36">
            <p className="gr-entree mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#27421f]/80">
              <SparkIcon className="size-4" />
              Gramme : logiciel boulangerie &amp; pâtisserie
            </p>
            <h1
              style={{ "--gr-delai": "90ms" } as React.CSSProperties}
              className="gr-entree text-[2.5rem] font-black leading-[1.04] tracking-[-0.03em] text-[#1a2e14] sm:text-6xl lg:text-7xl">
              Pilotez votre marge
              <br />
              au{" "}
              {/* Le pinceau se trace et découvre le mot, comme sur les posts. */}
              <span
                style={{ "--gr-delai": "620ms" } as React.CSSProperties}
                className="gr-pinceau relative inline-block px-2 text-white"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  className="absolute inset-x-[-0.12em] inset-y-[0.06em] -z-10 h-[92%] w-[calc(100%+0.24em)] -rotate-1 text-[#7e8f50]"
                >
                  <path
                    fill="currentColor"
                    d="M6 22C60 10 150 6 240 8c60 1 110 4 150 10 6 1 8 8 6 16-3 14 3 26 2 40-1 9-6 14-14 15-70 6-150 7-230 5-50-1-100-3-140-9-8-1-12-8-11-16 2-12-4-24-2-36 0-5 3-10 9-11Z"
                  />
                </svg>
                gramme
              </span>{" "}
              près.
            </h1>
            <p
              style={{ "--gr-delai": "220ms" } as React.CSSProperties}
              className="gr-entree mt-5 max-w-xl text-base text-[#27421f] sm:text-lg"
            >
              Le logiciel de gestion et de production pour boulangers-pâtissiers : recettes digitalisées, fiches
              techniques, alertes de prix, gestion de stocks, planning de production et marges en temps réel.
            </p>
            <div
              style={{ "--gr-delai": "320ms" } as React.CSSProperties}
              className="gr-entree mt-7 flex flex-wrap justify-center gap-3"
            >
              {/* Le geste le plus visible de la page était un défilement vers
                  les tarifs, et la conversion reposait sur le bouton
                  secondaire (relevé du 17/09/2026). Le bouton plein mène
                  désormais à la démonstration, et il dit ce qu'on y gagne. */}
              <Link
                href="/demo"
                onClick={() => trackEvent("cta_demo_click", { source: "hero" })}
                className="rounded-xl bg-[#1a2e14] px-5 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(26,46,20,0.25)] transition hover:-translate-y-0.5 hover:bg-[#264021] hover:shadow-[0_14px_36px_rgba(26,46,20,0.32)]"
              >
                Voir une marge se calculer en direct
              </Link>
              <button
                type="button"
                onClick={() => scrollToSection("film")}
                className="inline-flex items-center gap-2 rounded-xl border border-[#1a2e14]/25 bg-white/35 px-5 py-3 font-semibold text-[#1a2e14] transition hover:bg-white/55"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor">
                  <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
                </svg>
                Le film, 48&nbsp;s
              </button>
            </div>
          </div>
          <div
            className="gr-entree relative -mt-10 w-[150%] max-w-none sm:-mt-16 sm:w-full sm:max-w-[72rem] lg:-mt-24"
            style={{
              "--gr-delai": "380ms",
              WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 52%, #000 58%, transparent 100%)",
              maskImage: "radial-gradient(ellipse 50% 50% at 50% 52%, #000 58%, transparent 100%)",
            } as React.CSSProperties}
          >
            <Image
              src="/images/hero-balance-beurre.jpg"
              alt="Balance en laiton en équilibre sur une sphère : trois morceaux de beurre d'un côté, le poids « gr » de Gramme de l'autre, sur un plâtre vert sauge fariné"
              width={2400}
              height={1339}
              priority
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Les huit modules défilent sur une ligne (29/09/2026). En grille, ils
            prenaient deux lignes sur ordinateur et huit sur téléphone, juste
            sous le héros. Le défilement ralentit au survol ; sans mouvement
            (réglage du système), la liste s'affiche à plat. */}
        <section className="border-y border-[var(--border)] bg-white/70" aria-label="Ce que fait Gramme">
          <div
            className="relative mx-auto w-full max-w-6xl py-4"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
              maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
            }}
          >
            <InfiniteSlider gap={40} duree={55} vitesseSurvol={0.3}>
              {trustItems.map(({ label, icon: Icon }) => (
                <p
                  key={label}
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-[var(--muted-foreground)]"
                >
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#a8cf8c]/20 text-[#355329]">
                    <Icon className="size-4" />
                  </span>
                  {label}
                </p>
              ))}
            </InfiniteSlider>
          </div>
        </section>

        {/* Le film de 48 s (27/09/2026), juste sous le héros : il dit en une
            minute ce que la page détaille ensuite. */}
        <FilmGramme />

        {/* Annonce de Gramme Chef (24/09/2026) : un bandeau, pas une section.
            L'accueil a été raccourci le 19/09 ; une offre qui n'existe pas
            encore n'a pas à y prendre plus d'une ligne. */}
        <section className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-5" aria-label="Nouveau : Gramme Chef">
          <Link
            href="/gramme-chef"
            className="flex flex-col gap-2 rounded-2xl border border-[#dcead2] bg-[#f6fbf2] px-5 py-4 transition hover:border-[#a8cf8c] sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="flex flex-col gap-2 text-sm text-[#355329] sm:flex-row sm:items-center sm:gap-4">
              <Image
                src="/logos/gramme-chef-logo.png"
                alt="Gramme Chef"
                width={1600}
                height={249}
                sizes="140px"
                className="h-5 w-auto shrink-0 self-start sm:self-center"
              />
              <span>
              <strong className="font-bold text-[#27421f]">Nouveau :</strong> le logiciel des chefs à
              domicile. Lancement en janvier 2027, bêta gratuite ouverte à quelques chefs.
              </span>
            </span>
            <span className="text-sm font-semibold text-[#355329]">Devenir bêta-testeur →</span>
          </Link>
        </section>

        {/*
          La visite remplace deux blocs qu'elle montre mieux qu'eux : l'accordéon
          des fonctionnalités et « Sur ordinateur, tablette ou téléphone ».
          Trois autres ont quitté l'accueil le 19/09/2026, qui devenait trop
          long : les intégrations (annoncer ce qu'on n'a pas encore), la
          confidentialité en quatre cartes (une phrase dans la FAQ suffit), et
          les liens utiles, qui doublaient le pied de page.
        */}
        <section id="visite" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16" aria-labelledby="visite-title">
          <h2 id="visite-title" className="gr-titre text-3xl md:text-4xl">
            D&apos;une facture photographiée à la marge de chaque recette
          </h2>
          <div className="mt-6">
            <VisiteInteractive />
          </div>
          <p className="mt-8 text-center text-sm text-[var(--muted-foreground)]">
            {nombreModules.charAt(0).toUpperCase() + nombreModules.slice(1)} modules reliés entre eux, de la fiche
            technique au prévisionnel.{" "}
            <Link href="/fonctionnalites" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              Voir toutes les fonctionnalités
            </Link>
            {" · "}
            <Link href="/logiciel-patisserie" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              la page des laboratoires de pâtisserie
            </Link>
          </p>
        </section>

        <NeDuTerrain />

        <section
          id="import-recettes"
          className="gr-platre relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
          aria-labelledby="import-recettes-title"
        >

          <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-5">
            <InView className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#355329]">
                <CameraIcon className="size-4" />
                Import intelligent
              </p>
              <h2 id="import-recettes-title" className="mt-5 text-[2rem] font-black leading-[1.08] tracking-tight text-[#1a2e14] sm:text-[2.75rem] lg:text-5xl">
                Importez vos recettes
                <br className="hidden sm:block" />{" "}
                <span className="relative inline-block px-1 text-[#4a7a35]">
                  d&apos;une simple photo
                  <span aria-hidden className="absolute -bottom-1 left-0 w-full sm:-bottom-2">
                    <svg viewBox="0 0 520 34" className="h-3 w-full sm:h-4" preserveAspectRatio="none">
                      <path d="M8 18C90 27 173 30 260 30C347 30 430 27 512 18" fill="none" stroke="#a8cf8c" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
                .
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
                Un cahier jauni, une fiche couverte de farine, une page tachée de graisse, ou l&apos;immense tableau Excel
                bricolé depuis dix ans : vous photographiez, c&apos;est importé. Gramme reconstruit la fiche technique,
                sépare les sous-recettes et calcule coût matière, pourcentage de perte et marge.
              </p>
            </InView>

            <div className="mt-12 grid items-center gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12">
              <InView className="order-1 lg:col-span-7">
              <figure className="relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#dcead2] shadow-[0_24px_70px_rgba(34,60,23,0.22)]">
                  <Image
                    src="/images/import-recettes-photo.jpg"
                    alt="Boulanger photographiant ses fiches recettes manuscrites pour les importer dans le logiciel Gramme"
                    fill
                    sizes="(max-width: 1024px) 92vw, 640px"
                    className="object-cover object-center"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#1a2e14]/45 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 hidden max-w-xs rounded-2xl border border-white/60 bg-white/92 p-4 shadow-lg backdrop-blur-sm sm:block">
                    <ImportResultCard />
                  </div>
                </div>
                <div className="relative z-10 mx-3 -mt-6 rounded-2xl border border-[#dcead2] bg-white p-4 shadow-lg sm:hidden">
                  <ImportResultCard />
                </div>
                <figcaption className="mt-3 text-xs text-[var(--muted-foreground)]">
                  Manuscrit, abîmé, raturé : la photo suffit. Le classeur reste au labo, la fiche technique part dans Gramme.
                </figcaption>
              </figure>
              </InView>

              <AnimatedGroup as="ol" className="order-2 space-y-4 lg:col-span-5">
                {importSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <AnimatedItem key={step.title} className="flex gap-4 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#a8cf8c]/25 text-[#355329]">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6e9f55]">Étape {index + 1}</p>
                        <h3 className="mt-1 text-lg font-bold text-[#1a2e14]">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]">{step.text}</p>
                      </div>
                    </AnimatedItem>
                  );
                })}
              </AnimatedGroup>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/fonctionnalites/import-recettes-photo"
                onClick={() => trackEvent("feature_detail_click", { feature: "import-recettes-photo", source: "home_hero_import" })}
                className="rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition hover:bg-[#355329]"
              >
                Comment fonctionne l&apos;import
              </Link>
              <Link
                href="/demo"
                onClick={() => trackEvent("cta_demo_click", { source: "home_import_recettes" })}
                className="rounded-xl border border-[#d8e6cf] bg-white px-5 py-3 font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
              >
                Faire importer mes recettes
              </Link>
            </div>
          </div>
        </section>

        {/* Votre métier — placée ici, et pas plus haut : on vient de montrer
            ce que l'outil FAIT, c'est le moment de dire à QUI il parle. Avant
            le 06/09/2026, le corps de l'accueil ne nommait qu'un seul métier,
            la pâtisserie, et ne menait à aucune des quatre pages. */}
        <section
          id="metiers"
          className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16"
          aria-labelledby="metiers-title"
        >
          <div className="max-w-3xl">
            <h2 id="metiers-title" className="gr-titre text-3xl md:text-4xl">
              Le même outil, réglé sur ce que votre atelier compte.
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Un boulanger règle des quantités et surveille une farine qui bouge, un pâtissier des
              sous-recettes qui s&apos;emboîtent, un chocolatier la conservation d&apos;une ganache,
              un glacier l&apos;équilibre d&apos;un mix, un chef à domicile le prix de son menu par convive. Les fiches techniques, la mercuriale et le
              coût de revient sont les mêmes ; ce qui change, ce sont les indicateurs que Gramme
              affiche, et il n&apos;affiche que les vôtres.
            </p>
          </div>
          <AnimatedGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                href: "/logiciel-boulangerie",
                nom: "Boulangerie",
                texte: "Le prix d'achat remonte jusqu'à la marge de chaque pain, et la fournée de demain se décide sur autre chose que la mémoire.",
              },
              {
                href: "/logiciel-patisserie",
                nom: "Pâtisserie",
                texte: "Le coût descend jusqu'à la part vendue, pertes de cuisson et de parage comprises, à travers les sous-recettes.",
              },
              {
                href: "/logiciel-chocolaterie",
                nom: "Chocolaterie",
                texte: "Le coût au bonbon emballage compris, l'activité de l'eau d'une ganache, l'étiquette à la taille de la boîte.",
              },
              {
                href: "/logiciel-glacerie",
                nom: "Glacerie",
                texte: "Le pouvoir sucrant et anticryoscopique d'un mix, la courbe de congélation, et la température à laquelle il redevient boulable.",
              },
              {
                href: "/logiciel-chef-a-domicile",
                nom: "Chef à domicile · nouveau",
                texte: "Gramme Chef chiffre le menu par convive, prépare le devis et la liste de courses. Lancement en janvier 2027, bêta ouverte à quelques chefs.",
              },
            ].map((m) => (
              <AnimatedItem key={m.href}>
                <Link
                  href={m.href}
                  className="flex h-full flex-col rounded-2xl border border-[#dcead2] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#a8cf8c] hover:bg-[#f6fbf2] hover:shadow-[0_16px_40px_rgba(34,60,23,0.10)]"
                >
                  <span className="text-lg font-bold text-[#27421f]">{m.nom}</span>
                  <span className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{m.texte}</span>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
          <p className="mt-6 text-sm">
            <Link href="/metiers" className="font-semibold text-[#355329] hover:underline">
              Ce que les cinq métiers ont en commun, et ce qui les sépare
            </Link>
          </p>
        </section>

        <section id="tarifs" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="gr-titre text-3xl md:text-4xl">Les tarifs</h2>
              <p className="mt-3 max-w-xl text-[var(--muted-foreground)]">
                Sans engagement en mensuel. Annuel avec 2 mois offerts. Installation accompagnée une seule fois, à partir de 300 € HT : forfait ferme de 300 € HT pour une entreprise en cours de création.
              </p>
            </div>
            <Link href="/tarifs" className="text-sm font-semibold text-[#355329] underline-offset-2 hover:underline">
              Voir le détail des offres
            </Link>
          </div>
          <div className="mt-6 flex justify-center sm:mt-8">
            <BillingPeriodToggle period={period} onChange={setPeriod} />
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.id}
                className={`rounded-3xl border p-6 ${
                  plan.highlight
                    ? "relative border-[#7ca764] bg-[#264021] text-white shadow-[0_20px_60px_rgba(34,60,23,0.35)]"
                    : "border-[var(--border)] bg-white"
                }`}
              >
                {plan.highlight && (
                  <BorderTrail size={110} duration={9} className="bg-gradient-to-r from-transparent via-[#d7efca] to-transparent opacity-80" />
                )}
                {plan.highlight && (
                  <p className="absolute -top-3 left-6 rounded-full bg-[#a8cf8c] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#264021]">
                    Tout compris, hygiène et étiquetage inclus
                  </p>
                )}
                <p className={`text-sm font-semibold uppercase tracking-wide ${plan.highlight ? "text-[#d7efca]" : "text-[#355329]"}`}>
                  {plan.name}
                </p>
                <p className="mt-4 tabular-nums text-4xl font-black">
                  {/* Le prix glisse d'une période à l'autre au lieu de sauter. */}
                  <AnimatedNumber
                    value={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    format={formatPrixAnime(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                  />
                  <span className={`ml-1 text-base font-semibold ${plan.highlight ? "text-white/80" : "text-[var(--muted-foreground)]"}`}>
                    {isYearly ? "HT / an" : "HT / mois"}
                  </span>
                </p>
                <p className={`mt-2 text-sm tabular-nums ${plan.highlight ? "text-white/85" : "text-[var(--muted-foreground)]"}`}>
                  {isYearly ? (
                    <>
                      soit{" "}
                      <AnimatedNumber value={plan.yearlyMonthlyEquivalent} format={formatPrixAnime(plan.yearlyMonthlyEquivalent, 2)} />{" "}
                      HT / mois ·{" "}
                      <span className={`font-semibold ${plan.highlight ? "text-[#a8cf8c]" : "text-[#355329]"}`}>
                        économisez {formatEuro(plan.yearlySavings)}
                      </span>
                    </>
                  ) : (
                    <>Sans engagement, résiliable à tout moment</>
                  )}
                </p>
                <p className={`mt-3 text-sm ${plan.highlight ? "text-white/85" : "text-[var(--muted-foreground)]"}`}>{plan.tagline}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {plan.features.map((item) => (
                    <li
                      key={item.label}
                      className={`flex items-start gap-2 ${
                        item.emphasis
                          ? plan.highlight
                            ? "font-bold text-white"
                            : "font-bold text-[#27421f]"
                          : plan.highlight
                            ? "text-white/95"
                            : "text-[var(--muted-foreground)]"
                      }`}
                    >
                      <CheckIcon className={`mt-0.5 size-4 shrink-0 ${plan.highlight ? "text-[#a8cf8c]" : "text-[#6e9f55]"}`} />
                      {item.label}
                    </li>
                  ))}
                </ul>
                {/* Ces boutons menaient à /tarifs, où le visiteur retrouvait les
                    mêmes deux cartes et les mêmes prix : un clic qui ne faisait
                    rien avancer, placé là où il est le plus décidé. Le lien vers
                    le détail des tarifs reste au-dessus des cartes. */}
                <Link
                  href="/demo"
                  onClick={() => trackEvent("cta_demo_click", { source: `home_tarif_${plan.id}_${period}` })}
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 font-semibold ${
                    plan.highlight ? "bg-[#a8cf8c] text-[#264021]" : "bg-[#264021] text-white"
                  }`}
                >
                  Voir {plan.name} en démonstration
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* L'appel final (29/09/2026) : sur le plâtre et avec le poids « gr »,
            comme les posts, au lieu d'un aplat vert. L'ancien titre opposait
            « méthode artisanale » et « gestion performante » : on ne dit pas à
            un artisan que sa méthode est le problème. */}
        <section id="demo" className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-5 sm:pb-16">
          <div className="gr-platre relative isolate grid overflow-hidden rounded-3xl sm:grid-cols-[1.25fr_1fr]">
            <div className="relative z-10 p-6 sm:p-10">
              <h2 className="gr-titre text-3xl md:text-[2.6rem]">
                Votre prochaine fiche technique, chiffrée au{" "}
                <span className="relative inline-block px-1.5 text-white">
                  <svg
                    aria-hidden
                    viewBox="0 0 400 100"
                    preserveAspectRatio="none"
                    className="absolute inset-x-[-0.1em] inset-y-[0.08em] -z-10 h-[90%] w-[calc(100%+0.2em)] -rotate-1 text-[#7e8f50]"
                  >
                    <path
                      fill="currentColor"
                      d="M6 22C60 10 150 6 240 8c60 1 110 4 150 10 6 1 8 8 6 16-3 14 3 26 2 40-1 9-6 14-14 15-70 6-150 7-230 5-50-1-100-3-140-9-8-1-12-8-11-16 2-12-4-24-2-36 0-5 3-10 9-11Z"
                    />
                  </svg>
                  gramme
                </span>{" "}
                près.
              </h2>
              <p className="mt-4 max-w-xl text-[#27421f]">
                Une heure en visio, sur un atelier complet : une facture scannée devant vous, et la marge
                d&apos;une recette qui se recalcule sans que personne ne saisisse rien.
              </p>
              <Link
                href="/demo"
                onClick={() => trackEvent("cta_demo_click", { source: "home_cta" })}
                className="mt-7 inline-flex rounded-xl bg-[#1a2e14] px-5 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(26,46,20,0.25)] transition hover:-translate-y-0.5 hover:bg-[#264021]"
              >
                Réserver ma démonstration
              </Link>
            </div>
            <div className="relative min-h-56 sm:min-h-full">
              <Image
                src="/images/instagram/poids-main.jpg"
                alt="Une main farinée pose le poids « gr » de Gramme sur le plâtre vert sauge"
                fill
                sizes="(min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16"
          aria-labelledby="lectures-title"
        >
          <div className="max-w-3xl">
            <h2 id="lectures-title" className="gr-titre text-3xl md:text-4xl">
              Ce qu&apos;on écrit sur le métier.
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Calculer un coût de revient, fixer un coefficient, tenir une fiche technique, afficher
              les allergènes en vente à la coupe : les méthodes du métier, écrites avec des exemples
              chiffrés que vous pouvez refaire à la calculatrice. Rien à laisser d&apos;adresse pour
              les lire.
            </p>
          </div>

          <AnimatedGroup className="mt-8 grid gap-4 md:grid-cols-3">
            {publishedGuides.slice(0, 3).map((g) => (
              <AnimatedItem key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-[#dcead2] bg-white p-5 transition hover:border-[#a8cf8c] hover:bg-[#f6fbf2]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6e9f55]">
                    Guide · {formatGuideDate(g.publishedAt)}
                  </span>
                  <span className="mt-1 text-base font-bold text-[#27421f]">{g.title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {g.description}
                  </span>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedGroup>

          <AnimatedGroup className="mt-4 grid gap-4 md:grid-cols-2">
            {publishedArticles.slice(0, 2).map((a) => (
              <AnimatedItem key={a.slug}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-[#dcead2] bg-white p-5 transition hover:border-[#a8cf8c] hover:bg-[#f6fbf2]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6e9f55]">
                    Article · {formatGuideDate(a.publishedAt)}
                  </span>
                  <span className="mt-1 text-base font-bold text-[#27421f]">{a.title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {a.description}
                  </span>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedGroup>

          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/guides" className="font-semibold text-[#355329] hover:underline">
              Tous les guides
            </Link>
            <Link href="/articles" className="font-semibold text-[#355329] hover:underline">
              Tous les articles
            </Link>
            <Link href="/comparatif" className="font-semibold text-[#355329] hover:underline">
              Gramme face aux autres logiciels du métier
            </Link>
          </p>
        </section>

        <SurInstagram />

        <section id="faq" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-5" aria-labelledby="faq-title">
          <h2 id="faq-title" className="gr-titre text-3xl md:text-4xl">Questions fréquentes</h2>
          <p className="mt-3 max-w-3xl text-[var(--muted-foreground)]">
            Tout savoir sur le logiciel de gestion Gramme pour les boulangeries, les pâtisseries,
            les chocolateries et les glaceries artisanales. Vos recettes, vos factures et vos marges
            restent votre propriété : aucune revente, aucun partage entre ateliers, hébergement en
            Europe (
            <Link href="/securite" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              sécurité et confidentialité
            </Link>
            ).
          </p>
          <FaqAccordion />
          {/* La page FAQ compte soixante-dix-sept questions et l'accueil n'y
              menait pas : onze réponses ici, et rien pour dire qu'il y en a
              soixante-six de plus. */}
          <p className="mt-6 text-sm">
            <Link href="/faq" className="font-semibold text-[#355329] hover:underline">
              Les 77 questions, des coûts à la réglementation
            </Link>
          </p>
        </section>

      </main>
    </>
  );
}

function ImportResultCard() {
  return (
    <>
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6e9f55]">
        <SparkIcon className="size-3.5" />
        Fiche reconstituée
      </p>
      <p className="mt-1.5 text-sm font-bold text-[#1a2e14]">Croissant au beurre : 60 pièces</p>
      <ul className="mt-2 flex flex-wrap gap-1.5 text-[11px] font-semibold">
        <li className="rounded-full bg-[#a8cf8c]/30 px-2 py-0.5 text-[#355329]">Détrempe · sous-recette</li>
        <li className="rounded-full bg-[#a8cf8c]/30 px-2 py-0.5 text-[#355329]">Tourage · 8 ingrédients</li>
        <li className="rounded-full bg-[#264021] px-2 py-0.5 text-white">Perte 4 % · marge 71 %</li>
      </ul>
    </>
  );
}

type IconProps = { className?: string };

function CheckIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M4 10.5 8 14l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function SparkIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="m10 2 1.6 4.4L16 8l-4.4 1.6L10 14l-1.6-4.4L4 8l4.4-1.6L10 2Z" stroke="currentColor" strokeWidth="1.5" /></svg>;
}
function ScanIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M6 3H3v3M14 3h3v3M6 17H3v-3M17 14v3h-3M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
function PulseIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M2.5 10h3l2-3.5 3 7 2.2-3.5h4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function CalculatorIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><rect x="4" y="2.5" width="12" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M7 6h6M7 10h2m2 0h2m-4 3.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
function BellIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M6 8.5a4 4 0 0 1 8 0c0 3 1 4 1.5 4.5h-11C5 12.5 6 11.5 6 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M8.5 15.5a1.6 1.6 0 0 0 3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
function BoxIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M10 2.5 17 6v8l-7 3.5L3 14V6l7-3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M3 6l7 3.5L17 6M10 9.5v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>;
}
function CalendarIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><rect x="3" y="4.5" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M3 8.5h14M7 2.5v3m6-3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
function LinkIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M8.5 11.5a3 3 0 0 0 4.2 0l2.3-2.3a3 3 0 0 0-4.2-4.2l-1 1M11.5 8.5a3 3 0 0 0-4.2 0L5 10.8a3 3 0 0 0 4.2 4.2l1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function BookIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M4 3.5h9a3 3 0 0 1 3 3V16H7a3 3 0 0 0-3 3V3.5Z" stroke="currentColor" strokeWidth="1.5" /><path d="M7 16h9" stroke="currentColor" strokeWidth="1.5" /></svg>;
}
function CameraIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M2.5 6.5h3l1.2-2h6.6l1.2 2h3v9h-15v-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>;
}
function BrainIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M10 4.5v11M10 4.5a2 2 0 0 0-3.8-.9A2.2 2.2 0 0 0 4 6.8a2.2 2.2 0 0 0-.4 3.5A2.3 2.3 0 0 0 6 14.5a2 2 0 0 0 4 .6M10 4.5a2 2 0 0 1 3.8-.9A2.2 2.2 0 0 1 16 6.8a2.2 2.2 0 0 1 .4 3.5A2.3 2.3 0 0 1 14 14.5a2 2 0 0 1-4 .6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
