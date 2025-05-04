import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    slug: string;
  }
const ProjectCard = ({ title, description, image, slug }: ProjectCardProps) => {
  return (
    <div className="">
      <div className="relative group overflow-hidden md:h-[400px]">
      <Link to={`/projects/${slug}`}
            className="flex hover:text-[#F8B44F] items-center gap-3 text-white transition"
          >
      <div className="absolute inset-0 bg-gray-100/190 " />
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay on large screens only */}
        <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-between p-10 z-70 text-white">
          <div>
            <h3 className="text-xl uppercase font-bold mb-2">{title}</h3>
            <p className="text-sm hidden text-gray-200 mb-4">{description}</p>
          </div>
          
        </div>
          </Link>
      </div>

      {/* Text below image only for small screens */}
      <div className="block md:hidden mt-2 space-y-1">
        <h3 className="text-lg font-bold uppercase text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <Link
          to={`/projects/${slug}`}
          className="flex  items-center gap-3  text-sm transition"
        >
          View Project <MdOutlineArrowRightAlt />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
