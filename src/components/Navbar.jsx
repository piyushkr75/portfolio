import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", to: "/", code: "01" },
  { name: "About", to: "/about", code: "02" },
  { name: "Skills", to: "/skills", code: "03" },
  { name: "Projects", to: "/projects", code: "04" },
  { name: "Certifications", to: "/certifications", code: "05" },
  { name: "Contact", to: "/contact", code: "06" },
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
          "py-2.5 sm:py-3 bg-background/80 dark:bg-background/85 backdrop-blur-md border-b border-border/80 shadow-sm"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
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

          {/* Mobile & Tablet Header Controls (< 1024px): Resume + ThemeToggle + Hamburger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Resume button in mobile navbar */}
            <a
              href="/Piyush_Kumar(Resumee).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-primary/40 text-primary bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200 shrink-0"
            >
              <FileText size={13} />
              <span>Resume</span>
            </a>

            {/* Theme Toggle in mobile header */}
            <ThemeToggle />

            {/* Hamburger button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              type="button"
              className="p-2 text-foreground rounded-lg border border-border bg-card/70 hover:bg-muted transition-colors flex items-center justify-center cursor-pointer"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Glass Card Navigation (matching reference design) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden flex flex-col p-3 sm:p-4 pt-14 sm:pt-16 overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          onClick={(e) => {
            // Close when clicking directly on the backdrop area
            if (e.target === e.currentTarget) {
              setIsMenuOpen(false);
            }
          }}
        >
          {/* Floating Glassmorphic Container Card */}
          <div
            className="w-full max-w-sm sm:max-w-md mx-auto rounded-2xl border border-border/80 dark:border-blue-500/20 bg-card/90 dark:bg-[#070f1e]/85 backdrop-blur-xl shadow-2xl p-4 sm:p-5 flex flex-col gap-2.5 font-mono relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top right close button inside card */}
            <div className="flex justify-end mb-1">
              <button
                onClick={() => setIsMenuOpen(false)}
                type="button"
                className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg border border-border/70 bg-card/60 hover:bg-muted transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links stack */}
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "w-full py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-between text-sm border",
                    isActive
                      ? "bg-blue-600/20 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.25)] font-semibold"
                      : "bg-muted/40 dark:bg-slate-900/50 hover:bg-muted/70 dark:hover:bg-slate-800/60 border-border/60 dark:border-slate-800 text-muted-foreground hover:text-foreground"
                  )
                }
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-primary font-medium">{item.code}.</span>
                  <span>{item.name}</span>
                </span>
                <span className="text-muted-foreground/70 text-sm select-none">→</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
