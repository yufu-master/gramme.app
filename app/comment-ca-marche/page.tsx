import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment ça marche — Gramme, le logiciel de gestion le plus simple pour boulangers et pâtissiers",
  description:
    "Photographiez vos recettes, scannez vos factures, suivez vos marges en temps réel. Découvrez comment Gramme simplifie la gestion de votre boulangerie-pâtisserie en 4 étapes, sans aucune compétence technique.",
  keywords: [
    "logiciel gestion boulangerie simple",
    "numériser recettes boulangerie",
    "scan facture fournisseur boulangerie",
    "gestion rentabilité pâtisserie facile",
    "logiciel boulangerie sans formation",
    "comment gérer marges boulangerie",
  ],
};

const steps = [
  {
    id: "01",
    stat: "2 min pour démarrer",
    title: "Inscrivez-vous et commencez en 2 minutes",
    description:
      "Vous créez votre compte avec un email et un mot de passe, puis vous arrivez directement sur votre tableau de bord. Aucune installation, aucun paramétrage long, rien à configurer pendant des heures. Gramme prépare automatiquement un environnement pensé pour les boulangers et pâtissiers. Vous pouvez commencer depuis votre téléphone, votre tablette ou votre ordinateur dès la première connexion.",
    bullets: [
      "Inscription gratuite, sans engagement",
      "Aucune installation ni configuration technique",
      "Accessible sur téléphone, tablette et ordinateur",
    ],
    visual: "Écran d'inscription Gramme puis dashboard d'accueil avec message de bienvenue.",
  },
  {
    id: "02",
    stat: "+3 h gagnées par semaine",
    title: "Photographiez vos recettes, l'IA fait le reste",
    description:
      "Vous prenez une photo de votre cahier de recettes ou de vos fiches papier du labo. Gramme lit automatiquement les ingrédients, les quantités et les informations utiles, puis crée une fiche technique digitale complète. Le coût matière et la marge sont calculés sans saisie manuelle, même avec des notes manuscrites. En quelques secondes, vos recettes deviennent exploitables pour piloter votre rentabilité.",
    bullets: [
      "Vos recettes papier deviennent digitales en quelques secondes",
      "Calcul automatique du coût matière et de la marge par recette",
      "Fini la ressaisie manuelle, même avec des notes manuscrites",
    ],
    visual: "Visuel en split-screen : photo d&apos;une fiche papier à gauche, fiche technique Gramme générée à droite.",
  },
  {
    id: "03",
    stat: "1 facture = toutes vos recettes à jour",
    title: "Scannez vos factures, les prix se mettent à jour partout",
    description:
      "Vous photographiez ou importez vos factures fournisseurs. Gramme récupère automatiquement chaque ligne utile, met à jour votre mercuriale et compare les variations de prix. Dès qu&apos;une matière première évolue, toutes les recettes concernées sont recalculées instantanément. Vous évitez les mauvaises surprises et gardez des marges fiables au quotidien.",
    bullets: [
      "Scan intelligent, plus besoin de ressaisir chaque ligne",
      "Détection automatique des variations de prix fournisseurs",
      "Répercussion immédiate sur toutes les recettes concernées",
    ],
    visual: "Mockup facture scannée avec animation de propagation vers plusieurs fiches recettes.",
  },
  {
    id: "04",
    stat: "Vos marges, en temps réel",
    title: "Pilotez votre rentabilité et agissez au bon moment",
    description:
      "Vous consultez votre tableau de bord, puis vous agissez avec des informations claires : ajuster un prix, changer un fournisseur ou corriger une recette. Gramme surveille les marges en continu et vous alerte dès qu&apos;une recette passe sous votre seuil. Vous ne subissez plus la baisse de rentabilité en fin de mois. Vous anticipez, au bon moment, avec des décisions concrètes.",
    bullets: [
      "Alertes automatiques sur les recettes en danger",
      "Vision claire de vos marges nettes, produit par produit",
      "Recommandations concrètes pour agir rapidement",
    ],
    visual: "Dashboard Gramme avec alertes visibles et graphique de marges par recette.",
  },
];

