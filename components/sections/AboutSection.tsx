const PRINCIPLES = [
  { t: "Prevention over correction", d: "Catch it at design time, not in production." },
  { t: "Artifacts over meetings", d: "Docs and tools keep working when I'm not there." },
  { t: "Code-level fluency", d: "I read the diff before I write the ticket." },
  { t: "Evidence over adjectives", d: "Every number here traces to a ticket or a PR." },
];

export default function AboutSection() {
  return (
    <section id="about" data-zone="light">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">00:00 — 08:00 · Intro</span>
          <h2 className="flow">Hi, I&apos;m Flinda.</h2>
        </div>

        <div className="prose reveal">
          <p>
            I&apos;m a <strong>platform-minded technical PM</strong> at{" "}
            <strong>SAP Concur</strong>, where I own the infrastructure that gets
            our products into <strong>33 languages</strong> for{" "}
            <strong>5M+ users</strong> — the delivery pipeline, the schema it
            speaks, and the PR checks that enforce it. My users are internal:
            12+ dev teams, 20+ designers, and our vendor partners.
          </p>
          <p>
            I started in 2022 doing the reactive version of this job: triaging
            defects, chasing vendors, unblocking releases. After{" "}
            <strong>186 support tickets</strong> the pattern was obvious — almost
            every defect was created much earlier, in a design or a string ID,
            and was preventable for free.
          </p>
          <p>
            So I moved upstream. A design-review framework, then a metrics
            dashboard, then an automated pipeline, then{" "}
            <strong>AI tooling</strong> on top of it. Same problem, one layer
            lower each time.
          </p>
          <p>
            I&apos;m still working on prioritisation when an urgent ask collides
            with slow strategic work, and on tying localization metrics to
            revenue by region rather than ticket throughput.
            Outside work I build small tools nobody asked for and keep the
            unstructured half on{" "}
            <a
              href="https://instagram.com/sjfjawe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            .
          </p>
        </div>

        <ul className="principles reveal">
          {PRINCIPLES.map((p) => (
            <li key={p.t}>
              <b>{p.t}</b>
              {p.d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
