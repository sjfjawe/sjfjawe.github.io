const STATS = [
  { num: "1,260+", label: "PRs reviewed" },
  { num: "27", label: "PRs authored" },
  { num: "4 yrs", label: "experience" },
  { num: "€50K", label: "saved annually" },
];

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-panel panel reveal">
          <span className="status-pill">Currently open to new opportunities</span>
          <h1>
            Building <em>AI‑powered</em>
            <br />
            infrastructure.
          </h1>
          <p className="hero-sub">
            Technical depth meets platform thinking — automation tools and
            infrastructure for global product delivery.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              View work →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="stat-strip">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
