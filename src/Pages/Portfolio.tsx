// import { Link } from "react-router-dom";

import ProjectCard from "../components2/ProjectCard";

// const projects = [
//   {
//     title: "Luxury Home Renovation",
//     description: "High-end refurbishment project in Kensington.",
//     image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
//     link: "/projects/luxury-home-renovation",
//   },
//   {
//     title: "Modern Flat Conversion",
//     description: "Stylish conversion with open-plan design in Hackney.",
//     image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//     link: "/projects/modern-flat-conversion",
//   },
//   {
//     title: "Commercial Fit-Out",
//     description: "Office redesign to boost productivity and style.",
//     image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
//     link: "/projects/commercial-fit-out",
//   },
//   {
//     title: "Modern Flat Conversion",
//     description: "Stylish conversion with open-plan design in Hackney.",
//     image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//     link: "/projects/modern-flat-conversion",
//   },
//   {
//     title: "Commercial Fit-Out",
//     description: "Office redesign to boost productivity and style.",
//     image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
//     link: "/projects/commercial-fit-out",
//   },
//   {
//     title: "Modern Flat Conversion",
//     description: "Stylish conversion with open-plan design in Hackney.",
//     image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//     link: "/projects/modern-flat-conversion",
//   },
//   {
//     title: "Commercial Fit-Out",
//     description: "Office redesign to boost productivity and style.",
//     image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
//     link: "/projects/commercial-fit-out",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="py-16 mt-14 bg-white">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
//         <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
//           {projects.map((project, index) => (
//             <div key={index}>
//               <div className="relative group overflow-hidden md:h-[340px]">
//                 {/* Image */}
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full  object-cover transition-transform duration-300 group-hover:scale-105"
//                 />

//                 {/* Overlay on large screens */}
//                 <div className="hidden lg:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-between p-10 text-white">
//                   <div>
//                     <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                     <p className="text-sm mb-4">{project.description}</p>
//                   </div>
//                   <Link
//                     to={project.link}
//                     className="text-white transition"
//                   > View Project
//                   </Link>
//                 </div>
//               </div>

//               {/* Text below image for small/medium screens */}
//               <div className="block lg:hidden mt-4 text-center space-y-2">
//                 <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
//                 <p className="text-sm text-gray-500">{project.description}</p>
//                 <Link
//                   to={project.link}
//                   className="inline-block text-sm bg-[#F8B44F] hover:bg-[#e89e34] text-white px-4 py-2 transition"
//                 >
//                   View Project
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// const projects = [
//   {
//     title: "Uxbridge Project 2024 COMPLETION - NEW BUILD - 33 APARTMENTS & 3 RETAIL UNITS ",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt ad a hic suscipit iste magni veniam maxime. Repudiandae atque ab quod quisquam ullam.",
//     image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
//     link: "/projects/luxury-home-renovation",
//   },
//   {
//     title: "HACKNEY Project 2021 completion - NEW BUILD - 9 APARTMENTS",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt ad a hic suscipit iste magni veniam maxime. Repudiandae atque ab quod quisquam ullam..",
//     image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//     link: "/projects/modern-flat-conversion",
//   },
//   {
//     title: "HACKNEY Project 2024 completion - NEW BUILD - 10 APARTMENTS",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt ad a hic suscipit iste magni veniam maxime. Repudiandae atque ab quod quisquam ullam.",
//     image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
//     link: "/projects/commercial-fit-out",
//   },
//   // Add more as needed
// ];

// const Projects = () => {
//   return (
//     <section className="py-16 mt-14 bg-white">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
//         <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={index}
//               title={project.title}
//               description={project.description}
//               image={project.image}
//               link={project.link}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { useState } from "react";
import projects from '../Projects'


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-16 mt-14 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold uppercase text-center mb-12">Projects</h2>

        <div className="flex flex-wrap  justify-center gap-4 mb-10">
          {['All', 'Private Development', 'Residential'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md uppercase border transition font-bold ${
                activeCategory === cat
                  ? 'bg-[#F8B44F] text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.images[0]}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
