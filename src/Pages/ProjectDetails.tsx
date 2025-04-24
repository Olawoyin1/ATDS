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

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-10 text-center">Project not found</div>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "10%",
  };

  return (
    <div className="py-16 mt-14">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl uppercase font-bold mb-6">{project.title}</h1>
        <p className="text-gray-600 mb-8">{project.description}</p>

      </div>
        <Slider {...settings}>
          {project.images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-[450px] object-cover "
              />
            </div>
          ))}
        </Slider>
    </div>
  );
};

export default ProjectDetails;
