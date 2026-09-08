import { useEffect, useRef, useState } from "react";
import { Code2, Server, UsersRound, Wrench } from "lucide-react";
import { createElement } from "react";
import ScrollReveal from "./ScrollReveal.jsx";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      {
        name: "HTML / CSS",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "JavaScript",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        level: 70,
        logo: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
      },
    ],
  },
  {
    title: "Backend & database",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        level: 70,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        level: 65,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        level: 70,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Vitest",
        level: 70,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg",
      },
      {
        name: "GitHub Copilot",
        level: 80,
        logo: "https://cdn.simpleicons.org/githubcopilot/ffffff",
      },
    ],
  },
  {
    title: "Soft Skills",
    icon: UsersRound,
    skills: [
      {
        name: "Problem solving",
        level: 85,
        logo: "https://cdn-icons-png.flaticon.com/512/2721/2721276.png",
      },
      {
        name: "Teamwork",
        level: 80,
        logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
      {
        name: "Critical Thinking",
        level: 85,
        logo: "https://cdn-icons-png.flaticon.com/512/2919/2919592.png",
      },
      {
        name: "Team Oriented",
        level: 85,
        logo: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
      },
    ],
  },
];

export default function SkillsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="skills" ref={ref} className="section-shell">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="eyebrow">04 / toolkit</div>
            <h2>Tech stack</h2>
          </div>
          <p>
            The tools and technologies I use to turn ideas into useful,
            responsive experiences.
          </p>
        </div>
        <div className="skill-grid">
          {skillCategories.map(({ title, icon, skills }, index) => (
            <ScrollReveal
              className="skill-reveal"
              delay={index * 90}
              key={title}
            >
              <article className="skill-card">
                <div className="skill-card-header">
                  {createElement(icon, { size: 26, strokeWidth: 1.8 })}
                  <h3>{title}</h3>
                </div>
                <div className="skill-list">
                  {skills.map((skill) => (
                    <div className="skill-row" key={skill.name}>
                      <div className="skill-name">
                        <img src={skill.logo} alt="" />
                        {skill.name}
                      </div>
                      <span className="skill-value">{skill.level}%</span>
                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{ width: visible ? `${skill.level}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
