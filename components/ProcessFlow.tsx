"use client";

import { motion } from "framer-motion";
import { Database, Code2, Rocket, ArrowRight } from "lucide-react";

const ProcessFlow = () => {
  const steps = [
    {
      id: "01",
      title: "Blueprint & Schema",
      description:
        "Before writing code, I design the database relationships and define the API contract. This ensures data integrity from day one.",
      icon: <Database className="w-6 h-6 text-blue-500" />,
      tags: ["ERD Diagrams", "System Design", "Scope"],
    },
    {
      id: "02",
      title: "Backend Core",
      description:
        "I build the logic first. Using Django/Python, I develop secure REST APIs, handle authentication, and set up the server architecture.",
      icon: <Code2 className="w-6 h-6 text-purple-500" />,
      tags: ["Django", "API Development", "Auth"],
    },
    {
      id: "03",
      title: "Frontend Integration",
      description:
        "Once the API is solid, I connect the Next.js frontend. This parallel workflow ensures the UI has real data to consume immediately.",
      icon: <Code2 className="w-6 h-6 text-pink-500" />,
      tags: ["React/Next.js", "Tailwind", "State Management"],
    },
    {
      id: "04",
      title: "Test & Deploy",
      description:
        "Rigorous testing of endpoints and UI flows. Finally, I configure the production environment (AWS/Vercel) and hand over the keys.",
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
      tags: ["CI/CD", "Postman", "Handover"],
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-20 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            The Engineering Process
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            I don&apos;t just &quot;write code.&quot; I follow a structured
            architectural workflow to ensure your application is scalable and
            maintainable.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
            >
              <div className="absolute -top-4 left-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs font-mono font-bold py-1 px-3 rounded-full text-gray-400 group-hover:text-blue-500 transition-colors shadow-sm">
                STEP {step.id}
              </div>

              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {step.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile Connector Arrow (Visible only on mobile/tablet) */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-300 dark:text-gray-700 z-10">
                  <ArrowRight className="rotate-90" size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
