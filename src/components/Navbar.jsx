import React, { useState, useEffect } from "react";
import { Sun, Moon } from "react-feather";
import { FaBars } from "react-icons/fa"; // Hamburger icon

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply theme when state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm transition-colors duration-300 relative">
      {/* Logo (left) */}
      <div className="font-mono text-2xl font-bold text-black ml-4">
        <div className="w-12 h-12 text-black flex items-center justify-center rounded">
          &lt;SS/&gt;
        </div>
      </div>

      {/* Hamburger Menu for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Navigation links and controls for desktop */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="flex space-x-6">
          <a
            href="#about"
            className="text-black hover:text-gray-300 transition"
          >
            About
          </a>
          <a href="#work" className="text-black hover:text-gray-300 transition">
            Work
          </a>
          <a
            href="#testimonials"
            className="text-black hover:text-gray-300 transition"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-black hover:text-gray-300 transition"
          >
            Contact
          </a>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Download CV button */}
        <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition rounded">
          Download CV
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-700 hover:text-gray-900"
            aria-label="Close menu"
          >
            <FaBars size={24} />
          </button>
          <a
            href="#about"
            className="text-black text-lg hover:text-gray-300 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#work"
            className="text-black text-lg hover:text-gray-300 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="text-black text-lg hover:text-gray-300 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-black text-lg hover:text-gray-300 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
