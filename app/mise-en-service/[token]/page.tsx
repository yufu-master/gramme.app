import type { Metadata } from "next";
import { QuestionnaireForm } from "@/components/onboarding/QuestionnaireForm";

/** Page privée : jamais indexée, jamais dans le sitemap, jamais liée depuis le site. */
export const metadata: Metadata = {
  title: "Préparer votre mise en service",
  description: "Questionnaire de préparation Gramme.",
  robots: { index: false, follow: false, nocache: true },
};

export default async function MiseEnServicePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-20 pt-10 sm:px-5 sm:pt-14">
      <header className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6e9f55]">Mise en service</p>
        <h1 className="mt-3 text-3xl font-black leading-tight text-[#27421f] md:text-4xl">
          Préparons votre compte avant le rendez-vous
        </h1>
        <p className="mt-5 leading-relaxed text-[#4d6952]">
          Une dizaine de minutes. Ces réponses nous permettent de préparer votre compte en amont et de
          dimensionner correctement l&apos;accompagnement — pour que le jour du rendez-vous serve à
          travailler, pas à saisir.
        </p>
      </header>

      <div className="mt-10">
        <QuestionnaireForm token={token} />
      </div>

      <p className="mt-12 border-t border-[#dcead2] pt-6 text-sm text-[#4d6952]">
        Vos recettes, factures et documents restent votre propriété exclusive. Ils ne servent qu&apos;à
        préparer votre compte, ne sont partagés avec aucun autre établissement et sont supprimables à
        tout moment sur simple demande. Une question ?{" "}
        <a href="mailto:jeremy@gramme.app" className="font-semibold text-[#355329] underline">
          jeremy@gramme.app
        </a>
      </p>
    </main>
  );
}
