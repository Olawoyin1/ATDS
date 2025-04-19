// const services = [
//     {
//       image:
//         "https://img.freepik.com/free-photo/construction-site_53876-14088.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//       title: "Project Management",
//       description:
//         "Expert planning, execution, and oversight to deliver successful projects on time and within budget.",
//     },
//     {
//       image:
//         "https://img.freepik.com/premium-photo/landscape-blurry-building-city-background_87720-30456.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//       title: "Extensions & Basements",
//       description:
//         "Seamless additions and basement developments that enhance space and property value.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895588.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//       title: "Flat Conversion",
//       description:
//         "Transforming large spaces into stylish, functional multi-unit flats with precision.",
//     },
//     {
//       image:
//         "https://img.freepik.com/premium-photo/unfinished-room-renovation_1276740-2222.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//       title: "Refurbishment",
//       description:
//         "Breathing new life into existing spaces through complete and stylish makeovers.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//       title: "Architecture & Design",
//       description:
//         "Creative and technical expertise to design functional, beautiful living and working spaces.",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//       title: "New Builds",
//       description:
//         "From the ground up – we manage complete construction for modern residential and commercial buildings.",
//     },
//   ];
  
//   const Services = () => {
//     return (
//       <div className="py-12 bg-white" id="services">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-semibold cf mb-8 text-center">Services</h2>
  
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className=" overflow-hidden  transition">
//                 {/* <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-48 object-cover"
//                 /> */}
//                 <div className=" py-2">
//                   <h3 className="text-md cf font-bold mb-2">{service.title}</h3>
//                   <p className="text-gray-700 text-sm">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Services;
  



// const Services = () => {
//   return (
//     <section className="w-full bg-gray-100 py-16 px-4 md:px-12" id="services">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             ATDS offers a comprehensive range of construction services tailored to homeowners, developers, and commercial clients.
//           </p>
//         </div>

//         {/* Description Section */}
//         <div className="mb-12 text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
//           <p>
//             Our expertise spans private residential developments, bespoke extensions, and basement conversions, all designed to enhance space and value. We deliver high-quality refurbishments that revitalise existing properties, as well as new builds. Our team also specialises in flat conversions, maximising the potential of properties through smart and compliant design.
//           </p>
//           <p className="mt-4">
//             For business clients, we provide professional commercial fit-out services that transform spaces into efficient, well-executed working environments. Whatever the scale or complexity of your project, we’re committed to delivering outstanding results.
//           </p>
//         </div>

//         {/* Services List Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
//           <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-gray-800 mb-2">Private Developments</h4>
//             <p className="text-gray-600 text-sm">Tailored residential developments for individuals and investors.</p>
//           </div>

//           <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-gray-800 mb-2">Extensions & Basements</h4>
//             <p className="text-gray-600 text-sm">Bespoke extensions and basement conversions that add space and value.</p>
//           </div>

//           <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-gray-800 mb-2">Commercial Fit-Out</h4>
//             <p className="text-gray-600 text-sm">Transforming commercial spaces into efficient work environments.</p>
//           </div>

//           <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-gray-800 mb-2">Refurbishments</h4>
//             <p className="text-gray-600 text-sm">High-quality refurbishments that breathe new life into existing properties.</p>
//           </div>

//           <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-gray-800 mb-2">New Builds</h4>
//             <p className="text-gray-600 text-sm">From foundation to finish, we handle new construction projects with precision.</p>
//           </div>

//           <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-gray-800 mb-2">Flat Conversions</h4>
//             <p className="text-gray-600 text-sm">Smart, compliant conversions to maximise rental and property value.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;




// const Services = () => {
//   return (
//     <section className="bg-white py-16 px-4 md:px-12" id="services">
//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <div className="mb-12">
//           <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>
//           <p className="text-gray-600 mt-3 max-w-2xl">
//             We deliver high-quality construction solutions to homeowners, developers, and commercial clients.
//           </p>
//         </div>

//         {/* Two-column Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           {/* Description */}
//           <div className="text-gray-700 leading-relaxed space-y-5">
//             <p>
//               ATDS specialises in a range of residential and commercial construction services. From private developments to full-scale refurbishments, we tailor our expertise to meet the unique needs of each project.
//             </p>
//             <p>
//               Our team delivers elegant, compliant, and efficient builds—from basement conversions to commercial fit-outs—ensuring exceptional results regardless of complexity.
//             </p>
//           </div>

//           {/* Services List */}
//           <ul className="space-y-6">
//             {[
//               { title: "Private Developments", desc: "Bespoke residential developments tailored to clients' visions." },
//               { title: "Extensions & Basements", desc: "Custom-built extensions and innovative basement conversions." },
//               { title: "Commercial Fit-Out", desc: "Professional business spaces transformed with function and flair." },
//               { title: "Refurbishments", desc: "Breathing new life into properties through high-quality renovations." },
//               { title: "New Builds", desc: "Ground-up construction managed with precision and care." },
//               { title: "Flat Conversions", desc: "Maximising property value with smart, compliant flat conversions." },
//             ].map((service, idx) => (
              // <li key={idx} className="border-l-4 border-gray-800 pl-4">
              //   <h4 className="text-lg font-semibold text-gray-800">{service.title}</h4>
              //   <p className="text-sm text-gray-600">{service.desc}</p>
              // </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



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
    <section className="bg-gray-100 py-20 px-6 md:px-12" id="services">
      <div className="max-w-6xl mx-auto">
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
