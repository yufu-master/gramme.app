import Image from "next/image";
import Link from "next/link";

const trustItems = [
  { label: "Recettes & fiches techniques", icon: ShieldIcon },
  { label: "Scan facture intelligent", icon: ScanIcon },
  { label: "Impact marge en temps réel", icon: PulseIcon },
  { label: "Mobile & atelier-friendly", icon: MobileIcon },
];

const featureColumns = [
  {
    title: "Recettes intelligentes",
    icon: BookIcon,
    bullets: ["Catalogue recettes clair", "Saisie automatique des recettes simplifiées et optimisées (gain de temps énorme)", "Coût matière & marge", "Pertes cuisson et poids net", "Impression fiche technique"],
  },
  {
    title: "Production maîtrisée",
    icon: LayersIcon,
    bullets: ["Sélection des recettes du jour", "Liste de pesée globale / par recette", "Coût batch estimé", "Mise à jour stock automatique"],
  },
  {
    title: "Achats & mercuriale",
    icon: ScanIcon,
    bullets: ["Scan facture image/PDF", "Suivi réel de l’évolution des prix des matières premières", "Suivi réel de l’évolution des prix des recettes", "Recettes impactées par les hausses", "Détail factures et lignes produits"],
  },
  {
    title: "Stock opérationnel",
    icon: BoxIcon,
    bullets: ["Recherche, filtres, catégories", "Édition rapide prix / stock / fournisseur", "Valeur du stock en un coup d’œil"],
  },
  {
    title: "Fournisseurs centralisés",
    icon: UsersIcon,
    bullets: ["Carnet fournisseurs", "Coordonnées, actions appel/mail", "Produits liés et volume d’achat estimé"],
  },
  {
    title: "Décisions plus rapides",
    icon: SparkIcon,
    bullets: ["Alertes sur vos recettes sensibles", "Vision claire des marges nettes", "Priorisation des actions rentables"],
  },
];

const plans = [
  {
    name: "Starter",
    price: "39€",
    cadence: "/mois",
    audience: "Pour les artisans qui veulent aller à l’essentiel.",
    cta: "Commencer",
    items: ["50 recettes", "Scan de 30 factures/mois", "Suivi marge en temps réel", "Frais de mise en service : 300€"],
  },
  {
    name: "Pro",
    price: "79€",
    cadence: "/mois",
    audience: "Pour les équipes qui pilotent production + achats.",
    cta: "Choisir Pro",
    highlight: true,
    items: ["Recettes illimitées", "Scan de 150 factures/mois", "Stocks, fournisseurs et alertes avancées", "Support prioritaire", "Frais de mise en service : 500€"],
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    cadence: "",
    audience: "Pour les structures multi-sites et besoins spécifiques.",
    cta: "Parler à un expert",
    items: ["Multi-sites", "Déploiement accompagné", "Intégrations avancées", "SLA & gouvernance dédiée", "Frais de mise en service : Sur devis"],
  },
];

