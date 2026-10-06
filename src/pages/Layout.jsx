import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export const Layout = () => {
  const { pathname } = useLocation();

  // Default to dark mode if no preference is stored
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
