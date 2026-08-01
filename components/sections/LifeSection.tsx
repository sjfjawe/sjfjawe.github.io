export default function LifeSection() {
  return (
    <section id="life" className="min-h-screen py-32 bg-[var(--bg)]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="mb-12">
          <span className="label mb-4 block">03 / Life</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Beyond Work
          </h2>
          <div className="w-16 h-[1px] bg-[var(--accent)]"></div>
        </div>

        <div className="space-y-12">
          <div>
            <p className="text-lg text-[var(--text)] leading-relaxed mb-6">
              Work is important, but it's not everything. I believe the best ideas often come from diverse experiences outside our professional domains. Here's what keeps me energized beyond the workplace.
            </p>
          </div>

          {/* Placeholder for user-provided content */}
          <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
            <h3 className="text-xl font-serif font-semibold mb-4 text-[var(--accent)]">
              Content Needed
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              This section awaits your personal touch. Consider sharing:
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)]">•</span>
                <span>Hobbies and interests (music, art, sports, cooking, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)]">•</span>
                <span>Travel experiences or places you've lived</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)]">•</span>
                <span>Books, podcasts, or media you consume</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)]">•</span>
                <span>Community involvement or volunteering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)]">•</span>
                <span>Languages you speak</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)]">•</span>
                <span>Side projects or creative pursuits</span>
              </li>
            </ul>
          </div>

          {/* Example structure for when content is added */}
          <div className="opacity-40 pointer-events-none">
            <h3 className="text-xl font-serif font-semibold mb-4 text-[var(--accent)]">
              [Interest Category Example]
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Description of your interest, why it matters to you, and how it might connect to your professional work or personal growth.
            </p>
            <p className="text-sm text-[var(--text-muted)] italic">
              Optional: Add photos or visual elements
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#professional"
            className="inline-block px-8 py-3 border border-[var(--border-heavy)] text-[var(--text)] font-medium rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            View Professional Work →
          </a>
        </div>
      </div>
    </section>
  );
}
