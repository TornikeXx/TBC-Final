import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "invalid_email" }),
  password: z.string().min(1, { message: "required" }),
});
export type SignInFormValues = z.infer<typeof signInSchema>;

export const registerSchema = z.object({
  name: z.string().min(1, { message: "required" }),
  email: z.string().email({ message: "invalid_email" }),
  password: z.string().min(1, { message: "required" }),
  password1: z.string().min(1, { message: "required" }),
});
export type RegisterFormValues = z.infer<typeof registerSchema>;
