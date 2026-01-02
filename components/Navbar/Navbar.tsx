"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 20);
    };
  });

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
                <span style={{ color: "var(--foreground)" }}> Etornam</span>
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

          <div className="hidden md:block">
            <div style={{ display: "none" }} className="md:block"></div>
            <Link href="/contact">
              <Button variant="gradient">Let&apos;s Talk</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
