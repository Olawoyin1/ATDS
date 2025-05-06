import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials";
import ProjectCard from "../components2/ProjectCard";
import projects from '../Projects'

const Home = () => {

  const services = [
    {
      title: "Private Developments",
      description:
        "Tailored residential projects for homeowners and developers to create bespoke living spaces. We handle everything from design collaboration to build execution, ensuring that every detail aligns with your vision and lifestyle.",
      image:
        "https://img.freepik.com/free-photo/construction-site_53876-14088.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    },
    {
      title: "Extensions and Basements",
      description:
        "Expand your home with smart extensions or unlock potential with basement conversions. Our team ensures every addition feels seamless, both structurally and aesthetically, while adding long-term value to your property.",
      image:
        "https://img.freepik.com/premium-photo/landscape-blurry-building-city-background_87720-30456.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    },
    {
      title: "Commercial Fit-Out",
      description:
        "Transform business spaces into efficient, functional environments that inspire productivity. We manage every aspect of your fit-out, from space planning and design to the final build, with minimal disruption to your operations.",
      image:
        "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895588.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    },
    {
      title: "Refurbishments",
      description:
        "Revitalise existing properties with high-quality updates that improve function and aesthetics. Whether it’s modernising interiors or restoring period features, we combine craftsmanship with practicality.",
      image:
        "https://img.freepik.com/premium-photo/unfinished-room-renovation_1276740-2222.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    },
    {
      title: "New Builds",
      description:
        "From planning to completion, we deliver reliable, modern constructions from the ground up. Our experienced team ensures every phase of your project is completed with precision, transparency, and integrity.",
      image:
        "https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    },
    {
      title: "Flat Conversions",
      description:
        "Maximise space and value by converting properties into functional, fully compliant flats. We handle layouts, regulatory approvals, and interior finishes to create attractive, liveable units.",
      image:
        "https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
    },
  ];

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
    {/* ========ABOUT US HERE ========= */}
    <div className="py-10" id="about">
        <div className="container">
        <h2 className="text-3xl  text-center uppercase mb-10">About Us</h2>
            <div className="md:flex gap-8">
                <div className="flex flex-col  gap-5 flex-1/2">
                    <h2 className=" text-md text-lg">ATDS | At Developments is a professional construction company based in West London, specialising in residential projects and medium-sized private developments.</h2>
                    <p className="text-gray-700"> We provide end-to-end expertise from technical design through to construction completion. We have delivered a wide range of projects whether you’re planning to build a new home, expand your space, or give your property a fresh look, ATDS has the experience and skill to bring your vision to life.</p>
                    <p className="text-gray-700">Our team includes experienced construction managers and a dedicated team of in-house builders, who work closely with our trusted network of sub-contractors and supply chain partners. These long-standing relationships allow us to consistently deliver projects within budget and on programme. We pride ourselves on a collaborative, hands-on approach, offering clear communication and full transparency from start to finish.</p>
                </div>
                <div className="flex mt-10 md:mt-0 flex-1/2">
                    <img src="../../Images/abt.png" alt="" />
                </div>
            </div>


            <div className="md:flex gap-8 mt-14">
                <div className="flex flex-1/2">
                    <img src="../../Images/abt1.JPG" alt="" />
                </div>
                <div className="flex mt-10 md:mt-0  flex-col gap-5 flex-1/2">
                    <h2 className="text-lg">Founded by Ahmed & Ahmed, who bring over 30 years of combined experience in the construction industry, ATDS was established with a clear mission: to deliver high-quality, client-focused building solutions with integrity, efficiency, and craftsmanship at the core. </h2>
                    <p className="text-gray-700">Their hands-on leadership and deep industry knowledge ensure that every project is approached with care, precision, and a deep understanding of client needs.</p>
                    <p className="text-gray-700">From managing complex construction programmes to guiding homeowners through their first renovation, we are actively involved in overseeing operations, ensuring the company’s high standards are upheld at every level. ATDS places a strong emphasis on clear communication, budget transparency, and reliable project delivery. Values that have helped build long-standing relationships with both clients and subcontractors.</p>
                </div>
            </div>
        </div>


        {/* <Testimonials /> */}
    </div>

    {/* ========SERVICES SECTION HERE ========= */}
    <section className=" py-10">
    <div className="container mx-auto space-y-10">
        <h2 className="text-3xl  text-center uppercase mb-10">Our Services</h2>
        <p className="text-gray-900">
          ATDS offers a comprehensive range of construction services tailored to homeowners, developers, and commercial clients. Our expertise spans private residential developments, bespoke extensions, and basement conversions, all designed to enhance space and value. We deliver high-quality refurbishments that revitalise existing properties, as well as new builds. Our team also specialises in flat conversions, maximising the potential of properties through smart and compliant design.
          <br />
          <br />
          For business clients, we provide professional commercial fit-out services that transform spaces into efficient, well-executed working environments. Whatever the scale or complexity of your project, we’re committed to delivering outstanding results.
        </p>

        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col mb-9 md:mb-0 md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              } items-center`}
            >
              <div className="relative flex items-center justify-center md:w-1/3 w-full">
                {/* <img
                  src={service.image}
                  alt={service.title}
                  className="w-full sm:min-h-[400px] object-cover"
                /> */}

                  <h4 className="text-4xl hidden md:block cf md:text-9xl font-bold sc">
                    0{index + 1}
                  </h4>
              </div>
              <div
                className={`md:w-2/3 w-full md:min-h-[300px] flex justify-center items-center md:items-start text-center md:text-start flex-col h-full space-y-4 md:px-6 ${
                  index % 2 === 0
                    ? 'md:border-r-4 md:pr-8'
                    : 'md:border-l-4 md:pl-8'
                } bc`}
              >
                <div className="flex items-center md:items-start md:flex-col    gap-2">
                <h4 className="text-xl flex  md:hidden font-extrabold cf text-gray-600">
                    0{index + 1}
                  </h4>
                  <h3 className="text-xl uppercase">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-900 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    <Testimonials />
    </>
  )
}

export default Home