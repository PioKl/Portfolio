import "./styles/globals.css";
import { Hero } from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
