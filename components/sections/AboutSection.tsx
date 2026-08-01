export default function AboutSection() {
  return (
    <section id="about-me" className="min-h-screen py-32 bg-[var(--bg)]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="mb-12">
          <span className="label mb-4 block">01 / About Me</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Personal Story & Philosophy
          </h2>
          <div className="w-16 h-[1px] bg-[var(--accent)]"></div>
        </div>

        <div className="space-y-8 text-base text-[var(--text)] leading-relaxed">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[var(--accent)]">Who I Am</h3>
            <p className="mb-4">
              I'm a Platform Product Manager who believes the best infrastructure is the kind teams don't think about—it just works. My career has been defined by building tools and systems that scale beyond my own team, preventing problems before they happen rather than reacting to fires.
            </p>
            <p>
              What drives me is the multiplier effect: build one tool that saves 10 teams 20 hours each, and you've just created 200 hours of capacity for meaningful work. That's the power of platform thinking.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[var(--accent)]">Origin Story</h3>
            <p className="mb-4">
              My journey into product management wasn't linear. I started as an executor—shipping features, managing roadmaps, coordinating releases. But I kept noticing the same problems recurring across teams: manual processes that could be automated, quality checks that happened too late, infrastructure that didn't scale.
            </p>
            <p className="mb-4">
              The turning point came when I built my first AI-powered tool for the localization team. A 623-line Claude AI skill that prevented €50K in annual rework by catching translation issues during design—before they reached development. That's when I realized: this is where I add the most value.
            </p>
            <p>
              From executor → architect → innovator. Today, I don't just ship features. I build the infrastructure that lets entire organizations ship faster, safer, and more efficiently.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[var(--accent)]">My Philosophy</h3>
            <blockquote className="border-l-2 border-[var(--accent)] pl-6 italic text-lg mb-4">
              "Build tools that scale beyond your team."
            </blockquote>
            <p className="mb-4">
              Platform PM work is different from feature PM work. Features serve users directly. Platforms serve the teams who serve users. The impact is indirect but exponentially larger.
            </p>
            <p>
              I think systematically. When I see a problem, I don't just solve it for one team—I ask: "How many other teams have this problem? Can we solve it once, for everyone?" This mindset has led to automation workflows, AI-powered quality checks, and infrastructure improvements that benefit hundreds of people across the organization.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[var(--accent)]">Core Values</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">→</span>
                <span><strong>Technical depth:</strong> 1,260+ GitHub PR reviews prove I can work at the code level, not just coordinate meetings.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">→</span>
                <span><strong>Preventive over reactive:</strong> Quality checks at design time, not after deployment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">→</span>
                <span><strong>Systematic thinking:</strong> Solve problems once for many teams, not repeatedly for one.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">→</span>
                <span><strong>Quantified impact:</strong> Every initiative has a measurable outcome—efficiency gains, cost savings, time saved.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#professional"
            className="inline-block px-8 py-3 border border-[var(--border-heavy)] text-[var(--text)] font-medium rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            See Professional Work →
          </a>
        </div>
      </div>
    </section>
  );
}
