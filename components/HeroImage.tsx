"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react"; // Ensure you have lucide-react installed

export const HeroImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* --- TRIGGER (The Small Image) --- */}
      <motion.div
        layoutId="hero-profile-container" // Connects container to modal
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        onClick={() => setIsOpen(true)}
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-112.5 md:h-112.5 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg shadow-blue-500/20 overflow-hidden z-10 cursor-zoom-in"
      >
        <motion.div
          layoutId="hero-profile-image" // Connects image to modal
          className="w-full h-full relative"
        >
          <Image
            src="/profile.jpg"
            alt="Faith Etornam Gbadegbe"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* --- MODAL (The Full Screen View) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)} // Click background to close
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X size={32} />
            </button>

            {/* Expanded Image Container */}
            <motion.div
              layoutId="hero-profile-container" // Matches the trigger ID
              className="relative w-full max-w-3xl aspect-square md:aspect-auto md:h-[80vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <motion.div
                layoutId="hero-profile-image" // Matches the trigger ID
                className="w-full h-full relative"
              >
                <Image
                  src="/profile.jpg"
                  alt="Faith Etornam Gbadegbe"
                  fill
                  className="object-contain" // Use contain so full image is seen without cropping
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
