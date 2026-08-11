import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/guides", label: "Guides" },
  { href: "/integrations", label: "Intégrations" },
  { href: "/a-propos-de-gramme", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/securite", label: "Sécurité" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgv", label: "CGV" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-white/90">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-5 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-lg font-black tracking-wide text-[#264021]">
            <Image src="/logos/gramme-icon.svg" alt="" width={28} height={27} className="h-auto" />
            <span>GRAMME</span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted-foreground)]">
            Logiciel de gestion pour boulangeries et pâtisseries : recettes, coûts matière, production, stock, mercuriale et marges — au gramme près.
          </p>
        </div>
        <nav aria-label="Pied de page" className="grid grid-cols-2 gap-3 text-sm sm:justify-items-end">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p>© {new Date().getFullYear()} Gramme — Logiciel gestion boulangerie &amp; pâtisserie</p>
          <a
            href="https://www.instagram.com/gramme.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-full border border-[#d8e6cf] bg-[#f6fbf2] text-[#355329] transition hover:bg-[#eef7e8]"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
