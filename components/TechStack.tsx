"use client";

import { motion } from "framer-motion";

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
  SiGooglegemini
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
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        color: "text-pink-500",
      },
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
      { name: "Gemini", icon: <SiGooglegemini />, color: "text-orange-500" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3"
          >
            My Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technologies I Use
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I choose the right tool for the job. Here is the stack I use to
            build scalable, high-performance applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.4, }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>

              {/* Icons Grid within Card */}
              <div className="grid grid-cols-3 gap-6">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div
                      className={`text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${skill.color} grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
