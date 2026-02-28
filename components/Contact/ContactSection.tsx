import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white dark:bg-gray-950 min-h-screen flex items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 justify-center lg:justify-start">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
