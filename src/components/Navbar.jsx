import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-black">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          &lt;SS/&gt;
        </div>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-8 md:flex">
          <a
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#work"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Contact
          </a>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button className="dark:bg-white rounded-2xl dark:text-gray-900 hover:text-gray-800 dark:hover:text-white focus:outline-none">
            Download CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-4 py-2 bg-white md:hidden dark:bg-black">
          <a
            href="#about"
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#work"
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Contact
          </a>
          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleDarkMode}
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <span className="flex items-center gap-2">
                <FaSun size={20} /> Light Mode
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <FaMoon size={20} /> Dark Mode
              </span>
            )}
          </button>
          <button className="mt-2 text-gray-600 rounded-3xl dark:bg-white dark:text-gray-900 hover:text-gray-800 dark:hover:text-white focus:outline-none">
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
