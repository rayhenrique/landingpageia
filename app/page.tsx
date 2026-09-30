import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { ProcessSection } from "../components/ProcessSection";
import { ShowcaseSection } from "../components/ShowcaseSection";
import { AuthorSection } from "../components/AuthorSection";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProcessSection />
        <ShowcaseSection />
        <AuthorSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
