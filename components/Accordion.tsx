"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "Do you take on freelance projects?",
    answer:
      "Yes, I am available for freelance work. Whether you need a full-stack web application, a custom backend API, or a portfolio site, I can help bring your vision to life.",
  },
  {
    question: "What is your preferred Tech Stack?",
    answer:
      "I specialize in the Python/Django ecosystem for backend and React/Next.js for frontend. I also use Tailwind CSS for styling and PostgreSQL for database management.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely. I provide 30 days of free support after deployment to ensure everything runs smoothly. I also offer ongoing maintenance packages for updates and security.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A simple portfolio might take 1-2 weeks, while a full e-commerce platform could take 4-8 weeks. I will provide a detailed timeline after our initial consultation.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply fill out the contact form below or send me an email. We will schedule a quick call to discuss your goals, and I'll send over a proposal.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
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
            FAQs
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Common questions about my services and process.
          </p>
        </motion.div>

        {/* Accordion List - NOW ANIMATED WITH STAGGER */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }} // Stagger effect
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </button>

              {/* Answer Body */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
