import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",

  description:
    "Get in touch with Faith Etornam. Available for backend engineering roles, API development projects, Frontend Development and technical collaborations.",

  openGraph: {
    title: "Get in Touch | Faith Etornam",
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

const Contact = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default Contact;
