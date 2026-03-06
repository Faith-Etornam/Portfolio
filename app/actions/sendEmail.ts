"use server";

import React from "react";
import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/components/emails/ContactEmail";
import ClientConfirmationEmail from "@/components/emails/ClientConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  first_name: z.string().min(5),
  last_name: z.string().min(5),
  email: z.email(),
  message: z.string().min(10),
});

export async function sendEmail(formData: z.infer<typeof contactSchema>) {
  const validation = contactSchema.safeParse(formData);

  if (!validation.success) {
    return { error: "Invalid form data provided." };
  }

  const { first_name, last_name, email, message } = validation.data;

  try {
   const { data, error } = await resend.batch.send([
     {
       from: "Portfolio <notifications@contact.faithetornam.com>",
       to: "faithgbadegbe1@gmail.com",
       subject: `New Message from ${first_name} ${last_name}`,
       replyTo: email,
       react: React.createElement(ContactEmail, {
         first_name,
         last_name,
         email,
         message,
       }),
     },
     {
       from: "Faith Etornam <hello@contact.faithetornam.com>",
       to: email,
       subject: "Message Received - Faith Etornam",
       react: React.createElement(ClientConfirmationEmail, {
        first_name
       })
     },
   ]);

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
