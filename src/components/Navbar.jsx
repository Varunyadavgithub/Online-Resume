import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ theme, toggleTheme }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-surface border border-border backdrop-blur-md shadow-lg rounded-2xl px-6 h-16 flex items-center gap-10 transition-colors">
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("summary")}
          className="text-xl font-bold text-text cursor-pointer"
        >
          TheCyberDev<span className="text-primary">.</span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-text">
          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-primary cursor-pointer transition"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("experience")}
            className="hover:text-primary cursor-pointer transition"
          >
            Experience
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-primary cursor-pointer transition"
          >
            Projects
          </li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl border border-border hover:scale-105 transition cursor-pointer"
        >
          {theme === "dark" ? (
            <FiSun className="text-yellow-400 text-lg" />
          ) : (
            <FiMoon className="text-indigo-600 text-lg" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
