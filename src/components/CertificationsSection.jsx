import { Award, ExternalLink, Database, Cpu, Network } from "lucide-react";

const certifications = [
  {
    title: "DBMS and SQL Programming",
    icon: Database,
    url: "https://www.codechef.com/certificates/public/fedb67e",
    category: "database_engineering",
    credentialId: "CERT-SQL-FEDB67E",
  },
  {
    title: "Operating Systems Basics",
    icon: Cpu,
    url: "https://www.credly.com/badges/7bc25722-d0ef-4da9-8022-6265acf661ec/public_url",
    category: "systems_architecture",
    credentialId: "CREDLY-7BC25722",
  },
  {
    title: "CCNA: Introduction to Networks",
    icon: Network,
    url: "https://www.credly.com/badges/b586ba93-8d8d-4f1a-8ea4-f994e438d39d/public_url",
    category: "networking_protocols",
    credentialId: "CREDLY-B586BA93",
  },
];

export const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="section-padding relative"
    >
      <div className="container mx-auto max-w-5xl w-full min-w-0">
        {/* Section Heading: 04. Certifications */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-primary text-sm sm:text-base font-semibold">04.</span>
          <h2 className="section-heading text-foreground mb-0">
            Verified <span className="text-primary font-mono">//</span> Certifications
          </h2>
          <div className="h-px bg-border flex-1 ml-4 hidden sm:block" />
        </div>
        <p className="text-sm font-mono text-muted-foreground mb-8 sm:mb-12 max-w-2xl">
          &gt; Foundational credentials validating practical knowledge in database architecture, operating systems, and computer networks.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full min-w-0">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="card-base p-5 sm:p-6 border border-border/80 flex flex-col justify-between card-hover group shadow-sm w-full min-w-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon size={19} />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-muted-foreground px-2 py-0.5 rounded bg-muted border border-border truncate max-w-[120px] sm:max-w-none">
                      ::{cert.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:outline-none"
                    >
                      {cert.title}
                    </a>
                  </h3>
                  <p className="text-[11px] font-mono text-muted-foreground/60 mb-2">
                    ID: {cert.credentialId}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline"
                  >
                    <Award size={13} />
                    <span>View Certificate</span>
                    <ExternalLink size={11} className="ml-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
