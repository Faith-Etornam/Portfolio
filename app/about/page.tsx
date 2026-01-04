import { Metadata } from "next";

export const metadata: Metadata = {

  title: "About Me", 
  description: "Learn more about Faith Etornam Gbadegbe, a Backend Engineer specializing in Python, Django, and scalable architecture.",
  
  openGraph: {
    title: "About Me",
    description: "Learn more about Faith Etornam Gbadegbe's background and technical skills.",
    url: "/about",
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
