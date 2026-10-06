import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, FileText, Terminal, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", to: "/", code: "00" },
  { name: "About", to: "/about", code: "01" },
  { name: "Skills", to: "/skills", code: "02" },
  { name: "Projects", to: "/projects", code: "03" },
  { name: "Certifications", to: "/certifications", code: "04" },
  { name: "Contact", to: "/contact", code: "05" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 w-full z-40 transition-all duration-300 font-mono",
          "py-2.5 sm:py-3 bg-background/95 backdrop-blur-md border-b border-border/80 shadow-sm"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Developer Logo */}
          <Link
            className="group flex items-center gap-2 text-base font-bold text-foreground tracking-tight hover:text-primary transition-colors shrink-0"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex items-center text-primary group-hover:text-primary transition-colors">
              &lt;<span className="text-foreground group-hover:text-primary transition-colors">PK</span> /&gt;
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-normal text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              piyush.dev
            </span>
          </Link>

          {/* Desktop Nav Items (visible at lg: 1024px+) */}
          <div className="hidden lg:flex items-center gap-1 text-xs">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative px-3 py-1.5 rounded-md transition-all duration-200 flex items-center gap-1.5",
                    isActive
                      ? "text-primary bg-primary/10 border border-primary/20 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )
                }
              >
                <span className="text-[10px] text-primary/70">{item.code}.</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Desktop Controls (visible at lg: 1024px+) */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href="https://github.com/piyushkr75"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all flex items-center justify-center"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-kumar-41883a303/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all flex items-center justify-center"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={17} />
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

            {/* Theme Toggle in desktop navbar flow */}
            <ThemeToggle className="ml-0.5" />

            <a
              href="/Piyush_Kumar(Resumee).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-primary/40 text-primary bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200 shrink-0"
            >
              <FileText size={13} />
              <span>Resume.pdf</span>
            </a>
          </div>

          {/* Mobile & Tablet Header Controls (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Theme Toggle integrated directly in mobile header */}
            <ThemeToggle />

            {/* Hamburger button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              type="button"
              className="p-2 text-foreground rounded-lg border border-border bg-card/70 hover:bg-muted transition-colors flex items-center justify-center"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl flex flex-col lg:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header inside the mobile menu modal to keep branding & close accessible */}
          <div className="container mx-auto px-4 py-3 flex items-center justify-between border-b border-border/80">
            <Link
              to="/"
              className="flex items-center gap-2 text-base font-bold text-foreground font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-primary">&lt;PK /&gt;</span>
              <span className="text-xs text-muted-foreground font-normal">piyush.dev</span>
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(false)}
                type="button"
                className="p-2 text-foreground rounded-lg border border-border bg-card/80 hover:bg-muted transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Nav links body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            <div className="w-full max-w-sm mx-auto flex flex-col gap-2 font-mono">
              <div className="flex items-center gap-2 pb-2 mb-2 border-b border-border/60 justify-center">
                <Terminal size={14} className="text-primary" />
                <span className="text-xs text-muted-foreground font-medium">$ nav --routes</span>
              </div>

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-base w-full py-3 px-4 rounded-lg transition-all flex items-center justify-between border",
                      isActive
                        ? "text-primary bg-primary/10 border-primary/30 font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60 border-transparent"
                    )
                  }
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-primary/70">{item.code}.</span>
                    <span>{item.name}</span>
                  </span>
                  <span className="text-xs text-muted-foreground/60">→</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile bottom actions: Resume + Socials */}
            <div className="w-full max-w-sm mx-auto pt-6 border-t border-border/70 flex flex-col gap-4">
              <a
                href="/Piyush_Kumar(Resumee).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-mono font-medium bg-primary text-white shadow-md hover:bg-primary/90 transition-all"
              >
                <FileText size={16} />
                <span>Download Resume.pdf</span>
              </a>

              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://github.com/piyushkr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/piyush-kumar-41883a303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://leetcode.com/piyushkr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
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
                  className="p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
