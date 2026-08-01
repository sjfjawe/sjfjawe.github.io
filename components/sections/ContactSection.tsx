export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-32 bg-[var(--bg-elevated)]">
      <div className="max-w-[800px] mx-auto px-6 w-full">
        <div className="mb-12">
          <span className="label mb-4 block">04 / Contact</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Let's Connect
          </h2>
          <div className="w-16 h-[1px] bg-[var(--accent)]"></div>
        </div>

        <p className="text-xl text-[var(--text)] leading-relaxed mb-12 max-w-[600px]">
          Open to Staff+ PM opportunities and conversations about AI, localization, platform thinking, or building tools that scale.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="https://linkedin.com/in/flindashi"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[var(--border)] p-8 bg-[var(--bg)] hover:border-[var(--accent)] transition-all"
          >
            <div className="label mb-3 text-[var(--accent)]">Professional Network</div>
            <h3 className="text-2xl font-serif font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              LinkedIn
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Connect for professional networking, opportunities, and career conversations
            </p>
            <div className="mt-4 text-[var(--accent)]">→</div>
          </a>

          <a
            href="https://github.com/sjfjawe"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[var(--border)] p-8 bg-[var(--bg)] hover:border-[var(--accent)] transition-all"
          >
            <div className="label mb-3 text-[var(--accent)]">Code Contributions</div>
            <h3 className="text-2xl font-serif font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              GitHub
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              View my technical contributions, PR reviews, and open source work
            </p>
            <div className="mt-4 text-[var(--accent)]">→</div>
          </a>
        </div>

        <div className="border border-[var(--border)] p-8 bg-[var(--bg)]">
          <div className="label mb-3">Direct Contact</div>
          <p className="text-[var(--text-muted)] mb-4">
            Email: <a href="mailto:flinda.shi@example.com" className="text-[var(--accent)] hover:underline">flinda.shi@example.com</a>
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Response time: Usually within 24-48 hours
          </p>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <div className="status-dot"></div>
          <span className="text-sm text-[var(--text-muted)]">
            Currently open to new opportunities • Based in [Your Location]
          </span>
        </div>
      </div>
    </section>
  );
}
