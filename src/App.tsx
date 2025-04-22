import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ProjectGrid from "./components/ProjectGrid";
// import ProjectGallery from "./components/Portfolio";
// import ProjectGallery from "./components/Portfolio";

function App() {
  return (
    <>

      <Hero />
      <About />
      <Services />
      <Featured />
      <ProjectGrid />
    {/* <ProjectGallery /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
