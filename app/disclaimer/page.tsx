import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Faith Etornam",
  description:
    "Legal disclaimers regarding the software projects and content on Faith Etornam's developer portfolio.",
};

export default function DisclaimerPage() {
  const lastUpdated = "February 28, 2026";

  return (
    <>
      <main className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col pt-32 pb-10 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-600/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <Navbar />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col">
      
          <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              Disclaimer
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Last Updated: {lastUpdated}
            </p>
          </div>

          
          <div className="space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                1. General Information
              </h2>
              <p>
                The information provided by Faith Etornam (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) on{" "}
                <a
                  href="https://faith-etornam.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  faith-etornam.com
                </a>{" "}
                (the &quot;Site&quot;) is for general informational and
                portfolio demonstration purposes only. All information on the
                Site is provided in good faith, however, we make no
                representation or warranty of any kind, express or implied,
                regarding the accuracy, adequacy, validity, reliability,
                availability, or completeness of any information or software
                projects on the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2. Software and Code Disclaimer
              </h2>
              <p className="mb-3">
                The projects, source code, APIs, and applications showcased on
                this Site (including those linked via GitHub) are provided &quot;as
                is&quot; and &quot;as available&quot; without any warranties of any
                kind.
              </p>
              <p>
                While these projects demonstrate software engineering
                principles, backend architecture, and frontend integrations,
                they may not be fully optimized for production environments. We
                are not liable for any damages, data loss, or security breaches
                that may occur if you choose to deploy, fork, or utilize this
                code in your own personal or commercial systems without proper
                independent auditing and testing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                3. Live Demos and Mock Data
              </h2>
              <p className="mb-3">
                Certain projects on this Site feature live demonstration
                environments. These environments are strictly for showcasing
                functionality.
              </p>
              <p className="font-semibold text-gray-900 dark:text-gray-200">
                Do not enter real, sensitive, or personal information (such as
                actual credit card numbers, passwords, or personal
                identification) into any portfolio demonstration application.
              </p>
              <p className="mt-3">
                Any data entered into live demos may be periodically wiped,
                publicly visible to other demo users, or stored insecurely.
                Integrations with third-party services (such as payment gateways
                like Paystack) operate in &quot;Test Mode&quot; within these demos and do
                not process real financial transactions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                4. External Links Disclaimer
              </h2>
              <p>
                The Site may contain links to other websites or content
                belonging to or originating from third parties. Such external
                links are not investigated, monitored, or checked for accuracy,
                adequacy, validity, reliability, availability, or completeness
                by us. We do not warrant, endorse, guarantee, or assume
                responsibility for the accuracy or reliability of any
                information offered by third-party websites linked through the
                Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                5. Professional Disclaimer
              </h2>
              <p>
                The Site cannot and does not contain formal professional
                consulting advice. The software engineering concepts and code
                presented are for portfolio display. Engaging with this Site
                does not establish a client-contractor relationship. For
                professional inquiries, freelance work, or consulting, a
                separate formal agreement must be established.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Contact Us
              </h2>
              <p>
                If you have any questions regarding this disclaimer, you can
                contact us at:
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
