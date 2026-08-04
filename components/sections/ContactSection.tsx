const LINKS = [
  { href: "mailto:sjf.jawe@gmail.com", k: "Email", v: "sjf.jawe@gmail.com", ext: false },
  { href: "https://linkedin.com/in/flindashi", k: "LinkedIn", v: "/in/flindashi", ext: true },
  { href: "https://github.com/sjfjawe", k: "GitHub", v: "@sjfjawe", ext: true },
  { href: "https://instagram.com/sjfjawe", k: "Instagram", v: "@sjfjawe", ext: true },
];

export default function ContactSection() {
  return (
    <section id="contact" data-zone="dark">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">23:00 · Contact</span>
          <h2 className="flow">Let&apos;s talk.</h2>
          <p className="sub">
            Looking for platform or technical PM work — internal tooling,
            developer experience, pipelines, AI-assisted workflows. Happy to walk
            through any number on this page and show you where it came from.
          </p>
        </div>

        <ul className="contact-list reveal">
          {LINKS.map((l) => (
            <li key={l.k}>
              <a
                href={l.href}
                {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="k">{l.k}</span>
                <span className="v">{l.v}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
