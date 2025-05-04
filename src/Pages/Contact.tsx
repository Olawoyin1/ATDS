// import { useState, FormEvent } from "react";
// const Contact = () => {

//     const [showTerms, setShowTerms] = useState(false);
//     const [showPrivacy, setShowPrivacy] = useState(false);

//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         alert("Message sent! We'll get back to you shortly.");
//         e.currentTarget.reset();
//       };

//   return (
//     <div className="py-10 mt-20" id="contact">
        
//       <div className="container">
//         <div className="md:flex gap-14">
//           <div className="flex  flex-1/2">
//             {/* <img src="../../Images/contact.jpg" className="h-120  w-full" alt="" /> */}
//             <form onSubmit={handleSubmit} className="space-y-4 w-full">
//                 <h2 className="font-bold text-2xl">Tell Us about your project</h2>
//               <div>
//                 <label className="block text-sm font-medium">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Message</label>
//                 <textarea
//                   name="message"
//                   rows={5}
//                   required
//                   className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:outline-none"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//           <div className="flex mt-10 md:mt-0 flex-col gap-4 flex-1/2">
//             <h4 className="font-bold text-2xl">Contact Information</h4>
//             <div>
//               <p className="text-gray-500  mb-4">
//                 With decades of hands-on experience in delivering high-end
//                 construction solutions, ATDevelopments has earned a reputation
//                 as a trusted expert in complex residential and commercial
//                 projects across the UK.{" "}
//               </p>

//               <p className="text-gray-500 headings">
//                 If you’re planning a project or simply want to learn more about
//                 our services and how we work, we’d love to hear from you. Reach
//                 out today and a member of our team will be happy to assist.
//               </p>

//               <div className="flex mt-7 justify-between">
//                 <div className="flex text-gray-600 flex-col gap-3">
//                   <h2 className="font-bold text-black">Business Hours</h2>
//                   <p>
//                     Monday to Friday <br />
//                     8:00 am to 6:00 pm
//                   </p>
//                   <p className="mt-2">
//                     Office@atds.uk <br />
//                     +44 9809 423
//                   </p>
//                 </div>

//                 <div className="flex flex-col text-gray-600 gap-3">
//                   <h2 className="font-bold text-black">Contact</h2>
//                   <p>
//                     West London <br />
//                     Acton <br />
//                     W3 7BS{" "}
//                   </p>
//                 </div>

//                 <div className="flex gap-3 flex-col">
//                     <p onClick={() => setShowTerms(true)} className="underline hover:text-black">
//                         Terms & Conditions
//                     </p>
//                     <p onClick={() => setShowPrivacy(true)} className="underline hover:text-black">
//                         Privacy Policy
//                     </p>
//                     </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//          {/* Terms Modal */}
//       {showTerms && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
//             <h3 className="text-xl font-semibold mb-4">Terms & Conditions</h3>
//             <p className="text-sm text-gray-700 overflow-y-auto max-h-[300px]">
//               These are standard placeholder terms and conditions. Please replace them with your company’s legal content.
//               Example: By accessing this website, you agree to be bound by these terms of service, all applicable laws, and regulations...
//             </p>
//             <button
//               onClick={() => setShowTerms(false)}
//               className="absolute top-2 right-3 text-gray-600 text-xl"
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Privacy Modal */}
//       {showPrivacy && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
//             <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
//             <p className="text-sm text-gray-700 overflow-y-auto max-h-[300px]">
//               This is placeholder privacy policy content based on standard guidelines. Example: We collect personal information you provide to us...
//               We do not sell or share your data without consent...
//             </p>
//             <button
//               onClick={() => setShowPrivacy(false)}
//               className="absolute top-2 right-3 text-gray-600 text-xl"
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}



//     </div>
//   );
// };

// export default Contact;




import { useState } from "react";
// import emailjs from "@emailjs/browser";

// const SERVICE_ID = "your_service_id";
// const TEMPLATE_ID = "your_template_id";
// const PUBLIC_KEY = "your_public_key";


// const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const Contact = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [status, _setStatus] = useState("");

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     emailjs
//       .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           e.currentTarget.reset();
//         },
//         (error:any) => {
//           console.error("EmailJS error:", error);
//           setStatus("Failed to send message. Please try again.");
//         }
//       );
//   };

  return (
    <div className="py-10 mt-20" id="contact">
      <div className="container">
        <div className="md:flex gap-14">
          <div className="flex flex-1/2">
            <form  className="space-y-4 w-full">
              <h2 className="font-bold text-2xl">Tell Us about your project</h2>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              >
                Send Message
              </button>
              {status && (
                <p className="text-sm mt-2 text-gray-600">{status}</p>
              )}
            </form>
          </div>
          <div className="flex mt-10 md:mt-0 flex-col gap-4 flex-1/2">
            <h4 className="font-bold text-2xl">Contact Information</h4>
            <div>
              <p className="text-gray-500 mb-4">
                With decades of hands-on experience in delivering high-end
                construction solutions, ATDevelopments has earned a reputation
                as a trusted expert in complex residential and commercial
                projects across the UK.
              </p>

              <p className="text-gray-500">
                If you’re planning a project or simply want to learn more about
                our services and how we work, we’d love to hear from you. Reach
                out today and a member of our team will be happy to assist.
              </p>

              <div className="flex mt-7 justify-between">
                <div className="flex text-gray-600 flex-col gap-3">
                  <h2 className="font-bold text-black">Business Hours</h2>
                  <p>
                    Monday to Friday <br />
                    8:00 am to 6:00 pm
                  </p>
                  <p className="mt-2">
                    Office@atds.uk <br />
                    +44 9809 423
                  </p>
                </div>

                <div className="flex flex-col text-gray-600 gap-3">
                  <h2 className="font-bold text-black">Contact</h2>
                  <p>
                    West London <br />
                    Acton <br />
                    W3 7BS
                  </p>
                </div>

                <div className="flex gap-3 flex-col">
                  <p
                    onClick={() => setShowTerms(true)}
                    className="underline hover:text-black cursor-pointer"
                  >
                    Terms & Conditions
                  </p>
                  <p
                    onClick={() => setShowPrivacy(true)}
                    className="underline hover:text-black cursor-pointer"
                  >
                    Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <h3 className="text-xl font-semibold mb-4">Terms & Conditions</h3>
            <p className="text-sm text-gray-700 overflow-y-auto max-h-[300px]">
              These are standard placeholder terms and conditions. Please
              replace them with your company’s legal content. Example: By
              accessing this website, you agree to be bound by these terms of
              service, all applicable laws, and regulations...
            </p>
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
            <p className="text-sm text-gray-700 overflow-y-auto max-h-[300px]">
              This is placeholder privacy policy content based on standard
              guidelines. Example: We collect personal information you provide
              to us... We do not sell or share your data without consent...
            </p>
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
