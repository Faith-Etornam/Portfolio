import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      
      <div className="hero-content flex-col lg:flex-row gap-10 md:gap-16">
        
        <div className="text-center lg:text-left max-w-xl">
          <div className="badge badge-primary badge-outline mb-4 p-4 font-semibold">
            Backend Developer & API Specialist
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Hi, I&apos;m <span className="text-primary">Faith Etornam</span>
          </h1>

          <p className="py-6 text-lg opacity-90">
            I engineer scalable APIs and secure database architectures using
            <span className="font-bold"> Python, Django, and React.js</span>.
            Transforming complex data into seamless digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/projects" className="btn btn-primary px-8">
              View My Work
            </Link>
            <Link href="/contact" className="btn btn-outline px-8">
              Contact Me
            </Link>
          </div>
        </div>

        
        <div className="relative w-full max-w-sm shrink-0">
          <Image
            src="/profile.jpg" 
            alt="Faith Etornam"
            width={400}
            height={400}
            className="mask mask-squircle shadow-2xl w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
