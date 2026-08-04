const LINKS = [
  { id: "about", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "life", label: "Life" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="#home" className="nav-name">
          Flinda Shi
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} data-nav-link={l.id}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <span className="nav-progress" aria-hidden="true" />
    </nav>
  );
}
