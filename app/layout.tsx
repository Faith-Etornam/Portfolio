import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const baseUrl = "https://portfolio-ashen-psi.vercel.app/";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Faith Etornam | Backend Engineer & Full Stack Developer",
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
    title: "Faith Etornam | Software Engineer (Python & JavaScript Developer)",
    description:
      "Explore the portfolio of Faith Etornam. Specializing Backend Development using Python/Django, Frontend Development using React.js/Next.js development.",
    url: "/",
    siteName: "Faith Etornam Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Faith Etornam | Python & JavaScript Developer",
    description:
      "Backend Developer specializing in Django and React.js. View my projects and technical articles.",
  },

  publisher: "Faith Etornam",
  verification: {
    google: "yFs1MpQ7EeUDPGWUlt6Gf0isjv7M5GwfzjtJX3VN85o",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faith Etornam",
              gender: "Male",
              url: "https://portfolio-ashen-psi.vercel.app",
              image: "https://portfolio-ashen-psi.vercel.app/profile.jpg",
              sameAs: [
                "https://www.linkedin.com/in/faith-etornam",
                "https://github.com/faith-etornam",
              ],
              jobTitle: "Backend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
