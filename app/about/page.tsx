import AboutHeader from "@/components/About/AboutHeader";
import AboutMe from "@/components/About/AboutMe";
import AboutTimeLine from "@/components/About/AboutTimeLine";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHeader />
      <AboutMe />
      <TechStack />
      <AboutTimeLine />
      <Certificates />
      <Footer />
    </>
  );
}
