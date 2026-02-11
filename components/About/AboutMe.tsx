import StatCard from "../StatCard";
import Image from "next/image";
import { Download, Terminal } from "lucide-react";
import Link from "next/link";

const AboutMe = () => {
  const statCard = [
    { number: "3+", label: "Years Coding" },
    { number: "5+", label: "Projects Built" },
    { number: "100%", label: "Commitment" },
    { number: "∞", label: "Learning" },
  ];

  return (
    <section className="px-6 lg:px-20 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wider text-sm">
            <Terminal size={18} />
            <span>The Backstory</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            From UMaT Student to <br />
            Full-Stack Innovator.
          </h2>
          <div className="text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed">
            <p>
              My journey began with a curiosity for how things work under the
              hood. As a student at the
              <strong className="text-gray-900 dark:text-white">
                {" "}
                University of Mines and Technology (UMaT)
              </strong>{" "}
              and also the Vice President of{" "}
              <strong className="text-gray-900 dark:text-white">
                ACC ( Amalitech Coding Club UMaT ){" "}
              </strong>{" "}
              , I realized that code wasn&apos;t just about syntax—it was about
              solving real-world problems.
            </p>
            <p>
              To sharpen my skills, I completed the rigorous{" "}
              <strong className="text-gray-900 dark:text-white">
                ALX Backend Engineering
              </strong>{" "}
              program. There, I mastered the art of server-side logic,
              databases, and API architecture using Python and Django.
            </p>
            <p>
              Today, I don&apos;t just build APIs; I build complete products. By
              combining my backend strength with modern frontend tools like
              Next.js and Tailwind, I create applications that are as fast as
              they are beautiful.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Download size={20} /> Download CV
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/40 rounded-full blur-3xl opacity-50 z-0"></div>

          <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Faith Etornam"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Faith Etornam
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ghana, West Africa
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {statCard.map((item) => (
                <StatCard
                  key={item.label}
                  number={item.number}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
