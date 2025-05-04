import Testimonials from "../components/Testimonials"

const About = () => {
  return (
    <div className="py-10 mt-20" id="about">
        <div className="container">
            <div className="md:flex gap-8">
                <div className="flex flex-col  gap-5 flex-1/2">
                    <h2 className="cf  text-md">ATDS | At Developments is a professional construction company based in West London, specialising in residential projects and medium-sized private developments.</h2>
                    <p className="text-gray-700"> We provide end-to-end expertise from technical design through to construction completion. We have delivered a wide range of projects whether you’re planning to build a new home, expand your space, or give your property a fresh look, ATDS has the experience and skill to bring your vision to life.</p>
                    <p className="text-gray-700">Our team includes experienced construction managers and a dedicated team of in-house builders, who work closely with our trusted network of sub-contractors and supply chain partners. These long-standing relationships allow us to consistently deliver projects within budget and on programme. We pride ourselves on a collaborative, hands-on approach, offering clear communication and full transparency from start to finish.</p>
                </div>
                <div className="flex mt-10 md:mt-0 flex-1/2">
                    <img src="../../Images/abt.JPG" alt="" />
                </div>
            </div>


            <div className="md:flex gap-8 mt-14">
                <div className="flex flex-1/2">
                    <img src="../../Images/abt1.JPG" alt="" />
                </div>
                <div className="flex mt-10 md:mt-0  flex-col gap-5 flex-1/2">
                    <h2 className="cf text-md">Founded by Ahmed & Ahmed, who bring over 30 years of combined experience in the construction industry, ATDS was established with a clear mission: to deliver high-quality, client-focused building solutions with integrity, efficiency, and craftsmanship at the core. </h2>
                    <p className="text-gray-700">Their hands-on leadership and deep industry knowledge ensure that every project is approached with care, precision, and a deep understanding of client needs.</p>
                    <p className="text-gray-700">From managing complex construction programmes to guiding homeowners through their first renovation, we are actively involved in overseeing operations, ensuring the company’s high standards are upheld at every level. ATDS places a strong emphasis on clear communication, budget transparency, and reliable project delivery. Values that have helped build long-standing relationships with both clients and subcontractors.</p>
                </div>
            </div>
        </div>


        <Testimonials />
    </div>
  )
}

export default About