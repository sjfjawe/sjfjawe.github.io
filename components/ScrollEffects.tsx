"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // Reveal-on-scroll
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // Active section tracking for nav + depth gauge
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const gaugeDots = document.querySelectorAll(".depth-dot");

    const setActive = (id: string) => {
      navLinks.forEach((l) =>
        l.classList.toggle("active", (l as HTMLElement).dataset.target === id)
      );
      gaugeDots.forEach((d) =>
        d.classList.toggle("active", (d as HTMLElement).dataset.target === id)
      );
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => sectionObserver.observe(s));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return null;
}
