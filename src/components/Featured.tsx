import ProjectSlider from "./ProjectSlider";

const residentialProjects = [
  {
    image: "../../Images/atds.jpg",
    location: "London",
    title: "Woodsom Road NW5",
  },
  {
    image: "../../Images/atds1.jpg",
    location: "London",
    title: "Highgate Residence",
  },
  {
    image: "../../Images/atds3.jpg",
    location: "London",
    title: "The Kenwood House",
  },
];

const privateDevelopmentProjects = [
  {
    image: "../../Images/atds2.jpg",
    location: "London",
    title: "Private Residence, Primrose Hill",
  },
  {
    image: "../../Images/atds3.jpg",
    location: "London",
    title: "The Kenwood House",
  },
  {
    image: "../../Images/atds4.jpg",
    location: "London",
    title: "Cityview Heights",
  },
  {
    image: "../../Images/atds7.jpg",
    location: "London",
    title: "Cityview Heights",
  },
];

const FeaturedProjects = () => {
  return (
    <div id="projects" className="py-10">
      <h2 className="text-3xl text-center cf font-semibold mb-8">Projects</h2>
      <ProjectSlider title="Residential" projects={residentialProjects} />
      <ProjectSlider title="Private Development" projects={privateDevelopmentProjects} />
    </div>
  );
};

export default FeaturedProjects;
