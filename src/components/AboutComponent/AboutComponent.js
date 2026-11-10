import "./AboutComponent.css";
import photo from "../../pixelsasha.PNG";

const strengths = [
  { number: "01", title: "Software development", detail: "JavaScript, TypeScript, React & Next.js" },
  { number: "02", title: "Web interfaces", detail: "Responsive HTML & CSS, Figma to code" },
  { number: "03", title: "Data & APIs", detail: "SQL, REST APIs, structured problem solving" },
  { number: "04", title: "Development workflow", detail: "Git/GitHub, AI-assisted development" },
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
            <p>I am a software developer based in Valencia, Spain, with a degree in Applied Mathematics and Computer Science. My background in technical and visual projects shapes how I work: with structured problem solving, attention to detail and a strong sense of composition.</p>
            <p>My current focus is building web applications with JavaScript, TypeScript, React, Next.js, HTML and CSS. I also work with REST APIs, SQL, Git/GitHub and AI-assisted development tools. I enjoy turning ideas and designs into clear, responsive experiences.</p>
            <p>Before moving into software development, I managed creative projects and worked in information security. Those roles strengthened my ability to organize workflows, meet deadlines and communicate clearly. I am looking for a Software Developer role in Valencia or remotely, where I can contribute to a team and continue growing.</p>
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
            <h4>Development skills</h4>
            <ul>
              <li>JavaScript &amp; TypeScript</li>
              <li>React & Next.js</li>
              <li>HTML &amp; CSS</li>
              <li>REST APIs &amp; SQL</li>
            </ul>
          </div>
          <div className="experience-block">
            <h4>Tools &amp; visual work</h4>
            <ul>
              <li>Git &amp; GitHub</li>
              <li>AI-assisted development tools</li>
              <li>Figma to code</li>
              <li>Responsive interfaces</li>
              <li>Adobe Photoshop &amp; image editing</li>
            </ul>
          </div>
          <div className="experience-block">
            <h4>Professional strengths</h4>
            <ul>
              <li>Project planning & delivery</li>
              <li>Clear client communication</li>
              <li>Independent workflows</li>
              <li>Attention to detail</li>
              <li>Access management &amp; data protection</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
