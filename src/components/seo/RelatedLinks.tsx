import Link from "next/link";

type RelatedLink = { href: string; label: string };

export function RelatedLinks({
  title = "Continuer sur Gramme",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (!links.length) return null;

  return (
    <aside className="mt-12 border-t border-[#dcead2] pt-8" aria-label="Liens connexes">
      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6e9f55]">{title}</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
