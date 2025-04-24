import Hero from "../components/Hero"
import ProjectCard from "../components2/ProjectCard";


const projects = [
  {
    title: "Uxbridge Project 2024 COMPLETION - NEW BUILD - 33 APARTMENTS & 3 RETAIL UNITS ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt ad a hic suscipit iste magni veniam maxime. Repudiandae atque ab quod quisquam ullam.",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    link: "/projects/luxury-home-renovation",
  },
  {
    title: "HACKNEY Project 2021 completion - NEW BUILD - 9 APARTMENTS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt ad a hic suscipit iste magni veniam maxime. Repudiandae atque ab quod quisquam ullam..",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    link: "/projects/modern-flat-conversion",
  },
  {
    title: "HACKNEY Project 2024 completion - NEW BUILD - 10 APARTMENTS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt ad a hic suscipit iste magni veniam maxime. Repudiandae atque ab quod quisquam ullam.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    link: "/projects/commercial-fit-out",
  },
  // Add more as needed
];

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
                image={project.image}
                link={project.link}
              />
            ))}
        </div>
        <p></p>
    </div>
    </>
  )
}

export default Home