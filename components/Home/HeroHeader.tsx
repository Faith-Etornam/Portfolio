"use client"

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const HeroHeader = () => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full min-h-screen md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-24 pb-12 z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-700 dark:text-white leading-tight mb-6 text-center md:text-left"
        >
          Hi, I&apos;m <span className="text-blue-600">Faith Etornam</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-500 dark:text-white leading-relaxed max-w-3xl mb-6 text-center md:text-left"
        >
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
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 mb-10"
        >
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
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6 text-gray-500  justify-center md:justify-start"
        >
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
        </motion.div>
      </motion.div>
    </>
  );
}

export default HeroHeader
