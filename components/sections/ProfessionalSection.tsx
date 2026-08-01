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
    summary: 'Multi-year program delivering localization across 20 languages for SAP Concur travel platform',
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
    <section id="professional" className="py-24 bg-[var(--bg-elevated)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header - no eyebrow numbering */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-[-0.02em]">
            Projects & Impact
          </h2>
          <p className="text-[var(--text-muted)] max-w-[560px] leading-relaxed">
            Platform PM at SAP Concur building AI-powered infrastructure and automation tools.
          </p>
        </div>

        {/* Featured Projects - card grid instead of stacked list */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[var(--border)] bg-[var(--bg)] p-6 hover:border-[var(--accent)] transition-all cursor-pointer flex flex-col"
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <span className="text-xs font-medium text-[var(--accent)] mb-3">{project.tag}</span>

              <h3 className="text-xl font-semibold mb-3 leading-tight">{project.title}</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed flex-grow">{project.summary}</p>

              {/* Metrics - inline */}
              <div className="flex gap-6 pt-4 border-t border-[var(--border)]">
                {project.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-xl font-semibold text-[var(--accent)]">{metric.value}</div>
                    <div className="text-xs text-[var(--text-muted)]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Content Modal-ish */}
        {expandedProject !== null && (
          <div className="mb-16 border border-[var(--accent)] bg-[var(--bg)] p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-medium text-[var(--accent)] mb-2 block">{projects[expandedProject].tag}</span>
                <h3 className="text-2xl font-semibold">{projects[expandedProject].title}</h3>
              </div>
              <button
                onClick={() => setExpandedProject(null)}
                className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Problem</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{projects[expandedProject].problem}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Solution</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{projects[expandedProject].solution}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Impact</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{projects[expandedProject].impact}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Technical Details</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{projects[expandedProject].techDetails}</p>
                </div>
                {projects[expandedProject].code && (
                  <div>
                    <h4 className="font-medium mb-2">Code</h4>
                    <pre className="bg-zinc-900 text-zinc-100 p-4 text-xs font-mono overflow-x-auto rounded">
                      <code>{projects[expandedProject].code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Experience - simplified timeline */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-6">Experience</h3>
            <div className="border-l-2 border-[var(--accent)] pl-6">
              <div className="text-sm text-[var(--text-muted)] mb-1">2022 - Present</div>
              <h4 className="font-semibold mb-1">Platform Product Manager</h4>
              <p className="text-sm text-[var(--text-muted)] mb-3">SAP Concur - Localization Infrastructure</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Building AI-powered tools and automation for global product delivery. Leading translation quality, process automation, and cross-functional platform improvements.
              </p>
            </div>
          </div>

          {/* Skills - grouped cards instead of pill tags */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-[var(--border)] bg-[var(--bg)]">
                <h4 className="text-sm font-medium mb-2">AI & Automation</h4>
                <p className="text-xs text-[var(--text-muted)]">Claude AI, GitHub Actions, Workflow Orchestration</p>
              </div>
              <div className="p-4 border border-[var(--border)] bg-[var(--bg)]">
                <h4 className="text-sm font-medium mb-2">Localization</h4>
                <p className="text-xs text-[var(--text-muted)]">i18n Standards, XML/JSON, GLOB-187</p>
              </div>
              <div className="p-4 border border-[var(--border)] bg-[var(--bg)]">
                <h4 className="text-sm font-medium mb-2">Product & Design</h4>
                <p className="text-xs text-[var(--text-muted)]">Figma, Process Design, Platform Thinking</p>
              </div>
              <div className="p-4 border border-[var(--border)] bg-[var(--bg)]">
                <h4 className="text-sm font-medium mb-2">Technical</h4>
                <p className="text-xs text-[var(--text-muted)]">Git, Documentation, Code Review</p>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Stats - horizontal layout */}
        <div className="flex flex-wrap gap-8 p-6 border border-[var(--border)] bg-[var(--bg)]">
          <div>
            <div className="text-3xl font-semibold text-[var(--accent)] mb-1">1,260+</div>
            <p className="text-sm text-[var(--text-muted)]">PRs Reviewed</p>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--accent)] mb-1">27</div>
            <p className="text-sm text-[var(--text-muted)]">PRs Authored</p>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--accent)] mb-1">4</div>
            <p className="text-sm text-[var(--text-muted)]">Years Active</p>
          </div>
        </div>
      </div>
    </section>
  );
}
