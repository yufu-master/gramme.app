import { FeaturesBento } from "@/components/landing/FeaturesBento";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { PainPoints } from "@/components/landing/PainPoints";
import { TrustBand } from "@/components/landing/TrustBand";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <FeaturesBento />
        <TrustBand />
      </main>
      <Footer />
    </div>
  );
}
