import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MascotsSection from "@/components/MascotsSection";
import ExamDeeSection from "@/components/ExamDeeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MascotsSection />
      <ExamDeeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
