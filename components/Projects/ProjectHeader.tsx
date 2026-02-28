"use client";

import { motion } from "framer-motion";

export default function ProjectHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 mt-2">
      <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 text-sm font-medium shadow-sm backdrop-blur-md">
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

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
      >
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 dark:from-blue-600 dark:to-white">
          Featured
        </span>{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-white dark:to-blue-700">
          Projects
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
      >
        A collection of my technical work, ranging from scalable backend
        architectures and multi-tenant systems to dynamic, interactive frontend
        applications.
      </motion.p>
    </div>
  );
}
