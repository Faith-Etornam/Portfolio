import Footer from "@/components/Footer";
import Hero from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceCard />
      <TechStack />
      <Footer />
    </>
  );
}
