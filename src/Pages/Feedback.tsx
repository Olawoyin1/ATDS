// import Testimonials from "../components/Testimonials"

import { BiSolidQuoteLeft } from "react-icons/bi";
const Feedback = () => {
    const testimonials = [
        {
          name: "Uxbridge Project Client",
          quote:
            "At Developments’ efforts have been instrumental in advancing our project, and we greatly appreciate your commitment and the professional standards you have maintained.",
        },
        {
          name: "Maria P, Architect",
          quote:
            "The project was completed two weeks later than initially planned, but we were kept informed about the reasons for the delay, which were mainly due to covid supply chain issues. The team was very transparent about any additional costs during tough times and worked hard to stay as close to the budget as possible. The coordination between the various builders, electricians, and plumbers was well handled, and we always knew who was working on-site each day.",
        },
        {
          name: "Nisaar G, Extension Client",
          quote:
            "We were impressed with the initial consultation process. Ahmed took the time to understand our vision for the home extension and refurbishment. He listened carefully to our needs and provided valuable suggestions that we hadn't considered. The proposal and cost estimate were detailed and clear, which helped us feel confident about moving forward with the project.",
        },
        {
          name: "Private Client",
          quote:
            "We are extremely happy with the quality of the work. The craftsmanship is excellent, and you can tell that the builders took pride in their work. The attention to detail was particularly noticeable and the materials used were high-quality, just as promised during the planning phase.",
        },
      ];
  return (
    <div className="container py-20">

        <h1 className="text-center mt-10 text-bold text-3xl">Clients Feedback</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10">

        {testimonials.map((t, i) => (
            <div key={i} className="px-4 pb-7">
                      <div className="sb text-wite min-h-[270px] h-full border p-6 rounded ">
                      <BiSolidQuoteLeft className="mb-4 text-[#F8B44F]" size={30}  />
                        <p className=" mb-4 italic">"{t.quote}"</p>
                        <h4 className="font-bold text-[#F8B44F] text-right">- {t.name}</h4>
                      </div>
                    </div>
                ))}
                </div>
    </div>
  )
}

export default Feedback