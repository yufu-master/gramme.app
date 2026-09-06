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

  /*
   * Le balisage `BreadcrumbList` sort d'ICI, et de nulle part ailleurs.
   *
   * Les pages de guide et d'article en émettaient un SECOND, différent : celui
   * du composant s'arrêtait à « Accueil › Guides » parce que la dernière miette
   * portait `path: "#"`, et celui de la page allait jusqu'à l'article. Deux
   * `BreadcrumbList` dans le même document, dont un incomplet, vérifié sur la
   * production le 06/09/2026.
   *
   * La dernière miette peut donc porter sa VRAIE adresse : elle se rend en
   * texte de toute façon (`isLast`), et le balisage devient complet.
   */
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
