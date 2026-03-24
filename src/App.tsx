import { LanguageProvider } from "@/context/LanguageContext";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TelemetryBar } from "@/components/layout/TelemetryBar";
import { CTASection } from "@/components/sections/CTASection";
import { ChurnSection } from "@/components/sections/ChurnSection";
import { DataEngSection } from "@/components/sections/DataEngSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RAGSection } from "@/components/sections/RAGSection";
import { StackSection } from "@/components/sections/StackSection";
import { VisionSection } from "@/components/sections/VisionSection";

function PortfolioApp() {
  return (
    <>
      <TelemetryBar />
      <Navbar />
      <main className="site-content">
        <HeroSection />
        <div id="projects" className="projects-stack">
          <ChurnSection />
          <RAGSection />
          <DataEngSection />
          <VisionSection />
        </div>
        <StackSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
