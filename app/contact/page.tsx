"use client";

import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// export const metadata: Metadata = {
//   title: "Contact Me",

//   description:
//     "Get in touch with Faith Etornam. Available for backend engineering roles, API development projects, Frontend Development and technical collaborations.",

//   openGraph: {
//     title: "Get in Touch | Faith Etornam",
//     description:
//       "Let's build something scalable together. Connect with me for backend opportunities.",
//     url: "/contact",
//     images: [
//       {
//         url: "/opengraph-image",
//         width: 1200,
//         height: 630,
//         alt: "Faith Etornam's Contact",
//       },
//     ],
//   },
// };

// Zod Schema Setup
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof ContactFormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const validation = contactSchema.safeParse(formData);

    if (!validation.success) {
      const formattedErrors: Partial<Record<keyof ContactFormData, string>> =
        {};
      validation.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0] as keyof ContactFormData] = issue.message;
      });
      setErrors(formattedErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate backend request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <section className="py-24 px-6 lg:px-20 bg-white dark:bg-gray-950 min-h-screen flex items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 justify-center lg:justify-start">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* LEFT COLUMN: The Pitch & Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center h-full"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                Let&apos;s build your next{" "}
                <span className="text-blue-600 dark:text-blue-500">
                  big idea.
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
                Whether you are launching a new product or scaling an existing
                platform, I engineer full-stack solutions tailored to your
                needs.
              </p>

              {/* Services List */}
              <div className="mb-12 space-y-4">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-200 dark:border-gray-800 pb-2 inline-block">
                  What I can do for you
                </h3>
                {[
                  "Interactive Next.js & React Frontends",
                  "Scalable Python & Django Backends",
                  "Technical SEO & Performance Audits",
                  "Database Architecture & API Design",
                ].map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-blue-600 dark:text-blue-500 shrink-0"
                    />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>

              {/* Direct Contact Info */}
              <div className="flex flex-col gap-4 mt-8 w-full max-w-md mx-auto lg:mx-0">
                {/* Email Action Card */}
                <a
                  href="mailto:faithgbadegbe1@gmail.com"
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Mail size={22} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                        Drop an email
                      </span>
                      <span className="text-gray-900 dark:text-white font-semibold truncate max-w-[180px] sm:max-w-[250px]">
                        faithgbadegbe1@gmail.com
                      </span>
                    </div>
                  </div>
                  {/* Subtle arrow that animates in on hover */}
                  <div className="text-gray-300 dark:text-gray-700 group-hover:text-blue-500 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={20} />
                  </div>
                </a>

                {/* Location Static Card */}
                <div className="flex items-center p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      <MapPin size={22} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                        Location
                      </span>
                      <span className="text-gray-900 dark:text-white font-semibold">
                        Accra, Ghana (Remote)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Link
                    href="https://github.com/Faith-Etornam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group shadow-sm"
                  >
                    <FaGithub
                      size={22}
                      className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                    />
                    <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      GitHub
                    </span>
                  </Link>

                  <Link
                    href="https://linkedin.com/in/faith-etornam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group shadow-sm"
                  >
                    <FaLinkedin
                      size={22}
                      className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    />
                    <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      LinkedIn
                    </span>
                  </Link>
                  <Link
                    href="https://wa.me/233541354000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-1 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-green-500 dark:hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-green-50 dark:group-hover:bg-green-900/30 group-hover:text-green-500 transition-colors">
                        <FaWhatsapp size={22} />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                          Send a message
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-300 dark:text-gray-700 group-hover:text-green-500 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Contact form section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 bg-white dark:bg-gray-950 border ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 dark:border-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    } rounded-xl focus:ring-2 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 shadow-sm`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-500 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 bg-white dark:bg-gray-950 border ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 dark:border-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    } rounded-xl focus:ring-2 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 shadow-sm`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-500 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3.5 bg-white dark:bg-gray-950 border ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 dark:border-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    } rounded-xl focus:ring-2 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400 shadow-sm`}
                    placeholder="Tell me about your tech stack, timeline, and goals..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-500 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20 mt-4"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending Request...</span>
                  ) : submitStatus === "success" ? (
                    <span>Message Received!</span>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-1" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
