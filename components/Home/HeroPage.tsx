import HeroHeader from "./HeroHeader";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 flex flex-col md:flex-row overflow-hidden transition-colors duration-200 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/60 z-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        <HeroHeader />

        <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:p-0 relative bg-transparent">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-500 dark:bg-blue-600 rounded-full blur-[100px] opacity-80 mix-blend-screen dark:mix-blend-lighten animate-pulse z-0"></div>

          <div className="relative z-10">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
