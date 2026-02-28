"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl ${
        isScrolled
          ? "top-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg shadow-gray-200/20 dark:shadow-black/40 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl"
          : "top-0 bg-transparent dark:bg-transparent rounded-2xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-600 dark:text-white tracking-wide flex items-center transition-colors"
            >
              <Image
                src="/profile.jpg"
                alt="Faith Etornam Gbadegbe Profile Picture"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-transparent hover:border-blue-600 transition-colors duration-300 mr-3"
              />
              <span>
                Faith Etor
                <span className="bg-linear-to-r from-blue-600 to-transparent bg-clip-text text-transparent">
                  nam
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
            >
              {darkMode ? (
                <Sun className="text-blue-500" size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex justify-center w-full px-5 py-4 rounded-2xl
                  transition-all duration-200 ease-in-out active:scale-[0.98] font-medium
                  ${
                    isActive
                      ? "bg-blue-50/50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-500/40 dark:border-blue-400/40 shadow-sm shadow-blue-500/10"
                      : "bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-100 dark:border-gray-700/50 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
