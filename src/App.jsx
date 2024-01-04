import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Ball from "./components/Ball";
import NavBottomMobile from "./components/NavBottomMobile";

function App() {
  return (
    <div className=" scroll-smooth font-header ">
      <Ball />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <NavBottomMobile />
    </div>
  );
}

export default App;
