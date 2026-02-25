import CTASection from "@/components/Home/CTASection";
import Footer from "@/components/Footer";
import Hero from "@/components/Home/HeroPage";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/Home/HomeService";
import TechStack from "@/components/TechStack";
import Accordion from "@/components/ui/Accordion";
import faqs from "@/components/Home/HomeFAQs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceCard />
      <TechStack />
      <Accordion
        title="FAQs"
        subHeading="Common questions about my services and process"
        items={faqs}
      />
      <CTASection />
      <Footer />
    </>
  );
}
