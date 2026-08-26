import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/content/guides/types";
import { GUIDE_AUTHOR } from "@/content/guides/types";
import { formatGuideDate, guideToc } from "@/lib/guides";
import { renderInline } from "@/components/guides/renderInline";

export function GuideArticle({
  guide,
  rubrique = "Guide",
  base = "/guides",
}: {
  guide: Guide;
  /** Libellé affiché au-dessus du titre : « Guide » ou « Article ». */
  rubrique?: string;
  /** Base d'URL de la rubrique, pour le lien « à lire aussi ». */
  base?: string;
}) {
  const toc = guideToc(guide.blocks);

  return (
    <article className="mt-8">
      {guide.draft ? (
        <p
          role="status"
          className="mb-4 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950"
        >
          Brouillon — emplacements ⟨…⟩ à compléter avec des mesures réelles avant publication. Page non indexée.
        </p>
      ) : null}

      <header className="rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e9f55]">
          {guide.draft ? `${rubrique} · brouillon` : rubrique}
        </p>
        <h1 className="mt-3 text-3xl font-black leading-tight text-[#27421f] md:text-4xl">{guide.title}</h1>
        <p className="mt-5 max-w-[42rem] text-base leading-relaxed text-[#4d6952] sm:text-lg">{guide.intro}</p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted-foreground)]">
          <time dateTime={guide.publishedAt}>Publié le {formatGuideDate(guide.publishedAt)}</time>
          <span aria-hidden>·</span>
          <time dateTime={guide.updatedAt}>Mis à jour le {formatGuideDate(guide.updatedAt)}</time>
        </div>
      </header>

      <nav aria-label="Sommaire" className="mt-8 rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6e9f55]">Sommaire</p>
        <ol className="mt-3 space-y-2 text-sm">
          {toc.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="font-medium text-[#355329] underline-offset-2 hover:underline">
                {item.text}
              </a>
            </li>
          ))}
          <li>
            <a href="#faq" className="font-medium text-[#355329] underline-offset-2 hover:underline">
              Questions fréquentes
            </a>
          </li>
        </ol>
      </nav>

      <div className="prose-guide mt-10 max-w-[42rem] space-y-6 text-base leading-relaxed text-[#2f4f26]">
        {guide.blocks.map((block, index) => {
          if (block.type === "h2") {
            return (
              <h2 key={block.id} id={block.id} className="scroll-mt-28 pt-4 text-2xl font-bold text-[#27421f]">
                {block.text}
              </h2>
            );
          }
          if (block.type === "p") {
            return (
              <p key={`p-${index}`} className="text-[#4d6952]">
                {renderInline(block.text)}
              </p>
            );
          }
          if (block.type === "placeholder") {
            return (
              <aside
                key={block.id}
                className="rounded-2xl border border-dashed border-amber-400 bg-amber-50 p-5 text-sm text-amber-950"
              >
                <p className="font-mono font-semibold">{block.label}</p>
                <p className="mt-2 leading-relaxed">{block.hint}</p>
              </aside>
            );
          }
          if (block.type === "howto-steps") {
            return (
              <ol key={block.id} className="space-y-5">
                {block.steps.map((step) => (
                  <li key={step.name} className="rounded-2xl border border-[#dcead2] bg-white p-5">
                    <p className="font-bold text-[#355329]">{step.name}</p>
                    <p className="mt-2 text-[#4d6952]">{step.text}</p>
                  </li>
                ))}
              </ol>
            );
          }
          if (block.type === "table") {
            return (
              <div key={`table-${index}`} className="overflow-x-auto rounded-2xl border border-[#dcead2]">
                <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
                  <thead className="bg-[#264021] text-white">
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-[#f6fbf2]"}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-[#4d6952]">
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          return null;
        })}
      </div>

      <section id="faq" className="mt-14 max-w-[42rem] scroll-mt-28" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold text-[#27421f]">
          Questions fréquentes
        </h2>
        <dl className="mt-6 space-y-4">
          {guide.faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-[#dcead2] bg-white p-5">
              <dt className="font-bold text-[#355329]">{item.q}</dt>
              <dd className="mt-2 text-[#4d6952]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <aside className="mt-12 flex max-w-[42rem] gap-4 rounded-3xl border border-[#dcead2] bg-white p-5 sm:p-6">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl sm:size-20">
          <Image src={GUIDE_AUTHOR.image} alt="" fill sizes="80px" className="object-cover object-top" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6e9f55]">Auteur</p>
          <p className="mt-1 text-lg font-bold text-[#27421f]">{GUIDE_AUTHOR.name}</p>
          <p className="text-sm text-[#4d6952]">{GUIDE_AUTHOR.jobTitle}</p>
          <Link
            href={GUIDE_AUTHOR.url}
            className="mt-2 inline-block text-sm font-semibold text-[#355329] underline-offset-2 hover:underline"
          >
            À propos de Gramme et de Jeremy
          </Link>
        </div>
      </aside>

      <nav aria-label="Liens utiles" className="mt-10 max-w-[42rem] border-t border-[#dcead2] pt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6e9f55]">Continuer</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li>
            <Link
              href="/#fonctionnalites"
              className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] hover:bg-[#f6fbf2]"
            >
              Fonctionnalités logiciel boulangerie
            </Link>
          </li>
          <li>
            <Link
              href="/tarifs"
              className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] hover:bg-[#f6fbf2]"
            >
              Tarifs logiciel pâtisserie
            </Link>
          </li>
          <li>
            <Link
              href={`${base}/${guide.relatedSlug}`}
              className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] hover:bg-[#f6fbf2]"
            >
              {guide.relatedLabel}
            </Link>
          </li>
          <li>
            <Link
              href="/securite"
              className="block rounded-2xl border border-[#dcead2] bg-white px-4 py-3 text-sm font-semibold text-[#355329] hover:bg-[#f6fbf2]"
            >
              Confidentialité des recettes
            </Link>
          </li>
        </ul>
      </nav>

      <section className="mt-12 max-w-[42rem] rounded-3xl bg-[#264021] p-6 text-white sm:p-8">
        <h2 className="text-2xl font-bold">Voir Gramme sur votre atelier</h2>
        <p className="mt-3 text-white/85">
          Demandez une démonstration : on part de vos recettes et de vos contraintes, sans engagement.
        </p>
        <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">
          Demander une démonstration
        </Link>
      </section>
    </article>
  );
}
