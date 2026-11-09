import "./AboutComponent.css";
import photo from "../../pixelsasha.PNG";

const strengths = [
  { number: "01", title: "Frontend", detail: "JavaScript, TypeScript, React & Next.js" },
  { number: "02", title: "UI implementation", detail: "Design to code, responsive HTML & CSS" },
  { number: "03", title: "Problem solving", detail: "Structured thinking, attention to detail" },
  { number: "04", title: "Workflow", detail: "Git/GitHub, independent delivery, AI-assisted tools" },
];

function About() {
  return (
    <section className="about-page" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-title-block">
          <h2 className="about-title" id="about-title">about me</h2>
          <span className="about-line" aria-hidden="true" />
        </div>
        <div className="profile">
          <img src={photo} alt="Pixel portrait of Aleksandra Filina" />
          <div className="profile-text">
            <h3>Aleksandra Filina</h3>
            <p>I am a frontend developer based in Valencia, Spain, with a degree in Applied Mathematics and Computer Science. My background in technical and visual projects shapes how I build interfaces: with structured problem solving, attention to detail and a strong sense of composition.</p>
            <p>I develop hands-on projects with JavaScript, TypeScript, React, Next.js, HTML and CSS, using Git/GitHub and AI-assisted development tools. I enjoy turning ideas and designs into clear, responsive web experiences.</p>
            <p>Before focusing on frontend, I managed creative projects and worked in information security. Those roles strengthened my ability to organize workflows, meet deadlines and communicate clearly. I am looking for a Frontend Developer role in Valencia or remotely, where I can contribute to a team and continue growing.</p>
            <div className="profile-social">
              <a href="https://www.linkedin.com/in/alexandra-filina/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/AlexandraFilina" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="technologies-block">
          {strengths.map((item) => (
            <div className="technology-block" key={item.number}>
              <span className="technology-number">{item.number}</span>
              <span className="technology-line" aria-hidden="true" />
              <div className="technology-title">
                <h4>{item.title}</h4>
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="experience-blocks">
          <div className="experience-block">
            <h4>Building with</h4>
            <ul>
              <li>JavaScript & TypeScript</li>
              <li>React & Next.js</li>
              <li>HTML & CSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div className="experience-block">
            <h4>From design to code</h4>
            <ul>
              <li>Figma-based layouts</li>
              <li>Responsive interfaces</li>
              <li>Reusable components</li>
              <li>Visual consistency</li>
            </ul>
          </div>
          <div className="experience-block">
            <h4>Professional strengths</h4>
            <ul>
              <li>Project planning & delivery</li>
              <li>Clear client communication</li>
              <li>Independent workflows</li>
              <li>Attention to detail</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
