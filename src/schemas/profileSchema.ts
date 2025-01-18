import { z } from "zod";

export const profileSchema = z.object({
  phone: z.string().min(3,{message:"min_length"}),
  nameKa: z.string().min(3, { message: "min_length" }),
  nameEn: z.string().min(3, { message: "min_length" }),
});

export type ProfileFormFields = z.infer<typeof profileSchema>;