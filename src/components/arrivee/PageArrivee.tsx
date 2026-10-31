import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageArrivee } from "@/content/arrivee";
import { RappelForm } from "./RappelForm";

/**
 * Le gabarit unique des pages d'arrivée du papier. Voir `content/arrivee.ts`.
 * Pensé pour un téléphone tenu d'une main, lu en deux minutes : une colonne,
 * dans l'ordre accroche, factures, marge, Jeremy, deux boutons. Ni menu ni pied
 * de page (`SiteChrome` les retire sur ces chemins).
 */
export function PageArrivee({ chemin }: { chemin: string }) {
  const page = pageArrivee(chemin);

  return (
    <main className="mx-auto w-full max-w-md flex-1 pb-12">
      <section>
        <Image
          src={page.image.src}
          alt={page.image.alt}
          width={page.image.width}
          height={page.image.height}
          priority
          sizes="(max-width: 448px) 100vw, 448px"
          className="h-auto w-full"
        />
        <div className="px-5 pt-6">
          <p className="text-sm font-bold uppercase tracking-wide text-[#5f8a47]">Gramme</p>
          <h1 className="mt-2 text-3xl font-black leading-tight text-[#264021]">{page.accroche}</h1>
          <p className="mt-4 text-base text-[#4d6952]">{page.suite}</p>
        </div>
      </section>

      <section className="mt-10 px-5" aria-labelledby="etape-facture">
        <p className="text-sm font-bold text-[#5f8a47]">1 · Votre facture</p>
        <h2 id="etape-facture" className="mt-1 text-xl font-black text-[#264021]">
          Vous photographiez la facture du fournisseur
        </h2>
        <p className="mt-2 text-[#4d6952]">
          Les lignes et les prix entrent seuls dans votre liste de prix d&apos;achat.
        </p>
        <Image
          src="/images/app/factures-telephone.jpg"
          alt="La liste des factures fournisseurs dans Gramme"
          width={720}
          height={1558}
          sizes="(max-width: 448px) 70vw, 320px"
          className="mx-auto mt-4 h-auto w-4/5 rounded-2xl border border-[#dcead2] shadow-[0_12px_40px_rgba(58,92,39,0.1)]"
        />
      </section>

      <section className="mt-10 px-5" aria-labelledby="etape-marge">
        <p className="text-sm font-bold text-[#5f8a47]">2 · Votre marge</p>
        <h2 id="etape-marge" className="mt-1 text-xl font-black text-[#264021]">
          Le coût et la marge de chaque recette se recalculent
        </h2>
        <p className="mt-2 text-[#4d6952]">
          Quand le prix du beurre change sur une facture, la fiche de chaque recette qui en contient
          suit. Vous voyez ce qu&apos;elle vous rapporte, au gramme près.
        </p>
        <Image
          src="/images/app/croissant-couts-telephone.png"
          alt="Le détail d'un croissant dans Gramme : matières, main d'œuvre, emballage, prix de vente et marge"
          width={1170}
          height={2532}
          sizes="(max-width: 448px) 70vw, 320px"
          className="mx-auto mt-4 h-auto w-4/5 rounded-2xl border border-[#dcead2] shadow-[0_12px_40px_rgba(58,92,39,0.1)]"
        />
      </section>

      <section className="mt-10 px-5" aria-labelledby="jeremy">
        <div className="flex items-center gap-4 rounded-2xl bg-[#f6fbf2] p-4">
          <Image
            src="/images/jeremy-chef-rd.jpg"
            alt="Jeremy, chef pâtissier et fondateur de Gramme"
            width={852}
            height={1280}
            sizes="96px"
            className="h-28 w-20 shrink-0 rounded-xl object-cover object-top"
          />
          <div>
            <h2 id="jeremy" className="font-black text-[#264021]">
              Jeremy, chef pâtissier et fondateur
            </h2>
            <p className="mt-1 text-sm text-[#4d6952]">
              J&apos;ai construit Gramme pour mon propre laboratoire : je voulais savoir ce que
              chaque fournée me rapportait vraiment.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 px-5" aria-labelledby="suite">
        <h2 id="suite" className="text-xl font-black text-[#264021]">
          La suite, comme vous voulez
        </h2>
        <div className="mt-4 rounded-2xl border border-[#dcead2] bg-white p-5 shadow-[0_12px_40px_rgba(58,92,39,0.08)]">
          <RappelForm chemin={chemin} />
        </div>
        <Link
          href="/demo"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#264021] px-5 py-4 text-base font-semibold text-[#264021]"
        >
          Voir une démo
          <ArrowRight className="h-5 w-5" aria-hidden />
        </Link>
        <p className="mt-2 text-center text-xs text-[var(--muted-foreground)]">
          La démo dure une heure, en visio, sur un atelier complet.
        </p>
      </section>
    </main>
  );
}
