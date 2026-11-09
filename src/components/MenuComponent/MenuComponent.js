import "./MenuComponent.css";

const links = [
  ["contact", "#contact"],
  ["experience", "#experience"],
  ["projects", "#projects"],
  ["about", "#about"],
  ["home", "#home"],
];

function Menu() {
  return (
    <nav className="menu" aria-label="Main navigation">
      {links.map(([label, href]) => (
        <a className="menu-item" href={href} key={href}>
          <span>{label}</span>
          <span className="menu-underline" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}

export default Menu;
