import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    image: "../../Images/atds.jpg",
    location: "London",
    title: "Woodsom Road NW5",
  },
  {
    image: "../../Images/atds1.jpg",
    location: "London",
    title: "Highgate Residence",
  },
  {
    image: "../../Images/atds2.jpg",
    location: "London",
    title: "Private Residence, Primrose Hill",
  },
  {
    image: "../../Images/atds3.jpg",
    location: "London",
    title: "The Kenwood House",
  },
  {
    image: "../../Images/atds4.jpg",
    location: "London",
    title: "Cityview Heights",
  },
  {
    image: "../../Images/atds7.jpg",
    location: "London",
    title: "Cityview Heights",
  },
  {
    image: "../../Images/atds8.jpg",
    location: "London",
    title: "Cityview Heights",
  },
  {
    image: "../../Images/atds9.jpg",
    location: "London",
    title: "Cityview Heights",
  },
];

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "80px",
  slidesToShow: 3,
  speed: 500,
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

const FeaturedProjects = () => {
  return (
    <section className="text-[#2e2e2e] py-10 overflow-x-hidden" id="projects">
      <div className="container  mb-10">
        <h2 className="text-3xl text-center cf font-semibold">Projects</h2>
        {/* <button className="border border-gray-400 text-sm px-4 py-2 hover:bg-gray-100 transition">
          More Projects
        </button> */}
      </div>

      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div key={idx} className="px-4 mt-10">
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full shadow-sm border-1 h-60 object-cover "
              />
              {/* <div className="flex justify-between text-center">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.location}</p>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedProjects;
