"use client";

import { useEffect, useRef } from "react";

/* --------------------------------------------------------------------------
   ClockCursor — the pointer is a 24-hour dial.

   Noon sits at the top of the dial and midnight at the bottom, so the hand
   points up mid-Work and down at either end of the page. Hand angles come from
   --hand-h / --hand-m, published by DayCycle from the scroll position; this
   component only follows the pointer.

   Fine pointers only, and the OS cursor is hidden only once ours is alive.
   -------------------------------------------------------------------------- */

export default function ClockCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("cursor-clock");

    let tx = -100;
    let ty = -100;
    let x = -100;
    let y = -100;
    let raf = 0;
    let ready = false;

    const tick = () => {
      const ease = reduced ? 1 : 0.26;
      x += (tx - x) * ease;
      y += (ty - y) * ease;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!ready) {
        ready = true;
        x = tx;
        y = ty;
        el.classList.add("ready");
      }
      const overLink = !!(e.target as Element | null)?.closest?.(
        'a, button, [role="button"], input, textarea, select'
      );
      el.classList.toggle("on-link", overLink);
      el.style.setProperty("--cc-scale", overLink ? "1.2" : "1");
    };

    const onLeave = () => el.classList.remove("ready");
    const onEnter = () => {
      if (ready) el.classList.add("ready");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
      root.classList.remove("cursor-clock");
    };
  }, []);

  return (
    <div className="clock-cursor" ref={ref} aria-hidden="true">
      <div className="cc-wrap">
        <svg className="cc-dial" viewBox="0 0 100 100">
          <circle className="cc-face" cx="50" cy="50" r="45" />
          <circle className="cc-ring" cx="50" cy="50" r="45" />
          {Array.from({ length: 8 }, (_, i) => {
            const hour = i * 3; // 0, 3, 6 … 21
            const a = ((hour - 12) / 24) * 2 * Math.PI;
            const sin = Math.sin(a);
            const cos = -Math.cos(a);
            const major = hour % 6 === 0;
            const inner = major ? 32 : 37;
            return (
              <line
                key={hour}
                className={`cc-tick${major ? " major" : ""}`}
                x1={50 + sin * inner}
                y1={50 + cos * inner}
                x2={50 + sin * 41}
                y2={50 + cos * 41}
              />
            );
          })}
          <line className="cc-hand cc-hand-m" x1="50" y1="50" x2="50" y2="24" />
          <line className="cc-hand cc-hand-h" x1="50" y1="50" x2="50" y2="17" />
          <circle className="cc-pin" cx="50" cy="50" r="3.5" />
        </svg>
        <span className="cc-readout" data-clock-readout>
          00:00
        </span>
      </div>
    </div>
  );
}
