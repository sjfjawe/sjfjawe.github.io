export default function LifeSection() {
  return (
    <section id="life" data-zone="dark">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">16:00 — 24:00 · Life</span>
          <h2 className="flow">After hours.</h2>
        </div>

        <div className="prose reveal">
          <p>
            Most of what makes me useful at work arrived sideways. The AI tooling
            I now ship in production started as a side repo nobody asked for —{" "}
            <strong>30-odd commits</strong> of automation I wrote for myself
            first. The instinct for edge cases came from a Grace Hopper
            accessibility session that had nothing to do with my job.
          </p>
          <p>
            Working across 33 locales does something to you. I spend my days
            watching a Croatian supplier and a Japanese supplier disagree about
            the same word, which has made me permanently curious about how
            different places phrase things — and a little obsessive about
            writing clearly. If I can&apos;t write it down, I don&apos;t
            understand it yet.
          </p>
        </div>

        <div className="ig-line reveal">
          <a
            href="https://instagram.com/sjfjawe"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sjfjawe <span aria-hidden="true">↗</span>
          </a>
          <span>
            Hobbies, trips, and everything that doesn&apos;t fit on a résumé.
          </span>
        </div>
      </div>
    </section>
  );
}
