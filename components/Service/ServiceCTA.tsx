"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-16 text-center shadow-2xl"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-xs font-semibold uppercase tracking-wide mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for New Projects
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Ready to turn your architecture <br className="hidden md:block" />
            into{" "}
            <span className="text-blue-600 dark:text-blue-500">
              production code?
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a scalable backend, a full-stack overhaul, or an AI
            integration—I&apos;m ready to ship. Let&apos;s discuss your
            technical requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none ring-offset-2 focus:ring-2 ring-blue-500 w-full sm:w-auto"
            >
              Start a Conversation
              <MessageSquare className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-gray-700 dark:text-white transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 w-full sm:w-auto"
            >
              View My Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500 dark:text-gray-500">
            Typical response time:{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Within 24 hours
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
