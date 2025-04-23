// import { useState, useRef } from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// const images = [
//   {
//     original: "../../Images/atds8.jpg",
//   },
//   {
//     original: "../../Images/atds9.jpg",
//   },
//   {
//     original: "../../Images/atds8.jpg",
//   },
//   {
//     original: "../../Images/atds7.jpg",
//   },
// ];

// const ProjectGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const galleryRef = useRef(null);

//   const handleSlide = (index: number) => {
//     setCurrentIndex(index);
//   };


  

//   return (
//     <div className="max-w-md  mx-auto my-10 relative">
//       <div className="overflow-hidden  rounded-xl relative">
//       Uxbridge Project 2024 COMPLETION - NEW
//       BUILD - 33 APARTMENTS & 3 RETAIL UNITS
//         {" "}
//         {/* Set your desired height */}
//         <ImageGallery
//         additionalClass="cslider"
//           ref={galleryRef}
//           items={images}
//           onSlide={handleSlide}
//           showThumbnails={false}
//           showPlayButton={false}
//           showFullscreenButton={true}
//           showIndex={false}
//           renderLeftNav={() => null}
//           renderRightNav={() => null}
//         />
//       </div>

//       {/* Progress Bar & Slide Count */}
//       <div className="absolute bottom-16 px-3 w-full">
//         <div className="w-full flex gap-3 justify-between">
//           {[...Array(images.length)].map((_, idx) => (
//             <div
//               key={idx}
//               className={`h-1 flex-1 bg-gray-400 rounded transition-all duration-500 ${
//                 currentIndex >= idx ? "bg-white" : ""
//               }`}
//             />
//           ))}
//         </div>

//         {/* <div className="flex items-center justify-between mt-2">
//           <span className="text-white">{currentIndex + 1}/{images.length}</span>
//         </div> */}
//       </div>

//       {/* Navigation + Slide Count + Zoom */}
//       <div className="absolute bottom-3 left-0 w-full px-6 flex justify-between items-center text-white">
//         {/* Arrows and Count */}
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => galleryRef.current.slideTo(currentIndex - 1)}
//             className="p-2"
//           >
//             <FaChevronLeft size={20} />
//           </button>

//           <span className="text-sm">
//             {currentIndex + 1}/{images.length}
//           </span>

//           <button
//             onClick={() => galleryRef.current.slideTo(currentIndex + 1)}
//             className="p-2"
//           >
//             <FaChevronRight size={20} />
//           </button>
//         </div>

//         {/* Zoom Icon */}
//         {/* <button
//           className="p-2  rounded-full"
//           onClick={() => galleryRef.current.toggleFullScreen()}
//         >
//           <FaExpand size={18} />
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default ProjectGallery;



// import { useState, useRef } from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// interface ProjectGalleryProps {
//   title: string;
//   images: { original: string }[];
// }

// const ProjectGallery = ({ title, images }: ProjectGalleryProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const galleryRef = useRef<any>(null);

//   const handleSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="mb-10 relative">
//       <h3 className="text-lg font-semibold mb-4 cf">{title}</h3>

//       <ImageGallery
//         ref={galleryRef}
//         items={images}
//         onSlide={handleSlide}
//         showThumbnails={false}
//         showPlayButton={false}
//         showFullscreenButton={true}
//         showIndex={false}
//         renderLeftNav={() => null}
//         renderRightNav={() => null}
//       />

   

//       {/* Progress Bar - Full Width */}
//       <div className="absolute bottom-16 px-4 w-full">
//         <div className="w-full flex gap-1 justify-between">
//           {images.map((_, idx) => (
//             <div
//               key={idx}
//               className={`h-1 flex-1 bg-gray-400 rounded transition-all duration-300 ${
//                 currentIndex >= idx ? "bg-white" : ""
//               }`}
//             />
//           ))}
//         </div>
//       </div>


//       {/* Arrows + Slide Count */}
//       <div className="absolute bottom-3 left-0 w-full px-6 flex justify-between items-center text-white">
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => galleryRef.current?.slideTo(currentIndex - 1)}
//             className="p-2"
//           >
//             <FaChevronLeft size={20} />
//           </button>

//           <span className="text-sm">
//             {currentIndex + 1}/{images.length}
//           </span>

//           <button
//             onClick={() => galleryRef.current?.slideTo(currentIndex + 1)}
//             className="p-2"
//           >
//             <FaChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectGallery;




import { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";


interface ProjectGalleryProps {
  title: string;
  images: { original: string }[];
}

const ProjectGallery = ({ title, images }: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<any>(null);

  const handleSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold mb-4 cf">{title}</h3>

      {/* Image Container */}
      <div className="relative ">
        <ImageGallery
          ref={galleryRef}
          items={images}
          onSlide={handleSlide}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={true}
          showIndex={false}
          renderLeftNav={() => null}
          renderRightNav={() => null}
        />

        {/* Progress Bar Relative to Image */}
        <div className="absolute bottom-16 left-0 right-0 px-4">
          <div className="flex gap-1 justify-between">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 flex-1 bg-gray-400 rounded transition-all duration-300 ${
                  currentIndex >= idx ? "bg-white" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Arrows + Slide Count */}
        <div className="absolute bottom-3 left-0 right-0 px-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <button
              onClick={() => galleryRef.current?.slideTo(currentIndex - 1)}
              className="p-2"
            >
              <MdKeyboardArrowLeft size={20} />
            </button>

            <span className="text-sm">
              {currentIndex + 1}/{images.length}
            </span>

            <button
              onClick={() => galleryRef.current?.slideTo(currentIndex + 1)}
              className="p-2"
            >
              <MdKeyboardArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
