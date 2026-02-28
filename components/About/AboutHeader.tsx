const AboutHeader = () => {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-20 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Architecting <span className="text-blue-600">Robust Systems</span> &
        <br className="hidden md:block" /> Building{" "}
        <span className="text-blue-600">Digital Experiences</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        I bridge the gap between complex backend logic and intuitive frontend
        interfaces.
      </p>
    </section>
  );
};

export default AboutHeader;
