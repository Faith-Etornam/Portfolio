import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const socials = [
  {
    label: "Github",
    href: "https://github.com/Faith-Etornam",
    classes: "hover:text-gray-900 dark:hover:text-white transition-colors",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/faith-etornam",
    classes: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
    icon: FaLinkedin,
  },
  {
    label: "Whatsapp",
    href: "whatsapp://send?phone=233541354000&text=Hello%20Faith%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services",
    classes: "hover:text-blue-600 dark:hover:text-green-400 transition-colors",
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    href: "mailto:faithgbadegbe1@gmail.com",
    classes: "hover:text-gray-900 dark:hover:text-white transition-colors",
    icon: Mail
  },
];
