import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Faith Etornam",
  description:
    "Terms and conditions for using the Faith Etornam developer portfolio.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "February 28, 2026";

  return (
    <>
    <main className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col pt-32 pb-10 overflow-hidden">
      {/* Ambient Background Glows to match the site's aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <Navbar />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col">
        {/* Header Section */}
        <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement
              made between you, whether personally or on behalf of an entity
              (&quot;you&quot;), and Faith Etornam (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your
              access to and use of the{" "}
              <a
                href="https://faith-etornam.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                faithetornam.com
              </a>{" "}
              website as well as any other media form, media channel, mobile
              website, or mobile application related, linked, or otherwise
              connected thereto (collectively, the &quot;Site&quot;). By accessing the
              Site, you agree that you have read, understood, and agreed to be
              bound by all of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              2. Intellectual Property Rights
            </h2>
            <p className="mb-3">
              Unless otherwise indicated, the Site and its original content,
              features, and functionality (including but not limited to the site
              design, text, graphics, and UI/UX) are owned or controlled by us
              and are protected by copyright and trademark laws.
            </p>
            <p>
              The source code for individual projects showcased on this
              portfolio (such as HostelMate, Social Media API, etc.) may be
              subject to their own respective open-source licenses (e.g., MIT,
              GPL) as indicated in their public GitHub repositories. Where no
              license is explicitly stated in the repository, all rights to the
              code are reserved.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              3. User Representations
            </h2>
            <p>
              By using the Site, you represent and warrant that: (1) you have
              the legal capacity and you agree to comply with these Terms and
              Conditions; (2) you will not access the Site through automated or
              non-human means, whether through a bot, script, or otherwise,
              without prior written permission; (3) you will not use the Site
              for any illegal or unauthorized purpose; and (4) your use of the
              Site will not violate any applicable law or regulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              4. Third-Party Links & Live Demos
            </h2>
            <p className="mb-3">
              The Site contains links to third-party websites (e.g., GitHub,
              LinkedIn, Twitter) and live demonstration environments for
              software projects. Such Third-Party Websites are not investigated,
              monitored, or checked for accuracy, appropriateness, or
              completeness by us.
            </p>
            <p>
              Live project demos are provided for portfolio demonstration
              purposes only. We do not guarantee the uptime, data persistence,
              or security of data entered into these demonstration environments.
              Please do not submit sensitive or personal information into any
              portfolio demonstration applications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              5. Disclaimer
            </h2>
            <p className="mb-3">
              THE SITE AND THE PROJECTS SHOWCASED THEREIN ARE PROVIDED ON AN
              &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS. YOU AGREE THAT YOUR USE OF THE
              SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK.
            </p>
            <p>
              We make no warranties or representations about the accuracy or
              completeness of the Site&apos;s content or the content of any websites
              linked to the Site and we will assume no liability or
              responsibility for any (1) errors, mistakes, or inaccuracies of
              content and materials, (2) personal injury or property damage
              resulting from your access to and use of the Site, or (3) any
              unauthorized access to or use of our secure servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              6. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and defined following the laws of
              Ghana. Faith Etornam and yourself irrevocably consent that the
              courts of Ghana shall have exclusive jurisdiction to resolve any
              dispute which may arise in connection with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              7. Contact Information
            </h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive
              further information regarding use of the Site, please contact me
              via the{" "}
              <a
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contact Page
              </a>{" "}
              or directly at:
            </p>
            
          </section>
        </div>
      </div>

    </main>
      <Footer />
      </>
  );
}
