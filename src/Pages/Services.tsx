
const Services = () => {
  const services = [
    {
      title: "Private Developments",
      desc: "Tailored residential projects for homeowners and developers to create bespoke living spaces.",
    },
    {
      title: "Extensions and Basements",
      desc: "Expand your home with smart extensions or unlock potential with basement conversions.",
    },
    {
      title: "Commercial Fit-Out",
      desc: "Transform business spaces into efficient, functional environments that inspire productivity.",
    },
    {
      title: "Refurbishments",
      desc: "Revitalise existing properties with high-quality updates that improve function and aesthetics.",
    },
    {
      title: "New Builds",
      desc: "From planning to completion, we deliver reliable, modern constructions from the ground up.",
    },
    {
      title: "Flat Conversions",
      desc: "Maximise space and value by converting properties into functional, fully compliant flats.",
    },
  ];

  return (
    <section className="py-20 mt-10" id="services">
      <div className="container mx-auto">
        <h2 className="text-4xl cf font-extrabold text-gray-900 mb-10 text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Section */}
          <div className="text-gray-800 text-lg leading-relaxed space-y-6">
            <p>
              ATDS offers a comprehensive range of construction services tailored
              to homeowners, developers, and commercial clients. Our expertise
              spans private residential developments, bespoke extensions, and
              basement conversions, all designed to enhance space and value. We
              deliver high-quality refurbishments that revitalise existing
              properties, as well as new builds. Our team also specialises in flat
              conversions, maximising the potential of properties through smart and
              compliant design.
            </p>
            <p>
              For business clients, we provide professional commercial fit-out
              services that transform spaces into efficient, well-executed working
              environments. Whatever the scale or complexity of your project, we’re
              committed to delivering outstanding results.
            </p>
          </div>

          {/* Styled Service List with Descriptions */}
          <div className="space-y-6">
           
            <ul className="space-y-6">
              {services.map((service, idx) => (
                <li key={idx} className="border-l-4 border-gray-800 pl-4">
                <h4 className="text-lg cf font-semibold text-gray-800">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
