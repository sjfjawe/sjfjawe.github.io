export default function HeroSection() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        {/* Asymmetric Split Hero - VARIANCE 6 requires non-centered layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <span className="label mb-6 block text-[var(--accent)]">Platform Product Manager</span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.1] tracking-[-0.02em]">
              Building AI-Powered
              <br />
              Infrastructure
            </h1>

            <p className="text-lg text-[var(--text-muted)] max-w-[480px] mb-8 leading-relaxed">
              Technical depth meets platform thinking. Automation tools and infrastructure for global product delivery.
            </p>

            {/* CTA Buttons - max 2 words for primary */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#professional"
                className="px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-sm hover:bg-[var(--accent-hover)] transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[var(--border-heavy)] text-[var(--text)] font-medium rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right: Stats - asymmetric layout */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[var(--bg-elevated)] border border-[var(--border)]">
                <div className="text-4xl font-semibold text-[var(--accent)] mb-1 tracking-tight">1,260+</div>
                <div className="text-sm text-[var(--text-muted)]">PRs Reviewed</div>
              </div>
              <div className="p-6 bg-[var(--bg-elevated)] border border-[var(--border)]">
                <div className="text-4xl font-semibold text-[var(--accent)] mb-1 tracking-tight">27</div>
                <div className="text-sm text-[var(--text-muted)]">PRs Authored</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[var(--bg-elevated)] border border-[var(--border)]">
                <div className="text-4xl font-semibold text-[var(--accent)] mb-1 tracking-tight">4</div>
                <div className="text-sm text-[var(--text-muted)]">Years Experience</div>
              </div>
              <div className="p-6 bg-[var(--bg-elevated)] border border-[var(--border)]">
                <div className="text-4xl font-semibold text-[var(--accent)] mb-1 tracking-tight">€50K</div>
                <div className="text-sm text-[var(--text-muted)]">Saved Annually</div>
              </div>
            </div>

            {/* Quick navigation - simplified */}
            <div className="pt-4 border-t border-[var(--border)]">
              <div className="flex gap-6 text-sm">
                <a href="#about-me" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                  About
                </a>
                <a href="#professional" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