const objections = [
  {
    q: "Je ne suis pas à l'aise avec le numérique",
    a: "Gramme est conçu pour les artisans, pas pour les informaticiens. Si vous savez prendre une photo avec votre téléphone, vous savez utiliser Gramme.",
  },
  {
    q: "Je n'ai pas le temps de mettre en place un nouveau logiciel",
    a: "L'inscription prend 2 minutes et vos premières fiches techniques peuvent être prêtes en moins de 10 minutes grâce à l'automatisation.",
  },
  {
    q: "Mes recettes sont confidentielles, est-ce sécurisé ?",
    a: "Vos données sont chiffrées, hébergées en France/Europe, et accessibles uniquement à votre équipe. L'ensemble est aligné avec les exigences RGPD.",
  },
  {
    q: "Ça coûte combien ?",
    a: "Vous démarrez avec un essai gratuit sans engagement. Les gains de temps et les marges protégées compensent rapidement l'investissement.",
  },
  {
    q: "Excel me suffit",
    a: "Excel n'analyse pas vos factures, ne met pas à jour vos coûts automatiquement et ne vous alerte pas quand une marge se dégrade. Gramme le fait pour vous, au quotidien.",
  },
];

const impactStats = ["+3 h gagnées par semaine en moyenne", "Des centaines de recettes numérisées", "Des factures scannées chaque jour automatiquement"];

