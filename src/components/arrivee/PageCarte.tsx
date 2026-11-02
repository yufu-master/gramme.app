import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, UserPlus } from "lucide-react";
import { carteContact, type CarteContact } from "@/content/cartes-contact";
import { SITE_URL } from "@/lib/seo";
import { PrixBeurre } from "./PrixBeurre";
import { RappelForm } from "./RappelForm";

function carteOuErreur(identifiant: string) {
  const carte = carteContact(identifiant);
  if (!carte) throw new Error(`Carte inconnue : ${identifiant}`);
  return carte;
}

/** Pas d'openGraph : cette page ne se partage pas, on y arrive par une carte tenue en main. */
export function metadonneesCarte(identifiant: string): Metadata {
  const carte = carteOuErreur(identifiant);
  return {
    title: `Gramme, présenté par ${carte.prenom} ${carte.nom}`,
    description: "Gramme recalcule le coût et la marge de chaque recette à partir de vos factures.",
    robots: { index: false, follow: false },
    alternates: { canonical: `${SITE_URL}${carte.chemin}` },
  };
}

const ATELIER = [
  {
    titre: "Recettes",
    texte: "Vos fiches, photographiées ou importées depuis Excel, deviennent des recettes chiffrées et prêtes pour le laboratoire.",
    image: "/images/app/croissant-couts-telephone.png",
    alt: "Le détail des coûts d'un croissant dans Gramme",
  },
  {
    titre: "Production et stock",
    texte: "Le jour est posé avant d'entrer au fournil, et le stock se met à jour tout seul.",
    image: "/images/app/accueil-atelier-telephone.png",
    alt: "L'accueil de Gramme en mode atelier",
  },
  {
    titre: "Hygiène",
    texte: "Températures, nettoyage, lots et réceptions : vos registres se tiennent au téléphone.",
    image: "/images/app/haccp-temperatures-telephone.png",
    alt: "Le relevé des températures dans Gramme",
  },
  {
    titre: "Prix d'achat",
    texte: "Tous vos prix fournisseurs au même endroit, tenus à jour par les factures.",
    image: "/images/app/mercuriale-telephone.png",
    alt: "La liste des prix d'achat dans Gramme",
  },
];

const CHAMP = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const TITRE = "text-[clamp(1.9rem,9vw,3.75rem)] font-black leading-[1.02] tracking-tight";
const CAPTURE = "h-auto w-full max-w-[17rem] rounded-2xl";

function Joindre({ carte, sombre }: { carte: CarteContact; sombre?: boolean }) {
  return (
    <div className="space-y-3">
      <a
        href={`tel:${carte.telephoneInternational}`}
        className={`carte-action flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-lg font-semibold ${sombre ? "bg-[#a8cf8c] text-[#1f341a]" : "bg-[#264021] text-white"}`}
      >
        <Phone className="h-5 w-5" aria-hidden />
        Appeler le {carte.telephone}
      </a>
      <a
        href={`/contact/${carte.identifiant}`}
        className="carte-action flex w-full items-center justify-center gap-2 rounded-xl border-2 border-current px-5 py-4 text-base font-semibold"
      >
        <UserPlus className="h-5 w-5" aria-hidden />
        Enregistrer le contact
      </a>
      <a href={`mailto:${carte.email}`} className="flex items-center justify-center gap-2 py-2 text-base font-medium">
        <Mail className="h-4 w-4" aria-hidden />
        {carte.email}
      </a>
    </div>
  );
}

/**
 * Où mène le QR d'une carte de visite : Gramme expliqué en quelques écrans,
 * puis la personne rencontrée. Chaque chapitre a sa couleur, et le numéro reste
 * sous le pouce d'un bout à l'autre sur téléphone.
 */
