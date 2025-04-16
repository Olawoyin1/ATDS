import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    image: "https://img.freepik.com/free-photo/old-brick-house_1127-3395.jpg",
    location: "London",
    title: "Woodsom Road NW5",
  },
  {
    image: "https://img.freepik.com/free-photo/modern-architecture-building-design_23-2150795320.jpg",
    location: "London",
    title: "Highgate Residence",
  },
  {
    image: "https://img.freepik.com/free-photo/residential-building-exterior_23-2150795325.jpg",
    location: "London",
    title: "Private Residence, Primrose Hill",
  },
  {
    image: "https://img.freepik.com/free-photo/modern-residential-building_23-2150795333.jpg",
    location: "London",
    title: "The Kenwood House",
  },
  {
    image: "https://img.freepik.com/free-photo/white-modern-apartment-building_23-2150795304.jpg",
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
        centerPadding: "20px",
      },
    },
  ],
};

const FeaturedProjects = () => {
  return (
    <section className="text-[#2e2e2e] py-10">
      <div className="container flex items-center justify-between mb-10">
        <h2 className="text-3xl font-semibold headings">Featured Projects</h2>
        <button className="border border-gray-400 text-sm px-4 py-2 hover:bg-gray-100 transition">
          More Projects
        </button>
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
              <div className="flex justify-between text-center">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedProjects;
