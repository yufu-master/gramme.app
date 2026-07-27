import type { Metadata } from "next";
import { CTA } from "@/components/landing-v2/CTA";
import { Difference } from "@/components/landing-v2/Difference";
import { FAQ } from "@/components/landing-v2/FAQ";
import { FeatureShowcase } from "@/components/landing-v2/FeatureShowcase";
import { Footer } from "@/components/landing-v2/Footer";
import { Hero } from "@/components/landing-v2/Hero";
import { MultiDevice } from "@/components/landing-v2/MultiDevice";
import { Navbar } from "@/components/landing-v2/Navbar";
import { PainPoints } from "@/components/landing-v2/PainPoints";
import { Philosophy } from "@/components/landing-v2/Philosophy";
import { Pricing } from "@/components/landing-v2/Pricing";
import { SixPillars } from "@/components/landing-v2/SixPillars";
import { TestBanner } from "@/components/landing-v2/TestBanner";
import { Testimonials } from "@/components/landing-v2/Testimonials";
import { TrustBand } from "@/components/landing-v2/TrustBand";

export const metadata: Metadata = {
  title: "Gramme V2 (Test) | Pilotez votre marge au gramme près",
  description:
    "Version test du site Gramme — brochure commerciale, 6 piliers, scan IA, production consolidée et mercuriale intelligente.",
  robots: { index: false, follow: false },
};

export default function HomeV2() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TestBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <PainPoints />
        <SixPillars />
        <FeatureShowcase />
        <Philosophy />
        <Difference />
        <MultiDevice />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
