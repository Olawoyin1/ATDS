import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";

const slides = [
  {
    image: "https://img.freepik.com/free-photo/construction-site_53876-14088.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    text: "Project Management",
  },
  {
    image: "https://img.freepik.com/premium-photo/landscape-blurry-building-city-background_87720-30456.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    text: "Extension & Basements",
  },
  {
    image: "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895588.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    text: "Flat Conversion",
  },
  {
    image: "https://img.freepik.com/premium-photo/unfinished-room-renovation_1276740-2222.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    text: "Refurbishment",
  },
  {
    image: "https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    text: "Project Management",
  },
  {
    image: "https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    text: "New Builds",
  },
];

function Hero() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
      };

  return (
    <div className="relative w-full min-h-screen">
      {/* Navbar on top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Fullscreen slider below */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative cf main cursor-grab min-h-screen">
            <img
              src={slide.image}
              alt={slide.text}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black/55 flex items-center justify-center z-10">
              <h2 className="text-white text-3xl md:text-5xl font-semibold text-center px-4">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
