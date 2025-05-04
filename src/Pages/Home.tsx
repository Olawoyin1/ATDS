import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials";
import ProjectCard from "../components2/ProjectCard";
import projects from '../Projects'

const Home = () => {
  return (
    <>
    <Hero />
    <div className="container py-10">
      <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.images[0]}
                slug={project.slug}
              />
            ))}
        </div>
        <p></p>
    </div>
    <Testimonials />
    </>
  )
}

export default Home