import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, FileText, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", code: "00" },
  { name: "About", href: "#about", code: "01" },
  { name: "Skills", href: "#skills", code: "02" },
  { name: "Projects", href: "#projects", code: "03" },
  { name: "Certifications", href: "#certifications", code: "04" },
  { name: "Contact", href: "#contact", code: "05" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 font-mono",
        isScrolled
          ? "py-3 bg-background/90 backdrop-blur-md border-b border-border/80 shadow-lg shadow-black/10"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Developer Logo */}
        <a
          className="group flex items-center gap-2 text-base font-bold text-foreground tracking-tight hover:text-primary transition-colors"
          href="#hero"
        >
          <span className="flex items-center text-primary group-hover:text-primary transition-colors">
            &lt;<span className="text-foreground group-hover:text-primary transition-colors">PK</span> /&gt;
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-normal text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            piyush.dev
          </span>
        </a>

        {/* Desktop nav with mono numbering */}
        <div className="hidden lg:flex items-center gap-1 text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3 py-1.5 rounded-md transition-all duration-200 flex items-center gap-1.5",
                  isActive
                    ? "text-primary bg-primary/10 border border-primary/20 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <span className="text-[10px] text-primary/70">{item.code}.</span>
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Desktop right side: GitHub, LinkedIn, LeetCode, Resume */}
        <div className="hidden lg:flex items-center gap-2">
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
          <a
            href="/Piyush_Kumar(Resumee).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-primary/40 text-primary bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200"
          >
            <FileText size={13} />
            <span>Resume.pdf</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 text-foreground rounded-md border border-border bg-card/60 z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 lg:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-5 w-full max-w-xs px-6">
            <div className="flex items-center gap-2 pb-2 mb-2 border-b border-border/70 w-full justify-center">
              <Terminal size={16} className="text-primary" />
              <span className="text-xs text-muted-foreground">nav --routes</span>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base w-full text-center py-2 rounded-lg transition-colors flex items-center justify-center gap-2",
                  activeSection === item.href.replace("#", "")
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xs text-primary/70">{item.code}.</span>
                <span>{item.name}</span>
              </a>
            ))}

            {/* Mobile social + resume */}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/70 w-full">
              <a
                href="https://github.com/piyushkr75"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-kumar-41883a303/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/piyushkr75"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center justify-center"
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
                href="/Piyush_Kumar(Resumee).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-primary text-white"
              >
                <FileText size={14} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
