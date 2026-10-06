import { Mail, Phone, Github, Linkedin, Send, Terminal, MessageSquare, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (isSubmitting) return;

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast({
        title: "Configuration Error",
        description:
          "EmailJS credentials are missing. Please ensure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY are set.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        {
          publicKey: publicKey,
        }
      );

      if (result.status === 200 || result.text === "OK") {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. Your message has been sent to Piyush.",
        });
        // Reset form only on successful delivery
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error(result.text || "Failed to dispatch message");
      }
    } catch (error) {
      console.error("EmailJS dispatch error:", error);
      let errorMsg =
        error?.text ||
        error?.message ||
        "Failed to send email. Please try again or reach out directly at piyushkr865@gmail.com";

      if (error?.status === 412 || String(error?.text).includes("Gmail_API")) {
        errorMsg =
          "Email service re-authentication required (HTTP 412). Please reconnect your Gmail account in the EmailJS dashboard.";
      }

      toast({
        title: "Failed to Send Message",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading: 05. Contact */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-primary text-sm sm:text-base font-semibold">05.</span>
          <h2 className="section-heading text-foreground mb-0">
            Get In <span className="text-primary font-mono">//</span> Touch
          </h2>
          <div className="h-px bg-border flex-1 ml-4 hidden sm:block" />
        </div>
        <p className="text-sm font-mono text-muted-foreground mb-12 max-w-2xl">
          &gt; Open for software engineering internships, entry-level roles, and technical collaborations.
        </p>

        {/* Terminal Header Box */}
        <div className="card-base border border-border/80 overflow-hidden mb-8 shadow-sm">
          <div className="code-window-header py-2 px-3.5 bg-muted/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <Terminal size={12} className="text-primary" />
                <span>contact-session</span>
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">
              ● ready
            </span>
          </div>

          <div className="p-3 sm:p-5 font-mono text-xs leading-relaxed space-y-2 bg-card/90">
            <div className="text-emerald-400 font-bold">$ ./contact-piyush</div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              &quot;Ready to build something impactful? Let&apos;s connect and discuss software engineering, full-stack systems, or opportunities.&quot;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Direct Developer Channels */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1 font-mono">
                Piyush Kumar
              </h3>
              <p className="text-xs font-mono text-primary">
                B.Tech Information Science &amp; Engineering
              </p>
              <p className="text-xs font-mono text-muted-foreground mt-0.5">
                Siddaganga Institute of Technology, Tumakuru
              </p>
            </div>

            {/* Direct Email */}
            <div className="card-base p-3.5 border border-border/70 flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={15} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-mono text-muted-foreground uppercase">Email</p>
                <a
                  href="mailto:piyushkr865@gmail.com"
                  className="text-xs font-mono text-foreground hover:text-primary transition-colors truncate block"
                >
                  piyushkr865@gmail.com
                </a>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="card-base p-3.5 border border-border/70 flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone size={15} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-muted-foreground uppercase">Phone</p>
                <a
                  href="tel:+919507972976"
                  className="text-xs font-mono text-foreground hover:text-primary transition-colors"
                >
                  +91-9507972976
                </a>
              </div>
            </div>

            {/* Social Icons: GitHub | LinkedIn | LeetCode | Email */}
            <div className="space-y-2 pt-1">
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                Profiles &amp; Social
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/piyushkr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/piyush-kumar-41883a303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://leetcode.com/piyushkr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <img
                    src="/icons/leetcode.svg"
                    alt="LeetCode"
                    className="w-[18px] h-[18px] object-contain"
                  />
                </a>
                <a
                  href="mailto:piyushkr865@gmail.com"
                  className="p-3 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: IDE Form */}
          <div className="md:col-span-7 card-base p-4 sm:p-6 border border-border/80 shadow-md">
            <div className="flex items-center gap-2 pb-3 mb-5 border-b border-border/60">
              <MessageSquare size={14} className="text-primary" />
              <h3 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider">
                Send Message / Dispatch
              </h3>
            </div>

            <form ref={formRef} className="space-y-4 font-mono text-xs" onSubmit={handleSubmit}>
              {/* Fallback metadata fields for EmailJS template auto-mapping */}
              <input type="hidden" name="to_name" value="Piyush Kumar" />
              <input type="hidden" name="to_email" value="piyushkr865@gmail.com" />

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] text-muted-foreground mb-1.5"
                >
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="from_name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-md border border-border bg-muted/40 text-foreground text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans disabled:opacity-50"
                  placeholder="Recruiter / Engineer Name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] text-muted-foreground mb-1.5"
                >
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="reply_to"
                  required
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-md border border-border bg-muted/40 text-foreground text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans disabled:opacity-50"
                  placeholder="contact@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] text-muted-foreground mb-1.5"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-md border border-border bg-muted/40 text-foreground text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all font-sans disabled:opacity-50"
                  placeholder="Project inquiry, role details, or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "btn-primary w-full text-xs justify-center",
                  isSubmitting && "opacity-60 cursor-not-allowed pointer-events-none"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    <span>dispatching_message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={13} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
