import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Explore the technical portfolio of Faith Etornam. Featuring scalable backend APIs, secure database architectures, and full-stack applications built with Python, Django, and React.js.",

  openGraph: {
    title: "My Projects | Faith Etornam",
    description:
      "A showcase of backend engineering projects and dynamic web applications. View source code and live demos.",
    url: "/projects",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Faith Etornam's Projects",
      },
    ],
  },
};

const Projects = () => {
  return (
  <>
    <Navbar />
    <Footer />
  </>
  )
};

export default Projects;
