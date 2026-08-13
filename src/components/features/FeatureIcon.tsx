import type { FeatureIcon as FeatureIconName } from "@/content/features";

type Props = { name: FeatureIconName; className?: string };

/** Icônes des fonctionnalités, partagées entre l'accueil, le hub et les pages dédiées. */
export function FeatureIcon({ name, className }: Props) {
  const Icon = icons[name];
  return <Icon className={className} />;
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
  spark: ({ className }) => (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="m10 2 1.6 4.4L16 8l-4.4 1.6L10 14l-1.6-4.4L4 8l4.4-1.6L10 2Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};
