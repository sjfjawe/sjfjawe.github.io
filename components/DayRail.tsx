/* Thin scroll indicator down the right edge. The track gradient is the same
   day the page is painted with, so the marker shows both where you are in the
   document and where you are in the 24 hours. */

const BLOCKS = [
  { id: "dawn", anchor: "about", range: "00—08", label: "Intro" },
  { id: "day", anchor: "work", range: "08—16", label: "Work" },
  { id: "night", anchor: "life", range: "16—24", label: "Life" },
];

export default function DayRail() {
  return (
    <aside className="day-rail" aria-hidden="true">
      <div className="dr-track">
        <span className="dr-head" />
      </div>
      <ul className="dr-labels">
        {BLOCKS.map((b, i) => (
          <li
            key={b.id}
            className={i === 0 ? "active" : undefined}
            data-rail-block={b.id}
          >
            <b>{b.label}</b>
            {b.range}
          </li>
        ))}
      </ul>
    </aside>
  );
}
