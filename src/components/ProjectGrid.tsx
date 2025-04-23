// import { useState } from 'react';

// const projectData = [
//   { id: 1, title: 'Modern Villa', category: 'Residential', image: '/Images/atds7.jpg' },
//   { id: 2, title: 'Lake House', category: 'Private Development', image: '/Images/atds8.jpg' },
//   { id: 3, title: 'City Apartment', category: 'Residential', image: '/Images/atds9.jpg' },
//   { id: 4, title: 'Luxury Estate', category: 'Private Development', image: '/Images/atds7.jpg' },
//   { id: 5, title: 'Suburban Homes', category: 'Residential', image: '/Images/atds8.jpg' },
//   { id: 6, title: 'Green Project', category: 'Private Development', image: '/Images/atds9.jpg' },
// ];

// const categories = ['All', 'Residential', 'Private Development'];

// const ProjectGrid = () => {
//   const [activeCategory, setActiveCategory] = useState('All');

//   const filteredProjects = activeCategory === 'All'
//     ? projectData
//     : projectData.filter(p => p.category === activeCategory);

//   return (
//     <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center cf font-semibold mb-8">Projects Option2</h2>
//       {/* Category Filters */}
//       <div className="flex  flex-wrap justify-center gap-4 mb-8">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-full border cf transition ${
//               activeCategory === category
//                 ? 'bg-black text-white'
//                 : 'bg-white text-black border-gray-300'
//             }`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Project Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map((project) => (
//           <div key={project.id} className="bg-white  overflow-hidden">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="h-56 w-full object-cover"
//             />
//             <div className="mt-2">
//               <h3 className="text-md font-semibold">{project.title}</h3>
//               <p className="text-sm text-gray-500">{project.category}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectGrid;

import { useState } from "react";
import ProjectGallery from "./Portfolio";

const projectData = [
  {
    id: 1,
    title: "Uxbridge Project 2024 COMPLETION - NEW BUILD - 33 APARTMENTS & 3 RETAIL UNITS",
    category: "Residential",
    images: [
      { original: "../../Images/new.jpg" },
      { original: "../../Images/new1.jpg" },
      { original: "../../Images/new3.jpg" },
      { original: "../../Images/new2.jpg" },
    ],
  },
  {
    id: 2,
    title: "HACKNEY Project 2021 completion - NEW BUILD - 9 APARTMENTS",
    category: "Private Development",
    images: [
      { original: "../../Images/atds9.jpg" },
      { original: "../../Images/atds8.jpg" },
      { original: "../../Images/atds10.jpg" },
      { original: "../../Images/atds7.jpg" },
    ],
  },
  {
    id: 3,
    title: "HACKNEY Project 2024 completion - NEW BUILD - 4 APARTMENTS",
    category: "Residential",
    images: [
      { original: "../../Images/new.jpg" },
      { original: "../../Images/new1.jpg" },
      { original: "../../Images/new3.jpg" },
      { original: "../../Images/new2.jpg" },
    ],
  },
  {
    id: 4,
    title: "HACKNEY Project 2022 completion - NEW BUILD - 7 APARTMENTS",
    category: "Private Development",
    
    images: [
      { original: "../../Images/atds.jpg" },
      { original: "../../Images/atds2.jpg" },
      { original: "../../Images/atds3.jpg" },
      { original: "../../Images/atds4.jpg" },
    ],
  },
];

const categories = ["All", "Residential", "Private Development"];

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center cf font-semibold mb-8">Projects</h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 cf rounded-full border transition ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Galleries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <ProjectGallery
            key={project.id}
            title={project.title}
            images={project.images}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
