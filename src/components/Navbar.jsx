import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-surface border border-border backdrop-blur-md shadow-lg rounded-2xl px-6 h-16 flex items-center gap-10 transition-colors">

        {/* Logo */}
        <h1 className="text-xl font-bold text-text">
          Varun<span className="text-primary">.</span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-text">
          <li className="hover:text-primary cursor-pointer transition">About</li>
          <li className="hover:text-primary cursor-pointer transition">Skills</li>
          <li className="hover:text-primary cursor-pointer transition">Projects</li>
          <li className="hover:text-primary cursor-pointer transition">Contact</li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl border border-border hover:scale-105 transition"
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
