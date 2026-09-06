import type { FeatureIcon as FeatureIconName } from "@/content/features";

type Props = { name: FeatureIconName; className?: string };

/**
 * Icônes des fonctionnalités, partagées entre l'accueil, le hub et les pages dédiées.
 *
 * La taille par défaut n'est pas décorative : un `<svg>` sans largeur ni hauteur
 * prend TOUTE la place de son conteneur. Un appel sans `className` avait suffi
 * pour transformer les quatre cartes de « Les modules concernés » en affiches.
 */
export function FeatureIcon({ name, className }: Props) {
  const Icon = icons[name];
  return <Icon className={className ?? "size-4"} />;
}

const icons: Record<FeatureIconName, (props: { className?: string }) => React.ReactElement> = {
  camera: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M2.5 6.5h3l1.2-2h6.6l1.2 2h3v9h-15v-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  book: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4 3.5h9a3 3 0 0 1 3 3V16H7a3 3 0 0 0-3 3V3.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 16h9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  scan: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M6 3H3v3M14 3h3v3M6 17H3v-3M17 14v3h-3M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  layers: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="m10 3 7 4-7 4-7-4 7-4ZM3 11l7 4 7-4M3 14.5l7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  box: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="m10 2 7 4v8l-7 4-7-4V6l7-4Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="m3 6 7 4 7-4M10 10v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  users: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="7" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13.5" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 16a4.5 4.5 0 0 1 9 0M10.5 16a3.5 3.5 0 0 1 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  tag: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M10.5 2.5H17v6.5l-7.5 7.5a1.5 1.5 0 0 1-2.1 0l-4.4-4.4a1.5 1.5 0 0 1 0-2.1L10.5 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="13.5" cy="6.5" r="1.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  thermo: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M8 11.8V4.5a2 2 0 1 1 4 0v7.3a4 4 0 1 1-4 0Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8v6.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  flask: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M8 2.5v5L3.8 15a1.5 1.5 0 0 0 1.3 2.2h9.8a1.5 1.5 0 0 0 1.3-2.2L12 7.5v-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.8 2.5h6.4M5.6 12.5h8.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  calendar: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <rect x="2.75" y="4.25" width="14.5" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.75 8.25h14.5M6.5 2.5v3.5M13.5 2.5v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  store: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M3 8.5V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2.5 4.5h15L18 8a2.2 2.2 0 0 1-4 .8A2.2 2.2 0 0 1 10 8a2.2 2.2 0 0 1-4 .8A2.2 2.2 0 0 1 2 8l.5-3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  euro: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M14 5.4a5 5 0 1 0 0 9.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.5 8.5h7M3.5 11.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  spark: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="m10 2 1.6 4.4L16 8l-4.4 1.6L10 14l-1.6-4.4L4 8l4.4-1.6L10 2Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};
