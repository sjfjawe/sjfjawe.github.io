'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-80px 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about-me', label: 'About Me' },
    { id: 'professional', label: 'Professional' },
    { id: 'life', label: 'Life' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-elevated)] border-b border-[var(--border)] backdrop-blur-sm bg-opacity-95">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-lg font-serif font-semibold tracking-tight text-[var(--text)]">
          Flinda Shi
        </a>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`label transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
