// const testimonials = [
//     {
//       name: "Uxbridge Project Client",
//       quote:
//         "At Developments’ efforts have been instrumental in advancing our project, and we greatly appreciate your commitment and the professional standards you have maintained.",
//     },
//     {
//       name: "Maria P, Architect",
//       quote:
//         "The project was completed two weeks later than initially planned, but we were kept informed about the reasons for the delay, which were mainly due to covid supply chain issues. The team was very transparent about any additional costs during tough times and worked hard to stay as close to the budget as possible. The coordination between the various builders, electricians, and plumbers was well handled, and we always knew who was working on-site each day.",
//     },
//     {
//       name: "Nisaar G, Extension Client",
//       quote:
//         "We were impressed with the initial consultation process. Ahmed took the time to understand our vision for the home extension and refurbishment. He listened carefully to our needs and provided valuable suggestions that we hadn't considered. The proposal and cost estimate were detailed and clear, which helped us feel confident about moving forward with the project.",
//     },
//     {
//       name: "Private Client",
//       quote:
//         "We are extremely happy with the quality of the work. The craftsmanship is excellent, and you can tell that the builders took pride in their work. The attention to detail was particularly noticeable and the materials used were high-quality, just as promised during the planning phase.",
//     },
//   ];
  
//   const Testimonials = () => {
//     return (
//       <section className=" py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold cf text-center mb-10">Client Feedback</h2>
//           <div className="grid gap-8 md:grid-cols-2">
//             {testimonials.map((t, i) => (
//               <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg ">
//                 <p className="text-gray-700 mb-4 italic">"{t.quote}"</p>
//                 <h4 className="font-semibold cf text-gray-900 text-right">- {t.name}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Testimonials;
  



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Uxbridge Project Client",
    quote:
      "At Developments’ efforts have been instrumental in advancing our project, and we greatly appreciate your commitment and the professional standards you have maintained.",
  },
  {
    name: "Maria P, Architect",
    quote:
      "The project was completed two weeks later than initially planned, but we were kept informed about the reasons for the delay, which were mainly due to covid supply chain issues. The team was very transparent about any additional costs during tough times and worked hard to stay as close to the budget as possible.",
  },
  {
    name: "Nisaar G, Extension Client",
    quote:
      "We were impressed with the initial consultation process. Ahmed took the time to understand our vision for the home extension and refurbishment. He listened carefully to our needs and provided valuable suggestions that we hadn't considered.",
  },
  {
    name: "Private Client",
    quote:
      "We are extremely happy with the quality of the work. The craftsmanship is excellent, and you can tell that the builders took pride in their work. The attention to detail was particularly noticeable.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 cf">Client Feedback</h2>
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4 pb-7">
              <div className="bg-white h-[220px] border-2 border-[#F8B44F] p-6 rounded ">
                <p className="text-gray-700 mb-4 italic">"{t.quote}"</p>
                <h4 className="font-bold text-[#F8B44F] text-right">- {t.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Dot Color Styling */}
      <style>{`
        .slick-dots li.slick-active button:before {
          color: #F8B44F !important; /* Tailwind's orange-500 */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
