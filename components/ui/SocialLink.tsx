import React from "react";
import Link from "next/link";

interface Props {
    href: string,
    icon: React.ReactNode,
    label: string
}

const SocialLink = ({ href, icon, label }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-xl"
    >
      {icon}
    </Link>
  );
};

export default SocialLink;
