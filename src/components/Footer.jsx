import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-card/95 border-t border-border/80 font-mono text-xs">
      {/* Top subtle cyan/indigo accent border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Dev Logo + Info */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-primary font-bold">&lt;PK /&gt;</span>
              <span className="font-semibold text-foreground">Piyush Kumar</span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              B.Tech Information Science &amp; Engineering • SIT Tumakuru
            </p>

          </div>

          {/* Center: Social / Profile Icons: GitHub | LinkedIn | LeetCode | Email */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/piyushkr75"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all flex items-center justify-center"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-kumar-41883a303/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all flex items-center justify-center"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://leetcode.com/piyushkr75"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all flex items-center justify-center"
              aria-label="LeetCode Profile"
              title="LeetCode Profile"
            >
              <img
                src="/icons/leetcode.svg"
                alt="LeetCode"
                className="w-4 h-4 object-contain"
              />
            </a>
            <a
              href="mailto:piyushkr865@gmail.com"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all flex items-center justify-center"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="text-[11px]">
              © {currentYear} Piyush Kumar
            </span>
            <Link
              to="/"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted border border-border/60 transition-all flex items-center gap-1"
              aria-label="Back to top"
              title="Return to top"
              onClick={() => window.scrollTo(0, 0)}
            >
              <ArrowUp size={13} />
              <span className="text-[10px] uppercase">top</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
