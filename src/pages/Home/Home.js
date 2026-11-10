import Main from "../../components/MainComponent/MainComponent";
import Cases from "../../components/CasesComponent/CasesComponent";
import Projects from "../../components/ProjectsComponent/ProjectsComponent";
import About from "../../components/AboutComponent/AboutComponent";
import Contact from "../../components/ContactComponent/ContactComponent";
import Footer from "../../components/FooterComponent/FooterComponent";
import FloatingNav from "../../components/FloatingNav/FloatingNav";

export default function Home() {
  return (
    <>
      <Main />
      <FloatingNav />
      <Projects />
      <About />
      <Cases />
      <Contact />
      <Footer />
    </>
  );
}
