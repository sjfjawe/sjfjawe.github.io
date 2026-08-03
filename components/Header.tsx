const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "life", label: "Life" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#home" className="logo">
          Flinda Shi<span>.</span>
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link${i === 0 ? " active" : ""}`}
                data-target={item.id}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
