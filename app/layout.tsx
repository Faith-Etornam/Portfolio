import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Faith Etornam | Backend Engineer & Full Stack Developer",
    template: "%s | Faith Etornam",
  },
  description:
    "Faith Etornam — Backend Engineer & Co-Founder of Hiraki Digital. Specializing in Python, Django, and Next.js to build scalable, secure web applications.",

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
    siteName: "Faith Etornam's Portfolio",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${baseUrl}/#person`,
              name: "Faith Etornam",
              gender: "Male",
              url: baseUrl,
              image: `${baseUrl}/profile.jpg`,
              description:
                "Backend Engineer specializing in scalable APIs with Python, Django, and Next.js.",
              email: "mailto:faithgbadegbe1@gmail.com",
              nationality: "Ghanaian",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Accra",
                addressCountry: "Ghana",
              },

              sameAs: [
                "https://www.linkedin.com/in/faith-etornam",
                "https://github.com/faith-etornam",
              ],

              worksFor: {
                "@type": "Organization",
                name: "Self-employed",
              },

              hasOccupation: [
                {
                  "@type": "Occupation",
                  name: "Backend Engineer",
                },
                {
                  "@type": "Occupation",
                  name: "Student",
                },
              ],

              affiliation: {
                "@type": "CollegeOrUniversity",
                name: "University of Mines and Technology",
                sameAs: "https://umat.edu.gh/",
              },

              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "ALX Africa",
                  sameAs: "https://www.alxafrica.com/",
                },
              ],

              knowsLanguage: ["English"],

              knowsAbout: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Next.js",
                "Frontend Development",
                "Python",
                "Django",
                "API Design",
                "MySQL",
                "Backend Development",
                "Docker",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
