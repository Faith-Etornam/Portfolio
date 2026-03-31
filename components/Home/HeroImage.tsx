"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const rigidSpring = { stiffness: 300, damping: 30, restDelta: 0.001 };
const bouncySpring = { stiffness: 150, damping: 15 };

const HeroImage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, rigidSpring);
  const mouseYSpring = useSpring(y, rigidSpring);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);

  const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const shineGradient = useTransform(
    [shineX, shineY],
    ([sx, sy]) =>
      `radial-gradient(circle at ${sx} ${sy}, rgba(255, 255, 255, 0.4) 0%, rgba(255,255,255,0) 60%)`,
  );

  const backgroundX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const backgroundY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const mouseXPos = event.clientX - rect.left - rect.width / 2;
    const mouseYPos = event.clientY - rect.top - rect.height / 2;

    x.set(mouseXPos / rect.width);
    y.set(mouseYPos / rect.height);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  useEffect(() => {
    document.body.style.overflow = isExpanded ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  const transition = {
    layout: bouncySpring,
    opacity: { duration: 0.3 },
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex items-center justify-center p-12 lg:p-20 group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1500px" }}
      >
        <motion.div
          style={{ x: backgroundX, y: backgroundY }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-160 h-160 bg-blue-500/15 blur-[120px] rounded-full -z-10"
        />

        <motion.div
          layoutId="profile-super-container"
          onClick={() => setIsExpanded(true)}
          style={{ rotateX, rotateY, willChange: "transform" }}
          transition={transition}
          className="relative w-72 h-104 md:w-md md:h-140 cursor-pointer"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-white/10 dark:bg-black/10 backdrop-blur-xl shadow-[0_35px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10" />

          <motion.div
            style={{ background: shineGradient }}
            className="absolute inset-0 rounded-[2.5rem] overflow-hidden mix-blend-overlay z-20 pointer-events-none"
          />

          <div className="absolute inset-2.5 overflow-hidden rounded-4xl z-10 border border-white/5">
            <motion.div
              style={{ x: backgroundX, y: backgroundY }}
              className="relative w-full h-full scale-[1.05]"
            >
              <Image
                src="/profile.jpg"
                alt="Faith Etornam Gbadegbe"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-linear-to-t from-black/50 via-black/10 to-transparent rounded-b-[2.5rem] z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-12"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              layoutId="profile-super-container"
              transition={transition}
              className="relative w-full max-w-6xl h-[85vh] rounded-4xl overflow-hidden border border-white/5 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/profile.jpg"
                alt="Fullscreen"
                fill
                className="object-contain"
                priority
              />

              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-8 right-8 p-3 bg-neutral-800/80 hover:bg-neutral-700/80 backdrop-blur-sm rounded-full text-white/70 transition-colors border border-neutral-700/50"
              >
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroImage;
