import React from "react";
import Image from "next/image";
import { Download, Terminal, GraduationCap, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import TechStack from "@/components/TechStack";
import Certificates from "@/components/Certificates";
import TimeLineItem from "@/components/TimeLineItem";
import StatCard from "@/components/StatCard";

export default function About() {
  const timeLineItems = [
    {
      year: "Present",
      title: "Freelance Full-Stack Developer",
      subtitle: "Hiraki Digital / Remote",
      description:
        "Building bespoke web solutions for clients, focusing on scalable backend architectures and responsive frontend designs.",
      icon: <Briefcase size={20} />,
    },
    {
      year: "2025",
      title: "ALX Software Engineering Graduate",
      subtitle: "Backend Specialization",
      description:
        "Completed an intensive 12-month program focused on Holberton School curriculum. Mastered Low-level programming, Algorithms, System Engineering, and Backend Development.",
      icon: <GraduationCap size={20} />,
    },
    {
      year: "Current",
      title: "BSc. Computer Science & Engineering",
      subtitle: "University of Mines and Technology (UMaT)",
      description:
        "Deepening theoretical knowledge in Data Structures, Algorithms, and Computer Architecture while applying them to practical software projects.",
      icon: <GraduationCap size={20} />,
    },
  ];

  const statCard = [
    { number: "2+", label: "Years Coding" },
    { number: "5+", label: "Projects Built" },
    { number: "100%", label: "Commitment" },
    { number: "∞", label: "Learning" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* 1. HEADER HERO SECTION */}
      <section className="pt-32 pb-16 px-6 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Architecting <span className="text-blue-600">Robust Systems</span> &
          <br className="hidden md:block" /> Building{" "}
          <span className="text-blue-600">Digital Experiences</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I bridge the gap between complex backend logic and intuitive frontend
          interfaces.
        </p>
      </section>

      {/* 2. BIO & STATS SPLIT */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wider text-sm">
              <Terminal size={18} />
              <span>The Backstory</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              From UMaT Student to <br />
              Full-Stack Innovator.
            </h2>
            <div className="text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed">
              <p>
                My journey began with a curiosity for how things work under the
                hood. As a student at the
                <strong className="text-gray-900 dark:text-white">
                  {" "}
                  University of Mines and Technology (UMaT)
                </strong>
                , I realized that code wasn&apos;t just about syntax—it was
                about solving real-world problems.
              </p>
              <p>
                To sharpen my skills, I completed the rigorous{" "}
                <strong className="text-gray-900 dark:text-white">
                  ALX Backend Engineering
                </strong>{" "}
                program. There, I mastered the art of server-side logic,
                databases, and API architecture using Python and Django.
              </p>
              <p>
                Today, I don&apos;t just build APIs; I build complete products.
                By combining my backend strength with modern frontend tools like
                Next.js and Tailwind, I create applications that are as fast as
                they are beautiful.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Download size={20} /> Download CV
              </Link>
            </div>
          </div>

          {/* Right: The Image/Stats Card */}
          <div className="relative">
            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/40 rounded-full blur-3xl opacity-50 z-0"></div>

            <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full overflow-hidden relative">
                  <Image
                    src="/profile.jpg"
                    alt="Faith Etornam"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    Faith Etornam
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ghana, West Africa
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {statCard.map((item) => (
                  <StatCard key={item.label} number={item.number} label={item.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStack />

      {/* 4. EDUCATION & EXPERIENCE TIMELINE */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Journey So Far
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {timeLineItems.map((timeline) => (
              <TimeLineItem
                key={timeline.title}
                year={timeline.year}
                title={timeline.title}
                subtitle={timeline.subtitle}
                description={timeline.description}
                icon={timeline.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <Certificates />
      <Footer />
    </main>
  );
}
