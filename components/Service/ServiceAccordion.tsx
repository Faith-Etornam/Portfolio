"use client";

import { motion } from "framer-motion";
import { MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
import FAQ from "../FAQ";


interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  title: string;
  subHeading: string;
  items: FAQItem[]
}

export default function ServiceAccordion({ title, subHeading, items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <MessageCircleQuestion className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{subHeading}</p>
        </motion.div>

        <div className="space-y-4">
          {items.map((faq, index) => (
            <FAQ
              isOpen={activeIndex === index}
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              toggleAccordion={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
