

// import { useState, useEffect } from "react";
// import { FiX } from "react-icons/fi";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

  

//   useEffect(() => {
//     const handleScroll = () => {
//       // Always show navbar when menu is open
//       if (isOpen) {
//         setShowNavbar(true);
//       } else {
//         setShowNavbar(window.scrollY > 140);
//       }
//     };
  
//     window.addEventListener("scroll", handleScroll);
  
//     // Call it once on mount
//     handleScroll();
  
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isOpen]);


//   return (
//     <>
//       {/* Only show navbar after scroll */}
//       {showNavbar && (
//         <header className="fixed top-0 left-0 w-full bg-white shadow z-50 transition-opacity duration-500">
//           <div className="container mx-auto">
//             {/* Desktop Navbar */}
//             <div className="hidden md:flex justify-between items-center  py-4">
//               <div className="flex flex-col nav-logo py-1 px-3">
//                 <span className="p-0 m-0 font-extrabold">ATDS</span>
//                 <span className="text-[11px] mb-1">AT Developments</span>
//               </div>
//               <nav className="flex space-x-6  text-sm font-bold uppercase">
//                 <Link to="/" className="hover:text-[#F8B44F] transition ease-in">Home</Link>
//                 <Link to="/about" className="hover:text-[#F8B44F] transition ease-in">About</Link>
//                 <Link to="/services" className="hover:text-[#F8B44F] transition ease-in">Services</Link>
//                 <Link to="/projects" className="hover:text-[#F8B44F] transition ease-in">Projects</Link>
//                 <Link to="/contact" className="hover:text-[#F8B44F] transition ease-in">Contact</Link>
//               </nav>
//             </div>

//             {/* Mobile Navbar */}
//             <div className="md:hidden flex justify-between items-center px-4 py-4 text-black">
//             <div className="flex flex-col nav-logo py-1 px-3">
//                 <span className="p-0 m-0 font-extrabold">ATDS</span>
//                 <span className="text-[11px] mb-1">AT Developments</span>
//               </div>
//               <button onClick={toggleMenu}>
//                 {isOpen ? <FiX size={26} /> : <HiOutlineMenuAlt4 size={26} />}
//               </button>
//             </div>
//           </div>

//           {/* Slide-in Mobile Menu */}
//           <div
//             className={`fixed top-0 left-0 w-full h-full bg-white text-black transform transition-transform duration-300 z-40 md:hidden ${
//               isOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//           >
//             <div className="flex justify-end items-center px-4 py-4 ">
              
//               <button onClick={toggleMenu}>
//                 <FiX size={26} />
//               </button>
//             </div>
//             <div className="px-8 flex flex-col pt-8 space-y-6 text-lg font-bold uppercase">
//               <Link to="/" onClick={toggleMenu}>Home</Link>
//               <Link to="/about" onClick={toggleMenu}>About</Link>
//               <Link to="/services" onClick={toggleMenu}>Services</Link>
//               <Link to="/projects" onClick={toggleMenu}>Projects</Link>
//               <Link to="/contact" onClick={toggleMenu}>Contact</Link>
//             </div>

//             <div className="absolute bottom-4 left-8">
//               <p className="text-xs text-gray-500">
//                 &copy; {new Date().getFullYear()} ATDevelopments - All Rights Reserved. 
//               </p>
//             </div>
//           </div>

//           {/* Backdrop */}
//           {isOpen && (
//             <div
//               className="fixed inset-0 bg-black/40 z-30 md:hidden"
//               onClick={toggleMenu}
//             />
//           )}
//         </header>
//       )}
//     </>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useLocation, Link } from "react-router-dom";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) {
        setShowNavbar(true); // Always show on other pages
      } else if (isOpen) {
        setShowNavbar(true); // Show if menu is open
      } else {
        setShowNavbar(window.scrollY > 140); // Only show on scroll for home page
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, isOpen]);

  return (
    <>
      {showNavbar && (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50 transition-opacity duration-500">
          <div className="container mx-auto">
            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center py-4">
              <div className="flex flex-col nav-logo py-1 px-3">
                <span className="p-0 m-0 font-extrabold">ATDS</span>
                <span className="text-[11px] mb-1">AT Developments</span>
              </div>
              <nav className="flex space-x-6 text-sm font-bold uppercase">
                <Link to="/" className="hover:text-[#F8B44F] transition ease-in">Home</Link>
                <Link to="/about" className="hover:text-[#F8B44F] transition ease-in">About</Link>
                <Link to="/services" className="hover:text-[#F8B44F] transition ease-in">Services</Link>
                <Link to="/projects" className="hover:text-[#F8B44F] transition ease-in">Projects</Link>
                
                <Link to="/contact" className="hover:text-[#F8B44F] transition ease-in">Contact</Link>
              </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden flex justify-between items-center px-4 py-4 text-black">
              <div className="flex flex-col nav-logo py-1 px-3">
                <span className="p-0 m-0 font-extrabold">ATDS</span>
                <span className="text-[11px] mb-1">AT Developments</span>
              </div>
              <button onClick={toggleMenu}>
                {isOpen ? <FiX size={26} /> : <HiOutlineMenuAlt4 size={26} />}
              </button>
            </div>
          </div>

          {/* Slide-in Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-white text-black transform transition-transform duration-300 z-40 md:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end items-center px-4 py-4">
              <button onClick={toggleMenu}>
                <FiX size={26} />
              </button>
            </div>
            <div className="px-8 flex flex-col pt-8 space-y-6 text-lg font-bold uppercase">
              <Link to="/" onClick={toggleMenu}>Home</Link>
              <Link to="/about" onClick={toggleMenu}>About</Link>
              <Link to="/services" onClick={toggleMenu}>Services</Link>
              <Link to="/projects" onClick={toggleMenu}>Projects</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
            <div className="absolute bottom-4 left-8">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} ATDevelopments - All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Backdrop */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-30 md:hidden"
              onClick={toggleMenu}
            />
          )}
        </header>
      )}
    </>
  );
};

export default MainNavbar;
