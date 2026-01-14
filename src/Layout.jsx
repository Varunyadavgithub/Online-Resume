import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Summary from "./sections/Summary";
import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Footer from "./components/Footer";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Navbar
        theme={theme}
        toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />

      <main className="pt-25 max-w-6xl mx-auto px-4 mb-6">
        <div className="flex flex-col bg-surface border border-border rounded-2xl shadow-lg overflow-hidden">
          {/* Main Content */}
          <div className="p-6 flex flex-col space-y-6">
            <Summary dashed />
            <About dashed />
            <Experience dashed />
            <Education dashed />
            <Projects dashed />
            <Achievements />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