export function PageCarte({ identifiant }: { identifiant: string }) {
  const carte = carteOuErreur(identifiant);
  const nomComplet = `${carte.prenom} ${carte.nom}`;
  const estJeremy = carte.identifiant === "jeremy";

  return (
    <main className="w-full flex-1 pb-20 lg:pb-0">
      <section className="bg-[#3f5e2e] text-white">
        <div className={`${CHAMP} flex items-center justify-between gap-4 py-5`}>
          <Image src="/images/gramme-logo.png" alt="Gramme" width={2000} height={1952} priority sizes="44px" className="h-auto w-11" />
          <a href={`tel:${carte.telephoneInternational}`} className="carte-action hidden items-center gap-2 rounded-xl bg-[#a8cf8c] px-4 py-3 font-semibold text-[#1f341a] lg:flex">
            <Phone className="h-4 w-4" aria-hidden />
            Appeler {carte.prenom}, {carte.telephone}
          </a>
        </div>
        <div className={`${CHAMP} pb-10 pt-4 lg:pb-20 lg:pt-10`}>
          <h1 className="text-[clamp(2rem,10vw,7.5rem)] font-black leading-[0.98] tracking-tight">
            Votre marge,
            <br />
            au gramme près.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
            Gramme est l&apos;application des boulangers et des pâtissiers. Photographiez vos factures : le coût et la marge de chaque recette suivent.
          </p>
          <p className="mt-4 text-base font-semibold text-[#cfe6bd]">{nomComplet} vous présente l&apos;essentiel, en deux minutes.</p>
        </div>
        <div className="relative h-[46svh] min-h-72 overflow-hidden lg:h-[70svh]">
          <Image
            src="/images/hero_gramme_atelier_phone.png"
            alt="Gramme ouvert sur un téléphone, au-dessus d'un plan de travail de fournil"
            fill
            priority
            sizes="100vw"
            className="carte-derive object-cover object-center"
          />
        </div>
      </section>

      <section className="bg-[#e6f2dd] py-20 text-[#264021] lg:py-32">
        <div className={`${CHAMP} grid items-center gap-10 lg:grid-cols-2`}>
          <div className="carte-apparait">
            <h2 className={TITRE}>La facture se saisit en photo.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Les lignes et les prix de vos fournisseurs entrent seuls dans Gramme. Moins de saisie à la main, et une liste de prix d&apos;achat toujours juste.
            </p>
          </div>
          <Image
            src="/images/app/factures-telephone.jpg"
            alt="La liste des factures fournisseurs dans Gramme"
            width={720}
            height={1558}
            sizes="272px"
            className={`${CAPTURE} carte-apparait mx-auto`}
          />
        </div>
      </section>

      <section className="bg-[#a8cf8c] py-20 text-[#1f341a] lg:py-32">
        <div className={`${CHAMP} grid items-center gap-8 lg:grid-cols-2 lg:gap-16`}>
          <div className="carte-apparait">
            <h2 className={TITRE}>Faites monter le beurre.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              C&apos;est ce que Gramme fait à chaque facture, sur toutes vos recettes. Essayez avec un croissant de notre atelier de démonstration, vendu 1,40 € TTC.
            </p>
          </div>
          <PrixBeurre />
        </div>
      </section>

      <section className="bg-white py-20 text-[#264021] lg:py-32">
        <div className={CHAMP}>
          <h2 className={`${TITRE} carte-apparait max-w-4xl`}>Et tout l&apos;atelier au même endroit.</h2>
          <ul className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
            {ATELIER.map((a) => (
              <li key={a.titre} className="carte-apparait flex items-center gap-5">
                <div className="h-44 w-28 shrink-0 overflow-hidden rounded-xl bg-[#e6f2dd] sm:h-52 sm:w-32">
                  <Image src={a.image} alt={a.alt} width={1170} height={2532} sizes="128px" className="h-auto w-full" />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">{a.titre}</h3>
                  <p className="mt-2 text-base leading-relaxed">{a.texte}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#e6f2dd] py-20 text-[#264021] lg:py-32">
        <div className={`${CHAMP} grid items-center gap-10 lg:grid-cols-2`}>
          <div className="carte-apparait">
            <h2 className={TITRE}>À partir de 49 € par mois.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Starter à 49 € HT, Pro à 89 € HT, sans engagement en mensuel et sans module à payer en plus. L&apos;installation accompagnée est facturée une seule fois, à partir de 300 € HT.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              {estJeremy
                ? "J'ai construit Gramme pour mon propre laboratoire : je voulais savoir ce que chaque fournée me rapportait vraiment."
                : "Gramme a été pensé avec Jeremy Tuaz, chef pâtissier, pour savoir ce que chaque fournée rapporte vraiment."}
            </p>
          </div>
          <Image
            src="/images/jeremy-chef-rd.jpg"
            alt="Jeremy Tuaz, chef pâtissier et fondateur de Gramme"
            width={852}
            height={1280}
            sizes="(max-width: 1024px) 80vw, 400px"
            className="carte-apparait mx-auto h-auto w-4/5 max-w-sm rounded-2xl"
          />
        </div>
      </section>

      <section className="bg-[#264021] py-20 text-white lg:py-32">
        <div className={`${CHAMP} grid gap-12 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <h2 className={TITRE}>{nomComplet}</h2>
            <p className="mt-3 text-lg font-semibold text-[#cfe6bd]">{carte.fonction}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{carte.phrase}</p>
            <div className="mt-8 max-w-md">
              <Joindre carte={carte} sombre />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black tracking-tight">Pas le temps maintenant ?</h3>
            <div className="mt-4 rounded-2xl bg-white p-5 text-[var(--foreground)]">
              <RappelForm chemin={carte.chemin} />
            </div>
            <Link href="/demo" className="mt-6 flex items-center justify-center gap-1.5 font-semibold">
              Voir une démo de Gramme
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 bg-[#264021] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-white lg:hidden">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{nomComplet}</p>
          <p className="truncate text-sm text-[#cfe6bd]">{carte.telephone}</p>
        </div>
        <a href={`tel:${carte.telephoneInternational}`} className="carte-action flex shrink-0 items-center gap-2 rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#1f341a]">
          <Phone className="h-4 w-4" aria-hidden />
          Appeler
        </a>
      </div>
    </main>
  );
}
