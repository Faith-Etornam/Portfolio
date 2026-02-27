"use client";

import { motion, Variants } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPython,
  SiDjango,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiGooglegemini,
  SiDocker, 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  {
    category: "Frontend & Mobile",
    items: [
      { name: "React", icon: <SiReact />, color: "text-blue-400" },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-black dark:text-white",
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        color: "text-blue-500",
      },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-500" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Python", icon: <SiPython />, color: "text-yellow-500" },
      { name: "Django", icon: <SiDjango />, color: "text-green-700" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
      { name: "Supabase", icon: <SiSupabase />, color: "text-emerald-500" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: <SiGit />, color: "text-red-500" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "Gemini", icon: <SiGooglegemini />, color: "text-blue-500" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-500"},
    ],
  },
];

// Framer Motion Variants for staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function TechStack() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium tracking-wide text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            My Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Technologies I Use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            I choose the right tool for the job. Here is the stack I use to
            build scalable, high-performance applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-colors duration-300"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
                {category.category}
              </h3>

              {/* Flex Layout for Icons */}
              <div className="flex flex-wrap gap-x-6 gap-y-8">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex flex-col items-center gap-3 w-[72px]"
                  >
                    <div
                      className={`text-4xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 ${skill.color} grayscale hover:grayscale-0 opacity-60 hover:opacity-100 drop-shadow-sm`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 text-center transition-colors duration-300 hover:text-gray-900 dark:hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
