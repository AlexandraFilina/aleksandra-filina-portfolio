import { useEffect, useState } from "react";
import "./FloatingNav.css";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updatePosition = () => {
      setVisible(window.scrollY > window.innerHeight * 0.55);

      const current = [...sections]
        .reverse()
        .find(({ id }) => document.getElementById(id)?.getBoundingClientRect().top <= window.innerHeight * 0.45);
      setActiveSection(current?.id ?? "home");
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <nav className={`floating-nav ${visible ? "is-visible" : ""}`} aria-label="Page navigation">
      <a className="floating-nav__brand" href="#home" aria-label="Back to top">af.</a>
      <span className="floating-nav__divider" aria-hidden="true" />
      {sections.map(({ id, label }) => (
        <a
          className={`floating-nav__link ${activeSection === id ? "is-active" : ""}`}
          href={`#${id}`}
          aria-current={activeSection === id ? "location" : undefined}
          key={id}
        >
          {label}
        </a>
      ))}
      <a className="floating-nav__top" href="#home" aria-label="Back to top" title="Back to top">↑</a>
    </nav>
  );
}

export default FloatingNav;
