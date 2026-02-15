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
  },
  {
    id: 2,
    title: "Task Management API",
    description:
      "A scalable RESTful API designed to handle complex task scheduling and team collaboration features. Includes JWT authentication and real-time updates.",
    tags: ["Python", "FastAPI", "Redis", "Docker"],
    github: "https://github.com/Faith-Etornam/project2",
  },
  {
    id: 3,
    title: "Portfolio v1",
    description:
      "My personal portfolio website showcasing my journey as a full-stack engineer. Features dark mode, animations, and a fully responsive design.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Faith-Etornam/portfolio",
    demo: "https://faith-etornam.com",
  },
];

export default projects
