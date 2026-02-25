"use server";

import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/components/emails/ContactEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(5),
  email: z.email(),
  message: z.string().min(10),
});

export async function sendEmail(formData: z.infer<typeof contactSchema>) {

  const validation = contactSchema.safeParse(formData);

  if (!validation.success) {
    return { error: "Invalid form data provided." };
  }

  const { name, email, message } = validation.data;

  try {

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["faithgbadegbe1@gmail.com"],
      subject: `New Message from ${name}`,
      replyTo: email,
      react: React.createElement(ContactEmail, { name, email, message }),
    });

    if (error) {
      console.error(error);
      return { error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send email. Please try again later." };
  }
}
