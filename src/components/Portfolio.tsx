import { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const images = [
  {
    original: "../../Images/atds8.jpg",
  },
  {
    original: "../../Images/atds9.jpg",
  },
  {
    original: "../../Images/atds8.jpg",
  },
  {
    original: "../../Images/atds7.jpg",
  },
];

const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const handleSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // const renderLeftNav = (onClick: () => void, disabled: boolean) => (
  //   <button
  //     className="text-white p-2 hidden rounded-full z-10"
  //     disabled={disabled}
  //     onClick={onClick}
  //   >
  //     <FaChevronLeft size={20} />
  //   </button>
  // );

  // const renderRightNav = (onClick: () => void, disabled: boolean) => (
  //   <button
  //     className="text-white bg-black/50 p-2 hidden rounded-full z-10"
  //     disabled={disabled}
  //     onClick={onClick}
  //   >
  //     <FaChevronRight size={20} />
  //   </button>
  // );

  

  return (
    <div className="max-w-md  mx-auto my-10 relative">
      <div className="overflow-hidden rounded-xl relative">
        {" "}
        {/* Set your desired height */}
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
      </div>

      {/* Progress Bar & Slide Count */}
      <div className="absolute bottom-16 px-3 w-full">
        <div className="w-full flex gap-3 justify-between">
          {[...Array(images.length)].map((_, idx) => (
            <div
              key={idx}
              className={`h-1 flex-1 bg-gray-400 rounded transition-all duration-500 ${
                currentIndex >= idx ? "bg-white" : ""
              }`}
            />
          ))}
        </div>

        {/* <div className="flex items-center justify-between mt-2">
          <span className="text-white">{currentIndex + 1}/{images.length}</span>
        </div> */}
      </div>

      {/* Navigation + Slide Count + Zoom */}
      <div className="absolute bottom-3 left-0 w-full px-6 flex justify-between items-center text-white">
        {/* Arrows and Count */}
        <div className="flex items-center gap-2">
          <button
            // onClick={() => galleryRef.current.slideTo(currentIndex - 1)}
            className="p-2"
          >
            <FaChevronLeft size={20} />
          </button>

          <span className="text-sm">
            {currentIndex + 1}/{images.length}
          </span>

          <button
            // onClick={() => galleryRef.current.slideTo(currentIndex + 1)}
            className="p-2"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Zoom Icon */}
        {/* <button
          className="p-2  rounded-full"
          onClick={() => galleryRef.current.toggleFullScreen()}
        >
          <FaExpand size={18} />
        </button> */}
      </div>
    </div>
  );
};

export default ProjectGallery;
