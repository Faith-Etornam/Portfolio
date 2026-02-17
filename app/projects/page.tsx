import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import ProjectHeader from "@/components/Projects/ProjectHeader";
import ProjectContainer from "@/components/Projects/ProjectContainer";

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
      <ProjectHeader />
      <ProjectContainer />

      <div className="mt-24 flex justify-center mb-6">
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
