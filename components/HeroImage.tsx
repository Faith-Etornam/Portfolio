"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const HeroImage = () => {
  const [isExpanded, setIsExpanded] = useState(false);


  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

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
    <>
      <motion.div
        layoutId="profile-image-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={!isExpanded ? "hover" : undefined}
        viewport={{ once: true }}
        onClick={() => setIsExpanded(true)}
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-112.5 md:h-112.5 rounded-full border-white dark:border-gray-800 shadow-2xl overflow-hidden z-10 cursor-pointer"
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

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              layoutId="profile-image-container"
              className="relative w-full max-w-4xl aspect-square md:aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/profile.jpg"
                alt="Faith Etornam Gbadegbe Fullscreen"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />

              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroImage;
