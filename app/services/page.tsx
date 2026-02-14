import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesHeader from "@/components/Service/ServiceHeader";
import ServiceTerminal from "@/components/Service/ServiceTerminal";
import ServiceSection from "@/components/Service/ServiceSection";
import ServiceAccordion from "@/components/Service/ServiceAccordion";
import faqs from "@/components/Service/ServiceFAQ";

export const metadata: Metadata = {
  title: "My Services",
  description:
    "Professional backend development services including scalable API design, secure database architecture, and custom web solutions using Python, Django, and React.js. & Next.js",

  openGraph: {
    title: "Technical Services | Faith Etornam",
    description:
      "Expert Backend Engineering and Web Development services. Specializing in scalable APIs and secure Python/Django architectures.",
    url: "/services",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Faith Etornam's Services",
      },
    ],
  },
};

const Services = () => {
  return (
    <>
      <Navbar />
      <ServicesHeader />
      <ServiceTerminal />
      <ServiceSection />
      <ServiceAccordion
        title="My Services"
        subHeading="Common questions about my services and process"
        items={faqs}
      />
      <Footer />
    </>
  );
};

export default Services;
