const META = [
  { n: "1,260+", l: "PRs reviewed over 4 years" },
  { n: "250+", l: "dev hrs/month automated" },
  { n: "33", l: "languages" },
  { n: "90M+", l: "users" },
];

export default function HeroSection() {
  return (
    <section id="home" className="hero" data-zone="light">
      <div className="container">
        <p className="flow">Platform-minded Localization Product Manager</p>
        <h1 className="kicker">
          I turn repeated manual work
          <br />
          into platform infrastructure.
        </h1>
        <p className="tagline">
          Four years building <strong>scalable product systems</strong>, shipping high-quality <strong>multilingual experiences for 90M+ users</strong>, and building <strong>automation and standards</strong> that reduce cost, increase efficiency.
        </p>
        <div className="inline-links">
          <a href="#work">See the work</a>
          <a href="mailto:sjf.jawe@gmail.com">Email</a>
          <a
            href="https://linkedin.com/in/flinda-shi-210bb516a/"
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
