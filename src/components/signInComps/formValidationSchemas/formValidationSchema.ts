import { z } from "zod";

export const authFormSchema = z.object({
  email: z.string().email("Email must be valid"),
  firstName: z.string().min(2, "First name must be atleast 2 chars").optional(),
  lastName: z.string().min(2, "Last name must be atleast 2 chars").optional(),
  password: z.string().min(7, "Password must be atleast 7 chars"),
});