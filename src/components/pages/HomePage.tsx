"use client";

import Image from "next/image";
import { CadreAppareil } from "@/components/produit/CadreAppareil";
import { NeDuTerrain } from "@/components/landing/NeDuTerrain";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { FeatureAccordion } from "@/components/features/FeatureAccordion";
import { IntegrationLogo } from "@/components/integrations/IntegrationCard";
import { BillingPeriodToggle } from "@/components/pricing/BillingPeriodToggle";
import { HOME_INTEGRATION_PREVIEWS, INTEGRATIONS } from "@/lib/integrations";
import { formatEuro, pricingPlans, type BillingPeriod } from "@/lib/pricing";
import { trackEvent } from "@/lib/analytics";

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
        <section
          className="relative isolate flex min-h-[34rem] w-full items-end overflow-hidden bg-[#1a2e14] sm:max-h-[44rem] sm:min-h-[78svh] sm:items-center"
          aria-label="Présentation Gramme"
        >
          <Image
            src="/images/hero-lifestyle.jpg"
            alt="Logiciel gestion boulangerie Gramme sur smartphone : recettes, stock et mercuriale"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[85%_center] sm:object-[80%_center] lg:object-[75%_center] xl:object-[70%_center]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-[#1a2e14] via-[#1a2e14]/88 to-transparent sm:via-[#1a2e14]/75 lg:w-[58%] lg:via-[#1a2e14]/80"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#1a2e14]/75 via-transparent to-[#1a2e14]/25 sm:from-transparent sm:to-[#1a2e14]/20"
          />
          <div className="relative z-10 w-full max-w-[34rem] self-end px-4 pb-12 pt-24 sm:self-center sm:px-6 sm:pb-14 sm:pt-24 md:max-w-[36rem] md:px-8 lg:max-w-[38rem] lg:px-10 xl:px-14">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#cfe8bf]">
              <SparkIcon className="size-4" />
              Gramme : logiciel boulangerie &amp; pâtisserie
            </p>
            <h1 className="text-[2.35rem] font-black leading-[1.08] text-white sm:text-5xl md:text-6xl">
              Pilotez votre marge
              <br />
              au{" "}
              <span className="relative inline-block px-1 text-[#a8cf8c]">
                Gramme
                <span aria-hidden className="absolute -bottom-2 left-0 w-full sm:-bottom-3">
                  <svg viewBox="0 0 520 34" className="h-3 w-full sm:h-4" preserveAspectRatio="none">
                    <path d="M8 18C90 27 173 30 260 30C347 30 430 27 512 18" fill="none" stroke="#a8cf8c" strokeWidth="14" strokeLinecap="round" />
                  </svg>
                </span>
              </span>{" "}
              près.
            </h1>
            <p className="mt-5 max-w-md text-base text-white/85 sm:text-lg">
              Le logiciel de gestion et de production pour boulangers-pâtissiers : recettes digitalisées, fiches
              techniques, alertes de prix, gestion de stocks, planning de production et marges en temps réel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("tarifs")}
                className="rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021] transition hover:bg-[#b8d99c]"
              >
                Voir les offres
              </button>
              <Link
                href="/contact"
                onClick={() => trackEvent("cta_demo_click", { source: "hero" })}
                className="rounded-xl border border-white/35 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Demander une démo
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-white/70">
          <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-5 lg:grid-cols-4">
            {trustItems.map(({ label, icon: Icon }) => (
              <p key={label} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted-foreground)]">
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#a8cf8c]/20 text-[#355329]">
                  <Icon className="size-4" />
                </span>
                {label}
              </p>
            ))}
          </div>
        </section>

        <NeDuTerrain />

        <section
          id="import-recettes"
          className="relative isolate overflow-hidden border-y border-[#dcead2] bg-gradient-to-b from-[#f7fbf3] via-white to-[#f7fbf3] py-16 sm:py-20 lg:py-24"
          aria-labelledby="import-recettes-title"
        >
          <div aria-hidden className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[#a8cf8c]/25 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-[#a8cf8c]/20 blur-3xl" />

          <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-5">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#cfe3bf] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#355329]">
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
            </div>

            <div className="mt-12 grid items-center gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12">
              <figure className="relative order-1 lg:col-span-7">
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

              <ol className="order-2 space-y-4 lg:col-span-5">
                {importSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.title} className="flex gap-4 rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#a8cf8c]/25 text-[#355329]">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6e9f55]">Étape {index + 1}</p>
                        <h3 className="mt-1 text-lg font-bold text-[#1a2e14]">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]">{step.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
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
                href="/contact"
                onClick={() => trackEvent("cta_demo_click", { source: "home_import_recettes" })}
                className="rounded-xl border border-[#d8e6cf] bg-white px-5 py-3 font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
              >
                Faire importer mes recettes
              </Link>
            </div>
          </div>
        </section>

        <section id="fonctionnalites" className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-5 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">Les fonctionnalités qui font gagner du temps et de la marge.</h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Neuf modules reliés entre eux : digitalisation des recettes, fiches techniques et calcul du coût de
              revient, mercuriale et alertes de prix, gestion de stocks, planning de production et pilotage de la
              rentabilité, sans complexité inutile. Tout est connecté : un prix qui bouge sur une facture se
              répercute jusqu&apos;à la marge de chaque recette. Dépliez pour l&apos;essentiel, ouvrez la page dédiée
              pour le détail.
            </p>
            <p className="mt-3 text-sm text-[var(--muted-foreground)]">
              Vous êtes pâtissier ?{" "}
              <Link href="/logiciel-patisserie" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                Voir la page dédiée aux laboratoires de pâtisserie
              </Link>{" "}
              : sous-recettes en cascade, coût de revient à l&apos;entremets, pertes de parage.
            </p>
          </div>
          <FeatureAccordion />
          <Link
            href="/fonctionnalites"
            className="mt-6 inline-flex rounded-xl border border-[#d8e6cf] bg-white px-5 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
          >
            Voir toutes les fonctionnalités en détail
          </Link>
        </section>

        <section className="bg-[#264021] py-14 sm:py-16 lg:py-24" aria-labelledby="multidevice-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="multidevice-title" className="text-3xl font-bold text-white md:text-4xl">Sur ordinateur, tablette ou téléphone.</h2>
              <p className="mt-4 text-white/75">
                Le même compte, la même version, sur l&apos;ordinateur du bureau, la tablette du labo et le téléphone
                posé près du pétrin. Rien à installer, aucune mise à jour à lancer.
              </p>
            </div>
            {/* De vraies captures, encadrées en CSS.
                Le rendu qui occupait cette place était une image générée dont
                le texte d'interface était du charabia (« Scanner une fecture »,
                « Foundeboves », « Dormière mies à jour ») : visible à l'œil en
                pleine largeur, sur la seule section du site qui montre le
                produit sur plusieurs écrans. */}
            <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-6 sm:mt-14 lg:flex-row lg:items-end lg:gap-8">
              <div className="w-full lg:flex-[1.6]">
                <CadreAppareil
                  appareil="navigateur"
                  src="/images/app/mercuriale.png"
                  alt="La mercuriale de Gramme sur ordinateur : chaque matière première avec son prix de référence, son fournisseur et sa tendance"
                  sizes="(max-width: 1024px) 92vw, 620px"
                />
              </div>
              <div className="w-full max-w-[320px] lg:flex-1 lg:max-w-none">
                <CadreAppareil
                  appareil="tablette"
                  src="/images/app/haccp-nettoyage-tablette.png"
                  alt="Le plan de nettoyage de Gramme sur tablette, posé au laboratoire : douze tâches à jour, pointages par semaine et par zone"
                  sizes="(max-width: 1024px) 60vw, 320px"
                />
              </div>
              <div className="w-[168px] shrink-0 sm:w-[196px]">
                <CadreAppareil
                  appareil="telephone"
                  src="/images/app/accueil-atelier-telephone.png"
                  alt="L'accueil de Gramme sur téléphone en mode atelier : six grandes tuiles utilisables les mains farineuses"
                  sizes="196px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="confidentialite" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16" aria-labelledby="confidentialite-title">
          <div className="max-w-3xl">
            <h2 id="confidentialite-title" className="text-3xl font-bold md:text-4xl">
              Vos recettes ne quittent pas votre atelier.
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Fiches techniques, factures fournisseurs, prix d&apos;achat et marges restent votre propriété.
              Aucune revente, aucun partage avec d&apos;autres établissements, accès limité au support : dans un cadre RGPD.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Propriété exclusive", text: "Vos données métier vous appartiennent." },
              { title: "Pas de revente", text: "Aucune monétisation auprès de tiers." },
              { title: "Cloisonnement", text: "Chaque structure est isolée des autres." },
              { title: "Cadre RGPD", text: "Hébergement Europe, accès contrôlés." },
            ].map((item) => (
              <li key={item.title} className="rounded-2xl border border-[#dcead2] bg-white p-5">
                <p className="font-bold text-[#355329]">{item.title}</p>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--muted-foreground)]">
            En détail :{" "}
            <Link href="/securite" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              sécurité &amp; confidentialité
            </Link>
            {" · "}
            <Link href="/politique-de-confidentialite" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section id="tarifs" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Les tarifs</h2>
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
                  <p className="absolute -top-3 left-6 rounded-full bg-[#a8cf8c] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#264021]">
                    Le plus choisi
                  </p>
                )}
                <p className={`text-sm font-semibold uppercase tracking-wide ${plan.highlight ? "text-[#d7efca]" : "text-[#355329]"}`}>
                  {plan.name}
                </p>
                <p className="mt-4 tabular-nums text-4xl font-black">
                  {formatEuro(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                  <span className={`ml-1 text-base font-semibold ${plan.highlight ? "text-white/80" : "text-[var(--muted-foreground)]"}`}>
                    {isYearly ? "HT / an" : "HT / mois"}
                  </span>
                </p>
                <p className={`mt-2 text-sm tabular-nums ${plan.highlight ? "text-white/85" : "text-[var(--muted-foreground)]"}`}>
                  {isYearly ? (
                    <>
                      soit {formatEuro(plan.yearlyMonthlyEquivalent, 2)} HT / mois ·{" "}
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
                <Link
                  href="/tarifs"
                  onClick={() => trackEvent("cta_demo_click", { source: `home_tarif_${plan.id}_${period}` })}
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 font-semibold ${
                    plan.highlight ? "bg-[#a8cf8c] text-[#264021]" : "bg-[#264021] text-white"
                  }`}
                >
                  Voir l&apos;offre {plan.name}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="demo" className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-5 sm:pb-16">
          <div className="rounded-3xl bg-[#264021] p-6 text-white sm:p-8">
            <h2 className="text-3xl font-bold">Passez d’une méthode  artisanale à une gestion performante et maîtrisée.</h2>
            <p className="mt-3 max-w-3xl text-white/85">Découvrez comment Gramme transforme vos données en décisions rentables.</p>
            <Link
              href="/contact"
              onClick={() => trackEvent("cta_demo_click", { source: "home_cta" })}
              className="mt-6 inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]"
            >
              Demander une démonstration
            </Link>
          </div>
        </section>

        <section id="integrations" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16" aria-labelledby="integrations-title">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e9f55]">À venir</p>
            <h2 id="integrations-title" className="mt-3 text-3xl font-bold md:text-4xl">
              Intégrations caisse &amp; compta
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Popina, Pennylane, Zettle et d&apos;autres outils du métier : votez pour prioriser les prochaines connexions Gramme.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {HOME_INTEGRATION_PREVIEWS.map((id) => {
              const integration = INTEGRATIONS.find((item) => item.id === id);
              if (!integration) return null;
              return (
                <li
                  key={integration.id}
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329]"
                >
                  <IntegrationLogo integration={integration} size={32} />
                  {integration.name}
                  <span className="rounded-full bg-[#a8cf8c]/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#355329]">
                    Bientôt
                  </span>
                </li>
              );
            })}
          </ul>
          <Link
            href="/integrations"
            className="mt-6 inline-flex rounded-xl border border-[#d8e6cf] bg-white px-5 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
          >
            Voir toutes les intégrations et voter
          </Link>
        </section>

        <section id="faq" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-5" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-bold md:text-4xl">Questions fréquentes</h2>
          <p className="mt-3 max-w-3xl text-[var(--muted-foreground)]">
            Tout savoir sur le logiciel de gestion Gramme pour boulangeries et pâtisseries.
          </p>
          <FaqAccordion />
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-5" aria-label="Liens utiles">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6e9f55]">Continuer sur Gramme</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/fonctionnalites", label: "Toutes les fonctionnalités" },
              { href: "/logiciel-patisserie", label: "Vous êtes pâtissier ?" },
              { href: "/guides/calcul-cout-de-revient-boulangerie", label: "Calculer son coût de revient" },
              { href: "/guides", label: "Tous les guides" },
              { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
              { href: "/a-propos-de-gramme", label: "À propos de Gramme" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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
