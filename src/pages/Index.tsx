import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LaDraSection from "@/components/LaDraSection";
import AreaJuridicaSection from "@/components/AreaJuridicaSection";
import UbicacionSection from "@/components/UbicacionSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div data-animate><AreaJuridicaSection /></div>
        <div data-animate><LaDraSection /></div>
        <div data-animate><UbicacionSection /></div>
        <div data-animate><ContactoSection /></div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
