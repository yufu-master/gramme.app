"use client";

import { BrandIcon, BrandWordmark } from "@/components/landing/Brand";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { id: "piliers", label: "Piliers" },
    { id: "fonctionnalites", label: "Fonctionnalités" },
    { id: "temoignages", label: "Avis" },
    { id: "tarifs", label: "Tarifs" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-10 z-50 border-b border-[var(--border)]/70 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4" aria-label="Navigation principale v2">
        <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="flex items-center gap-2.5" aria-label="Aller au début de la page">
          <BrandIcon className="h-8 w-8" />
          <BrandWordmark className="text-sm tracking-[0.15em]" />
          <span className="rounded-md bg-[var(--brand)]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-dark)]">
            V2
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-[var(--muted-foreground)] lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://gramme-ia.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] sm:inline"
          >
            Connexion
          </a>
          <Button className="bg-[var(--brand)] text-white shadow-sm hover:bg-[#96be7d]" aria-label="Essayer Gramme gratuitement">
            Essai gratuit
          </Button>
        </div>
      </nav>
    </header>
  );
}
