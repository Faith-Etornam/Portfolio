import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Hero from "@/components/Home/HeroPage";
import HomeAccordion from "@/components/Home/HomeAccordion";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/Home/HomeService";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceCard />
      <TechStack />
      <HomeAccordion />
      <CTASection />
      <Footer />
    </>
  );
}
