const LINKS = [
  {
    href: "https://linkedin.com/in/flindashi",
    name: "LinkedIn",
    desc: "Professional networking",
    external: true,
  },
  {
    href: "https://github.com/sjfjawe",
    name: "GitHub",
    desc: "Code and contributions",
    external: true,
  },
  {
    // TODO: replace with your real email address
    href: "mailto:flinda.shi@example.com",
    name: "Email",
    desc: "Direct contact",
    external: false,
  },
];

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-panel panel reveal">
          <div>
            <span className="eyebrow">04 — Contact</span>
            <h2>Let&apos;s talk.</h2>
            <p>
              Open to Staff+ PM opportunities and conversations about AI,
              localization, and platform thinking.
            </p>
          </div>
          <div className="contact-links">
            {LINKS.map((l) => (
              <a
                className="contact-link"
                href={l.href}
                key={l.name}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div>
                  <div className="name">{l.name}</div>
                  <div className="desc">{l.desc}</div>
                </div>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
