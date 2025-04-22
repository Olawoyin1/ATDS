import Slider from "react-slick";
import { useRef } from "react";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from 'react-icons/hi2';


interface Project {
  image: string;
  location: string;
  title: string;
}

interface ProjectSliderProps {
  title: string;
  projects: Project[];
}

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "80px",
  slidesToShow: 3,
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
};

const ProjectSlider: React.FC<ProjectSliderProps> = ({ title, projects }) => {
  const sliderRef = useRef<any>(null);

  return (
    <section className="text-[#2e2e2e] py-10 overflow-x-hidden">
      <div className="container mb-6">
        <h3 className="text-2xl font-semibold cf text-center mb-4">{title}</h3>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {projects.map((project, idx) => (
          <div key={idx} className="px-4">
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover shadow-sm border"
              />
            </div>
            <div className="text-center mt-2">
              <h4 className="text-lg font-medium">{project.title}</h4>
              <p className="text-gray-500 text-sm">{project.location}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Long Arrows */}
{/* Long Slim Arrows */}
<div className="flex items-center justify-center gap-10 mt-6">
  <button
    onClick={() => sliderRef.current?.slickPrev()}
    className="text-gray-600 hover:text-black transition"
  >
    <HiMiniArrowLongLeft className="w-8 h-6" />
  </button>

  <button
    onClick={() => sliderRef.current?.slickNext()}
    className="text-gray-600 hover:text-black transition"
  >
    <HiMiniArrowLongRight className="w-8 h-6" />
  </button>
</div>


    </section>
  );
};

export default ProjectSlider;