const faqItems = [
  {
    q: "Gramme est-il adapté aux petites structures ?",
    a: "Oui, Gramme est pensé pour les équipes terrain et les dirigeants de boulangerie artisanale.",
  },
  {
    q: "Dois-je tout changer dans mon organisation ?",
    a: "Non. Vous pouvez démarrer progressivement : recettes, puis factures, puis production.",
  },
  {
    q: "Puis-je l’utiliser sur mobile ?",
    a: "Oui, l’interface est optimisée atelier et déplacement avec des actions simples et lisibles.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f6fbf2,_#ffffff_45%)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-wide">
            <Image src="/logos/gramme-icon.svg" alt="Logo Gramme" width={28} height={28} />
            <span>GRAMME</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-[var(--muted-foreground)] lg:flex">
            <a href="#produit">Produit</a>
            <a href="#fonctionnalites">Fonctionnalités</a>
            <a href="#tarifs">Tarifs</a>
            <Link href="/comment-ca-marche">Comment ça marche</Link>
            <Link href="/demo">Contact</Link>
          </div>
          <a href="#demo" className="rounded-xl bg-[#a8cf8c] px-4 py-3 text-sm font-semibold text-[#264021] shadow-[0_8px_25px_rgba(120,170,95,0.35)]">Demander une démo</a>
          <div className="flex w-full items-center gap-4 overflow-x-auto text-sm text-[var(--muted-foreground)] lg:hidden">
            <a href="#produit" className="whitespace-nowrap">Produit</a>
            <a href="#fonctionnalites" className="whitespace-nowrap">Fonctionnalités</a>
            <a href="#tarifs" className="whitespace-nowrap">Tarifs</a>
            <Link href="/mentions-legales" className="whitespace-nowrap">Mentions légales</Link>
            <Link href="/cgv" className="whitespace-nowrap">CGV</Link>
          </div>
        </nav>
      </header>

      <main className="pt-28 sm:pt-24 lg:pt-20">
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#a8cf8c]/40 bg-[#a8cf8c]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#264021]">
              <SparkIcon className="size-4" />
              Logiciel de pilotage premium
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Pilotez votre marge
              <br />
              au <span className="relative inline-block px-1 text-[#a8cf8c]">Gramme<span aria-hidden className="absolute -bottom-3 left-0 w-full"><svg viewBox="0 0 520 34" className="h-4 w-full" preserveAspectRatio="none"><path d="M8 18C90 27 173 30 260 30C347 30 430 27 512 18" fill="none" stroke="#a8cf8c" strokeWidth="14" strokeLinecap="round" /></svg></span></span> près.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-[var(--muted-foreground)]">
              Gramme est une application dédiée aux petites entreprises : vous accédez à une gestion optimisée, concrète et accessible, sans complexité inutile.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#tarifs" className="rounded-xl border border-[var(--border)] bg-white px-5 py-3 font-semibold text-[#264021]">Voir les offres</a>
            </div>
          </div>
          <div className="rounded-3xl border border-[#cce0bc] bg-white p-6 shadow-[0_15px_60px_rgba(58,92,39,0.12)]">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#6e9f55]">Vue stratégique</p>
            <div className="mt-5 space-y-3">
              {[
                "Saisie des recettes simplifiées et optimisées",
                "Production synchronisée au stock",
                "Factures converties en décisions",
                "Marge matière en direct",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--secondary)] p-3 text-sm font-medium text-[#355329]">
                  <CheckIcon className="size-4 text-[#6e9f55]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-white/70">
          <div className="mx-auto grid w-full max-w-6xl gap-3 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
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

        <section id="produit" className="mx-auto w-full max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">Une application pensée pour les petites entreprises: efficace, rapide et fiable.</h2>
          <p className="mt-4 max-w-3xl text-[var(--muted-foreground)]">Chaque outil est pensé pour vous simplifier la vie : moins de prise de tête, une vue claire sur vos chiffres, et des décisions faciles à prendre au quotidien.</p>
        </section>

        <section id="fonctionnalites" className="mx-auto w-full max-w-6xl px-5 pb-16">
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

        <section id="tarifs" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <h2 className="text-3xl font-bold md:text-4xl">Les tarifs</h2>
          <p className="mt-2 max-w-2xl text-[var(--muted-foreground)]">La formule Pro est conçue pour la majorité des boulangeries ambitieuses.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl border p-6 ${plan.highlight ? "relative border-[#7ca764] bg-[#264021] text-white shadow-[0_20px_60px_rgba(34,60,23,0.35)]" : "border-[var(--border)] bg-white"}`}
              >
                {plan.highlight && (
                  <p className="absolute -top-3 left-6 rounded-full bg-[#a8cf8c] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#264021]">Le plus choisi</p>
                )}
                <p className={`text-sm font-semibold uppercase tracking-wide ${plan.highlight ? "text-[#d7efca]" : "text-[#355329]"}`}>{plan.name}</p>
                <p className="mt-4 text-4xl font-black">{plan.price}<span className={`ml-1 text-base font-semibold ${plan.highlight ? "text-white/80" : "text-[var(--muted-foreground)]"}`}>{plan.cadence}</span></p>
                <p className={`mt-3 text-sm ${plan.highlight ? "text-white/85" : "text-[var(--muted-foreground)]"}`}>{plan.audience}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {plan.items.map((item) => (
                    <li key={item} className={`flex items-start gap-2 ${plan.highlight ? "text-white/95" : "text-[var(--muted-foreground)]"}`}>
                      <CheckIcon className={`mt-0.5 size-4 shrink-0 ${plan.highlight ? "text-[#a8cf8c]" : "text-[#6e9f55]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 font-semibold ${
                    plan.highlight ? "bg-[#a8cf8c] text-[#264021]" : "bg-[#264021] text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="demo" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="rounded-3xl bg-[#264021] p-8 text-white">
            <h2 className="text-3xl font-bold">Passez d’un pilotage artisanal à une performance maîtrisée.</h2>
            <p className="mt-3 max-w-3xl text-white/85">En 15 minutes, découvrez comment Gramme transforme vos données terrain en décisions rentables.</p>
            <Link href="/demo" className="mt-6 inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">Planifier une démo</Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/mentions-legales" className="hover:text-[var(--foreground)]">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-[var(--foreground)]">CGV</Link>
          </div>
          <p>© {new Date().getFullYear()} Gramme</p>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
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
