"use client";

import { useEffect } from "react";

/* --------------------------------------------------------------------------
   DayCycle — reads the page as one 24-hour day and publishes that state to CSS.

     00:00–08:00  #home + #about    Intro
     08:00–16:00  #work             Work
     16:00–24:00  #life + #contact  Life

   Time is piecewise-linear in scroll position, so each block spans exactly
   8 hours regardless of how tall its sections are. It also measures where the
   Work and Life sections actually start and feeds those offsets to the
   background gradient (--stop-work / --stop-life), which is what keeps the
   light→dark ink handover inside the empty gap between Work and Life.

   Everything is written straight to CSS custom properties, so scrolling never
   triggers a React re-render.
   -------------------------------------------------------------------------- */

const BLOCKS = [
  { id: "dawn", first: "home", from: 0 },
  { id: "day", first: "work", from: 8 },
  { id: "night", first: "life", from: 16 },
] as const;

const BLOCK_TITLE: Record<string, string> = {
  dawn: "Intro",
  day: "Work",
  night: "Life",
};

const NAV_SECTIONS = ["about", "work", "life", "contact"] as const;

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

export default function DayCycle() {
  useEffect(() => {
    const root = document.documentElement;
    const nav = document.querySelector<HTMLElement>(".site-nav");

    let bounds: number[] = [0, 1 / 3, 2 / 3];
    let scrollRange = 1;

    /* Trigger a block change just under the nav. Must exceed the CSS
       scroll-padding-top (6rem = 96px) or clicking a link would land short of
       its own boundary and highlight the previous block. */
    const LEAD = 120;

    const measure = () => {
      const docHeight = Math.max(1, document.documentElement.scrollHeight);
      scrollRange = Math.max(1, docHeight - window.innerHeight);

      const topOf = (id: string) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
      };

      bounds = BLOCKS.map((b) =>
        b.from === 0 ? 0 : clamp01((topOf(b.first) - LEAD) / scrollRange)
      );
      for (let i = 1; i < bounds.length; i++) {
        if (bounds[i] <= bounds[i - 1]) bounds[i] = Math.min(1, bounds[i - 1] + 0.01);
      }

      /* Gradient stops are a fraction of the whole document, not of the
         scrollable range — the gradient paints over the full body box.
         --stop-a / --stop-b bracket the empty gap between Work's last line and
         Life's first, which is the only place the background can make its
         light→dark handover without stranding text at mid-tone. `.container`
         is measured rather than the section because section padding is what
         creates that gap. */
      const pct = (px: number) => `${((px / docHeight) * 100).toFixed(2)}%`;
      const workBox = document.querySelector("#work .container")?.getBoundingClientRect();
      const lifeBox = document.querySelector("#life .container")?.getBoundingClientRect();
      root.style.setProperty("--stop-work", pct(topOf("work")));
      if (workBox) root.style.setProperty("--stop-a", pct(workBox.bottom + window.scrollY));
      if (lifeBox) root.style.setProperty("--stop-b", pct(lifeBox.top + window.scrollY));
    };

    /** scroll fraction → hour of day */
    const timeAt = (p: number): number => {
      const ends = [bounds[1], bounds[2], 1];
      for (let i = 0; i < 3; i++) {
        if (p < ends[i] || i === 2) {
          const span = ends[i] - bounds[i];
          const local = span <= 0 ? 1 : clamp01((p - bounds[i]) / span);
          return BLOCKS[i].from + local * 8;
        }
      }
      return 24;
    };

    const navLinks = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-link]"));
    const railLabels = Array.from(document.querySelectorAll<HTMLElement>("[data-rail-block]"));
    const readouts = Array.from(document.querySelectorAll<HTMLElement>("[data-clock-readout]"));

    const sectionTops = () =>
      NAV_SECTIONS.map((id) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : Infinity };
      });

    let lastBlock = -1;
    let lastNav = "";
    const baseTitle = "Flinda Shi — Platform Technical PM";

    const paint = () => {
      const p = clamp01(window.scrollY / scrollRange);
      const t = timeAt(p);

      root.style.setProperty("--tod-pct", `${((t / 24) * 100).toFixed(3)}%`);
      root.style.setProperty("--scroll-pct", `${(p * 100).toFixed(2)}%`);
      root.style.setProperty("--hand-h", ((t / 24) * 360).toFixed(2));
      root.style.setProperty("--hand-m", ((t % 1) * 360).toFixed(2));

      const hh = Math.min(23, Math.floor(t));
      const mm = Math.min(59, Math.floor((t - Math.floor(t)) * 60));
      const stamp = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
      for (const el of readouts) el.textContent = stamp;

      /* nav re-tints once the background is dark enough to need light ink */
      nav?.classList.toggle("on-dark", t >= 16);

      const bi = t < 8 ? 0 : t < 16 ? 1 : 2;
      if (bi !== lastBlock) {
        lastBlock = bi;
        const id = BLOCKS[bi].id;
        for (const el of railLabels) el.classList.toggle("active", el.dataset.railBlock === id);
        document.title = `${BLOCK_TITLE[id]} — ${baseTitle}`;
      }

      /* nav underline follows whichever section is nearest the top of the viewport */
      const current =
        sectionTops()
          .filter((s) => s.top <= LEAD + 40)
          .pop()?.id ?? "about";
      if (current !== lastNav) {
        lastNav = current;
        for (const el of navLinks) el.classList.toggle("active", el.dataset.navLink === current);
      }
    };

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        paint();
      });
    };
    const onResize = () => {
      measure();
      paint();
    };

    measure();
    paint();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);
    if (document.fonts?.ready) void document.fonts.ready.then(onResize);

    const revealed = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealed.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealed.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      revealed.disconnect();
      document.title = baseTitle;
    };
  }, []);

  return null;
}
