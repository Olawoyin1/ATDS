
// import  { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="relative z-50">
//       {/* Desktop Navbar */}
//       <div className="container hidden md:block">
//         <div className="flex cf h-18 text-white items-center justify-between">
//           <li><a href="">About</a></li>
//           <li><a href="">Services </a></li>
//           <li className="text-3xl font-bold">ATDevelopments</li>
//           <li><a href="">Project </a></li>
//           <li><a href="">Contact </a></li>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="md:hidden cf text-white flex justify-between items-center px-4 py-4 ">
//         <div className="text-2xl text-white font-bold">ATDevelopments</div>
//         <button onClick={toggleMenu}>
//           {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
//         </button>
//       </div>

//       {/* Slide-in Mobile Menu */}
//       <div
//         className={`fixed cf top-0 right-0 h-full w-200 max-w-xs bg-white  text-gray-900 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-6 flex flex-col space-y-6 text-lg font-medium">
//           <a href="#" onClick={toggleMenu}>About</a>
//           <a href="#" onClick={toggleMenu}>Services</a>
//           <a href="#" onClick={toggleMenu}>Project</a>
//           <a href="#" onClick={toggleMenu}>Contact</a>
//         </div>
//       </div>

//       {/* Backdrop */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-30 md:hidden"
//           onClick={toggleMenu}
//         />
//       )}
//     </div>
//   );
// };

// export default Navbar;




import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      {/* Desktop Navbar */}
      <div className="container hidden md:block">
        <div className="flex cf h-18 text-white items-center justify-between">
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li className="text-3xl font-bold">ATDevelopments</li>
          <li><a href="">Project</a></li>
          <li><a href="">Contact</a></li>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden cf text-white flex justify-between items-center px-4 py-4">
        <div className="text-2xl font-bold">ATDevelopments</div>
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed cf top-0 right-0 h-full w-[260px] bg-white text-gray-900 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon inside menu */}
        <div className="flex justify-end px-4 pt-4">
          <button onClick={toggleMenu}>
            <FiX size={26} className="text-gray-700" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 pt-8 space-y-6 cf text-lg font-medium">
          <a href="#" onClick={toggleMenu} className="block">About</a>
          <a href="#" onClick={toggleMenu} className="block">Services</a>
          <a href="#" onClick={toggleMenu} className="block">Project</a>
          <a href="#" onClick={toggleMenu} className="block">Contact</a>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
