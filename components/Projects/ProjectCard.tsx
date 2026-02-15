"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
}

interface ProjectCard {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCard) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
            <Code2 className="text-blue-200 dark:text-gray-600 w-16 h-16" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub size={18} />
            Code
          </Link>

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
