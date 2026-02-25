"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image"; 

interface ServiceCardProps {
  title: string;
  description: string;
  techStack: string[];
  icon?: ReactNode; 
  imageSrc?: string; 
  variants?: Variants;
}

const ServiceCard = ({
  title,
  description,
  icon,
  imageSrc, 
  techStack,
  variants,
}: ServiceCardProps) => {
  return (
    <motion.article
      variants={variants}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col h-full overflow-hidden"
    >
      
      <div className="mb-6">
        {imageSrc ? (
          <div className="relative w-full h-48 rounded-xl overflow-hidden">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>
        ) : (
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl w-fit">
            {icon}
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 grow">
        {description}
      </p>

      <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Tools & Tech
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
