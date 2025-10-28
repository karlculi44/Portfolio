import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomeSection from "./components/HomeSection.jsx";
import AboutSection from "./components/AboutSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
      </main>
    </>
  );
}

export default App;
