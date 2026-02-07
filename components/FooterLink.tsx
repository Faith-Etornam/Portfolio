import Link from "next/link";

interface Props {
    href: string,
    label: string
}

const FooterLink = ({ href, label }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
      >
        {label}
      </Link>
    </li>
  );
};

export default FooterLink;
