export default function AboutSection() {
  return (
    <section id="about-me" className="py-24 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header - no eyebrow numbering, clean headline */}
        <div className="mb-16 max-w-[640px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-[-0.02em]">
            About Me
          </h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Platform PM who builds tools that scale beyond one team. From executor to architect to innovator.
          </p>
        </div>

        {/* Two-column layout - different from hero */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content - spans 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Philosophy</h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                The best infrastructure is the kind teams don't think about. It just works. My career has been defined by building tools and systems that scale beyond my own team, preventing problems before they happen.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Build one tool that saves 10 teams 20 hours each, and you've created 200 hours of capacity for meaningful work. That's platform thinking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Origin</h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Started as an executor shipping features and managing roadmaps. Kept noticing the same problems recurring across teams: manual processes, late quality checks, infrastructure that didn't scale.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                The turning point: building a 623-line Claude AI skill that prevented €50K in annual rework by catching translation issues during design. That's when I realized where I add the most value.
              </p>
            </div>
          </div>

          {/* Sidebar - values */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Core Values</h3>
            <ul className="space-y-4">
              <li className="border-l-2 border-[var(--accent)] pl-4">
                <span className="font-medium block mb-1">Technical depth</span>
                <span className="text-sm text-[var(--text-muted)]">1,260+ PR reviews prove I work at the code level</span>
              </li>
              <li className="border-l-2 border-[var(--border)] pl-4">
                <span className="font-medium block mb-1">Preventive over reactive</span>
                <span className="text-sm text-[var(--text-muted)]">Quality checks at design time, not after deployment</span>
              </li>
              <li className="border-l-2 border-[var(--border)] pl-4">
                <span className="font-medium block mb-1">Systematic thinking</span>
                <span className="text-sm text-[var(--text-muted)]">Solve problems once for many teams</span>
              </li>
              <li className="border-l-2 border-[var(--border)] pl-4">
                <span className="font-medium block mb-1">Quantified impact</span>
                <span className="text-sm text-[var(--text-muted)]">Every initiative has measurable outcomes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
