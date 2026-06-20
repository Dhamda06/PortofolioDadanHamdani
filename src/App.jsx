import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <SmoothScrollProvider>
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </SmoothScrollProvider>
  );
}