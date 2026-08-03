const PROJECTS = [
  {
    tag: "AI Innovation",
    title: "Translator‑Context AI Skill",
    desc: "Claude AI‑powered automation for translation quality checks with SAP GLOB‑187 compliance.",
    stats: [
      { n: "623", l: "Lines of code" },
      { n: "€50K", l: "Saved annually" },
    ],
  },
  {
    tag: "Process Automation",
    title: "UILOC‑1959 Migration",
    desc: "Systematic 11‑PR initiative for NUI string migration with automated translation delivery.",
    stats: [
      { n: "11", l: "PRs merged" },
      { n: "40%", l: "Efficiency gain" },
    ],
  },
  {
    tag: "Enterprise Scale",
    title: "T2 Travel Localization",
    desc: "Multi‑year program delivering localization across 20 languages for the SAP Concur travel platform.",
    stats: [
      { n: "5M+", l: "Users enabled" },
      { n: "20", l: "Languages" },
    ],
  },
];

const SKILL_GROUPS = [
  { title: "AI & Automation", skills: ["Claude AI", "GitHub Actions", "Workflow Orchestration"] },
  { title: "Localization", skills: ["i18n Standards", "XML / JSON", "GLOB‑187"] },
  { title: "Product & Design", skills: ["Figma", "Process Design", "Platform Thinking"] },
  { title: "Technical", skills: ["Git", "Documentation", "Code Review"] },
];

export default function ProfessionalSection() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">02 — Work</span>
          <h2>Projects &amp; impact.</h2>
          <p>
            Platform PM at SAP Concur building AI‑powered infrastructure and
            automation tools.
          </p>
        </div>

        <div className="project-grid">
          {PROJECTS.map((p) => (
            <div className="project-card panel reveal" key={p.title}>
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-stats">
                {p.stats.map((s) => (
                  <div key={s.l}>
                    <div className="n">{s.n}</div>
                    <div className="l">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="experience panel reveal">
          <div className="when">2022 — Present</div>
          <div>
            <h3>Platform Product Manager</h3>
            <div className="org">SAP Concur — Localization Infrastructure</div>
            <p>
              Building AI‑powered tools and automation for global product
              delivery. Leading translation quality, process automation, and
              cross‑functional platform improvements.
            </p>
          </div>
        </div>

        <div className="skills-groups reveal">
          {SKILL_GROUPS.map((g) => (
            <div className="skill-group" key={g.title}>
              <h4>{g.title}</h4>
              <div className="pills">
                {g.skills.map((s) => (
                  <span className="pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
