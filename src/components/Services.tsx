const services = [
    {
      image:
        "https://img.freepik.com/free-photo/construction-site_53876-14088.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
      title: "Project Management",
      description:
        "Expert planning, execution, and oversight to deliver successful projects on time and within budget.",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/landscape-blurry-building-city-background_87720-30456.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
      title: "Extensions & Basements",
      description:
        "Seamless additions and basement developments that enhance space and property value.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895588.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
      title: "Flat Conversion",
      description:
        "Transforming large spaces into stylish, functional multi-unit flats with precision.",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/unfinished-room-renovation_1276740-2222.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
      title: "Refurbishment",
      description:
        "Breathing new life into existing spaces through complete and stylish makeovers.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
      title: "Architecture & Design",
      description:
        "Creative and technical expertise to design functional, beautiful living and working spaces.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
      title: "New Builds",
      description:
        "From the ground up – we manage complete construction for modern residential and commercial buildings.",
    },
  ];
  
  const Services = () => {
    return (
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Services</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className=" overflow-hidden  transition">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className=" py-2">
                  <h3 className="text-md cf font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  