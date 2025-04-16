// import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-6 px-4">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//         {/* Logo or Site Name */}
//         <div className="text-xl font-semibold tracking-wide">
//           ATDevelopments
//         </div>

//         {/* Quick Links */}
//         <ul className="flex space-x-6 text-sm">
//           <li><a href="#" className="hover:underline">About</a></li>
//           <li><a href="#" className="hover:underline">Services</a></li>
//           <li><a href="#" className="hover:underline">Projects</a></li>
//           <li><a href="#" className="hover:underline">Contact</a></li>
//         </ul>

//         {/* Social Icons */}
//         <div className="flex space-x-4 text-gray-400">
//           <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
//           <a href="#"><FaTwitter className="hover:text-white transition" /></a>
//           <a href="#"><FaLinkedinIn className="hover:text-white transition" /></a>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-700 mt-4 pt-4 text-center text-xs text-gray-400">
//         &copy; {new Date().getFullYear()} ATDevelopments. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const MiniFooterAlt = () => {
  return (
    <footer className="bg-black cf text-gray-300 py-10">
      <div className="max-w-screen-lg mx-auto text-center px-4">
        {/* Logo or Site Name */}
        <h2 className="text-2xl  font-semibold mb-4 tracking-wide">AT<span className="text-amber-100">Developments</span></h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Projects</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Social Icons */}
        {/* <div className="flex justify-center space-x-5 mb-6 text-gray-400">
          <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
          <a href="#"><FaTwitter className="hover:text-white transition" /></a>
          <a href="#"><FaLinkedinIn className="hover:text-white transition" /></a>
          <a href="#"><FaInstagram className="hover:text-white transition" /></a>
        </div> */}

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} ATDevelopments. Built with passion.
        </p>
      </div>
    </footer>
  );
};

export default MiniFooterAlt;
