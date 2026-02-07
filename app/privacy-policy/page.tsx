import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Eye, Server, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mb-6"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content Wrapper */}
          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At <strong>Faith Etornam&apos;s Portfolio</strong>, I prioritize your
              privacy. This document outlines the minimal information collected
              when you interact with this website.
            </p>

            {/* SECTION 1 */}
            <Section title="1. No Cookies" icon={<Lock size={24} />}>
              <p>
                This website is static and <strong>does not use cookies</strong>
                , trackers, or any third-party analytics tools. You can browse
                the site anonymously without any data being stored on your
                device.
              </p>
            </Section>

            {/* SECTION 2 */}
            <Section
              title="2. Information You Voluntarily Provide"
              icon={<Mail size={24} />}
            >
              <p>
                The only personal information I collect is what you voluntarily
                choose to share if you contact me via email or phone. This may
                include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Name</li>
                <li>Email Address</li>
                <li>Message content</li>
              </ul>
            </Section>

            {/* SECTION 3 */}
            <Section
              title="3. How I Use This Information"
              icon={<Server size={24} />}
            >
              <p>Any information you provide is used strictly for:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Responding to your inquiries or job offers.</li>
                <li>
                  Professional communication regarding potential collaborations.
                </li>
              </ul>
              <p className="mt-2">
                I do not sell, trade, or rent your personal identification
                information to others.
              </p>
            </Section>

            {/* SECTION 4 */}
            <Section title="4. External Links" icon={<Eye size={24} />}>
              <p>
                My portfolio contains links to external platforms (GitHub,
                LinkedIn). Please be aware that if you click on these
                links, you will be directed to those sites, which have their own
                privacy policies and may use cookies. I am not responsible for
                the privacy practices of these external sites.
              </p>
            </Section>

            {/* CONTACT SECTION */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Me
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please
                contact me directly.
              </p>
              <a
                href="mailto:ce-fgbadegbe9423@st.umat.edu.gh"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

// Helper Component for consistency
const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="mt-10">
    <div className="flex items-center gap-3 mb-4 text-gray-900 dark:text-white">
      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {children}
    </div>
  </div>
);
