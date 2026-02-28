import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import ProjectHeader from "@/components/Projects/ProjectHeader";
import ProjectContainer from "@/components/Projects/ProjectContainer";
import { Github } from "lucide-react";

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
    <main className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col pt-32 pb-10 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/5 dark:bg-purple-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <Navbar />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col">
        {/* Sleek 'In Development' Status Pill */}
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 text-sm font-medium shadow-sm backdrop-blur-md">
            {/* Pulsing Dot */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span>
              <span className="hidden sm:inline">
                Some projects, including complex backend architectures, are
                actively cooking in the lab.
              </span>
              <span className="sm:hidden">
                Active projects currently brewing in the lab.
              </span>
            </span>
          </div>
        </div>

        <ProjectHeader />
        <ProjectContainer />

        {/* Redesigned GitHub Call to Action */}
        <div className="mt-28 mb-16 flex flex-col items-center justify-center relative w-full max-w-2xl mx-auto">
          {/* Elegant Divider Line */}
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200 dark:border-gray-800/60" />
          </div>

          <div className="relative flex justify-center bg-white dark:bg-gray-950 px-6">
            <Link
              href="https://github.com/Faith-Etornam"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-900/10 dark:shadow-white/5 hover:shadow-blue-500/20"
            >
              <Github className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
              <span>Explore the Vault on GitHub</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
