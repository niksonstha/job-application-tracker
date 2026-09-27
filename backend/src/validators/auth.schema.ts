import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must not exceed 100 characters"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
