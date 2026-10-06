import { ExternalLink, Github, GitBranch, Terminal } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CodeSense AI",
    repoName: "piyushkr75/CodeSense-AI",
    subtitle: "AI-Powered Code Reviewer",
    description:
      "A full-stack AI code reviewer that analyzes source code and provides intelligent improvement suggestions, code conversions, complexity analysis, and personalized learning resources.",
    image: "/projects/codesense_ai.jpg",
    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Groq SDK",
      "Axios",
      "Prism.js",
    ],
    highlights: [
      "AI-powered code review and improvement suggestions",
      "Multi-language code analysis with complexity evaluation",
      "Code conversion to Java, C, and C++",
      "Browser-based syntax-highlighted code editor & file upload",
    ],
    githubUrl: "https://github.com/piyushkr75/CodeSense-AI",
    demoUrl: null,
  },
  {
    id: 2,
    title: "HealthPulse",
    repoName: "piyushkr75/HealthPulse-Hospital-Patient-Monitoring-System",
    subtitle: "Hospital Patient Monitoring System",
    description:
      "A Qt 6 desktop application for monitoring simulated hospital patient vitals through a real-time dashboard.",
    image: "/projects/healthpulse.jpg",
    tags: ["C++17", "Qt 6", "CMake", "Qt Widgets", "Qt Charts"],
    highlights: [
      "Real-time simulated heart-rate, SpO2, and temperature monitoring",
      "Blood-pressure and respiration monitoring with patient alerts",
      "Patient records, status management, and activity logs",
      "Modular architecture with controller, sensor, and logger layers",
    ],
    githubUrl:
      "https://github.com/piyushkr75/HealthPulse-Hospital-Patient-Monitoring-System",
    demoUrl: null,
  },
  {
    id: 3,
    title: "HireHub",
    repoName: "piyushkr75/HireHub-Job-Portal",
    subtitle: "Job Portal",
    description:
      "Developed a full-stack job portal using the MERN stack with secure JWT authentication and RESTful APIs.",
    image: "/projects/hirehub.jpg",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    highlights: [
      "JWT authentication with role-based access",
      "RESTful API design with MVC architecture",
      "CRUD operations with input validation",
      "Responsive React UI with MongoDB optimization",
    ],
    githubUrl: "https://github.com/piyushkr75",
    demoUrl: null,
  },
  {
    id: 4,
    title: "StockSense Pro",
    repoName: "piyushkr75/StockSense-Pro",
    subtitle: "Stock Analysis Platform",
    description:
      "Developed a full-stack stock analysis platform with a FastAPI backend and React frontend, integrating REST APIs for market and news data.",
    image: "/projects/stocksense.jpg",
    tags: ["Python", "FastAPI", "React", "FinBERT", "Supabase"],
    highlights: [
      "FastAPI backend with REST endpoints",
      "FinBERT-based financial sentiment analysis",
      "Stock prediction APIs with health-check endpoints",
      "Market-data integration and news processing",
    ],
    githubUrl: "https://github.com/piyushkr75",
    demoUrl: null,
  },
  {
    id: 5,
    title: "AI Therapist",
    repoName: "piyushkr75/AI-Therapist",
    subtitle: "Conversational Mental Health Assistant",
    description:
      "Developed an AI-powered conversational assistant using LangChain, LLMs, and Vector Databases for context-aware interactions.",
    image: "/projects/ai_therapist.jpg",
    tags: ["Python", "LangChain", "LLMs", "Vector Database"],
    highlights: [
      "Prompt engineering with conversation memory",
      "Semantic search via vector database storage",
      "Personalized contextual interactions",
      "Retrieval-augmented generation optimization",
    ],
    githubUrl: "https://github.com/piyushkr75",
    demoUrl: null,
  },
  {
    id: 6,
    title: "Bank Statement Extractor",
    repoName: "piyushkr75/bank_statement-extractor",
    subtitle: "AI Document / Data Extraction",
    description:
      "An application that extracts transaction data from bank statement images or PDF files and converts the extracted information into a downloadable CSV format.",
    image: "/projects/bank_statement_extractor.jpg",
    tags: ["Node.js", "Gemini API", "Express.js", "Multer"],
    highlights: [
      "Upload bank statements as JPEG, PNG, WEBP, or PDF",
      "Extract transaction information using Gemini API",
      "Display extracted transactions in a structured table",
      "Download extracted results as CSV (date, description, amount, balance)",
    ],
    githubUrl: "https://github.com/piyushkr75/bank_statement-extractor",
    demoUrl: null,
  },
  {
    id: 7,
    title: "Movie Recommender System",
    repoName: "piyushkr75/movie_recommender_system",
    subtitle: "Machine Learning / Recommendation System",
    description:
      "A content-based movie recommendation system that suggests similar movies using movie tags and descriptions.",
    image: "/projects/movie_recommender.png",
    tags: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn"],
    highlights: [
      "Content-based filtering using movie tags and metadata",
      "Text vectorization with CountVectorizer",
      "Cosine similarity calculation for top-10 movie recommendations",
      "Interactive Streamlit interface with cached similarity matrix",
    ],
    githubUrl: "https://github.com/piyushkr75/movie_recommender_system",
    demoUrl: null,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group card-base overflow-hidden card-hover flex flex-col justify-between border border-border/80 shadow-md">
      <div>
        {/* Engineering Window Header */}
        <div className="code-window-header border-b border-border/70 py-2 px-3.5 bg-muted/50">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-muted-foreground truncate max-w-[140px] sm:max-w-[200px]">
              {project.repoName}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground/60">
            <GitBranch size={11} className="text-primary/70" />
            <span>main</span>
          </div>
        </div>

        {/* Dashboard Image Frame */}
        <div className="h-36 sm:h-48 overflow-hidden bg-black/40 border-b border-border/50 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>

        {/* Card Content */}
        <div className="p-3.5 sm:p-5 pb-0">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-mono font-medium text-primary bg-primary/10 border border-primary/20 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title + Subtitle */}
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-muted-foreground font-medium mt-0.5 mb-3">
            &gt; {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {project.description}
          </p>

          {/* Key Engineering Features */}
          <ul className="space-y-1.5 mb-4">
            {project.highlights.map((point) => (
              <li
                key={point}
                className="text-xs text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary font-mono text-xs select-none">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-3.5 sm:p-5 pt-0">
        <div className="flex items-center gap-2.5 pt-3 border-t border-border/60">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 border border-border transition-all duration-200"
          >
            <Github size={13} />
            <span>view_code</span>
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-200"
            >
              <ExternalLink size={13} />
              <span>live_demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="section-padding relative"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading: 03. Projects */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-primary text-sm sm:text-base font-semibold">03.</span>
          <h2 className="section-heading text-foreground mb-0">
            Featured <span className="text-primary font-mono">//</span> Projects
          </h2>
          <div className="h-px bg-border flex-1 ml-4 hidden sm:block" />
        </div>
        <p className="text-sm font-mono text-muted-foreground mb-12 max-w-2xl">
          &gt; End-to-end engineering projects across full-stack web development, backend APIs, desktop systems, and AI integration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
