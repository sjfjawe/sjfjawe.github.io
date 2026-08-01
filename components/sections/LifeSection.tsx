export default function LifeSection() {
  return (
    <section id="life" className="py-24 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header - no eyebrow numbering */}
        <div className="mb-12 max-w-[640px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-[-0.02em]">
            Beyond Work
          </h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            The best ideas often come from diverse experiences outside professional domains.
          </p>
        </div>

        {/* Placeholder for user content - card style */}
        <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-8 max-w-[640px]">
          <h3 className="font-semibold mb-4 text-[var(--accent)]">
            Content Needed
          </h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This section awaits your personal touch. Consider sharing:
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li>Hobbies and interests</li>
            <li>Travel experiences</li>
            <li>Books or podcasts you enjoy</li>
            <li>Community involvement</li>
            <li>Languages you speak</li>
            <li>Side projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
