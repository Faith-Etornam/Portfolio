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
    "Faith Etornam — Backend Engineer and Co-founder of Hiraki Digital. Focused on architecting scalable server-side systems and secure APIs using Python and Django, with additional expertise in building modern web interfaces with Next.js.",

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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  name: "Faith Etornam",
  alternateName: [
    "Faith Etornam Gbadegbe",
    "Faith Gbadegbe",
    "Gbadegbe Faith",
    "Gbadegbe Faith Etornam",
  ],
  gender: "Male",
  url: baseUrl,
  image: `${baseUrl}/profile3.jpeg`,
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
};

// BreadCrumb for SEO

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${baseUrl}/#breadcrumb`,
  name: "Faith Etornam Portfolio Navigation",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://faithetornam.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://faithetornam.com/about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Projects",
      item: "https://faithetornam.com/projects",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Services",
      item: "https://faithetornam.com/services",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://faithetornam.com/contact",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "Frequently Asked Questions about Faith Etornam",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Faith Etornam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Faith Etornam (Faith Etornam Gbadegbe) is a Backend Engineer and Full Stack Developer based in Accra, Ghana. He is an ALX Backend Development graduate and a Computer Science & Engineering student at UMaT, specializing in building scalable APIs with Python, Django, and modern web applications with Next.js.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Faith Etornam offer through Hiraki Digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As the Co-founder of Hiraki Digital, Faith Etornam offers backend systems architecture, secure API development using Django REST Framework, and high-performance frontend development with React and Next.js.",
      },
    },
    {
      "@type": "Question",
      name: "What technical stack does Faith Etornam use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Faith's core stack includes Python, Django, and MySQL for backend engineering, and JavaScript, TypeScript, React, and Next.js for frontend development. He also has expertise in Docker and Cloud Engineering concepts.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Faith Etornam for collaborations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach out to Faith Etornam via his official website at faithetornam.com, through LinkedIn, or by email at faithgbadegbe1@gmail.com for backend and full-stack engineering opportunities.",
      },
    },
  ],
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
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
