const META = [
  { n: "1,260+", l: "PRs reviewed" },
  { n: "250+", l: "hrs/month automated" },
  { n: "33", l: "languages" },
  { n: "5M+", l: "users" },
];

export default function HeroSection() {
  return (
    <section id="home" className="hero" data-zone="light">
      <div className="container">
        <p className="kicker">Platform Technical PM · SAP Concur</p>
        <h1 className="flow">
          I turn repeated manual work
          <br />
          into platform infrastructure.
        </h1>
        <p className="tagline">
          Four years building the pipelines, quality gates, and internal tooling
          that get a product into <strong>33 languages</strong> — mostly from
          inside the repo.
        </p>
        <div className="inline-links">
          <a href="#work">See the work</a>
          <a href="mailto:sjf.jawe@gmail.com">Email</a>
          <a
            href="https://linkedin.com/in/flindashi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sjfjawe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="hero-meta">
          {META.map((m) => (
            <div key={m.l}>
              <b className="mono">{m.n}</b>
              {m.l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
