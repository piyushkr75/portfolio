import { ArrowUp, Heart, Linkedin, Instagram, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-linear-to-br from-card via-card to-card/50 dark:from-background dark:via-background dark:to-background border-t border-border/50 mt-12">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left section - Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Made{" "}
             
              by{" "}
              <span className="text-primary font-semibold">Piyush Kumar</span>
            </p>
            <p className="text-xs text-muted-foreground/70">
              All rights reserved.
            </p>
          </div>

          {/* Center section - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/piyush-kumar-41883a303/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-foreground hover:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/iam_piyushh12/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-foreground hover:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://github.com/piyushkr75"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-foreground hover:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Right section - Back to top */}
          <a
            href="#hero"
            className="group p-3 rounded-full bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </a>
        </div>

        
      </div>
    </footer>
  );
};
