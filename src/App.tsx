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

// import "./App.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom"; // make sure this is react-router-dom
// import "./index.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import About from "./Pages/About";
// import Services from "./Pages/Services";
// import ErrorPage from "./Pages/ErrorPage";
// import Home from "./Pages/Home";
// import SharedLayout from "./components2/SharedLayout";
// import Contact from "./Pages/Contact";
// import Portfolio from "./Pages/Portfolio";
// import ProjectDetails from "./Pages/ProjectDetails";

// function App() {
//   const main = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="services" element={<Services />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="projects" element={<Portfolio />} />
//         <Route path="projects/:slug" element={<ProjectDetails />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Route>
//     )
//   );

//   return (
//     <>
//       <RouterProvider router={main} />
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
} from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./components2/Loader";

// Lazy imports
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Contact = lazy(() => import("./Pages/Contact"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const ProjectDetails = lazy(() => import("./Pages/ProjectDetails"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const SharedLayout = lazy(() => import("./components2/SharedLayout"));

const main = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<Loader />}>
          <SharedLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="services"
        element={
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="projects"
        element={
          <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
        }
      />
      <Route
        path="projects/:slug"
        element={
          <Suspense fallback={<Loader />}>
            <ProjectDetails />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <ErrorPage />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={main} />;
}

export default App;
