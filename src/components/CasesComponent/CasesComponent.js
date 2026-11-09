import "./CasesComponent.css";

const experience = [
  {
    period: "2023 — 2026 · Valencia, Spain",
    title: "Freelance photographer & visual content creator",
    detail: "Owned client projects end to end, coordinating briefs, schedules, production and delivery under deadlines.",
  },
  {
    period: "2019 — 2022 · Remote",
    title: "Information security administrator",
    detail: "Managed user access, maintained security documentation, supported personal data procedures and automated routine internal tasks at Novomed.",
  },
  {
    period: "2016 — 2019 · Kaliningrad",
    title: "Freelance photographer & visual content creator",
    detail: "Built an independent client practice and delivered creative projects while managing communication, priorities and quality.",
  },
];

function Cases() {
  return (
    <section className="cases-page" id="experience" aria-labelledby="experience-title">
      <div className="case-inner">
        <div className="case-title-block">
          <h2 className="case-title" id="experience-title">experience</h2>
          <span className="case-line" aria-hidden="true" />
        </div>
        <div className="experience-content">
          <p className="experience-intro">Creative project ownership and technical operations inform how I work as a frontend developer.</p>
          <div className="experience-grid">
            {experience.map((role) => (
              <article className="experience-card" key={role.period}>
                <span className="experience-period">{role.period}</span>
                <h3>{role.title}</h3>
                <p>{role.detail}</p>
              </article>
            ))}
          </div>
          <div className="education-note">
            <span>Education / 2014 — 2019</span>
            <strong>Applied Mathematics and Computer Science</strong>
            <span>Immanuel Kant Baltic Federal University</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cases;
