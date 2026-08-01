'use client';

import { useState } from 'react';

interface Project {
  tag: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  techDetails: string;
  code?: string;
  metrics: { value: string; label: string }[];
}

const projects: Project[] = [
  {
    tag: 'AI Innovation',
    title: 'Translator-Context AI Skill',
    summary: 'Claude AI-powered automation for translation quality checks with SAP GLOB-187 compliance',
    problem: 'Developers write vague translatorContext in UI strings, leading to poor translations and €50K/year in rework costs. Quality issues discovered after development, when fixes are expensive.',
    solution: 'Built 623-line AI skill that analyzes UI strings during design phase and generates comprehensive translation context. Self-serve validation for UX teams, shifting quality checks left.',
    impact: '€50K saved annually by preventing rework. 100+ translation bugs caught before development. UX teams empowered to validate their own work.',
    techDetails: 'Claude AI API integration, JSON/XML parsing, GitHub Actions workflow automation, GLOB-187 compliance validation engine.',
    code: `// AI-powered context generation
const skill = await claude.generate({
  type: 'translation',
  compliance: 'GLOB-187',
  lines: 623
});`,
    metrics: [
      { value: '623', label: 'Lines of Code' },
      { value: '€50K', label: 'Saved Annually' },
    ],
  },
  {
    tag: 'Process Automation',
    title: 'UILOC-1959 Migration',
    summary: 'Systematic 11-PR initiative for NUI string migration with automated translation delivery',
    problem: 'Manual translation uploads to vendor portal consumed hours weekly. Coordination overhead across repos. No automated validation of deliveries.',
    solution: 'Automated LXDelivery pipeline with scheduled vendor uploads. Dual-repo synchronization. 11 systematic PRs migrating NUI strings to new infrastructure.',
    impact: '40% efficiency gain in translation workflows. 200+ hours saved per year. Reduced manual coordination burden across 5+ teams.',
    techDetails: 'GitHub Actions workflows, vendor API integration, schedule optimization (cron), multi-repo orchestration.',
    code: `# LXDelivery automation
schedule: "0 6 * * *"
automation: vendor_integration
prs_merged: 11
efficiency: "40%"`,
    metrics: [
      { value: '11', label: 'PRs Merged' },
      { value: '40%', label: 'Efficiency Gain' },
    ],
  },
  {
    tag: 'Enterprise Scale',
    title: 'T2 Travel Localization',
    summary: '4-year flagship program delivering localization across 20 languages for SAP Concur\'s travel platform',
    problem: 'Legacy travel platform serving 5M+ users with 60% non-English traffic. Modernization required coordinated localization across web, mobile, and APIs.',
    solution: 'Multi-quarter program orchestrating 10+ cross-functional teams, vendor partnerships, and technical integration. Systematic rollout across 20 languages.',
    impact: '5M+ users enabled globally. 20 languages shipped. Multi-million dollar revenue enablement for international markets.',
    techDetails: 'React, Core UI components, XTM workflow integration, SAPTerm terminology management, multi-platform rollout coordination.',
    metrics: [
      { value: '5M+', label: 'Users Enabled' },
      { value: '20', label: 'Languages' },
    ],
  },
];

export default function ProfessionalSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="professional" className="min-h-screen py-32 bg-[var(--bg-elevated)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <span className="label mb-4 block">02 / Professional</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Work, Projects & Impact
          </h2>
          <div className="w-16 h-[1px] bg-[var(--accent)]"></div>
          <p className="text-lg text-[var(--text-muted)] mt-6 max-w-[700px]">
            Platform PM at SAP Concur building AI-powered infrastructure and automation tools. 1,260+ GitHub PR reviews, 27 PRs authored, €50K+ in quantified savings.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[var(--border)] bg-[var(--bg)] p-8 hover:border-[var(--accent)] transition-all cursor-pointer"
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="label text-[var(--accent)]">{project.tag}</span>
                <button className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                  {expandedProject === index ? '−' : '+'}
                </button>
              </div>

              <h3 className="text-2xl font-serif font-semibold mb-3">{project.title}</h3>
              <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{project.summary}</p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="border-l-2 border-[var(--accent)] pl-4">
                    <div className="text-2xl font-serif font-semibold text-[var(--accent)]">{metric.value}</div>
                    <div className="label">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Expanded Content */}
              {expandedProject === index && (
                <div className="mt-8 pt-8 border-t border-[var(--border)] space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-[var(--accent)]">Problem</h4>
                    <p className="text-[var(--text-muted)] leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[var(--accent)]">Solution</h4>
                    <p className="text-[var(--text-muted)] leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[var(--accent)]">Impact</h4>
                    <p className="text-[var(--text-muted)] leading-relaxed">{project.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[var(--accent)]">Technical Details</h4>
                    <p className="text-[var(--text-muted)] leading-relaxed">{project.techDetails}</p>
                  </div>
                  {project.code && (
                    <div>
                      <h4 className="font-semibold mb-2 text-[var(--accent)]">Code Snippet</h4>
                      <pre className="bg-[var(--accent-subtle)] border border-[var(--border)] p-4 text-sm font-mono overflow-x-auto">
                        <code>{project.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold mb-8">Experience</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-[var(--accent)] pl-6">
              <div className="label mb-2">2022 - Present</div>
              <h4 className="text-xl font-serif font-semibold mb-2">Platform Product Manager</h4>
              <p className="text-[var(--text-muted)] mb-2">SAP Concur • Localization Infrastructure</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Building AI-powered tools and automation infrastructure for global product delivery. Leading translation quality initiatives, process automation, and cross-functional platform improvements.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold mb-8">Technical Skills & Tools</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="label mb-4">AI & Automation</h4>
              <div className="flex flex-wrap gap-2">
                {['Claude AI', 'GitHub Actions', 'Workflow Orchestration', 'Process Automation'].map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-[var(--border)] text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="label mb-4">Localization & Infrastructure</h4>
              <div className="flex flex-wrap gap-2">
                {['XML/JSON', 'i18n Standards', 'Translation Workflows', 'GLOB-187'].map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-[var(--border)] text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="label mb-4">Product & Design</h4>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Process Design', 'Cross-functional Leadership', 'Platform Thinking'].map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-[var(--border)] text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="label mb-4">Technical Depth</h4>
              <div className="flex flex-wrap gap-2">
                {['Git (1,260+ PR reviews)', 'Documentation', 'Code Contributions', 'Technical Writing'].map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-[var(--border)] text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Activity */}
        <div className="border border-[var(--border)] bg-[var(--bg)] p-8">
          <h3 className="text-2xl font-serif font-semibold mb-6">GitHub Activity</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-serif font-semibold text-[var(--accent)] mb-2">1,260+</div>
              <p className="text-sm text-[var(--text-muted)]">
                Pull Requests Reviewed<br />
                <span className="text-xs">(99th percentile for PM role)</span>
              </p>
            </div>
            <div>
              <div className="text-4xl font-serif font-semibold text-[var(--accent)] mb-2">27</div>
              <p className="text-sm text-[var(--text-muted)]">
                Pull Requests Authored<br />
                <span className="text-xs">(Infrastructure, automation, docs)</span>
              </p>
            </div>
            <div>
              <div className="text-4xl font-serif font-semibold text-[var(--accent)] mb-2">4</div>
              <p className="text-sm text-[var(--text-muted)]">
                Years Active<br />
                <span className="text-xs">(Consistent technical engagement)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[var(--accent)] text-white font-medium rounded-sm hover:bg-[var(--accent-hover)] transition-colors"
          >
            Let's Connect →
          </a>
        </div>
      </div>
    </section>
  );
}
