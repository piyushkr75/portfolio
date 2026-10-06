import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Layout, Server, Database, Wrench, Layers } from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    code: "LANG",
    icon: Code2,
    skills: ["C++", "C", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "frontend",
    name: "Frontend",
    code: "CLIENT",
    icon: Layout,
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: "Backend",
    code: "SERVER",
    icon: Server,
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    id: "databases",
    name: "Databases",
    code: "DATA",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    code: "OPS",
    icon: Wrench,
    skills: [
      "Docker",
      "Kubernetes",
      "Kafka",
      "CI/CD",
      "Git",
      "GitHub",
      "Linux",
      "Postman",
    ],
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      className="section-padding relative"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading: 02. Skills */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-primary text-sm sm:text-base font-semibold">02.</span>
          <h2 className="section-heading text-foreground mb-0">
            Technical <span className="text-primary font-mono">//</span> Stack
          </h2>
          <div className="h-px bg-border flex-1 ml-4 hidden sm:block" />
        </div>
        <p className="text-sm font-mono text-muted-foreground mb-10 max-w-2xl">
          &gt; Technologies, runtimes, and developer tooling used in building production software.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 font-mono text-xs">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md transition-all duration-200 border flex items-center gap-1 sm:gap-1.5",
              activeCategory === "all"
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-card text-muted-foreground hover:text-foreground border-border hover:border-primary/40"
            )}
          >
            <Layers size={13} />
            <span>all_stack</span>
          </button>
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md transition-all duration-200 border flex items-center gap-1 sm:gap-1.5",
                  activeCategory === cat.id
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-card text-muted-foreground hover:text-foreground border-border hover:border-primary/40"
                )}
              >
                <Icon size={13} />
                <span>{cat.name.toLowerCase().replace(/ & /g, "_")}</span>
              </button>
            );
          })}
        </div>

        {/* Skill grid by category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {displayCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="card-base p-5 border border-border/80 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center text-primary">
                        <Icon size={15} />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground font-mono">
                        {cat.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground/70 px-2 py-0.5 rounded bg-muted">
                      ::{cat.code}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="tech-badge"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
