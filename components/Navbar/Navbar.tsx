"use client";

import styles from './Navbar.module.css'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Me" },
];

const Navbar = () => {
  return (
   <header className={`${styles.header}`}>
    <nav>

    </nav>

   </header>
  );
}

export default Navbar

