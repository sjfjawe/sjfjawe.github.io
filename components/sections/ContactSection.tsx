export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[var(--bg-elevated)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header - no eyebrow numbering */}
        <div className="mb-12 max-w-[560px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-[-0.02em]">
            Get in Touch
          </h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Open to Staff+ PM opportunities and conversations about AI, localization, and platform thinking.
          </p>
        </div>

        {/* Contact cards - 3 col grid, different layout than other sections */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="https://linkedin.com/in/flindashi"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] transition-all"
          >
            <h3 className="font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              LinkedIn
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Professional networking
            </p>
          </a>

          <a
            href="https://github.com/sjfjawe"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] transition-all"
          >
            <h3 className="font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              GitHub
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Code and contributions
            </p>
          </a>

          <a
            href="mailto:flinda.shi@example.com"
            className="group p-6 border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] transition-all"
          >
            <h3 className="font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              Email
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Direct contact
            </p>
          </a>
        </div>

        {/* Status - simplified, no decorative dot */}
        <p className="text-sm text-[var(--text-muted)]">
          Currently open to new opportunities
        </p>
      </div>
    </section>
  );
}
