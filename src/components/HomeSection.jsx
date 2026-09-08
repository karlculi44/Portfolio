import { ArrowUpRight, Download, Terminal } from "lucide-react";
import picture from "../assets/Picture2.jpg";
import ScrollReveal from "./ScrollReveal.jsx";

export default function HomeSection() {
  return (
    <section id="home" className="section-shell">
      <div className="section-inner hero-grid">
        <div>
          <ScrollReveal delay={0}>
            <div className="eyebrow">01 / welcome to my portfolio</div>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <h1>
              Karl Zamora Culi<span style={{ color: "var(--accent)" }}>.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={280}>
            <p className="lede">
              Full Stack Developer crafting clean, responsive, and functional
              web experiences with modern technologies.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={420}>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary rexr">
                View my work <ArrowUpRight size={16} />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Karl_Zamora_Culi_Resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={560}>
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
          </ScrollReveal>
        </div>
        <ScrollReveal className="profile-reveal" delay={220}>
          <div className="profile-frame">
            <img src={picture} alt="Karl Zamora Culi" />
            <div className="profile-caption">
              <span className="mono">
                <Terminal size={11} /> status: online
              </span>
              <span className="mono">/ karl.png</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
