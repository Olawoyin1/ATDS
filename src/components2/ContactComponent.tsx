import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://atdsb.onrender.com/contact/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Sonner Toaster */}
      <Toaster richColors position="top-center" />

      <div className="md:flex gap-14">
        {/* Contact Form */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <h2 className="text-2xl">Tell us about your project</h2>

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col gap-4">
          <h4 className="text-2xl">Contact Information</h4>
          <p className="text-gray-500 mb-4">
            With decades of hands-on experience in delivering high-end construction
            solutions, ATDevelopments has earned a reputation as a trusted expert
            in complex residential and commercial projects across the UK.
          </p>
          <p className="text-gray-500">
            If you’re planning a project or simply want to learn more about our
            services and how we work, we’d love to hear from you.
          </p>

          <div className="flex justify-between mt-7 text-gray-600">
            <div className="flex flex-col gap-3">
              <h2 className="text-black font-medium">Business Hours</h2>
              <p>
                Monday to Friday <br />
                8:00 am to 6:00 pm
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-black font-medium">Contact</h2>
              <p>
                Office@atds.uk <br />
                020 3740 1249
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-black font-medium">Location</h2>
              <p>
                West London <br />
                Acton <br />
                W3 7BS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
