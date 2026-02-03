import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",

  description:
    "Get in touch with Faith Etornam Gbadegbe. Available for backend engineering roles, API development projects, Frontend Development and technical collaborations.",

  openGraph: {
    title: "Get in Touch | Faith Etornam Gbadegbe",
    description:
      "Let's build something scalable together. Connect with me for backend opportunities.",
    url: "/contact",
  },
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default Contact;
