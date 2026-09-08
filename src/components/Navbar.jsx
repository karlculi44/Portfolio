import { createElement, useEffect, useState } from "react";
import {
  Code2,
  FolderGit2,
  House,
  Mail,
  Menu,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import logo from "/LOGO.png";

const navLinks = [
  { name: "Home", to: "home", icon: House },
  { name: "About", to: "about", icon: UserRound },
  { name: "Work", to: "projects", icon: FolderGit2 },
  { name: "Stack", to: "skills", icon: Code2 },
  { name: "Contact", to: "contact", icon: Mail },
];

function Navigation({ onNavigate }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map(({ to }) => document.getElementById(to))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-list">
      {navLinks.map(({ name, to, icon }) => (
        <a
          key={to}
          href={`#${to}`}
          className="nav-link"
          aria-current={active === to ? "page" : undefined}
          title={name}
          onClick={onNavigate}
        >
          {createElement(icon, { size: 17, strokeWidth: 1.8 })}
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const Brand = () => (
    <a href="#home" className="brand" onClick={closeMenu}>
      <img src={logo} alt="Karl Culi logo" />
      <span className="brand-copy">
        <span className="brand-name">Karl Culi</span>
        <span className="brand-meta">dev.portfolio</span>
      </span>
    </a>
  );

  return (
    <>
      <aside className="workspace-sidebar" aria-label="Primary navigation">
        <Brand />
        <div className="nav-label">Explore</div>
        <Navigation />
        <div className="sidebar-bottom">
          <div className="status-line">
            <span className="status-dot" /> <span>Available for work</span>
          </div>
          <button
            className="theme-button"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
          </button>
        </div>
      </aside>
      <div className="mobile-bar">
        <Brand />
        <div className="mobile-actions">
          <button
            className="icon-button theme-icon-button"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-icon-button"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div
        className={`mobile-overlay${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
        onClick={closeMenu}
      />
      <aside
        id="mobile-navigation"
        className={`mobile-menu${isOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu-header">
          <span className="mono">NAVIGATION</span>
          <button
            className="icon-button"
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>
        <Navigation onNavigate={closeMenu} />
      </aside>
    </>
  );
}
