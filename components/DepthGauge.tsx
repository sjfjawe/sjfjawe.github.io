const SECTIONS = ["home", "about", "work", "life", "contact"];

export default function DepthGauge() {
  return (
    <div className="depth-gauge">
      {SECTIONS.map((id) => (
        <div className="depth-dot" data-target={id} key={id}>
          <span className="label">{id}</span>
          <span className="dot"></span>
        </div>
      ))}
    </div>
  );
}
