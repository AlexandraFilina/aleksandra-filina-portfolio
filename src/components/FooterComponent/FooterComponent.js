import "./FooterComponent.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-block">
        <a className="logo" href="#home" aria-label="Back to top">af.</a>
        <span className="footer-text">
          <span className="footer-text-design">Built by </span>
          <span className="footer-text-me">Aleksandra Filina</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
