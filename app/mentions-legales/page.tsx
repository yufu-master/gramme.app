import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Gramme",
  description: "Mentions légales du site Gramme.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f6fbf2,_#ffffff_45%)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-5 py-3">
          <p className="text-sm font-semibold text-[#355329]">Mentions légales</p>
          <Link href="/" className="text-sm font-medium text-[#355329] hover:underline">← Retour à l&apos;accueil</Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl px-5 pb-14 pt-24">
        <h1 className="text-3xl font-bold md:text-4xl">Mentions légales</h1>
        <p className="mt-4 text-sm text-[var(--muted-foreground)]">Dernière mise à jour : 22 février 2026</p>

        <section className="mt-10 space-y-6 text-sm leading-7 text-[var(--muted-foreground)] md:text-base">
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Éditeur du site</h2>
            <p className="mt-2">
              Gramme — [Raison sociale à compléter]<br />
              Forme juridique : [à compléter]<br />
              Capital social : [à compléter]<br />
              Siège social : [adresse à compléter]<br />
              Immatriculation : [RCS/SIREN à compléter]<br />
              E-mail : contact@gramme.app
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Directeur de la publication</h2>
            <p className="mt-2">[Nom du responsable de publication à compléter]</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Hébergeur</h2>
            <p className="mt-2">
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis<br />
              Site : https://vercel.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus présents sur ce site (textes, visuels, logos, éléments graphiques, structure) est protégé par le droit de la propriété intellectuelle.
              Toute reproduction, distribution ou exploitation non autorisée est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Limitation de responsabilité</h2>
            <p className="mt-2">
              Gramme s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur son site mais ne peut garantir l&apos;absence d&apos;erreurs ou d&apos;omissions.
              L&apos;utilisateur reste seul responsable de l&apos;utilisation des informations accessibles.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
