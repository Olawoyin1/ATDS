
const ServicesComponent = () => {
    const services = [
        {
          title: "Private Developments",
          description:
            "Tailored residential projects for homeowners and developers to create bespoke living spaces. We handle everything from design collaboration to build execution, ensuring that every detail aligns with your vision and lifestyle.",
          image:
            "https://img.freepik.com/free-photo/construction-site_53876-14088.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
        },
        {
          title: "Extensions & Basements",
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
        {
          title: "Maintenance",
          description:
            "Maximise space and value by converting properties into functional, fully compliant flats. We handle layouts, regulatory approvals, and interior finishes to create attractive, liveable units.",
          image:
            "https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
        },
      ];
    
  return (
    <div className="container mx-auto space-y-10">
        <h2 className="text-3xl  text-center uppercase mb-10">Our Services</h2>
        <p className="text-gray-900">
          ATDS offers a comprehensive range of construction services tailored to homeowners, developers, and commercial clients. Our expertise spans private residential developments, bespoke extensions, and basement conversions, all designed to enhance space and value. We deliver high-quality refurbishments that revitalise existing properties, as well as new builds. Our team also specialises in flat conversions, maximising the potential of properties through smart and compliant design.
          <br />
          <br />
          For business clients, we provide professional commercial fit-out services that transform spaces into efficient, well-executed working environments. Whatever the scale or complexity of your project, we’re committed to delivering outstanding results.
        </p>

        <div className="space-y-6">
           
            <ul className="space-y-10">
              {services.map((service, idx) => (
                <li key={idx} className=" flex gap-3 items-center border-gray-800">
                  <h4 className="text-xl flex  font-extrabold cf text-gray-600">
                    0{idx + 1}
                  </h4>
                <h4 className="text-2xl uppercase text-gray-800">{service.title}</h4>
                {/* <p className="text-sm text-gray-600">{service.description}</p> */}
              </li>
              ))}
            </ul>
          </div>

       
      </div>
  )
}

export default ServicesComponent