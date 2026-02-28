"use client";

import { Code, Server, TrendingUp } from "lucide-react";
import { motion, Variants } from "framer-motion";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "Frontend Development",
    description:
      "I craft pixel-perfect, responsive interfaces. My designs are intuitive, ensuring users stay engaged and convert across all devices.",
    icon: <Code className="w-8 h-8 text-blue-500" aria-hidden="true" />,
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "React-Native",
      "Next.js",
      "Tanstack Query",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "Firebase",
    ],
  },
  {
    title: "Custom Backend",
    description:
      "Secure, high-performance server-side architectures. I ensure your platform runs with zero downtime and scales effortlessly.",
    icon: <Server className="w-8 h-8 text-green-500" aria-hidden="true" />,
    techStack: [
      "Python",
      "Django",
      "Django Rest Framework",
      "MySQL",
      "REST APIs",
      "JWT",
      "Docker",
    ],
  },
  {
    title: "SEO & Performance",
    description:
      "Visibility is key. I optimize site architecture and load speeds to maximize search engine ranking and improve user retention.",
    icon: <TrendingUp className="w-8 h-8 text-purple-500" aria-hidden="true" />,
    techStack: ["Core Web Vitals", "SSR", "Semantic HTML"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function HomeService() {
  return (
    <section
      className="font-body py-20 bg-gray-50 dark:bg-gray-900"
      aria-label="Services offered"
    >
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3"
        >
          Services <span className="dark:text-white">Offered</span>
        </motion.p>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            How I Can Assist You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-xl"
          >
            I engineer robust digital ecosystems. By bridging the gap between
            high-performance backends and interactive frontends, I deliver
            software that is secure, scalable, and built to last.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              techStack={service.techStack}
              icon={service.icon}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
