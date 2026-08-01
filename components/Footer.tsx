export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 Flinda Shi. Built with Next.js + GitHub Pages.
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/flindashi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sjfjawe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
