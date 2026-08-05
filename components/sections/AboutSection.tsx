const PRINCIPLES = [
  {     t: "Prevention over correction", d: "Catch risks at design time, not in customer escalations."
  },
  {     t: "Scale through systems", d: "Build repeatable workflow to help teams move faster."
  },
  { t: "Code & Tech fluency", d: "Influence i18n and l10n through the dev delivery" },
  {     t: "Evidence over opinion", d: "I turn data, feedback, and outcomes into product judgment."
  }
];

export default function AboutSection() {
  return (
    <section id="about" data-zone="light">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">00:00 — 08:00 BEFORE SUNRISE · Intro</span>
          <h2 className="flow">Hi, I&apos;m Flinda.</h2>
        </div>

        <div className="prose reveal">
          <p>
            I&apos;m a <strong>platform-minded localization & globalization PM</strong>. At SAP Concur, I lead localization as a product discipline and own infrastructure that scales our products into <strong>33 languages</strong> for <strong>90M+ users</strong>. My work sits at the intersection of product strategy, technical execution, and cross-functional influence across Product, Engineering, Operations, Sales Enablement, Marketing, and vendor teams.
          </p>

          <p>
            Early in my career, I watched product ambition collide with global reality. Working on games built in Japan taught me that localization is never a checkbox at the end. It lives at the intersection of storytelling, art, and gameplay, and when it misses, everything else misses with it.
          </p>

          <p>
            At Autodesk, I switched to engineering and built localized releases through CI/CD, smoke tests, and QA. That sharpened my eye for the hidden failure points global users feel first: missing translation context, workflows that break at scale, and manual release steps pretending to be process. Later, back in gaming as a user researcher and community moderator, I learned the other side of the loop: interviews, usability signals, and what truly drives retention.
          </p>

          <p>
            Those experiences shaped how I see product: not as a feature list, but as a system that aligns people, process, and technology. A product is never finished; it&apos;s a living feedback loop across languages, markets, and contexts. My role has been to keep that loop reliable and true to intent, no matter who&apos;s on the other end.
          </p>

          <p>
            That belief is pulling me into my next chapter: building systems that help products earn trust at scale. The work is making quality signals visible earlier, reducing coordination drag, and setting standards that let product, design, and engineering move faster with confidence, especially as AI reshapes delivery.
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
