import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

type Crumb = { name: string; path: string };

type BreadcrumbsProps = {
  currentLabel: string;
  items?: Crumb[];
};

export function Breadcrumbs({ currentLabel, items }: BreadcrumbsProps) {
  const crumbs: Crumb[] = items ?? [
    { name: "Accueil", path: "/" },
    { name: currentLabel, path: "#" },
  ];

  const schemaItems = crumbs.filter((c) => c.path !== "#");

  return (
    <>
      {schemaItems.length > 1 ? <JsonLd data={breadcrumbSchema(schemaItems)} /> : null}
      <nav aria-label="Fil d'Ariane" className="text-sm text-[var(--muted-foreground)]">
        <ol className="flex flex-wrap items-center gap-1.5">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={`${crumb.name}-${index}`} className="inline-flex items-center gap-1.5">
                {index > 0 ? <span aria-hidden className="text-[#a8cf8c]">/</span> : null}
                {isLast || crumb.path === "#" ? (
                  <span className="font-semibold text-[#355329]" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="hover:text-[#355329]">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
