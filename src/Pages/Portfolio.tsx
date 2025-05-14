import { useState } from "react";
import projects from "../Projects";
import Testimonials from "../components/Testimonials";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-16 mt-14">
      <div className="container mx-auto">
        <h2 className="text-3xl  uppercase text-center mb-12">Projects</h2>

        <div className="flex flex-wrap  justify-center gap-4 mb-10">
          {["All", "Private Development", "Residential"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md uppercase border transition  ${
                activeCategory === cat
                  ? "hb text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
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

      <Testimonials />
    </section>
  );
};

export default Projects;
