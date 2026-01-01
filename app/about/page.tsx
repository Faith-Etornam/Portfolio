import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

export const metadata: Metadata = {
  title: "About Me | Faith Etornam",

  description:
    "I am Faith Etornam, an ALX-trained Backend Engineer in Ghana specializing in Python, Django, and skills in Frontend Development with React.js. Passionate about building scalable APIs and secure database architectures.",

  keywords: [
    "Faith Etornam",
    "About Faith Etornam",
    "Backend Developer Ghana",
    "Python Django Engineer",
    "ALX Software Engineering",
    "React.js Developer",
    "Database Architecture",
    "API Development",
  ],

  authors: [{ name: "Faith Etornam", url: baseUrl }],
  creator: "Faith Etornam",

  openGraph: {
    title: "About Faith Etornam | Backend Engineer | Frontend Developer",
    description:
      "Discover the journey of Faith Etornam, a Backend Engineer mastering Python, Django, and scalable systems architecture.",
    url: `${baseUrl}/about`,
    siteName: "Faith Etornam Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Faith Etornam - Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Faith Etornam | Backend Engineer | Frontend Developer",
    description:
      "Backend Developer specializing in Django and React.js. Based in Ghana.",
    images: ["/profile.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const About = () => {
  return (
    <div>
      <p>About Page</p>
    </div>
  );
};

export default About;
