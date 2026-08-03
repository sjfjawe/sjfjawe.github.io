const VALUES = [
  {
    title: "Technical depth",
    desc: "1,260+ PR reviews prove I work at the code level",
  },
  {
    title: "Preventive over reactive",
    desc: "Quality checks at design time, not after deployment",
  },
  {
    title: "Systematic thinking",
    desc: "Solve problems once for many teams",
  },
  {
    title: "Quantified impact",
    desc: "Every initiative has measurable outcomes",
  },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">01 — About</span>
          <h2>
            Platform PM who builds tools
            <br />
            that scale beyond one team.
          </h2>
          <p>From executor to architect to innovator.</p>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <div className="panel reveal">
              <h3>Philosophy</h3>
              <p>
                The best infrastructure is the kind teams don&apos;t think
                about. It just works. My career has been defined by building
                tools and systems that scale beyond my own team, preventing
                problems before they happen.
              </p>
              <p>
                Build one tool that saves 10 teams 20 hours each, and
                you&apos;ve created 200 hours of capacity for meaningful
                work. That&apos;s platform thinking.
              </p>
            </div>
            <div className="panel reveal">
              <h3>Origin</h3>
              <p>
                Started as an executor shipping features and managing
                roadmaps. Kept noticing the same problems recurring across
                teams: manual processes, late quality checks, infrastructure
                that didn&apos;t scale.
              </p>
              <p>
                The turning point: building a 623‑line Claude AI skill that
                prevented €50K in annual rework by catching translation
                issues during design. That&apos;s when I realized where I
                add the most value.
              </p>
            </div>
          </div>

          <div className="about-side reveal">
            <div className="panel manifest">
              <span className="tab">values.json</span>
              <div className="manifest-body">
                <ul className="values-list">
                  {VALUES.map((v) => (
                    <li key={v.title}>
                      <span className="mark"></span>
                      <div>
                        <strong>{v.title}</strong>
                        <span>{v.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
