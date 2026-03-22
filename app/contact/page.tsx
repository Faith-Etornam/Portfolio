import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Faith Etornam to discuss scalable backend APIs, secure database architectures, and full-stack applications built with Python, Django, and React.js.",
  alternates: {
    canonical: "https://www.faithetornam.com/contact",
  },
  openGraph: {
    title: "Contact | Faith Etornam",
    description:
      "Have a project in mind or looking for a backend engineer? Reach out to Faith Etornam to discuss potential collaborations and technical solutions.",
    url: "/contact",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Faith Etornam",
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;
