import { sendEmail } from "@/app/actions/sendEmail";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { z } from "zod";

const ContactForm = () => {
  const contactSchema = z.object({
    first_name: z.string().min(5, "First Name must be at least 5 characters."),
    last_name: z.string().min(5, "Last Name must be at least 5 characters"),
    email: z.email("Please enter a valid email address."),
    message: z.string().min(15, "Message must be at least 15 characters long."),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const [formData, setFormData] = useState<ContactFormData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof ContactFormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const validation = contactSchema.safeParse(formData);

    if (!validation.success) {
      const formattedErrors: Partial<Record<keyof ContactFormData, string>> =
        {};
      validation.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0] as keyof ContactFormData] = issue.message;
      });
      setErrors(formattedErrors);
      setIsSubmitting(false);
      return;
    }

    const response = await sendEmail(validation.data);

    if (response.error) {
      setSubmitStatus("error");
      alert(response.error);
    } else {
      setSubmitStatus("success");
      setFormData({ first_name: "", last_name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }

    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 text-left"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className={`w-full px-4 py-3.5 bg-white dark:bg-gray-950 border ${
              errors.first_name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 dark:border-gray-800 focus:ring-blue-500 focus:border-blue-500"
            } rounded-xl focus:ring-2 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 shadow-sm`}
            placeholder="Dwayne"
          />
          {errors.first_name && (
            <p className="mt-1.5 text-sm text-red-500 font-medium">
              {errors.first_name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className={`w-full px-4 py-3.5 bg-white dark:bg-gray-950 border ${
              errors.last_name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 dark:border-gray-800 focus:ring-blue-500 focus:border-blue-500"
            } rounded-xl focus:ring-2 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 shadow-sm`}
            placeholder="Smith"
          />
          {errors.last_name && (
            <p className="mt-1.5 text-sm text-red-500 font-medium">
              {errors.last_name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3.5 bg-white dark:bg-gray-950 border ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 dark:border-gray-800 focus:ring-blue-500 focus:border-blue-500"
            } rounded-xl focus:ring-2 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 shadow-sm`}
            placeholder="dsmith@example.com"
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-500 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
          >
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3.5 bg-white dark:bg-gray-950 border ${
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 dark:border-gray-800 focus:ring-blue-500 focus:border-blue-500"
            } rounded-xl focus:ring-2 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400 shadow-sm`}
            placeholder="Tell me about your tech stack, timeline, and goals..."
          ></textarea>
          {errors.message && (
            <p className="mt-1.5 text-sm text-red-500 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20 mt-4"
        >
          {isSubmitting ? (
            <span className="animate-pulse">Sending Request...</span>
          ) : submitStatus === "success" ? (
            <span>Message Received!</span>
          ) : (
            <>
              Send Message <Send size={18} className="ml-1" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
