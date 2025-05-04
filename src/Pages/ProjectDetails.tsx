// import { useParams } from "react-router-dom";
// import projects from '../Projects'

// const ProjectDetails = () => {
//   const { slug } = useParams();
//   const project = projects.find((p) => p.slug === slug);
//   console.log(project)

//   if (!project) return <div className="p-10 text-center">Project not found</div>;

//   return (
//     <div className="py-16 mt-14">
//         <div className="container">

//       <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
//       <p className="text-gray-600">{project.description}</p>
//       <img src={project.image} alt={project.title} className="w-full h-96 object-cover mt-4 rounded-lg mb-8" />
//         </div>
//     </div>
//   );
// };

// export default ProjectDetails;

import { useParams } from "react-router-dom";
import projects from '../Projects';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const sliderRef = useRef<Slider | null>(null);

  if (!project) return <div className="p-10 text-center">Project not found</div>;

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   centerMode: true,
  //   centerPadding: "10%",
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 2,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  }


  
  return (
    <div className="">
      <div className="proj-cover mb-10 relative h-[100vh]">
    {/* Background Image */}
    <img src={project.images[0]} className="w-full h-full object-cover" alt="" />

    {/* Overlay Content */}
    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
      {/* <p className="text-lg md:text-xl max-w-2xl">This is a short project description that sits on top of the image cover and grabs attention.</p> */}
    </div>
  </div>

      <div className="container mx-auto">
        <h1 className="text-xl sm:text-3xl uppercase font-bold mb-6">{project.title}</h1>
        <p className="text-gray-600 mb-8">{project.description}</p>

      </div>
        <Slider ref={sliderRef} {...settings}>
          {project.images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`${project.title} ${index + 1}`}
                className="w-full  sm:h-[450px] object-cover "
              />
            </div>
          ))}
        </Slider>

         {/* Custom Arrows BELOW */}
         <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-gray-800 text-white px-5 py-3  hover:bg-gray-600 transition"
          >
            ← 
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-gray-800 text-white px-5 py-3  hover:bg-gray-600 transition"
          >
             →
          </button>
        </div>
    </div>
  );
};

export default ProjectDetails;
