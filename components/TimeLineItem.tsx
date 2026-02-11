import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  title: string;
  icon: React.ReactNode;
  year: string;
  subtitle: string;
  description: string;
  variants?: Variants
}

const TimeLineItem = ({ title, icon, year, subtitle, description, variants }: Props) => {
  return (
    <motion.div variants={variants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
     
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-200 dark:bg-gray-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-gray-600 dark:text-gray-300">
        {icon}
      </div>

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="font-bold text-gray-900 dark:text-white">{title}</div>
          <time className="font-caveat font-medium text-blue-600 dark:text-blue-400 text-sm">
            {year}
          </time>
        </div>
        <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
          {subtitle}
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm leading-snug">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default TimeLineItem;
