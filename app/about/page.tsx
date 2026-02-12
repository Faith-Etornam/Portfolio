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
    "Get in touch with Faith Etornam. Available for backend engineering roles, API development projects, Frontend Development and technical collaborations.",

  openGraph: {
    title: "About Me | Faith Etornam",
    description:
      "Let's build something scalable together. Connect with me for backend opportunities.",
    url: "/contact",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Faith Etornam's Contact",
      },
    ],
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
