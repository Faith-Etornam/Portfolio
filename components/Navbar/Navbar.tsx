"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Me" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.container}>
        <div className={styles.navWrapper}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIconWrapper}>
              <Image
                src="/profile.jpg"
                alt="Faith Etornam"
                width={20}
                height={20}
                className={styles.profilePic}
              />
              <span className={styles.logoText}>
                Faith
                <span> Etornam </span>
              </span>
            </div>
          </Link>

          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  ${styles.navLink} 
                  ${pathname === link.label ? styles.activeLink : ""}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.ctaButton}>
            <Link href="/contact">
              <Button variant="glow">Let&apos;s Talk</Button>
            </Link>
          </div>

          {/* Desktop navigation bar ends here */}
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileToggleBtn}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>


          <div
            className={`${styles.mobileMenu} ${
              isMobileMenuOpen ? styles.menuOpen : ""
            }`}
          >
            <div className={styles.glassContainer}>
              {navLinks.map((link) => {
                const isActive = pathname === link.label;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.activeLink : styles.inactiveLink
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button variant="glow">
                <Link href="/contact">Let&apos;s Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
