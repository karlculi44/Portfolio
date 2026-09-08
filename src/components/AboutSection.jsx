import { ArrowUpRight, BookOpen, Dumbbell } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / context</div>
            <h2>About me</h2>
          </div>
          <p>
            A small snapshot of the person behind the interfaces, with room for
            the things still being built.
          </p>
        </div>
        <ScrollReveal className="about-reveal">
          <div className="about-grid">
            <article className="panel about-copy">
              <p>
                Hi, I’m Karl Zamora Culi — a web developer who loves creating
                clean, responsive, and functional websites. I enjoy bringing
                ideas to life through modern tools like React and JavaScript.
              </p>
              <p>
                I’m currently learning software engineering and always looking
                for ways to improve and grow. Outside of coding, I like working
                out, exploring tech, and staying consistent with my goals.
              </p>
              <a href="#projects" className="button button-primary my-2">
                Explore projects <ArrowUpRight size={16} />
              </a>
            </article>
            <div className="detail-stack">
              <article className="panel detail-panel">
                <div className="mono my-1">NOW LEARNING</div>
                <h3>Software Engineering</h3>
                <p>
                  Growing from polished frontend experiences into complete
                  products and APIs.
                </p>
              </article>
              <article className="panel detail-panel">
                <div className="mono my-1">OFF THE SCREEN</div>
                <h3>
                  <Dumbbell size={16} /> Consistency matters
                </h3>
                <p>
                  <BookOpen size={14} /> Exploring tech, working out, and
                  keeping momentum.
                </p>
              </article>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
