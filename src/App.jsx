

import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Social from "./components/Social";


function App() {
  
  return (
    <div className="wrapper">
      <Header />
      <Container />
      <AboutMe />
      <Projects />
      <Contact />
      <Social/>
    </div>
  );
}

export default App;
