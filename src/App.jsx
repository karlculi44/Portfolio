import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomeSection from "./components/HomeSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ContactsSection from "./components/ContactSection.jsx";
import InqueriesForm from "./components/InqueriesForm.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactsSection />
        <InqueriesForm />
      </main>
    </>
  );
}

export default App;
