import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormInput = z.infer<typeof contactSchema>;

// Mock hook since there is no backend for this static portfolio
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormInput) => {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      return { success: true };
    },
  });
}
