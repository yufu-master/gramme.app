import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { FeaturesBento } from "@/components/landing/FeaturesBento";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { PainPoints } from "@/components/landing/PainPoints";
import { Pricing } from "@/components/landing/Pricing";
import { Roadmap } from "@/components/landing/Roadmap";
import { TrustBand } from "@/components/landing/TrustBand";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <FeaturesBento />
        <FeatureGrid />
        <TrustBand />
        <Pricing />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
