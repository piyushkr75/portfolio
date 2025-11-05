import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get EmailJS credentials from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast({
        title: "Configuration Error",
        description:
          "EmailJS credentials are not configured. Please check your environment variables.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.target.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
        console.error("EmailJS error:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-linear-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-background dark:via-background dark:to-background"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a
                    href="mailto:piyushkr865@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    piyushkr865@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <a
                    href="tel:+919507972976"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +919507972976
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Tumakuru, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-foreground">
                Connect With Me
              </h4>
              <div className="flex space-x-4  justify-center">
                <a
                  href="https://www.linkedin.com/in/piyush-kumar-41883a303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/iam_piyushh12/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-white to-purple-50/50 dark:from-card dark:to-card p-8 rounded-lg shadow-xs border border-border/50">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
