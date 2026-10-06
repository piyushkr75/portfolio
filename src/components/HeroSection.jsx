import { ArrowRight, FileText, Github, Linkedin, Mail, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const techStack = [
  "C++", "Python", "JavaScript", "React", "Node.js", "FastAPI", "MongoDB", "SQL"
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100dvh-60px)] flex flex-col items-center justify-center px-3 sm:px-4 pt-8 sm:pt-16 lg:pt-24 pb-8 sm:pb-16 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto z-10">
        {/* Main 2-Column Coder Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Developer Intro */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Terminal prompt pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono text-primary bg-primary/10 border border-primary/20">
              <span className="text-emerald-500 font-bold">&gt;</span>
              <span>whoami --role</span>
              <span className="text-muted-foreground/60">|</span>
              <span className="text-foreground">Software Engineer</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Piyush Kumar
            </h1>

            {/* Role & Subtitle */}
            <div className="space-y-1">
              <p className="text-base sm:text-lg md:text-xl font-medium text-foreground/90">
                Software Developer{" "}
                <span className="text-primary font-mono font-semibold">|</span>{" "}
                Full-Stack{" "}
                <span className="text-primary font-mono font-semibold">|</span>{" "}
                DSA
              </p>
              <p className="text-xs sm:text-sm font-mono text-muted-foreground">
                B.Tech Information Science &amp; Engineering Student at{" "}
                <span className="text-foreground font-semibold">
                  Siddaganga Institute of Technology
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              Building reliable, practical software with modern technologies. Passionate about algorithm design, full-stack web applications, and backend systems.
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
              <span className="text-xs font-mono text-muted-foreground mr-1">stack:</span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-mono font-medium text-muted-foreground hover:text-primary bg-card border border-border rounded transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs and Social Icons: GitHub | LinkedIn | LeetCode | Email */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-3">
              <Link to="/projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="/Piyush_Kumar(Resumee).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FileText size={15} />
                <span>Resume.pdf</span>
              </a>

              {/* Social links row matching exact styling */}
              <div className="flex items-center gap-1.5 sm:gap-2 pl-0 sm:pl-1">
                <a
                  href="https://github.com/piyushkr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/piyush-kumar-41883a303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href="https://leetcode.com/piyushkr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <img
                    src="/icons/leetcode.svg"
                    alt="LeetCode"
                    className="w-[17px] h-[17px] object-contain"
                  />
                </a>
                <a
                  href="mailto:piyushkr865@gmail.com"
                  className="p-2 sm:p-2.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Code Window Card */}
          <div className="lg:col-span-5 w-full">
            <div className="card-base shadow-2xl border border-border/80 overflow-hidden font-mono text-xs">
              {/* Code window chrome */}
              <div className="code-window-header">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <span>Piyush.jsx</span>
                  </span>
                </div>
                <div className="text-[10px] text-muted-foreground/60 flex items-center gap-1">
                  <span>UTF-8</span>
                  <span>•</span>
                  <span>React</span>
                </div>
              </div>

              {/* Code editor content */}
              <div className="p-3 sm:p-5 bg-card/95 leading-relaxed space-y-1 overflow-x-hidden select-none text-[10px] sm:text-xs">
                <div className="text-muted-foreground/50 italic">// Software Engineer Profile</div>
                <div>
                  <span className="text-purple-400 font-semibold">const</span>{" "}
                  <span className="text-blue-400">developer</span>{" "}
                  <span className="text-foreground">=</span> &#123;
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-300">name</span>:{" "}
                  <span className="text-emerald-400">&quot;Piyush Kumar&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-300">role</span>:{" "}
                  <span className="text-emerald-400">&quot;Software Engineer&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-300">education</span>:{" "}
                  <span className="text-emerald-400">&quot;B.Tech ISE (2023 - Present)&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-300">dsaSolved</span>:{" "}
                  <span className="text-amber-300">&quot;450+ on LeetCode&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-300">languages</span>: [
                </div>
                <div className="pl-6 sm:pl-8 text-emerald-400">
                  &quot;C++&quot;, &quot;Python&quot;, &quot;JavaScript&quot;
                </div>
                <div className="pl-3 sm:pl-4">],</div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-300">focus</span>:{" "}
                  <span className="text-emerald-400">&quot;Building &amp; Learning&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-300">status</span>:{" "}
                  <span className="text-emerald-400">&quot;Open to Opportunities&quot;</span>
                </div>
                <div>&#125;;</div>
                <div className="pt-2">
                  <span className="text-blue-400">developer</span>.
                  <span className="text-amber-300">buildSoftware</span>();
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Terminal Element */}
        <div className="mt-6 sm:mt-8 max-w-4xl mx-auto">
          <div className="card-base border border-border/80 bg-card/90 overflow-hidden font-mono text-xs">
            <div className="px-4 py-2 bg-muted/60 border-b border-border/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-primary" />
                <span className="text-muted-foreground text-[11px]">bash — 80x24</span>
              </div>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                session active
              </span>
            </div>
            <div className="p-4 space-y-2.5 leading-normal">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-emerald-400 font-bold">$ whoami</span>
                <span className="text-foreground">piyush@developer</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-emerald-400 font-bold">$ currently_building</span>
                <span className="text-foreground">full-stack + AI applications</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-emerald-400 font-bold">$ status</span>
                <span className="text-primary font-semibold text-[10px] sm:text-xs break-words">OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</span>
                <span className="inline-block w-2 h-3.5 bg-primary align-middle animate-[blink_1.1s_step-start_infinite]" />
              </div>
            </div>
          </div>
        </div>

        {/* Developer Statistics Strip */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-2 sm:gap-y-2.5 font-mono text-[11px] sm:text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-emerald-500" />
            <span className="text-foreground font-medium">450+ DSA Problems Solved</span>
          </div>
          <span className="text-border hidden sm:inline">•</span>
          <a
            href="https://leetcode.com/piyushkr75"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors group"
            aria-label="LeetCode Profile"
            title="LeetCode Profile"
          >
            <img
              src="/icons/leetcode.svg"
              alt="LeetCode"
              className="w-3.5 h-3.5 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-foreground font-medium group-hover:underline">LeetCode Profile</span>
          </a>
          <span className="text-border hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-primary" />
            <span className="text-foreground font-medium">Full-Stack &amp; Systems</span>
          </div>
          <span className="text-border hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-foreground font-medium">Software Engineering</span>
          </div>
        </div>
      </div>

    </section>
  );
};
