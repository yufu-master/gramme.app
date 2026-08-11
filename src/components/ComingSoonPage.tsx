import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

type ComingSoonProps = {
  title: string;
  description?: string;
  links?: { href: string; label: string }[];
};

export function ComingSoonPage({ title, description, links }: ComingSoonProps) {
  const related =
    links ??
    ([
      { href: "/comment-ca-marche", label: "Comment marche le logiciel boulangerie" },
      { href: "/tarifs", label: "Tarifs Gramme" },
      { href: "/contact", label: "Demander une démonstration" },
    ] as const);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
      <Breadcrumbs currentLabel={title} />
      <section className="mt-8 flex flex-1 items-center justify-center">
        <div className="w-full max-w-xl rounded-3xl border border-[#dcead2] bg-white p-8 text-center shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6e9f55]">{title}</p>
          <h1 className="mt-3 text-3xl font-black text-[#27421f] md:text-4xl">BIENTÔT DISPONIBLE</h1>
          <p className="mt-4 text-[#4d6952]">
            {description ?? "Cette page est en préparation. Revenez très bientôt pour la découvrir."}
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">
            Demander une démonstration
          </Link>
        </div>
      </section>
      <RelatedLinks links={[...related]} />
    </main>
  );
}
