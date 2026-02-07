import { Briefcase, GraduationCap } from 'lucide-react';
import TimeLineItem from '../TimeLineItem';

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
          "Completed an intensive 12-month program focused on Holberton School curriculum. Mastered Low-level programming, Algorithms, System Engineering, and Backend Development.",
        icon: <GraduationCap size={20} />,
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

  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Journey So Far
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          {timeLineItems.map((timeline) => (
            <TimeLineItem
              key={timeline.title}
              year={timeline.year}
              title={timeline.title}
              subtitle={timeline.subtitle}
              description={timeline.description}
              icon={timeline.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTimeLine
