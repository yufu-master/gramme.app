import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CGV | Gramme",
  description: "Conditions générales de vente de Gramme.",
};

export default function CgvPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f6fbf2,_#ffffff_45%)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-5 py-3">
          <p className="text-sm font-semibold text-[#355329]">CGV</p>
          <Link href="/" className="text-sm font-medium text-[#355329] hover:underline">← Retour à l&apos;accueil</Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl px-5 pb-14 pt-24">
        <h1 className="text-3xl font-bold md:text-4xl">Conditions Générales de Vente (CGV)</h1>
        <p className="mt-4 text-sm text-[var(--muted-foreground)]">Dernière mise à jour : 22 février 2026</p>

        <section className="mt-10 space-y-6 text-sm leading-7 text-[var(--muted-foreground)] md:text-base">
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">1. Objet</h2>
            <p className="mt-2">
              Les présentes CGV définissent les conditions de souscription et d&apos;utilisation des services proposés par Gramme,
              solution logicielle de gestion et de pilotage pour les boulangeries-pâtisseries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">2. Prestations</h2>
            <p className="mt-2">
              Gramme propose des abonnements mensuels donnant accès à la plateforme, avec des niveaux de services variables
              selon la formule choisie (Starter, Pro, Enterprise) ainsi qu&apos;une prestation de mise en route.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">3. Prix et facturation</h2>
            <p className="mt-2">
              Les prix sont exprimés en euros hors taxes, sauf mention contraire. Les abonnements sont facturés selon la périodicité
              prévue à la commande. Toute somme non réglée à échéance peut entraîner la suspension de l&apos;accès au service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">4. Durée et résiliation</h2>
            <p className="mt-2">
              L&apos;abonnement est conclu pour la durée indiquée lors de la souscription. Il peut être résilié à l&apos;échéance,
              selon les modalités prévues au contrat commercial ou sur simple demande écrite pour les offres sans engagement long terme.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">5. Responsabilités</h2>
            <p className="mt-2">
              Gramme est tenu à une obligation de moyens pour la fourniture du service. La responsabilité de Gramme ne saurait être engagée
              en cas d&apos;interruption temporaire, de force majeure ou de mauvaise utilisation de la plateforme par le client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">6. Droit applicable</h2>
            <p className="mt-2">
              Les présentes CGV sont régies par le droit français. En cas de litige, et à défaut d&apos;accord amiable,
              compétence expresse est attribuée aux tribunaux du ressort du siège social de Gramme.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-white p-4">
            <p>
              Informations à personnaliser : raison sociale, numéro SIREN/RCS, adresse du siège, modalités de résiliation,
              et juridiction compétente exacte.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
