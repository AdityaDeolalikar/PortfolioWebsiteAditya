import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="AboutSection">
        <About />
      </div>
      <div id="ProjectSection">
        <Projects />
      </div>
      <MySkills />
      <div id="ContactMeSection">
        <Contact />
      </div>
      
    </>
  );
}

export default App;
