"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FeatureIcon } from "@/components/features/FeatureIcon";
import { features, featurePath } from "@/content/features";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Tarifs", href: "/tarifs" },
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "Guides", href: "/guides" },
  { label: "Intégrations", href: "/integrations" },
  { label: "À propos", href: "/a-propos-de-gramme" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Refermer les menus à la navigation, sans effet : ajustement d'état pendant le rendu.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMobileMenuOpen(false);
    setIsFeaturesOpen(false);
    setIsMobileFeaturesOpen(false);
  }

  useEffect(() => {
    if (!isFeaturesOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsFeaturesOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!featuresRef.current?.contains(event.target as Node)) setIsFeaturesOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isFeaturesOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const isFeaturesActive = isActive("/fonctionnalites");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-[var(--border)] bg-white/95 shadow-[0_8px_30px_rgba(38,64,33,0.08)] backdrop-blur-xl"
          : "border-transparent bg-white/85 backdrop-blur-xl"
      }`}
    >
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-[1.28rem] font-black tracking-wide sm:text-[1.44rem]"
          aria-label="Gramme — retour à l'accueil"
        >
          <Image src="/logos/gramme-icon.svg" alt="" width={36} height={35} className="h-auto" priority />
          <span>GRAMME</span>
        </Link>

        <div className="hidden items-center gap-5 text-sm text-[var(--muted-foreground)] lg:flex xl:gap-6">
          <div
            ref={featuresRef}
            className="relative"
            onMouseEnter={() => setIsFeaturesOpen(true)}
            onMouseLeave={() => setIsFeaturesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={isFeaturesOpen}
              aria-haspopup="true"
              aria-controls="features-menu"
              onClick={() => setIsFeaturesOpen((value) => !value)}
              className={`inline-flex items-center gap-1.5 py-2 transition hover:text-[#355329] ${
                isFeaturesActive ? "font-semibold text-[#355329]" : ""
              }`}
            >
              Fonctionnalités
              <ChevronIcon className={`size-3 transition ${isFeaturesOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              id="features-menu"
              hidden={!isFeaturesOpen}
              className="absolute left-0 top-full z-50 w-[min(38rem,calc(100vw-2rem))] pt-3"
            >
              <div className="overflow-hidden rounded-2xl border border-[#dcead2] bg-white shadow-[0_24px_70px_rgba(38,64,33,0.16)]">
                <ul className="grid gap-1 p-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li key={feature.slug}>
                      <Link
                        href={featurePath(feature.slug)}
                        onClick={() => setIsFeaturesOpen(false)}
                        className="flex h-full gap-3 rounded-xl p-3 transition hover:bg-[#f6fbf2]"
                      >
                        <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#a8cf8c]/25 text-[#355329]">
                          <FeatureIcon name={feature.icon} className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-bold text-[#1a2e14]">{feature.name}</span>
                          <span className="mt-0.5 block text-xs leading-snug text-[var(--muted-foreground)]">
                            {feature.summary}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#dcead2] bg-[#f6fbf2] px-5 py-3">
                  <Link
                    href="/fonctionnalites"
                    onClick={() => setIsFeaturesOpen(false)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#355329] underline-offset-2 hover:underline"
                  >
                    Voir toutes les fonctionnalités
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition hover:text-[#355329] ${isActive(item.href) ? "font-semibold text-[#355329]" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://www.instagram.com/gramme.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-full border border-[#d8e6cf] bg-[#f6fbf2] text-[#355329] transition hover:bg-[#eef7e8]"
            aria-label="Instagram"
          >
            <InstagramIcon className="size-5" />
          </a>
          <Link
            href="/contact"
            className="rounded-xl bg-[#264021] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1f341a]"
          >
            Demander une démo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8e6cf] bg-white text-[#355329] lg:hidden"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${isMobileMenuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${isMobileMenuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-[#d8e6cf] bg-white px-4 py-3 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
            <div className="flex items-center gap-1">
              <Link
                href="/fonctionnalites"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex-1 rounded-lg px-3 py-3 text-sm hover:bg-[#f6fbf2] ${
                  isFeaturesActive ? "bg-[#f6fbf2] font-semibold text-[#355329]" : "text-[#355329]"
                }`}
              >
                Fonctionnalités
              </Link>
              <button
                type="button"
                aria-expanded={isMobileFeaturesOpen}
                aria-controls="mobile-features"
                aria-label={isMobileFeaturesOpen ? "Masquer les fonctionnalités" : "Afficher les fonctionnalités"}
                onClick={() => setIsMobileFeaturesOpen((value) => !value)}
                className="inline-flex size-11 items-center justify-center rounded-lg text-[#355329] hover:bg-[#f6fbf2]"
              >
                <ChevronIcon className={`size-3.5 transition ${isMobileFeaturesOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            <ul id="mobile-features" hidden={!isMobileFeaturesOpen} className="mb-1 ml-3 border-l border-[#dcead2] pl-2">
              {features.map((feature) => (
                <li key={feature.slug}>
                  <Link
                    href={featurePath(feature.slug)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-[#355329] hover:bg-[#f6fbf2]"
                  >
                    <FeatureIcon name={feature.icon} className="size-4 shrink-0 text-[#6e9f55]" />
                    {feature.name}
                  </Link>
                </li>
              ))}
            </ul>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm hover:bg-[#f6fbf2] ${
                  isActive(item.href) ? "bg-[#f6fbf2] font-semibold text-[#355329]" : "text-[#355329]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 rounded-xl bg-[#264021] px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Demander une démo
            </Link>
            <a
              href="https://www.instagram.com/gramme.app/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-1 inline-flex size-11 items-center justify-center self-center rounded-full border border-[#d8e6cf] bg-[#f6fbf2] text-[#355329]"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 8" fill="none" className={className} aria-hidden>
      <path d="m1 1.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
