import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-gray-900 flex flex-col md:flex-row overflow-hidden transition-colors duration-300">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-24 pb-12 z-10">
        {/* Intro Tag */}
        <div className="mb-4 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide">
            Available for Projects
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Hi, I&apos;m <span className="text-blue-600">Faith Etornam</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mb-6">
          I am a Full-Stack Engineer who bridges the gap between data-heavy
          backends and interactive frontends. Specializing in{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Python (Django)
          </span>{" "}
          for scalable server-side architecture, I extend those capabilities
          with{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            React & Next.js
          </span>{" "}
          to build high-performance web applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            href="/projects"
            className="px-8 py-3.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
          >
            View My Work <ArrowRight size={20} />
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
          <Link
            href="https://github.com/Faith-Etornam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/faith-etornam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="mailto:faithgbadegbe1@gmail.com"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Mail size={24} />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:p-0 relative bg-gray-50 dark:bg-gray-800/50 md:bg-transparent md:dark:bg-transparent">
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden z-10">
          <Image
            src="/profile.jpg"
            alt="Faith Etornam Gbadegbe"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
