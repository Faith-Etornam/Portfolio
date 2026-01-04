import { Metadata } from "next";

export const metadata: Metadata = {

  title: "Contact Me",

  description:
    "Get in touch with Faith Etornam Gbadegbe. Available for backend engineering roles, API development projects, Frontend Development and technical collaborations.",

  openGraph: {
    title: "Get in Touch | Faith Etornam Gbadegbe",
    description:
      "Let's build something scalable together. Connect with me for backend opportunities.",
    url: "/contact",
  },
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;
