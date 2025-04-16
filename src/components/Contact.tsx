
const Contact = () => {
  return (
    <div className="py-10">
        <div className="container">
            <div className="md:flex gap-8">
                <div className="flex  flex-1/2">
                    <img src="../../Images/contact.jpg" className="h-120  w-full" alt="" />
                </div>
                <div className="flex mt-10 md:mt-0 flex-col gap-4 flex-1/2">
                   <h4 className="cf font-bold text-2xl">Contact Information</h4>
                   <div>
                    <p className="text-gray-500 cf mb-4">With decades of hands-on experience in delivering high-end construction solutions, ATDevelopments has earned a reputation as a trusted expert in complex residential and commercial projects across the UK. </p>

                    <p className="text-gray-500 headings">If you’re planning a project or simply want to learn more about our services and how we work, we’d love to hear from you. Reach out today and a member of our team will be happy to assist.</p>

                    <div className="flex mt-7 justify-between">
                        
                        <div className="flex text-gray-600 flex-col gap-3">
                            <h2 className="cf font-bold text-black">Business Hours</h2>
                            <p>Monday to Friday <br />8:00 am to 6:00 pm</p>
                            <p className="mt-2">Office@atds.uk <br />
                                +44 9809 423</p>
                                
                        </div>

                        <div className="flex flex-col text-gray-600 gap-3">
                            <h2 className="cf font-bold text-black">Contact</h2>
                            <p>West London <br />
                                Acton <br />
                                W3 7BS </p>

                                
                        </div>

                        <div className="flex flex-col text-gray-600 gap-3">
                            <h2 className="cf text-black font-bold">follow</h2>
                            <p>Instagram</p>

                                <p>LinkedIn</p>
                                <p>Twitter</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact