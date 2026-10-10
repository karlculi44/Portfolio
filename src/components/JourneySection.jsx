import ScrollReveal from "./ScrollReveal.jsx";

const milestones = [
  {
    title: 'My First "Hello, World!"',
    date: "August 2023",
    start: "2023-08",
  },
  {
    title: "IT Support Specialist Intern",
    organization: "ECE Contact Centers",
    date: "August 2025 - May 2026",
    start: "2025-08",
    end: "2026-05",
  },
  {
    title: "IT Services Associate",
    organization: "City Government of Bayawan City",
    date: "September 2026 - Present",
    start: "2026-09",
    current: true,
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="section-shell">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="eyebrow">03 / milestones</div>
            <h2>My Journey</h2>
          </div>
          <p>
            From my first line of code to building solutions that make a
            difference.
          </p>
        </div>
        <ScrollReveal
          as="ol"
          className="journey-timeline"
          aria-label="Developer journey milestones"
        >
          {milestones.map(
            (
              { title, organization, role, date, start, end, current },
              index,
            ) => (
              <ScrollReveal
                as="li"
                className={`journey-entry${current ? " is-current" : ""}`}
                delay={index * 90}
                key={title}
              >
                <span className="journey-marker" aria-hidden="true" />
                <article className="journey-card">
                  <h3>{title}</h3>
                  {(organization || role) && (
                    <p className="journey-affiliation">
                      {organization || role}
                    </p>
                  )}
                  <p className="journey-date">
                    <time dateTime={start}>{date.split(" - ")[0]}</time>
                    {end && (
                      <>
                        {" - "}
                        <time dateTime={end}>{date.split(" - ")[1]}</time>
                      </>
                    )}
                    {current && (
                      <>
                        {" - "}
                        <span>Present</span>
                      </>
                    )}
                  </p>
                </article>
              </ScrollReveal>
            ),
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
