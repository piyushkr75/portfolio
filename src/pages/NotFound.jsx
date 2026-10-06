import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

export const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="card-base p-8 sm:p-12 border border-border/80 max-w-md w-full">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Terminal size={20} className="text-primary" />
          <span className="font-mono text-sm text-muted-foreground">bash — error</span>
        </div>
        <h1 className="text-5xl font-extrabold text-primary font-mono mb-2">404</h1>
        <p className="font-mono text-sm text-muted-foreground mb-6">
          <span className="text-emerald-400">$</span> route not found — page does not exist
        </p>
        <Link
          to="/"
          className="btn-primary text-sm"
        >
          <span>cd ~/home</span>
        </Link>
      </div>
    </section>
  );
};
