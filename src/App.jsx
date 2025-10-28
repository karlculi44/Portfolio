import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomeSection from "./components/HomeSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </>
  );
}

export default App;
