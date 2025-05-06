// ================ HERO VERSION 1 ===============// 

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Navbar from "./Navbar";

// const slides = [
//   {
//     image: "https://img.freepik.com/free-photo/construction-site_53876-14088.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//     text: "Project Management",
//   },
//   {
//     image: "https://img.freepik.com/premium-photo/landscape-blurry-building-city-background_87720-30456.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//     text: "Extension & Basements",
//   },
//   {
//     image: "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895588.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//     text: "Flat Conversion",
//   },
//   {
//     image: "https://img.freepik.com/premium-photo/unfinished-room-renovation_1276740-2222.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//     text: "Refurbishment",
//   },
//   {
//     image: "https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//     text: "Project Management",
//   },
//   {
//     image: "https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//     text: "New Builds",
//   },
// ];

// function Hero() {
//     const settings = {
//         dots: false,
//         fade: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 6000,
//         pauseOnHover: false,
//       };

//   return (
//     <div className="relative w-full min-h-screen">
//       {/* Navbar on top */}
//       <div className="absolute top-0 left-0 w-full z-10">
//         <Navbar />
//       </div>

//       {/* Fullscreen slider below */}
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative cf main cursor-grab min-h-screen">
//             <img
//               src={slide.image}
//               alt={slide.text}
//               className="w-full h-screen object-cover"
//             />
//             <div className="absolute inset-0 bg-black/55 flex items-center justify-center z-10">
//               <h2 className="text-white text-3xl md:text-5xl font-semibold text-center px-4">
//                 {slide.text}
//               </h2>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Hero;




import Slider from "react-slick";
import Navbar from "./Navbar";

const slides = [
  // "https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg",
  // "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895588.jpg",
  // "https://img.freepik.com/premium-photo/landscape-blurry-building-city-background_87720-30456.jpg",
  "../../Images/slide2.jpg",
  "../../Images/slide3.png",
  "../../Images/slide4.jpg",
  "../../Images/slide1.JPG",
];
// const slides = [
//   "https://img.freepik.com/free-photo/construction-site_53876-14088.jpg",
//   "https://img.freepik.com/premium-photo/landscape-blurry-building-city-background_87720-30456.jpg",
//   "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895588.jpg",
//   "https://img.freepik.com/premium-photo/unfinished-room-renovation_1276740-2222.jpg",
//   "https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg",
// ];

const Hero = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    draggable: true,
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Navbar at the top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Background Slider */}
      <Slider {...settings}>
        {slides.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt=""
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Slider>

        {/* Gray Overlay */}
      <div className="absolute inset-0 bg-gray-900/70 z-20" />
        
          
      {/* Static Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="text-white p-3 pb-4 logo sm:py-5 sm:pb-6  sm:px-7">
          <h3 className="text-xs sm:text-3xl cf font-bold">ATDS | AT Developments</h3>
          <span className="text-white/80 text-xs sm:text-[19px] pb-1">Prime Construction </span>
        </div>
      </div>
          
    </div>
  );
};

export default Hero;
