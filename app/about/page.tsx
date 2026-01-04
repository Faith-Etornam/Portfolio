import { Metadata } from "next";

export const metadata: Metadata = {

  title: "About Me", 
  description: "Learn more about Faith Etornam, a Backend Engineer in Ghana specializing in Python, Django, and scalable architecture.",
  
  openGraph: {
    title: "About Me",
    description: "Learn more about Faith Etornam's background and technical skills.",
    url: "/about",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Me",
    description:
      "Backend Developer specializing in Python/Django and TypeScript/React.js.",
    images: ["/profile.jpg"],
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
