// import emailjs from "@emailjs/browser";

import ContactComponent from "../components/ContactComponent";

// const SERVICE_ID = "your_service_id";
// const TEMPLATE_ID = "your_template_id";
// const PUBLIC_KEY = "your_public_key";

// const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  return (
    <div className="py-16 mt-14" id="contact">
      <ContactComponent />
    </div>
  );
};

export default Contact;
