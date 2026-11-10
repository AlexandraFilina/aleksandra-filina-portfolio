import "./ContactComponent.css";

function Contact() {
  return (
    <section className="contact-page" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <h2 className="contact-title" id="contact-title">let's connect</h2>
        <span className="contact-line" aria-hidden="true" />
        <p className="contact-intro">Open to Software Developer opportunities in Valencia and remote teams.</p>
        <div className="contact-links">
          <a href="mailto:poludnicz@gmail.com">poludnicz@gmail.com <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/alexandra-filina/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/AlexandraFilina" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
