import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: "Faith Etornam | Backend Engineer (Django) | Frontend Developer",
    template: "%s | Faith Etornam",
  },
  description:
    "I am Faith Etornam, a Backend Engineer specializing in Python, Django, and skills in Frontend Development with React.js and Next.js. I build scalable APIs, secure database architectures, and dynamic web applications.",

  keywords: [
    "Faith Etornam",
    "JavaScript Developer",
    "Backend Developer",
    "Python Developer",
    "Django REST Framework",
    "React.js Developer",
    "Next.js Developer",
    "Full Stack Engineer",
    "Software Developer Ghana",
    "ALX Student",
    "ALX Certified Backend Developer"
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
      "Explore the portfolio of Faith Etornam. Specializing in Python, Django, and React.js, Next.js development.",
    url: `${baseUrl}/`,
    siteName: "Faith Etornam Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Faith Etornam - Backend Engineer",
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
        url: "/profile.png",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    </>
  )
}
