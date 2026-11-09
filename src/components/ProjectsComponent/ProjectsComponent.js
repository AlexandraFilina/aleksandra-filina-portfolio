import "./ProjectsComponent.css";
import arandanoPreview from "../../arandano-preview.png";
import selfLabPreview from "../../self-lab-preview.png";

const projects = [
  {
    title: "Arandano Timer",
    subtitle: "A focus space for everyday work",
    description: "A blueberry-themed Pomodoro app with a timer, daily tasks, notes, settings and account-based progress.",
    image: arandanoPreview,
    alt: "Arandano Timer sign-in screen",
    tags: ["Next.js", "React", "TypeScript"],
    href: "https://arandano-timer.vercel.app/",
  },
  {
    title: "Self Lab",
    subtitle: "Personal habit experiments",
    description: "A place to track everyday experiments, record check-ins and compare how different habits relate to the metrics you choose.",
    image: selfLabPreview,
    alt: "Self Lab sign-in screen",
    tags: ["Next.js", "React", "TypeScript"],
    href: "https://self-lab-six.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="project-page" id="projects" aria-labelledby="projects-title">
      <div className="projects-inner">
        <div className="projects-title-block">
          <h2 className="projects-title" id="projects-title">selected projects</h2>
          <span className="projects-line" aria-hidden="true" />
        </div>
        <div className="tiles">
          {projects.map((project) => (
            <article className="tile" key={project.title}>
              <a className="project-image-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                <img src={project.image} alt={project.alt} />
              </a>
              <div className="tile-content">
                <div className="project-tags" aria-label="Technologies">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <h3>{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
                <p>{project.description}</p>
                <a className="see-project" href={project.href} target="_blank" rel="noreferrer">view live project <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <p className="projects-note">Two real projects, built and published online.</p>
      </div>
    </section>
  );
}

export default Projects;
