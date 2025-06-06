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
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

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
          centerPadding: "0px",
        },
      },
    ],
  }


  
  return (
    <div className="mt-17 py-10">
      <div className="proj-cover hidden mb-10 relative h-[100vh]">
        {/* Background Image */}
        <img src={project.images[0]} className="w-full h-full object-cover" alt="" />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="max-w-4xl text- md:text-4xl uppercase mb-4">{project.title}</h1>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-xl sm:text-3xl uppercase  mb-6">{project.title}</h1>
        {/* <h1 className="text-xl sm:text-2xl my-3 text-center">SCOPE</h1> */}
        <p className= "text-gray-600 block  mb-8 text-xl">{project.description}</p>

      </div>
        {/* <Slider ref={sliderRef} {...settings}>
          {project.images.map((img, index) => (
            <div key={index} className="px-2 h-[300px] sm:h-[450px] ">
              <img
                src={img}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </Slider> */}

        <div className="relative">
          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {project.images.map((img, index) => (
              <div key={index} className="px-2 h-[300px] sm:h-[450px]">
                <img
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>

          {/* Custom Arrows - Only on small devices */}
          <div className="sm:hidden absolute inset-0 flex items-center justify-between px-2 z-10">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="font-bold text-white p-2 "
            >
              <MdArrowBackIos size={24}/>
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="text-white p-2 "
            >
              <MdArrowForwardIos size={24}/>
              
            </button>
          </div>
        </div>


         {/* Custom Arrows BELOW */}
         <div className="hidden sm:flex justify-center gap-6 mt-6">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="sb text-white px-5 py-3  hover:bg-gray-600 transition"
          >
            ← 
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="sb text-white px-5 py-3  hover:bg-gray-600 transition"
          >
             →
          </button>
        </div>
    </div>
  );
};

export default ProjectDetails;
