import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: baseUrl,

  title: {
    default: "Faith Etornam  | Software Engineer",
    template: "%s | Faith Etornam",
  },
  description:
    "I build scalable APIs and secure databases using Python & Django. A Backend Engineer with additional frontend capabilities in React.js and Next.js.",
  icons: {
    icon: "/favicon.jpg",
  },

  keywords: [
    "Faith Etornam Gbadegbe",
    "Faith Etornam",
    "JavaScript Developer",
    "Python Developer",
    "Backend Developer",
    "Django REST Framework",
    "React.js Developer",
    "Next.js Developer",
    "Full Stack Engineer",
    "Software Developer Ghana",
    "ALX Student",
    "ALX Certified Backend Developer",
  ],

  authors: [{ name: "Faith Etornam" }],
  creator: "Faith Etornam",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Faith Etornam | Python & JavaScript Developer",
    description:
      "Explore the portfolio of Faith Etornam. Specializing Backend Development using Python/Django, Frontend Development using React.js/Next.js development.",
    url: `${baseUrl}/`,
    siteName: "Faith Etornam Portfolio",
    images: [
      {
        url: `https://portfolio-ashen-psi.vercel.app/profile.jpg`,
        width: 1200,
        height: 630,
        alt: "Faith Etornam - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Faith Etornam | Python & JavaScript Developer",
    description:
      "Backend Developer specializing in Django and React.js. View my projects and technical articles.",
    images: [
      {
        url: `https://portfolio-ashen-psi.vercel.app/profile.jpg`,
      },
    ],
  },

  publisher: "Faith Etornam",
  verification: {
    google: "google verification code here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
