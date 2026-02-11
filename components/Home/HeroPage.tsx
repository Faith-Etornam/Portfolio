import Image from "next/image";
import HeroHeader from "./HeroHeader";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    
    <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden transition-colors duration-200 bg-slate-50 dark:bg-gray-900">
      <Image
        src="/hero-light.jpg"
        alt="Light background pattern"
        fill
        priority 
        className="object-cover object-center block dark:hidden z-0"
      />

      <Image
        src="/hero-bg.jpg"
        alt="Dark background pattern"
        fill
        priority 
        className="object-cover object-center hidden dark:block z-0"
      />

      <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/70 z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        <HeroHeader />

        <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:p-0 relative bg-transparent">
          {/* Animated Glow */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-500/40 dark:bg-blue-600 rounded-full blur-[100px] opacity-80 mix-blend-multiply dark:mix-blend-lighten animate-pulse z-0"></div>

          <div className="relative z-10">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;