import { Metadata } from "next";
import AboutHeader from "@/components/About/AboutHeader";
import AboutMe from "@/components/About/AboutMe";
import AboutTimeLine from "@/components/About/AboutTimeLine";
import Certificates from "@/components/About/Certificates";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Faith Etornam, a Backend Engineer and Computer Science student passionate about building scalable APIs, modern web applications, and digital solutions.",

  openGraph: {
    title: "About Faith Etornam | Backend & Frontend Engineer",
    description:
      "I bridge the gap between complex backends and interactive frontends. Explore my journey, skills, and technical experience.",

    url: "/about",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Faith Etornam - About Me",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};

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
