"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { IntegrationLogo } from "@/components/integrations/IntegrationCard";
import { HOME_INTEGRATION_PREVIEWS, INTEGRATIONS } from "@/lib/integrations";
import { formatEuro, pricingPlans } from "@/lib/pricing";
import { trackEvent } from "@/lib/analytics";

const trustItems = [
  { label: "Recettes & fiches techniques", icon: ShieldIcon },
  { label: "Scan facture intelligent", icon: ScanIcon },
  { label: "Impact marge en temps réel", icon: PulseIcon },
  { label: "Mobile & atelier-friendly", icon: MobileIcon },
];

const featureColumns = [
  {
    title: "Fiches techniques intelligentes",
    icon: BookIcon,
    bullets: ["Saisie automatique des fiches techniques", "Répertoire de recettes clair", "Gestion des pertes", "Coûts matières et marges", "Impression de fiches techniques"],
  },
  {
    title: "Production maîtrisée",
    icon: LayersIcon,
    bullets: ["Planning de production jour par jour", "Liste des matières premières et recettes utilisées", "Coût de production", "Mise à jour du stock automatique"],
  },
  {
    title: "Achats & mercuriale",
    icon: ScanIcon,
    bullets: ["Scan automatique des factures", "Suivi réel de l'évolution des prix des matières premières", "Recettes impactées en temps réel par l'évolution des prix", "Historique et détail des factures"],
  },
  {
    title: "Stock opérationnel",
    icon: BoxIcon,
    bullets: ["Recherche, filtres et catégories", "Édition rapide des prix, de stock et des fournisseurs", "Valeur du stock en un coup d’œil"],
  },
  {
    title: "Fournisseurs centralisés",
    icon: UsersIcon,
    bullets: ["Carnet fournisseurs", "Coordonnées, contact par e-mail ou appel", "Produits affiliés et volume d’achat estimé"],
  },
  {
    title: "Décisions plus rapides",
    icon: SparkIcon,
    bullets: ["Alertes sur vos recettes sensibles", "Vision claire des marges nettes", "Priorisation des actions rentables"],
  },
];

const plans = pricingPlans;

