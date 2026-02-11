"use client";

import TimeLineItem from "../TimeLineItem";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

const AboutTimeLine = () => {
  const timeLineItems = [
    {
      year: "Present",
      title: "Freelance Full-Stack Developer",
      subtitle: "Hiraki Digital / Remote",
      description:
        "Building bespoke web solutions for clients, focusing on scalable backend architectures and responsive frontend designs.",
      icon: <Briefcase size={20} />,
    },
    {
      year: "2025",
      title: "ALX Software Engineering Graduate",
      subtitle: "Backend Specialization",
      description:
        "Completed an intensive 4-month program. Mastered Python programming, Algorithms, System Engineering, and Backend Development.",
      icon: <GraduationCap size={20} />,
    },
    {
      year: "Current",
      title: "Vice President",
      subtitle: "Amalitech Coding Club (ACC) - UMaT",
      description:
        "Leading a community of student developers by organizing technical workshops, mentoring peers in Full-Stack development, and fostering a collaborative culture for software innovation on campus.",
      icon: <Users size={20} />,
    },
    {
      year: "Current",
      title: "BSc. Computer Science & Engineering",
      subtitle: "University of Mines and Technology (UMaT)",
      description:
        "Deepening theoretical knowledge in Data Structures, Algorithms, and Computer Architecture while applying them to practical software projects.",
      icon: <GraduationCap size={20} />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Journey So Far
        </motion.h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {timeLineItems.map((timeline) => (
              <TimeLineItem
                key={timeline.title}
                year={timeline.year}
                title={timeline.title}
                subtitle={timeline.subtitle}
                description={timeline.description}
                icon={timeline.icon}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeLine;
