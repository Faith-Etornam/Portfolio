import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  icon: React.ReactNode;
  label: string;
  className: string;
}

const SocialLink = ({ href, icon, label, className }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      {icon}
    </Link>
  );
};

export default SocialLink;
