import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { LanguageProvider } from "@/context/LanguageContext";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TelemetryBar } from "@/components/layout/TelemetryBar";
import { ChurnSection } from "@/components/sections/ChurnSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DataEngSection } from "@/components/sections/DataEngSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RAGSection } from "@/components/sections/RAGSection";
import { StackSection } from "@/components/sections/StackSection";
import { VisionSection } from "@/components/sections/VisionSection";

function PortfolioApp() {
  return (
    <>
      <AnimatedBackground />
      <TelemetryBar />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-[1200px] px-4 pb-8 pt-28 sm:px-6 lg:px-8">
        <HeroSection />
        <div id="projects" className="space-y-20 py-16">
          <ChurnSection />
          <RAGSection />
          <DataEngSection />
          <VisionSection />
        </div>
        <StackSection />
        <ContactSection />
      </main>
      <div className="footer-fade relative z-10" aria-hidden="true" />
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
