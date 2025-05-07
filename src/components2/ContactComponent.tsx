// import { Link } from "react-router-dom"

const ContactComponent = () => {
  return (
    
    <div className="container">
      <div className="md:flex gap-14">
        <div className="flex flex-1/2">
          <form  className="space-y-4 w-full">
            <h2 className=" text-2xl">Tell us about your project</h2>
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
              className="w-full sb text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
            {status && (
              <p className="text-sm mt-2 text-gray-600">{status}</p>
            )}
          </form>
        </div>
        <div className="flex mt-10 md:mt-0 flex-col gap-4 flex-1/2">
          <h4 className="text-2xl">Contact Information</h4>
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
                <h2 className=" text-black">Business Hours</h2>
                <p>
                  Monday to Friday <br />
                  8:00 am to 6:00 pm
                </p>
                
              </div>

              <div className="flex flex-col text-gray-600 gap-3">
                <h2 className="text-black">Contact</h2>
                <p className="">
                  Office@atds.uk <br />
                  +44 9809 423
                </p>
              </div>
              
              <div className="flex flex-col text-gray-600 gap-3">
                <h2 className="text-black">Location</h2>
                <p>
                  West London <br />
                  Acton <br />
                  W3 7BS
                </p>
              </div>

              {/* <div className="flex gap-3 flex-col">
                <Link to='/terms-and-conditions'
                  className="underline hover:text-black cursor-pointer"
                >
                  Terms & Conditions
                </Link>
                <Link to="/privacy-policy"
                  className="underline hover:text-black cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

 


  )
}

export default ContactComponent