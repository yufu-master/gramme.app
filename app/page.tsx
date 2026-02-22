import Link from "next/link";
import Image from "next/image";

const trustItems = [
  "Recettes & fiches techniques",
  "Scan facture intelligent",
  "Impact marge en temps réel",
  "Mobile & atelier-friendly",
];

const painPoints = [
  "Vos prix matière changent, mais l’impact sur vos recettes reste flou.",
  "Vos fiches et calculs sont dispersés (papier, Excel, messages).",
  "La production et le stock ne sont pas alignés au quotidien.",
];

const pillars = [
  {
    title: "Standardiser vos recettes",
    text: "Créez des fiches propres, calculez vos coûts, suivez vos marges, imprimez vos supports.",
  },
  {
    title: "Fiabiliser votre production & votre stock",
    text: "Générez les pesées du jour, déduisez les matières, limitez les erreurs et ruptures.",
  },
  {
    title: "Piloter vos achats avec vos factures",
    text: "Scannez vos factures, mettez à jour les prix matière, visualisez immédiatement les recettes impactées.",
  },
];

const featureColumns = [
  {
    title: "Recettes intelligentes",
    bullets: ["Catalogue recettes clair", "Coût matière & marge", "Pertes cuisson et poids net", "Impression fiche technique"],
  },
  {
    title: "Production maîtrisée",
    bullets: ["Sélection des recettes du jour", "Liste de pesée globale / par recette", "Coût batch estimé", "Mise à jour stock automatique"],
  },
  {
    title: "Stock opérationnel",
    bullets: ["Recherche, filtres, catégories", "Édition rapide prix / stock / fournisseur", "Valeur du stock en un coup d’œil"],
  },
  {
    title: "Achats & mercuriale",
    bullets: ["Scan facture image/PDF", "Historique prix matière", "Recettes impactées par les hausses", "Détail factures et lignes produits"],
  },
  {
    title: "Fournisseurs centralisés",
    bullets: ["Carnet fournisseurs", "Coordonnées, actions appel/mail", "Produits liés et volume d’achat estimé"],
  },
  {
    title: "Décisions plus rapides",
    bullets: ["Alertes sur vos recettes sensibles", "Vision claire des marges nettes", "Priorisation des actions rentables"],
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

const plans = [
  {
    name: "Starter",
    price: "79€",
    cadence: "/mois",
    audience: "Pour les artisans qui veulent aller à l’essentiel.",
    items: ["50 recettes", "Scan de 30 factures/mois", "Suivi marge en temps réel"],
  },
  {
    name: "Pro",
    price: "149€",
    cadence: "/mois",
    audience: "Pour les équipes qui pilotent production + achats.",
    items: ["Recettes illimitées", "Scan de 150 factures/mois", "Stocks, fournisseurs et alertes avancées"],
  },
  {
    name: "Atelier+",
    price: "299€",
    cadence: "/mois",
    audience: "Pour les structures multi-sites et les besoins premium.",
    items: ["Multi-sites", "Accompagnement au déploiement", "Support prioritaire"],
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gramme",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: "Logiciel de gestion boulangerie et pâtisserie pour piloter recettes, achats, stock, production et marges.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Démonstration de 15 minutes" },
  };

  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4" aria-label="Navigation principale">
          <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-wide">
            <Image src="/logos/gramme-icon.svg" alt="Logo Gramme" width={28} height={28} />
            <span>GRAMME</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-[var(--muted-foreground)] md:flex">
            <a href="#produit">Produit</a><a href="#fonctionnalites">Fonctionnalités</a><a href="#comment">Comment ça marche</a><Link href="/tarifs">Tarifs</Link><Link href="/demo">Contact</Link>
          </div>
          <a href="#demo" className="rounded-xl bg-[#a8cf8c] px-4 py-3 text-sm font-semibold text-[#264021]">Demander une démo</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-[#a8cf8c]/20 px-3 py-1 text-xs font-semibold">Logiciel gestion boulangerie & pâtisserie</p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Pilotez votre marge
              <br />
              au <span className="relative inline-block px-1 text-[#a8cf8c]">Gramme<span aria-hidden className="absolute -bottom-3 left-0 w-full"><svg viewBox="0 0 520 34" className="h-4 w-full" preserveAspectRatio="none"><path d="M8 18C90 27 173 30 260 30C347 30 430 27 512 18" fill="none" stroke="#a8cf8c" strokeWidth="14" strokeLinecap="round" /></svg></span></span> près.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[var(--muted-foreground)]">Une vision claire, des actions rapides, un pilotage précis pour votre atelier.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#demo" className="rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">Demander une démo</a>
              <a href="#comment" className="rounded-xl border border-[var(--border)] px-5 py-3 font-semibold">Voir comment ça marche</a>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)] p-5">
            <p className="text-sm font-semibold text-[var(--muted-foreground)]">Vue atelier (desktop + mobile)</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 text-sm">Recettes standardisées<br /><span className="text-[var(--muted-foreground)]">Coût, marge, pertes</span></div>
              <div className="rounded-xl bg-white p-4 text-sm">Factures scannées<br /><span className="text-[var(--muted-foreground)]">Prix matière à jour</span></div>
              <div className="rounded-xl bg-white p-4 text-sm">Production du jour<br /><span className="text-[var(--muted-foreground)]">Pesées automatiques</span></div>
              <div className="rounded-xl bg-white p-4 text-sm">Alertes marge<br /><span className="text-[var(--muted-foreground)]">Recettes impactées</span></div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)]" aria-label="Preuves rapides">
          <div className="mx-auto grid w-full max-w-6xl gap-3 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => <p key={item} className="text-sm font-semibold text-[var(--muted-foreground)]">✅ {item}</p>)}
          </div>
        </section>

        <section id="produit" className="mx-auto w-full max-w-6xl px-5 py-14">
          <h2 className="text-3xl font-bold">Vous gérez trop de choses, dans trop d’outils.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{painPoints.map((item) => <article key={item} className="rounded-2xl border border-[var(--border)] bg-white p-5 text-[var(--muted-foreground)]">{item}</article>)}</div>
          <p className="mt-6 rounded-xl bg-[var(--secondary)] p-4 font-semibold">Avec Gramme, vous reprenez le contrôle de vos coûts et de votre organisation en quelques clics.</p>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-14">
          <h2 className="text-3xl font-bold">La solution en 3 piliers</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)] p-5"><h3 className="text-xl font-bold">⚙️ {pillar.title}</h3><p className="mt-3 text-[var(--muted-foreground)]">{pillar.text}</p></article>
          ))}</div>
        </section>

        <section id="comment" className="mx-auto w-full max-w-6xl px-5 pb-14">
          <h2 className="text-3xl font-bold">Comment ça marche</h2>
          <ol className="mt-6 grid gap-3 md:grid-cols-4">
            {["Importez vos recettes (scan IA ou saisie).", "Organisez vos matières & fournisseurs.", "Scannez vos factures fournisseurs.", "Décidez avec des marges à jour."].map((step, i) => (
              <li key={step} className="rounded-xl border border-[var(--border)] p-4"><span className="text-sm font-bold text-[#264021]">Étape {i + 1}</span><p className="mt-1 text-[var(--muted-foreground)]">{step}</p></li>
            ))}
          </ol>
          <a href="#demo" className="mt-6 inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">Voir une démo de 15 min</a>
        </section>

        <section id="fonctionnalites" className="mx-auto w-full max-w-6xl px-5 pb-14">
          <h2 className="text-3xl font-bold">Fonctionnalités clés</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{featureColumns.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-[var(--border)] bg-white p-5"><h3 className="text-xl font-bold">📌 {feature.title}</h3><ul className="mt-3 space-y-2 text-sm text-[var(--muted-foreground)]">{feature.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul></article>
          ))}</div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-14">
          <div className="rounded-2xl bg-[#264021] p-7 text-white">
            <h2 className="text-3xl font-bold">Le lien direct entre vos factures et vos marges recette.</h2>
            <p className="mt-3 text-white/85">La plupart des outils s’arrêtent au stock ou à la facturation. Gramme relie toute la chaîne : achats → matières → recettes → production → marge. Vous voyez où vous gagnez, et où vous perdez.</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-14" id="tarifs">
          <h2 className="text-3xl font-bold">Tarifs simples et lisibles</h2>
          <p className="mt-2 max-w-2xl text-[var(--muted-foreground)]">3 formules pour avancer à votre rythme, sans complexité inutile.</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#264021]">💳 {plan.name}</p>
                <p className="mt-3 text-4xl font-black">{plan.price}<span className="text-base font-semibold text-[var(--muted-foreground)]">{plan.cadence}</span></p>
                <p className="mt-3 text-sm text-[var(--muted-foreground)]">{plan.audience}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {plan.items.map((item) => (
                    <li key={item} className="text-[var(--muted-foreground)]">✓ {item}</li>
                  ))}
                </ul>
                <a href="#demo" className="mt-5 inline-flex rounded-xl bg-[#a8cf8c] px-4 py-2 font-semibold text-[#264021]">Choisir {plan.name}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-14">
          <h2 className="text-3xl font-bold">FAQ courte</h2>
          <div className="mt-6 space-y-3">{faqItems.map((item) => (
            <details key={item.q} className="rounded-xl border border-[var(--border)] p-4"><summary className="cursor-pointer font-semibold">{item.q}</summary><p className="mt-2 text-[var(--muted-foreground)]">{item.a}</p></details>
          ))}</div>
        </section>

        <section id="demo" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="rounded-2xl bg-[#a8cf8c] p-7 text-[#264021]">
            <h2 className="text-3xl font-black">Prêt à sécuriser vos marges ?</h2>
            <p className="mt-2 max-w-2xl">Réservez une démo et voyez en 15 minutes comment Gramme s’intègre à votre quotidien.</p>
            <form className="mt-5 grid gap-3 md:grid-cols-3">
              <input aria-label="Nom" className="h-12 rounded-xl border border-[#264021]/25 bg-white px-3" placeholder="Nom" />
              <input type="email" aria-label="Email" className="h-12 rounded-xl border border-[#264021]/25 bg-white px-3" placeholder="Email" />
              <button className="h-12 rounded-xl bg-[#264021] px-5 font-semibold text-white">Réserver une démo</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-8 text-sm text-[var(--muted-foreground)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Gramme</p>
          <div className="flex gap-4"><Link href="/mentions-legales">Mentions légales</Link><Link href="/confidentialite">Confidentialité</Link><Link href="/cgv">CGV</Link></div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    </div>
  );
}
