"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle2, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
// import { Metadata } from "next";

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

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-24 px-6 lg:px-20 bg-white dark:bg-gray-950 min-h-screen flex items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 justify-center lg:justify-start">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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

                <div className="flex flex-col items-center lg:items-start w-full">
                  <div className="flex flex-col gap-3 items-start">
                    {[
                      "Interactive Next.js & React Frontends",
                      "Scalable Python & Django Backends",
                      "Technical SEO & Performance Audits",
                      "Database Architecture & API Design",
                    ].map((service, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2
                          size={20}
                          className="text-blue-600 dark:text-blue-500 shrink-0"
                        />
                        <span className="font-medium text-left">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-8 w-full max-w-md mx-auto lg:mx-0">
                <Link
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
                      <span className="text-gray-900 dark:text-white font-semibold truncate max-w-45 sm:max-w-62.5">
                        faithgbadegbe1@gmail.com
                      </span>
                    </div>
                  </div>
                  {/* Subtle arrow that animates in on hover */}
                  <div className="text-gray-300 dark:text-gray-700 group-hover:text-blue-500 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={20} />
                  </div>
                </Link>

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
                    href="whatsapp://send?phone=233541354000&text=Hello%20Faith%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
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
                </div>
              </div>
            </motion.div>

            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
