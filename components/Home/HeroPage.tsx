import HeroHeader from "./HeroHeader";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-gray-900 flex flex-col md:flex-row overflow-hidden transition-colors duration-200">
      <HeroHeader />

      <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:p-0 relative bg-gray-50 dark:bg-gray-800/50 md:bg-transparent md:dark:bg-transparent">
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
