import { SectionHeading } from "@/components/SectionHeading";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-form";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormInput = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const { mutate: submitContact, isPending } = useSubmitContact();
  
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});

  const validate = () => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const formErrors: any = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) formErrors[err.path[0]] = err.message;
      });
      setErrors(formErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    submitContact(formData, {
      onSuccess: () => {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I will get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      },
      onError: () => {
        toast({
          title: "Failed to send",
          description: "An error occurred. Please try again later.",
          variant: "destructive"
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-primary/5 rounded-tl-[100px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind or want to discuss engineering opportunities? Let's connect." />

        <div className="max-w-3xl mx-auto mt-12 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-xl shadow-black/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.name ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.email ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Your Message</label>
              <textarea 
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.message ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none`}
                placeholder="How can I help you?"
              ></textarea>
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isPending ? "Sending..." : "Send Message"} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
