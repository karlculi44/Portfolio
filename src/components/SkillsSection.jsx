import { useEffect, useRef, useState } from "react";
import { Code, Server, Wrench } from "lucide-react";

export default function SkillsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-7 h-7 text-blue-600" />,
      color: "from-blue-500 to-blue-700",
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
          logo: "https://github.com/devicons/devicon/tree/v2.17.0/icons/tailwindcss/tailwindcss-plain.svg",
        },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Server className="w-7 h-7 text-green-600" />,
      color: "from-green-500 to-green-700",
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
          name: "MySQL",
          level: 70,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      title: "Tools & Soft Skills",
      icon: <Wrench className="w-7 h-7 text-yellow-600" />,
      color: "from-yellow-400 to-yellow-600",
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
          name: "Problem Solving",
          level: 85,
          logo: "https://cdn-icons-png.flaticon.com/512/2721/2721276.png",
        },
        {
          name: "Teamwork",
          level: 80,
          logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        },
        {
          name: "Adaptability",
          level: 90,
          logo: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <section
        id="skills"
        ref={sectionRef}
        className="min-h-screen flex flex-col items-center justify-center bg-white px-6 md:px-16 py-20 text-center"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tech Stack
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            A quick look at the tools and technologies I use to bring ideas to
            life.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:shadow-gray-400/30 transition-all duration-300 p-8"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-700">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-gray-700 mb-1 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-5 h-5 object-contain"
                          />
                          <span>{skill.name}</span>
                        </div>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`bg-linear-to-r ${category.color} h-3 rounded-full transition-all duration-1500 ease-out`}
                          style={{
                            width: visible ? `${skill.level}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-10 w-3/4 mx-auto border-t border-gray-300 shadow-sm shadow-gray-500/20 rounded-full" />
    </>
  );
}
