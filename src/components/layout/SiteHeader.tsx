"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  homeHash?: string;
};

const navItems: NavItem[] = [
  { label: "Fonctionnalités", href: "/#fonctionnalites", homeHash: "fonctionnalites" },
  { label: "Tarifs", href: "/#tarifs", homeHash: "tarifs" },
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "À propos", href: "/a-propos-de-gramme" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const goToHomeSection = (hash: string) => {
    if (pathname === "/") {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    window.location.href = `/#${hash}`;
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
          {navItems.map((item) => {
            if (item.homeHash) {
              const hash = item.homeHash;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goToHomeSection(hash)}
                  className="transition hover:text-[#355329]"
                >
                  {item.label}
                </button>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition hover:text-[#355329] ${
                  isActive(item.href) ? "font-semibold text-[#355329]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
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
          className="border-t border-[#d8e6cf] bg-white px-4 py-3 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
            {navItems.map((item) => {
              if (item.homeHash) {
                const hash = item.homeHash;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      goToHomeSection(hash);
                      setIsMobileMenuOpen(false);
                    }}
                    className="rounded-lg px-3 py-3 text-left text-sm text-[#355329] hover:bg-[#f6fbf2]"
                  >
                    {item.label}
                  </button>
                );
              }
              return (
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
              );
            })}
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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
