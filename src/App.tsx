// import "./App.css";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Featured from "./components/Featured";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./index.css";
// import ProjectGrid from "./components/ProjectGrid";
// // import ProjectGallery from "./components/Portfolio";
// // import ProjectGallery from "./components/Portfolio";

// function App() {
//   return (
//     <>

//       <Hero />
//       <About />
//       <Services />
//       <Featured />
//       <ProjectGrid />
//     {/* <ProjectGallery /> */}
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;

import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"; // make sure this is react-router-dom
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "./Pages/About";
import Services from "./Pages/Services";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import SharedLayout from "./components2/SharedLayout";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";

function App() {
  const main = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Portfolio />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={main} />
    </>
  );
}

export default App;
