import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email({ message: "invalid_email" }),
  name: z.string().min(3, { message: "min_length" }),
  message: z.string().max(100, { message: "max_length" }),
});

export type ContactFormFields = z.infer<typeof contactSchema>;
