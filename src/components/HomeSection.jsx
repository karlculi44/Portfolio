import { ArrowUpRight, Download, Terminal } from "lucide-react";
import picture from "../assets/Picture2.jpg";

export default function HomeSection() {
  return (
    <section id="home" className="section-shell">
      <div className="section-inner hero-grid">
        <div className="reveal">
          <div className="eyebrow">01 / welcome to my workspace</div>
          <h1>
            Karl Zamora Culi<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <p className="lede">
            Full Stack Developer crafting clean, responsive, and functional web
            experiences with modern technologies.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary ">
              View my work <ArrowUpRight size={16} />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1t-UQJ0oNZkRCpH7rwStRa1uZnMuujjVl"
              download="Karl-Zamora-Culi-Resume.pdf"
              className="button button-secondary"
            >
              <Download size={16} /> Resume
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <strong>Focus</strong>Full-stack development
            </div>
            <div>
              <strong>Learning</strong>Software Engineering
            </div>
            <div>
              <strong>Based in</strong>Bayawan City, PH
            </div>
          </div>
        </div>
        <div className="profile-frame reveal">
          <img src={picture} alt="Karl Zamora Culi" />
          <div className="profile-caption">
            <span className="mono">
              <Terminal size={11} /> status: online
            </span>
            <span className="mono">/ karl.png</span>
          </div>
        </div>
      </div>
    </section>
  );
}