export default function HomePage() {
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
          className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-[#1a2e14] sm:items-center"
          aria-label="Présentation Gramme"
        >
          <Image
            src="/images/hero-lifestyle.jpg"
            alt="Logiciel gestion boulangerie Gramme sur smartphone — recettes, stock et mercuriale"
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
          <div className="relative z-10 w-full max-w-[34rem] self-end px-4 pb-16 pt-28 sm:self-center sm:px-6 sm:pb-20 sm:pt-32 md:max-w-[36rem] md:px-8 lg:max-w-[38rem] lg:px-10 xl:px-14">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#cfe8bf]">
              <SparkIcon className="size-4" />
              Gramme — logiciel boulangerie &amp; pâtisserie
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
              Le logiciel de gestion pour boulangers-pâtissiers : fiches techniques, coûts matière, stock, production et marges en temps réel.
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

        <section id="produit" className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-14 sm:gap-10 sm:px-5 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold md:text-4xl">Conçu pour le laboratoire, pensé pour le terrain.</h2>
            <p className="mt-4 max-w-xl text-[var(--muted-foreground)]">
              Gramme vous accompagne au quotidien : recettes, production, stock et marges, directement depuis l&apos;atelier.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted-foreground)]">
              Découvrez{" "}
              <Link href="/comment-ca-marche" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                comment marche le logiciel
              </Link>
              , l&apos;histoire de{" "}
              <Link href="/a-propos-de-gramme" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                Gramme et de son co-fondateur chef pâtissier
              </Link>
              , ou{" "}
              <Link href="/contact" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
                contactez l&apos;équipe pour une démonstration
              </Link>
              .
            </p>
          </div>
          <div className="relative order-1 mx-auto aspect-[4/3] w-full max-w-md overflow-hidden sm:max-w-lg lg:order-2 lg:mx-0 lg:max-w-none lg:aspect-[5/4]">
            <Image
              src="/images/boulangere_gramme_use.png"
              alt="Boulangère utilisant le logiciel Gramme sur tablette dans son laboratoire"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 512px, 480px"
              className="object-cover object-[center_25%]"
            />
          </div>
        </section>

        <section id="fonctionnalites" className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-5 sm:pb-16">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">Les fonctionnalités qui font gagner du temps et de la marge.</h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Logiciel de gestion boulangerie complet : fiches techniques, mercuriale, stock, production et alertes marges — sans complexité inutile.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureColumns.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <h3 className="flex items-center gap-2 text-xl font-bold">
                    <span className="inline-flex size-8 items-center justify-center rounded-lg bg-[#a8cf8c]/20 text-[#355329]">
                      <Icon className="size-4" />
                    </span>
                    {feature.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--muted-foreground)]">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-[#6e9f55]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-[#264021] py-14 sm:py-16 lg:py-24" aria-labelledby="multidevice-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="multidevice-title" className="text-3xl font-bold text-white md:text-4xl">Sur ordinateur, tablette ou téléphone.</h2>
              <p className="mt-4 text-white/75">
                Pilotez votre boulangerie partout : mercuriale, stock et recettes synchronisés sur tous vos écrans.
              </p>
            </div>
            <div className="relative mx-auto mt-10 aspect-[16/10] w-full max-w-5xl sm:mt-14 sm:aspect-[16/9]">
              <Image
                src="/images/multi-device.png"
                alt="Logiciel Gramme multi-appareils — mercuriale desktop, stock tablette et menu mobile"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain object-center"
              />
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
              Aucune revente, aucun partage avec d&apos;autres établissements, accès limité au support — dans un cadre RGPD.
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
                Sans engagement en mensuel. Annuel avec 2 mois offerts. Installation accompagnée une seule fois.
              </p>
            </div>
            <Link href="/tarifs" className="text-sm font-semibold text-[#355329] underline-offset-2 hover:underline">
              Voir le détail des offres
            </Link>
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
                  {formatEuro(plan.yearlyPrice)}
                  <span className={`ml-1 text-base font-semibold ${plan.highlight ? "text-white/80" : "text-[var(--muted-foreground)]"}`}>
                    HT / an
                  </span>
                </p>
                <p className={`mt-2 text-sm tabular-nums ${plan.highlight ? "text-white/85" : "text-[var(--muted-foreground)]"}`}>
                  soit {formatEuro(plan.yearlyMonthlyEquivalent, 2)} HT / mois · ou {formatEuro(plan.monthlyPrice)} HT / mois sans engagement
                </p>
                <p className={`mt-3 text-sm ${plan.highlight ? "text-white/85" : "text-[var(--muted-foreground)]"}`}>{plan.tagline}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {plan.features.map((item) => (
                    <li key={item} className={`flex items-start gap-2 ${plan.highlight ? "text-white/95" : "text-[var(--muted-foreground)]"}`}>
                      <CheckIcon className={`mt-0.5 size-4 shrink-0 ${plan.highlight ? "text-[#a8cf8c]" : "text-[#6e9f55]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/tarifs"
                  onClick={() => trackEvent("cta_demo_click", { source: `home_tarif_${plan.id}` })}
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
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link
                href="/comment-ca-marche"
                className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
              >
                Comment marche le logiciel
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
              >
                Guides fiches techniques &amp; coûts
              </Link>
            </li>
            <li>
              <Link
                href="/a-propos-de-gramme"
                className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
              >
                À propos de Gramme
              </Link>
            </li>
            <li>
              <Link
                href="/securite"
                className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
              >
                Sécurité &amp; confidentialité
              </Link>
            </li>
            <li>
              <Link
                href="/integrations"
                className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
              >
                Intégrations à venir
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
              >
                Demander une démonstration
              </Link>
            </li>
          </ul>
        </section>
      </main>
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
function ShieldIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M10 2 4.5 4v5.5c0 4.3 3 6.5 5.5 8 2.5-1.5 5.5-3.7 5.5-8V4L10 2Z" stroke="currentColor" strokeWidth="1.5" /></svg>;
}
function ScanIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M6 3H3v3M14 3h3v3M6 17H3v-3M17 14v3h-3M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
function PulseIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M2.5 10h3l2-3.5 3 7 2.2-3.5h4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function MobileIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><rect x="6" y="2.5" width="8" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M9 14.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
function BookIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="M4 3.5h9a3 3 0 0 1 3 3V16H7a3 3 0 0 0-3 3V3.5Z" stroke="currentColor" strokeWidth="1.5" /><path d="M7 16h9" stroke="currentColor" strokeWidth="1.5" /></svg>;
}
function LayersIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="m10 3 7 4-7 4-7-4 7-4ZM3 11l7 4 7-4M3 14.5l7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>;
}
function BoxIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><path d="m10 2 7 4v8l-7 4-7-4V6l7-4Z" stroke="currentColor" strokeWidth="1.5" /><path d="m3 6 7 4 7-4M10 10v8" stroke="currentColor" strokeWidth="1.5" /></svg>;
}
function UsersIcon({ className }: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><circle cx="7" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="13.5" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" /><path d="M2.5 16a4.5 4.5 0 0 1 9 0M10.5 16a3.5 3.5 0 0 1 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
