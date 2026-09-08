import { ArrowUpRight, Hammer } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="eyebrow">03 / selected work</div>
            <h2>Projects</h2>
          </div>
          <p>
            Works are in progress. The next build is taking shape, one
            thoughtful interaction at a time.
          </p>
        </div>
        <div className="project-grid">
          {["01", "02", "03"].map((number) => (
            <article className="project-card" key={number}>
              <div className="project-top">
                <span className="project-index">PROJECT_{number}</span>
                <Hammer className="project-icon" size={24} />
              </div>
              <div className="project-body">
                <h3>Coming soon</h3>
                <p>
                  This project is under development. New work will appear here
                  as it becomes ready to share.
                </p>
                <div className="project-foot">
                  <span className="mono">IN DEVELOPMENT</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
