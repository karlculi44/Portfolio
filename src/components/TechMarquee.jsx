import { useEffect, useRef, useState } from "react";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.simpleicons.org/tailwindcss",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Vitest",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg",
  },
  {
    name: "GitHub Copilot",
    logo: "https://cdn.simpleicons.org/githubcopilot",
  },
];

function MarqueeItems() {
  return technologies.map(({ name, logo }) => (
    <span className="tech-marquee-item" key={name}>
      <img src={logo} alt="" />
      <span>{name}</span>
    </span>
  ));
}

export default function TechMarquee() {
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef(null);

  useEffect(
    () => () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    },
    [],
  );

  const handleEnter = () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    setPaused(true);
  };

  const handleLeave = () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      setPaused(false);
      resumeTimer.current = null;
    }, 600);
  };

  return (
    <section
      className={`tech-marquee${paused ? " is-paused" : ""}`}
      aria-label="Technologies and tools"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) handleLeave();
      }}
    >
      <div className="tech-marquee-viewport">
        <div className="tech-marquee-track">
          <div className="tech-marquee-group">
            <MarqueeItems />
          </div>
          <div className="tech-marquee-group" aria-hidden="true">
            <MarqueeItems />
          </div>
        </div>
      </div>
    </section>
  );
}
