const CHIPS = [
  "Hobbies",
  "Travel",
  "Books / podcasts",
  "Community",
  "Languages",
  "Side projects",
];

export default function LifeSection() {
  return (
    <section id="life">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">03 — Life</span>
          <h2>Beyond work.</h2>
          <p>
            The best ideas often come from diverse experiences outside
            professional domains.
          </p>
        </div>

        <div className="life-panel panel reveal">
          <p className="lead">This section is still warming up.</p>
          <p>
            Drop in whatever&apos;s true for you — hobbies, travel, what
            you&apos;re reading or listening to, community work, languages,
            side projects. Even one or two real details will outperform a
            full generic paragraph here.
          </p>
          <div className="life-chips">
            {CHIPS.map((c) => (
              <span className="life-chip" key={c}>
                + {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
