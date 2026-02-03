import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Explore the technical portfolio of Faith Etornam Gbadegbe. Featuring scalable backend APIs, secure database architectures, and full-stack applications built with Python, Django, and React.js.",

  openGraph: {
    title: "My Projects | Faith Etornam Gbadegbe",
    description:
      "A showcase of backend engineering projects and dynamic web applications. View source code and live demos.",
    url: "/projects",
  },
};

const Projects = () => {
  return (
  <>
    <Navbar />
  </>
  )
};

export default Projects;
