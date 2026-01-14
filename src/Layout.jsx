import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const Layout = () => {
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-32 flex items-center justify-center">
        <div className="bg-surface border border-border p-10 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold text-primary">
            🎨 CSS Variables Theme Working
          </h1>
          <p className="mt-3 text-muted">
            Entire app switches cleanly between dark & light.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Layout;
