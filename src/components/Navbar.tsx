// NAVBER VERSION ONE

// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="relative z-50">
//       {/* Desktop Navbar */}
//       <div className="container hidden md:block">
//         <div className="flex cf h-18 text-white items-center justify-between">
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Services</a></li>
//           <li className="text-3xl font-bold">AT<span className="text-amber-100">Developments</span></li>
//           <li><a href="#projects">Project</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </div>
//       </div>

//       {/* Mobile Top Bar */}
//       <div className="md:hidden cf text-white flex justify-between items-center px-4 py-4">
//         <div className="text-2xl font-bold">AT<span className="text-amber-100">Developments</span></div>
//         <button onClick={toggleMenu}>
//           {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
//         </button>
//       </div>

//       {/* Slide-in Mobile Menu */}
//       <div
//         className={`fixed cf top-0 right-0 h-full w-[260px] bg-white text-gray-900 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Icon inside menu */}
//         <div className="flex justify-end px-4 pt-4">
//           <button onClick={toggleMenu}>
//             <FiX size={26} className="text-gray-700" />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <div className="px-6 pt-8 space-y-6 cf text-lg font-medium">
//           <a href="#about" onClick={toggleMenu} className="block">About</a>
//           <a href="#services" onClick={toggleMenu} className="block">Services</a>
//           <a href="#projects" onClick={toggleMenu} className="block">Project</a>
//           <a href="#contact" onClick={toggleMenu} className="block">Contact</a>
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





// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="fixed w-full cf z-50 text-white">
//       {/* Desktop Navbar */}
//       <div className="hidden md:flex justify-between items-center px-8 py-4">
//         <div className="text-2xl font-bold">
//           AT<span className="text-amber-100">Developments</span>
//         </div>
//         <nav className="flex space-x-6 text-lg font-medium">
//           <a href="#about">About</a>
//           <a href="#services">Services</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </nav>
//       </div>

//       {/* Mobile Top Bar */}
//       <div className="md:hidden flex justify-between items-center px-4 py-4">
//         <div className="text-2xl font-bold">
//           AT<span className="text-amber-100">Developments</span>
//         </div>
//         <button onClick={toggleMenu} className="z-50">
//           {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Fullscreen Menu */}
//       <div
//         className={`fixed top-0 left-0 h-screen w-full bg-black text-white flex flex-col items-center justify-center space-y-8 text-2xl font-medium transition-transform duration-300 z-40 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <a href="#about" onClick={toggleMenu}>About</a>
//         <a href="#services" onClick={toggleMenu}>Services</a>
//         <a href="#projects" onClick={toggleMenu}>Projects</a>
//         <a href="#contact" onClick={toggleMenu}>Contact</a>
//       </div>

//       {/* Backdrop for Mobile Menu */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-30 md:hidden"
//           onClick={toggleMenu}
//         />
//       )}
//     </header>
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
      <div className="hidden md:flex text-white cf justify-between items-center px-8 py-4">
         <div className="text-2xl font-bold">
           AT<span className="text-amber-100">Developments</span>
         </div>
         <nav className="flex space-x-6 text-lg font-medium">
           <a href="#about">About</a>
           <a href="#services">Services</a>
           <a href="#projects">Projects</a>
           <a href="#contact">Contact</a>
         </nav>
       </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden cf flex justify-between items-center px-4 py-4 text-white">
        <div className="text-2xl font-bold">
          AT<span className="text-amber-100">Developments</span>
        </div>
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Row: Brand + Close Icon */}
        <div className="flex cf justify-between items-center px-4 py-4 border-b border-gray-200">
          <div className="text-2xl font-bold">
            AT<span className="text-amber-500">Developments</span>
          </div>
          <button onClick={toggleMenu}>
            <FiX size={26} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 cf pt-8 space-y-6 text-lg font-medium">
          <a href="#about" onClick={toggleMenu} className="block">About</a>
          <a href="#services" onClick={toggleMenu} className="block">Services</a>
          <a href="#projects" onClick={toggleMenu} className="block">Project</a>
          <a href="#contact" onClick={toggleMenu} className="block">Contact</a>
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
