"use client"

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const HeroImage = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      boxShadow:
        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1), 0 0 25px 5px rgba(37, 99, 235, 0.4)",
      borderColor: "rgba(59, 130, 246, 0.8)",
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageVariants: Variants = {
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
    variants={containerVariants}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-112.5 md:h-112.5 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden z-10"
    >
      <motion.div variants={imageVariants} className="w-full h-full relative">
        <Image
          src="/profile.jpg"
          alt="Faith Etornam Gbadegbe"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