export default function Page() {
  return (
    <div className="bg-[#FAFAF8] text-[#264021]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-wide">
            <Image src="/logos/gramme-icon.svg" alt="Logo Gramme" width={28} height={28} />
            <span>GRAMME</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-[var(--muted-foreground)] lg:flex">
            <Link href="/fonctionnalites">Fonctionnalités</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/comment-ca-marche" className="font-semibold text-[#355329]">Comment ça marche</Link>
            <Link href="/demo">Contact</Link>
          </div>
          <Link href="/demo" className="rounded-xl bg-[#a8cf8c] px-4 py-3 text-sm font-semibold text-[#264021]">Demander une démo</Link>
          <div className="flex w-full items-center gap-4 overflow-x-auto text-sm text-[var(--muted-foreground)] lg:hidden">
            <Link href="/fonctionnalites" className="whitespace-nowrap">Fonctionnalités</Link>
            <Link href="/tarifs" className="whitespace-nowrap">Tarifs</Link>
            <Link href="/comment-ca-marche" className="whitespace-nowrap font-semibold text-[#355329]">Comment ça marche</Link>
            <Link href="/demo" className="whitespace-nowrap">Contact</Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-5 pb-20 pt-16 text-center md:pt-24">
          <p className="rounded-full bg-[#e8f2df] px-4 py-2 text-sm font-semibold text-[#355329]">logiciel gestion boulangerie simple</p>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">De vos recettes papier à vos marges en temps réel, en 4 étapes</h1>
          <p className="mt-5 max-w-3xl text-lg text-[#4d6952]">
            Vous n&apos;avez rien à ressaisir manuellement : vous prenez une photo, Gramme fait le reste. Aucun niveau technique requis, seulement votre savoir-faire métier.
          </p>
          <Link href="/demo" className="mt-8 rounded-xl bg-[#4A7C59] px-6 py-3 text-base font-semibold text-white">Essayer Gramme gratuitement</Link>
          <div className="mt-10 w-full rounded-3xl border border-[#d8e6cf] bg-white p-6 text-left shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#4A7C59]">Parcours visuel recommandé</p>
            <p className="mt-3 text-[#4d6952]">
              Mockup animé en 3 temps : photo de fiche papier → fiche technique digitale générée → tableau de bord marges avec alertes.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl space-y-24 px-5 pb-20">
          {steps.map((step, index) => (
            <article key={step.id} className="grid items-center gap-10 rounded-3xl border border-[#d8e6cf] bg-white p-6 md:grid-cols-2 md:p-10">
              <div className={`order-2 ${index % 2 ? "md:order-2" : "md:order-1"}`}>
                <p className="text-7xl font-black leading-none text-[#4A7C59]/20">{step.id}</p>
                <h2 className="mt-3 text-3xl font-bold">{step.title}</h2>
                <p className="mt-4 text-[#4d6952]">{step.description}</p>
                <ul className="mt-5 space-y-2 text-[#355329]">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-0.5 font-bold text-[#4A7C59]">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 inline-flex rounded-full bg-[#e8f2df] px-3 py-1 text-sm font-semibold text-[#355329]">{step.stat}</p>
                <Link href="/demo" className="mt-5 inline-flex rounded-lg border border-[#4A7C59] px-4 py-2 font-semibold text-[#355329]">Commencer gratuitement</Link>
              </div>
              <div className={`order-1 ${index % 2 ? "md:order-1" : "md:order-2"}`}>
                <div className="rounded-2xl border border-dashed border-[#bad3af] bg-[#f6fbf2] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#4A7C59]">Suggestion visuelle</p>
                  <p className="mt-3 text-sm text-[#4d6952]">{step.visual}</p>
                  <p className="mt-4 text-xs text-[#6e8f73]">Alt SEO conseillé : {step.title} | logiciel gestion boulangerie simple</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20">
          <h2 className="text-3xl font-bold">Avant / Après Gramme</h2>
          <p className="mt-3 max-w-3xl text-[#4d6952]">
            Votre organisation actuelle a tenu pendant des années. Mais avec les prix matières qui bougent vite, un pilotage précis devient essentiel pour protéger la rentabilité.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#f0d7d7] bg-[#fff9f9] p-6">
              <h3 className="text-xl font-bold text-[#8a4c4c]">😩 Sans Gramme</h3>
              <ul className="mt-4 space-y-2 text-[#6b5656]">
                <li>Recettes dans un cahier papier ou un tableur Excel</li>
                <li>Saisie manuelle de chaque ingrédient et de chaque prix</li>
                <li>Factures empilées, variations fournisseurs peu visibles</li>
                <li>Marges calculées au feeling ou une fois par an</li>
                <li>Pertes découvertes trop tard, au bilan</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#d8e6cf] bg-[#f6fbf2] p-6">
              <h3 className="text-xl font-bold text-[#355329]">😎 Avec Gramme</h3>
              <ul className="mt-4 space-y-2 text-[#355329]">
                <li>Fiches techniques digitales auto-générées</li>
                <li>Une photo suffit : Gramme met les données à jour</li>
                <li>Scan facture fournisseur boulangerie et mercuriale toujours à jour</li>
                <li>Gestion rentabilité pâtisserie facile, recette par recette</li>
                <li>Alertes proactives dès qu&apos;une marge se dégrade</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20">
          <h2 className="text-3xl font-bold">Vos questions, nos réponses</h2>
          <div className="mt-8 space-y-4">
            {objections.map((item) => (
              <article key={item.q} className="rounded-2xl border border-[#d8e6cf] bg-white p-5">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-2 text-[#4d6952]">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20">
          <h2 className="text-3xl font-bold">Preuves d&apos;impact</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat} className="rounded-2xl border border-[#d8e6cf] bg-white p-5 text-center text-lg font-semibold text-[#355329]">
                {stat}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-24">
          <div className="rounded-3xl bg-[#264021] p-8 text-white md:p-12">
            <h2 className="text-3xl font-bold">Prêt à simplifier votre gestion ?</h2>
            <p className="mt-3 max-w-2xl text-white/90">Photographiez votre première recette en 2 minutes et découvrez sa vraie rentabilité.</p>
            <Link href="/demo" className="mt-6 inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">Commencer gratuitement</Link>
            <p className="mt-4 text-sm text-white/75">Sans engagement · Sans carte bancaire · Données sécurisées</p>
          </div>
        </section>
      </main>
    </div>
  );
}
