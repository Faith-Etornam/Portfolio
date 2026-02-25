import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import FooterLink from "./ui/FooterLink";
import SocialLink from "./ui/SocialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Faith-Etornam",
      icon: <FaGithub />,
      label: "Github",
    },
    {
      href: "https://linkedin.com/Faith-Etornam",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    { href: "mailto:faithgbadegbe1@gmail.com", icon: <Mail />, label: "Mail" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-blue-600/20">
                <Image
                  src="/profile.jpg"
                  alt="Faith Etornam"
                  className="h-full w-full object-cover"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Faith Etornam
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Backend Engineer
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Specializing in robust{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Python (Django)
              </span>{" "}
              architectures and crafting modern frontends with{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Next.js
              </span>
              .
            </p>

          
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((socialLink, index) => (
                <SocialLink
                  key={index}
                  href={socialLink.href}
                  icon={socialLink.icon}
                  label={socialLink.label}
                />
              ))}
            </div>
          </div>

         
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Me" />
              <FooterLink href="/projects" label="Projects" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/privacy-policy" label="Privacy Policy" />
              <FooterLink href="/terms-of-use" label="Terms of Use" />
              <FooterLink href="/disclaimer" label="Disclaimer" />
            </ul>

            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                &quot;May the spirit that blessed the ones before us give us the
                courage to make our lives a blessing&quot;
              </p>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Faith Etornam. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center">
            Designed & Built with <span className="text-red-500 mx-1">❤</span>{" "}
            from Faith Etornam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
