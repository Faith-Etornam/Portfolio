"use client"; 

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Frontend Development Internship",
      issuer: "Ideation Axis",
      date: "2024",
      image: "/ideation-axis.jpg",
      link: "",
    },
    {
      id: 2,
      title: "Professional Foundations",
      issuer: "ALX",
      date: "2025",
      image: "/professional-foundations.png",
      link: "https://savanna.alxafrica.com/certificates/6GNznXTcpE",
    },
    {
      id: 3,
      title: "Backend Development (Python)",
      issuer: "ALX",
      date: "2026",
      image: "/backend-certificate.png",
      link: "https://savanna.alxafrica.com/certificates/EHSL5NTF6C",
    },
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">
            <Award size={18} />
            <span>Credentials</span>
          </div>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Licenses & Certifications
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Validating my expertise through recognized industry standards.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} 
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Certificate Image Area */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                {/* Fallback for missing image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Award size={48} opacity={0.2} />
                </div>

                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="mb-auto">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    Issued {cert.date}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {cert.link ? (
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
                    >
                      Show Credential <ExternalLink size={16} />
                    </Link>
                  ) : (
                    <span className="text-sm text-gray-400 dark:text-gray-500 italic cursor-not-allowed">
                      No verified link available
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
