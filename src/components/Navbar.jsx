import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "/LOGO.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const timeout = setTimeout(() => setShowText(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo & Name — scrolls to Home */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center space-x-3 cursor-pointer select-none group"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 group-hover:scale-105 transition-transform duration-300"
          />
          <span
            className={`text-xl md:text-2xl font-semibold text-gray-800 transition-all duration-700 ease-out ${
              showText
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3"
            }`}
          >
            Karl Culi
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.to} className="relative group">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer transition-colors duration-300 hover:text-gray-900"
              >
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Slide/Fade Animation */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-64"
            : "opacity-0 -translate-y-4 max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
          {navLinks.map((link, index) => (
            <li
              key={link.to}
              className="transition-transform duration-300 hover:scale-105"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
