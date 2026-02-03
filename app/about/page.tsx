import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {

  title: "About Me", 
  description: "Learn more about Faith Etornam, a Backend Engineer specializing in Python, Django, and scalable architecture.",
  
  openGraph: {
    title: "About Me",
    description: "Learn more about Faith Etornam's background and technical skills.",
    url: "/about",
  },
};

const About = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default About;
