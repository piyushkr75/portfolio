import { GraduationCap, Terminal, GitBranch, Code2, Server, Cpu, Github, Linkedin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding relative"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading: 01. About */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-primary text-sm sm:text-base font-semibold">01.</span>
          <h2 className="section-heading text-foreground mb-0">
            About <span className="text-primary font-mono">//</span> Me
          </h2>
          <div className="h-px bg-border flex-1 ml-4 hidden sm:block" />
        </div>
        <p className="text-sm font-mono text-muted-foreground mb-10 max-w-2xl">
          &gt; Developer bio, academic background, and engineering core focus.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photo & Terminal-Styled Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Terminal Window with $ cat about.txt */}
            <div className="card-base border border-border/80 overflow-hidden shadow-lg">
              <div className="code-window-header">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <Terminal size={12} className="text-primary" />
                    <span>about.txt</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/60">
                  UTF-8
                </span>
              </div>

              <div className="p-5 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pb-1 border-b border-border/40">
                  <span>$</span>
                  <span>cat about.txt</span>
                </div>

                <div className="flex items-start gap-4 pt-1">
                  <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-border shadow">
                    <img
                      src="/piyushhh.jpg"
                      alt="Piyush Kumar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Piyush Kumar
                    </h3>
                    <p className="text-xs font-mono text-primary font-medium mt-0.5">
                      Information Science &amp; Engineering
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Siddaganga Institute of Technology, Tumakuru
                    </p>
                  </div>
                </div>

                <p>
                  I'm a dedicated Information Science &amp; Engineering student focused on building robust, production-grade software. My development journey centers on mastering{" "}
                  <span className="text-foreground font-medium font-mono">Data Structures &amp; Algorithms</span>, architecting{" "}
                  <span className="text-foreground font-medium font-mono">full-stack web applications</span>, and designing scalable{" "}
                  <span className="text-foreground font-medium font-mono">backend/API systems</span>.
                </p>

                <p>
                  I enjoy solving challenging computational problems, with{" "}
                  <span className="text-foreground font-semibold font-mono text-primary">
                    450+ DSA problems solved on LeetCode
                  </span>
                  . Beyond competitive problem solving, I build complete end-to-end applications integrating modern databases (relational &amp; NoSQL) and machine learning APIs.
                </p>

                <p>
                  My goal is to design systems that are clean, reliable, and performant, following modern engineering practices and deep foundational computer science concepts.
                </p>
              </div>
            </div>

            {/* CTAs and Social Icons: GitHub | LinkedIn | LeetCode | Email */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#contact" className="btn-primary text-xs">
                <span>Connect With Me</span>
              </a>
              <a
                href="/Piyush_Kumar(Resumee).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                <span>Download Resume.pdf</span>
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/piyushkr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/piyush-kumar-41883a303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://leetcode.com/piyushkr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
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
                  className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Core CS Foundations */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Card */}
            <div className="card-base p-5 border border-border/80 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-primary uppercase tracking-wider">
                    Education
                  </p>
                  <h4 className="text-sm font-semibold text-foreground">
                    Siddaganga Institute of Technology
                  </h4>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Tumakuru, Karnataka
              </p>
              <p className="text-xs font-medium text-foreground mt-2">
                Bachelor of Technology in Information Science &amp; Engineering
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span>Sept 2023 – Present</span>
              </div>
            </div>

            {/* CS Fundamentals Blueprint */}
            <div className="card-base p-5 border border-border/80">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch size={14} className="text-primary" />
                <p className="text-xs font-mono text-foreground font-semibold">
                  Core CS Foundations
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { name: "Data Structures & Algorithms", icon: Code2 },
                  { name: "Object-Oriented Programming (OOP)", icon: Cpu },
                  { name: "DBMS & SQL Architecture", icon: Server },
                  { name: "Operating Systems Basics", icon: Terminal },
                  { name: "Computer Networks & Protocols", icon: GitBranch },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2.5 px-3 py-2 rounded bg-muted/60 border border-border/60 text-xs font-mono text-muted-foreground"
                    >
                      <Icon size={13} className="text-primary/70 shrink-0" />
                      <span className="text-[11px]">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
