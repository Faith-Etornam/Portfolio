import { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Game Discovery Web App",
    description:
      "A modern video game library inspired by RAWG.io. Users can browse games by genre, platform, and rating with instant search capabilities. The app ensures a seamless experience with skeleton loading states and optimized large-list rendering.",
    tags: ["React.js", "Chakra UI", "Rawg API", "Tanstack Query"],
    github: "https://github.com/Faith-Etornam/project1",
    image: "/game-discovery.png",
    demo: "https://game-discovery-lovat.vercel.app/",
  },
  {
    id: 2,
    title: "Multi-Hostel Management (HostelMate)",
    description:
      "My ALX capstone project: a comprehensive RESTful API multi-tenant management system. It empowers hostel managers to oversee properties and automate billing, while providing students a seamless platform to book rooms and pay rent securely via Paystack. Built with robust JWT authentication and complex tenant routing.",
    tags: ["Python", "Django", "Django Rest Framework", "JWT"],
    github: "https://github.com/Faith-Etornam/Hostel-Management-System.git",
  },
  {
    id: 3,
    title: "Social Media API",
    description:
      "A robust RESTful API developed during my ALX Backend Engineering program. It powers the core functionality of a social networking platform, featuring secure user authentication, CRUD operations for posts and comments, a follower/following system, and optimized database queries for timeline generation.",
    tags: ["Python", "Django REST Framework", "MySQL", "JWT"],
    github: "https://github.com/Faith-Etornam/portfolio",
  },
];

export default projects;
