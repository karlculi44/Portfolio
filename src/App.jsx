import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HomeSection from "./components/HomeSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ContactsSection from "./components/ContactSection.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import TechMarquee from "./components/TechMarquee.jsx";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <div className="ambient-grid" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      {theme === "dark" && <CursorGlow />}
      <header>
        <Navbar
          theme={theme}
          onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </header>
      <main className="main-content">
        <HomeSection />
        <TechMarquee />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactsSection />
      </main>
    </div>
  );
}

export default App;
