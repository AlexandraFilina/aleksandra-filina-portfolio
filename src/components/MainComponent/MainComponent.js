import "./MainComponent.css";
import Menu from "../MenuComponent/MenuComponent";

function Main() {
  return (
    <section className="main-page" id="home">
      <div className="title-block">
        <div className="hero-kicker">Aleksandra Filina / Portfolio</div>
        <h1>frontend developer</h1>
        <div className="title-line blink" aria-hidden="true" />
      </div>

      <div className="page-content">
        <header className="page-header">
          <a className="logo" href="#home" aria-label="Aleksandra Filina, back to top">af.</a>
          <div className="info">
            <p className="info-title">Valencia, Spain</p>
            <div className="info-sub-container">
              <div className="info-line" aria-hidden="true" />
              <p className="info-subtitle">Open to opportunities</p>
            </div>
          </div>
        </header>

        <div className="page-main">
          <Menu />
          <a className="theme-mode" href="#contact">let's connect.</a>
        </div>
      </div>
    </section>
  );
}

export default Main;
