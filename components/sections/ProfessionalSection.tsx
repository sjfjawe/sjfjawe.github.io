/* Résumé as a timeline, newest first. `mark` = a milestone rather than a
   delivery (role change, conference, training). */
const TIMELINE = [
  {
    org: "TORCH translation pipeline",
    role: "Pipeline architect",
    dates: "2024 — 2026",
    desc: "Replaced a manual SharePoint workflow with a bot-driven GitHub App and Lambda pipeline, six source formats collapsed into one schema. 250+ hrs/month removed; delivery 4 weeks → 1 week.",
  },
  {
    org: "UILOC-1959 NUI migration",
    role: "Cross-team coordination",
    dates: "2026",
    desc: "11 PRs over 3 months aligning 12+ dev teams with no formal mandate, preventing duplicate translation spend across two pipelines.",
  },
  {
    org: "translator-context AI skill",
    role: "Built it",
    dates: "2026",
    desc: "623-line Claude skill that writes translator context from a diff and enforces string metadata at review time. The TORCH team forked it for security checks.",
  },
  {
    org: "Asian Leadership Essentials",
    role: "SAP leadership program",
    dates: "2024",
    desc: "",
    mark: true,
  },
  {
    org: "T2 Travel localization",
    role: "Localization lead",
    dates: "2023 — 2024",
    desc: "Built the Language Acceptance Testing framework for the Travel platform rewrite and diagnosed the string-ID mapping failures behind mistranslations. 5M+ users, 96% accuracy.",
  },
  {
    org: "Grace Hopper Conference",
    role: "10+ sessions — AI/ML, serverless, platform PM",
    dates: "2023",
    desc: "",
    mark: true,
  },
  {
    org: "Localization intelligence dashboard",
    role: "Product owner",
    dates: "2022 — 2026",
    desc: "The team's first metrics platform, pulling Jira and GitHub into one view. Quarterly reporting 8 hours → 30 minutes; surfaced the 40% workload rise behind a headcount conversation.",
  },
  {
    org: "UX translatability review framework",
    role: "Process owner",
    dates: "2022 — 2026",
    desc: "A design-time quality gate on a 2-day SLA. 80+ reviews, ~100 bugs prevented, designer adoption 60% → 95%.",
  },
  {
    org: "SAP Concur",
    role: "Localization Product Manager — joined",
    dates: "2022",
    desc: "",
    mark: true,
  },
];

const NEXT = [
  { t: "One localization platform", d: "Shared i18n libraries and quality gates across every product." },
  { t: "MT / LLM quality evaluation", d: "An eval harness so post-editing can safely cover more content." },
  { t: "ROI by market", d: "Language investment argued with revenue data, not ticket counts." },
];

const SKILLS = [
  ["Jira / JQL, dashboards", "Expert"],
  ["XML / JSON, i18n formats", "Expert"],
  ["GitHub Actions, automation", "Advanced"],
  ["Claude AI skills, prompt design", "Advanced"],
  ["intl-runtime, XTM, SAPterm", "Advanced"],
  ["SQL, Figma review", "Proficient"],
];

export default function ProfessionalSection() {
  return (
    <section id="work" data-zone="light">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">08:00 — 16:00 · Work</span>
          <h2 className="flow">What I&apos;ve shipped.</h2>
          <p className="sub">
            Localization Product Manager at SAP Concur, 2022 to now. Each step
            moved the problem one layer further upstream.
          </p>
        </div>

        <div className="timeline reveal">
          {TIMELINE.map((item) => (
            <div className={`tl-item${item.mark ? " mark" : ""}`} key={item.org}>
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-head">
                <span className="tl-org">{item.org}</span>
                <span className="tl-dates">{item.dates}</span>
              </div>
              <div className="tl-role">{item.role}</div>
              {item.desc && <p className="tl-desc">{item.desc}</p>}
            </div>
          ))}
        </div>

        <div className="two-col">
          <div className="col reveal">
            <h3>Where I&apos;m heading</h3>
            <ul>
              {NEXT.map((n) => (
                <li key={n.t}>
                  <b>{n.t}</b>
                  {n.d}
                </li>
              ))}
            </ul>
          </div>
          <div className="col reveal">
            <h3>Tools, honestly rated</h3>
            <ul>
              {SKILLS.map(([name, level]) => (
                <li className="skill-row" key={name}>
                  <span>{name}</span>
                  <span>{level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
