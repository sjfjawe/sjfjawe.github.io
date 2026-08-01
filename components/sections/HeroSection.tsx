export default function HeroSection() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="status-dot"></div>
          <span className="label">Available for opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6 leading-none">
          <span className="block text-[var(--text)]">Platform PM</span>
          <span className="block text-[var(--text)] opacity-50">Building</span>
          <span className="block text-[var(--accent)]">AI-Powered Tools</span>
        </h1>

        <p className="text-lg text-[var(--text-muted)] max-w-[500px] mb-12 leading-relaxed">
          Infrastructure and automation for global product delivery. Technical depth meets platform thinking.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-[800px]">
          <div className="border border-[var(--border)] p-4 bg-[var(--bg-elevated)]">
            <div className="text-3xl font-serif font-semibold text-[var(--accent)] mb-1">1,260+</div>
            <div className="label">PRs Reviewed</div>
          </div>
          <div className="border border-[var(--border)] p-4 bg-[var(--bg-elevated)]">
            <div className="text-3xl font-serif font-semibold text-[var(--accent)] mb-1">27</div>
            <div className="label">PRs Authored</div>
          </div>
          <div className="border border-[var(--border)] p-4 bg-[var(--bg-elevated)]">
            <div className="text-3xl font-serif font-semibold text-[var(--accent)] mb-1">4</div>
            <div className="label">Years</div>
          </div>
          <div className="border border-[var(--border)] p-4 bg-[var(--bg-elevated)]">
            <div className="text-3xl font-serif font-semibold text-[var(--accent)] mb-1">€50K</div>
            <div className="label">Saved Annually</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#professional"
            className="px-8 py-3 bg-[var(--accent)] text-white font-medium rounded-sm hover:bg-[var(--accent-hover)] transition-colors"
          >
            Explore Professional Work
          </a>
          <a
            href="#about-me"
            className="px-8 py-3 border border-[var(--border-heavy)] text-[var(--text)] font-medium rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Learn About Me
          </a>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-[900px]">
          <a
            href="#about-me"
            className="group border border-[var(--border)] p-6 bg-[var(--bg-elevated)] hover:border-[var(--accent)] transition-all"
          >
            <h3 className="font-serif text-xl mb-2 group-hover:text-[var(--accent)] transition-colors">About Me</h3>
            <p className="text-sm text-[var(--text-muted)]">Personal story and philosophy</p>
          </a>
          <a
            href="#professional"
            className="group border border-[var(--border)] p-6 bg-[var(--bg-elevated)] hover:border-[var(--accent)] transition-all"
          >
            <h3 className="font-serif text-xl mb-2 group-hover:text-[var(--accent)] transition-colors">Professional</h3>
            <p className="text-sm text-[var(--text-muted)]">Work, projects, and impact</p>
          </a>
          <a
            href="#life"
            className="group border border-[var(--border)] p-6 bg-[var(--bg-elevated)] hover:border-[var(--accent)] transition-all"
          >
            <h3 className="font-serif text-xl mb-2 group-hover:text-[var(--accent)] transition-colors">Life</h3>
            <p className="text-sm text-[var(--text-muted)]">Interests beyond work</p>
          </a>
        </div>
      </div>
    </section>
  );
}
