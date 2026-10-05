import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate a small number of subtle accent dots
    const count = 35;
    const newDots = [];
    for (let i = 0; i < count; i++) {
      newDots.push({
        id: i,
        size: (i % 3 === 0 ? 2 : 1.5),
        x: Math.round((i * 137.5) % 100),
        y: Math.round((i * 93.7) % 100),
        opacity: (i % 2 === 0 ? 0.25 : 0.15),
        duration: 4 + (i % 4),
      });
    }
    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 1 — Technical Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Layer 2 — Code Texture / Blurred Code Fragments */}
      <div className="absolute inset-0 select-none overflow-hidden font-mono text-[11px] leading-relaxed text-muted-foreground/10 dark:text-muted-foreground/[0.04] pointer-events-none">
        <div className="absolute top-[12%] left-[4%] max-w-xs blur-[0.5px]">
          <code>
            const developer = &#123; name: &quot;Piyush&quot;, role: &quot;SWE&quot; &#125;;<br />
            function buildSoftware(specs) &#123; return async () =&gt; &#123; ... &#125;; &#125;
          </code>
        </div>
        <div className="absolute top-[28%] right-[5%] max-w-xs text-right blur-[0.5px]">
          <code>
            import &#123; createServer &#125; from &quot;http&quot;;<br />
            const stack = [&quot;C++&quot;, &quot;React&quot;, &quot;Node.js&quot;, &quot;Python&quot;];
          </code>
        </div>
        <div className="absolute top-[52%] left-[6%] max-w-sm blur-[0.5px]">
          <code>
            SELECT * FROM projects WHERE status = &apos;shipped&apos;;<br />
            const dsa = new Map([ [&quot;leetcode&quot;, 450] ]);
          </code>
        </div>
        <div className="absolute top-[75%] right-[8%] max-w-xs text-right blur-[0.5px]">
          <code>
            git commit -m &quot;feat: scalable architecture&quot;<br />
            docker-compose up -d --build
          </code>
        </div>
      </div>

      {/* Layer 3 — Subtle Developer Symbols */}
      <div className="absolute inset-0 select-none font-mono text-primary/10 dark:text-primary/[0.07] text-2xl font-bold">
        <span className="absolute top-[18%] left-[12%] transform -rotate-12">&lt;/&gt;</span>
        <span className="absolute top-[24%] right-[18%] transform rotate-6">&#123; &#125;</span>
        <span className="absolute top-[42%] left-[8%] transform rotate-12">=&gt;</span>
        <span className="absolute top-[60%] right-[12%] transform -rotate-6">;</span>
        <span className="absolute top-[80%] left-[16%] transform rotate-45">( )</span>
        <span className="absolute top-[88%] right-[22%] transform -rotate-12">$</span>
      </div>

      {/* Layer 4 — Soft Radial Glows Behind Major Sections */}
      {/* Hero Blue Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-15 dark:opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(37, 99, 235, 0) 70%)",
        }}
      />
      {/* Skills Cyan Glow */}
      <div
        className="absolute top-[38%] right-[-10%] w-[550px] h-[550px] rounded-full blur-[160px] opacity-10 dark:opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
        }}
      />
      {/* Projects Violet Glow */}
      <div
        className="absolute top-[62%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-10 dark:opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Sparse Star / Circuit Accent Dots */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-primary/40 dark:bg-sky-400/40 animate-pulse-subtle"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            opacity: dot.opacity,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
