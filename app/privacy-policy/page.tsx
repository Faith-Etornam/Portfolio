import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Faith Etornam",
  description:
    "Privacy Policy detailing how data is collected and used on Faith Etornam's developer portfolio.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "February 7, 2026";

  return (
    <>
      <main className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col pt-32 pb-10 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-600/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <Navbar />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col">
          <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                1. Introduction
              </h2>
              <p>
                Faith Etornam (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) respects your privacy and is committed to
                protecting your personal data. This Privacy Policy will inform
                you as to how we look after your personal data when you visit
                our website{" "}
                <a
                  href="https://faithetornam.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  faithetornam.com
                </a>{" "}
                (regardless of where you visit it from) and tell you about your
                privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2. The Data We Collect
              </h2>
              <p className="mb-3">
                As a personal developer portfolio, we collect minimal personal
                information. We may collect, use, and store the following types
                of data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  <strong className="text-gray-900 dark:text-gray-200">
                    Identity and Contact Data:
                  </strong>{" "}
                  Includes your name, email address, and the contents of any
                  message you send us directly through our Contact form.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-gray-200">
                    Technical Data:
                  </strong>{" "}
                  Includes internet protocol (IP) address, browser type and
                  version, time zone setting and location, and operating system
                  and platform via standard website analytics tools (e.g.,
                  Vercel Analytics).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                3. How We Use Your Data
              </h2>
              <p className="mb-3">
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  To respond to your inquiries, job opportunities, or freelance
                  requests submitted via the contact form.
                </li>
                <li>
                  To administer and protect our business and this website
                  (including troubleshooting, data analysis, and system
                  maintenance).
                </li>
                <li>
                  To use data analytics to improve our website, user experience,
                  and project demonstrations.
                </li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                4. Third-Party Links
              </h2>
              <p>
                This website may include links to third-party websites,
                plug-ins, and applications (such as GitHub, LinkedIn, and live
                project deployments). Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third-party websites and are
                not responsible for their privacy statements. When you leave our
                website, we encourage you to read the privacy notice of every
                website you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                5. Data Security
              </h2>
              <p>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used, or
                accessed in an unauthorized way, altered, or disclosed. Messages
                sent via our contact form are transmitted securely.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                6. Your Legal Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have rights under data
                protection laws in relation to your personal data, including the
                right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Request access to your personal data.</li>
                <li>
                  Request correction of the personal data that we hold about
                  you.
                </li>
                <li>Request erasure of your personal data.</li>
              </ul>
              <p>
                If you wish to exercise any of the rights set out above, please
                contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Contact Details
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact via the <Link className="text-blue-600" href='/contact'>Contact Page</Link>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
