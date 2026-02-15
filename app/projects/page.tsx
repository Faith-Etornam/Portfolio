import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/Projects/ProjectCard";
import { Metadata } from "next";
import projects from "@/components/Projects/projects";

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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-24 px-6 sm:px-12 lg:px-20">
      <Navbar />
      <div className="max-w-4xl mx-auto mb-16 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Featured <span className="text-blue-600">Projects</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
          A collection of applications that demonstrate my ability to solve
          complex problems with clean code and scalable architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-24 flex justify-center">
        <Link
          href="https://github.com/Faith-Etornam"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          View More on GitHub
        </Link>
      </div>
      <Footer />
    </main>
  );
}
