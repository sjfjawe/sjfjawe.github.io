/* Résumé as a timeline, newest first. `mark` = a milestone rather than a
   delivery (role change, conference, training). */
const TIMELINE = [
{
  org: "Localization AI quality framework",
  role: "Technical PM & builder",
  dates: "2026",
  desc: "Led a cross-functional AI quality framework that moved localization risk detection upstream across UX, content, and engineering workflows. Standardized pre-localization checks for UI writing for global readiness, SAP Product Standard Globalization compliance, and developer i18n best practices, reducing supplier rework risk, improve user satisfaction and experience, and creating a reusable operating model for platform-wise PR checks.",
},
  {
  org: "TORCH translation pipeline",
  role: "Technical PM & cross-team coordinator",
  dates: "2025",
  desc: "Monitored a centralized & shared control, schema-validated JSON localization pipeline replacing fragmented team-specific workflows. Onboarded 12+ dev teams to adoption, enabling GitHub-based supplier handoff, automated quality checks, 4-week to 1-week delivery, and 250+ manual hours/month eliminated.",
},
{
  org: "Concur new language expansion",
  role: "Technical PM & cross-team coordinator",
  dates: "2025",
  desc: "Drove a cross-functional globalization initiative to close language parity gaps between SAP Concur and SAP S/4HANA, delivering Slovenian, Greek, Malay, and Vietnamese across product, mobile, and release workflows. Led planning, localization, engineering integration, linguistic validation, and customer rollout, creating a repeatable operating model for future language launches and strengthening support for global enterprise customers adoption."
},
{
  org: "WalkMe localization integration",
  role: "Localization integration planner",
  dates: "2024",
  desc: "Supported localization workflow integration for WalkMe following its acquisition into SAP, helping align a newly acquired external system with the established localization processes. Contributed to planning around translation readiness, GitHub workflow integration, segment ID and metadata preservation & harmonization."
},
{
  org: "AWS GameDay: cloud security challenge",
  role: "Participant",
  dates: "July 2024",
  desc: "Hands-on cloud security skills learning through GameDay focused on securing application infrastructure against real-world threats. Learnt AWS services including VPC, S3, WAF, RDS, and EC2 on database protection, SQL injection risk, and access control. Strengthened practical understanding of cloud security architecture.",
  mark: true,
},
{
  org: "McKinsey Asian Leadership Essentials Program",
  role: "Cohort participant",
  dates: "April 2024",
  desc: "Strengthened executive presence and cross-functional leadership capabilities, with a focus on career progression and broader organizational influence. Applied identity-based leadership frameworks, communication discipline, and sponsor-oriented career planning to improve stakeholder engagement for leadership audiences.",
  mark: true,
  },
  {
    org: "Concur Travel modernization",
    role: "Localization Product Manager",
    dates: "2023-2024",
    desc: "Led localization product management for SAP Concur’s flagship new Travel product modernization program, embedding localization into design, engineering, and release workflows across all travel verticals. Drove proactive UX design review & feedback intake processes, language usability testing, terminology resource curation, vendor quality operations, and frontend i18n framework readiness across 29 languages for 25M+ global users, helping deliver a scalable localization operating model with 80+ design reviews, 50+ language usability testing findings triaged."
  },
{
  org: "Grace Hopper Conference",
  role: "Online Attendee",
  dates: "September 2023",
  desc: "Attended 10+ sessions across AI/ML, serverless & cloud computing, product management, and human-centered data science. Applied conference learnings into practical operations, i.e. AI tool exploration, dashboard building, design best-practices advocacy, and platform-framing for localization enablement.",
  mark: true,
},
  {
    org: "Localization intelligence dashboard",
    role: "Product owner",
    dates: "2023",
    desc: "Initiated and owned Concur's first localization metrics dashboard, pulling Jira and GitHub stats into a decision-ready views. Quarterly reporting 8h → 30min; improved visibility for leadership and product stakeholders.",
  },
  {
    org: "UX translatability review framework",
    role: "Process owner",
    dates: "2023",
    desc: "Built design-phase localization reviews, wiki guidance, and office hours; completed 80+ UX reviews, prevented ~100 bugs, and improved design global readiness."

  },
  {
    org: "SAP Concur",
    role: "Localization Product Manager — joined",
    dates: "2022",
    desc: "Led Jira backlog grooming, reducing stale tickets from 110+ to under 30, and templatized intake workflows to reduce operational debt. Established SAPTerm governance, analyzed terminology assets, and partnered with stakeholders to close gaps in multilingual terminology management.",
    mark: true,
  },
];

const NEXT = [
  { t: "Game Localization Engineer Intern (6 months) @Boltrend Games", d: " Coordinated localization for four mobile games across vendors, developers, and art teams, managing deliverables and timelines." },
  { t: "Software Localization Engineer Intern (3 months) @Welocalize", d: " Supported Autodesk Inventor localization across 13 languages through UAT, i18n defect tracking, TMS integration, and Perl/Jenkins automation for 5+ localized releases." },
  { t: "User Research Intern (6 months) @NetEase Games", d: " Virtual & in-person player tests and interviews. Collaborated with product/research teams to engaged key YouTuber to distribute & launch campaign." },
];

const SKILLS = [
  ["Jira, GitHub, Figma", "Expert"],
  ["Localization, globalization, internationalization", "Expert"],
  ["Linguistic testing, language assets management", "Advanced"],
  ["Vendor management, cross-functional collaboration", "Advanced"],
    ["AI skill, agent, MCP, hook, harness", "Proficient"],
      ["Software Development workflow", "Proficient"],
["Metrics & reporting", "Proficient"],
  ["GTM operations, Field readiness support", "Proficient"],
];

export default function ProfessionalSection() {
  return (
    <section id="work" data-zone="light">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">08:00 — 16:00 BEFORE SUNSET · Work</span>
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
            <h3>Past Experiences</h3>
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
