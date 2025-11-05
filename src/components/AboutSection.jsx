import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-background dark:via-background dark:to-background"
    >
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              A dedicated third-year student with a strong passion for web
              application development and efficient problem-solving.
            </p>

            <p className="text-muted-foreground">
              Highly skilled in the MERN Stack (MongoDB, Express.js, React,
              Node.js) for building full-stack applications, complemented by an
              intermediate proficiency in Data Structures and Algorithms (DSA).
              Eager to leverage technical knowledge to contribute to innovative
              projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Piyush_Kumar_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="gradient-border rounded-2xl overflow-hidden shadow-lg bg-linear-to-br from-white to-blue-50/50 dark:from-card dark:to-card w-72 h-44 md:w-96 md:h-56">
              <img
                src="/piyushhh.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
