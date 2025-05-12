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



// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="relative bg-white z-50">
//       {/* Desktop Navbar */}
//       <div className="hidden md:flex cf justify-between items-center px-8 py-4">
//       <div className="inset-0 flex items-center justify-center z-30">
//         <div className="flex flex-col  nav-logo py-1  px-3">
//           <span className="p-0 m-0 font-extrabold">ATDS</span>
//           <span className="text-[11px] mb-1" >AT Developments </span>
//         </div>

        
//       </div>
//          <nav className="flex space-x-6 text-md font-medium">
//            <a href="#about" className="uppercase">Home</a>
//            <a href="#about" className="uppercase">About</a>
//            <a href="#services" className="uppercase">Services</a>
//            <a href="#projects" className="uppercase">Projects</a>
//            <a href="#contact" className="uppercase">Contact</a>
//          </nav>
//        </div>

//       {/* Mobile Top Bar */}
//       <div className="md:hidden cf flex justify-between items-center px-4 py-4 text-white">
//         <div className="text-2xl font-bold">
//           AT<span className="text-amber-100">Developments</span>
//         </div>
//         <button onClick={toggleMenu}>
//           {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
//         </button>
//       </div>

//       {/* Slide-in Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-white text-black transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Top Row: Brand + Close Icon */}
//         <div className="flex cf justify-between items-center px-4 py-4 border-b border-gray-200">
//           <div className="text-2xl font-bold">
//             AT<span className="text-amber-300">Developments</span>
//           </div>
//           <button onClick={toggleMenu}>
//             <FiX size={26} />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <div className="px-6 cf pt-8 space-y-6 text-lg font-medium">
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





// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

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
//                 <a href="#home" className="hover:text-[#F8B44F] transition ease-in">Home</a>
//                 <a href="#about" className="hover:text-[#F8B44F] transition ease-in">About</a>
//                 <a href="#services" className="hover:text-[#F8B44F] transition ease-in">Services</a>
//                 <a href="#projects" className="hover:text-[#F8B44F] transition ease-in">Projects</a>
//                 <a href="#contact" className="hover:text-[#F8B44F] transition ease-in">Contact</a>
//               </nav>
//             </div>

//             {/* Mobile Navbar */}
//             <div className="md:hidden flex justify-between items-center px-4 py-4 text-black">
//             <div className="flex flex-col nav-logo py-1 px-3">
//                 <span className="p-0 m-0 font-extrabold">ATDS</span>
//                 <span className="text-[11px] mb-1">AT Developments</span>
//               </div>
//               <button onClick={toggleMenu}>
//                 {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
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
//               <a href="#about" onClick={toggleMenu}>Home</a>
//               <a href="#about" onClick={toggleMenu}>About</a>
//               <a href="#services" onClick={toggleMenu}>Services</a>
//               <a href="#projects" onClick={toggleMenu}>Projects</a>
//               <a href="#contact" onClick={toggleMenu}>Contact</a>
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



// import { useState, useEffect } from "react";
// import { FiX } from "react-icons/fi";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { useLocation, Link } from "react-router-dom";

// const MainNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);
//   const location = useLocation();

//   const isHomePage = location.pathname === "/";

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!isHomePage) {
//         setShowNavbar(true); // Always show on other pages
//       } else if (isOpen) {
//         setShowNavbar(true); // Show if menu is open
//       } else {
//         setShowNavbar(window.scrollY > 140); // Only show on scroll for home page
//       }
//     };

//     handleScroll(); // Call once on mount
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHomePage, isOpen]);

//   return (
//     <>
//       {showNavbar && (
//         <header className="fixed top-0 left-0 w-full bg-white shadow z-50 transition-opacity duration-500">
//           <div className="container mx-auto">
//             {/* Desktop Navbar */}
//             <div className="hidden md:flex justify-between items-center py-4">
//               <Link to='/' className="flex flex-col nav-logo py-1 px-3">
//                 <span className="p-0 m-0 font-extrabold">ATDS</span>
//                 <span className="text-[11px] mb-1">AT Developments</span>
//               </Link>
//               <nav className="flex space-x-6 text-sm font-bold uppercase">
//                 <Link to="/" className="hover:text-[#F8B44F] transition ease-in">Home</Link>
//                 <Link to="/about" className="hover:text-[#F8B44F] transition ease-in">About</Link>
//                 <Link to="/services" className="hover:text-[#F8B44F] transition ease-in">Services</Link>
//                 <Link to="/projects" className="hover:text-[#F8B44F] transition ease-in">Projects</Link>
//                 <Link to="/testimonials" className="hover:text-[#F8B44F] transition ease-in">Testimonials</Link>
                
//                 <Link to="/contact" className="hover:text-[#F8B44F] transition ease-in">Contact</Link>
//               </nav>
//             </div>

//             {/* Mobile Navbar */}
//             <div className="md:hidden flex justify-between items-center py-4 text-black">
//               <Link to='/' className="flex flex-col nav-logo py-1 px-3">
//                 <span className="p-0 m-0 font-extrabold">ATDS</span>
//                 <span className="text-[11px] mb-1">AT Developments</span>
//               </Link>
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
//             <div className="flex justify-end items-center px-4 py-4">
//               <button onClick={toggleMenu}>
//                 <FiX size={26} />
//               </button>
//             </div>
//             <div className="px-8 flex flex-col pt-8 space-y-6 text-lg font-bold uppercase">
//               <Link to="/" onClick={toggleMenu}>Home</Link>
//               <Link to="/about" onClick={toggleMenu}>About</Link>
//               <Link to="/services" onClick={toggleMenu}>Services</Link>
//               <Link to="/projects" onClick={toggleMenu}>Projects</Link>
//               <Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link>
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

// export default MainNavbar;


// import { useState, useEffect } from "react";
// import { FiX } from "react-icons/fi";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { useLocation, Link } from "react-router-dom";

// const MainNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [scrolledPast100, setScrolledPast100] = useState(false);
//   const location = useLocation();

//   const isHomePage = location.pathname === "/";
//   const isProjectDetailPage = location.pathname.startsWith("/projects/") && location.pathname !== "/projects";

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       // Determine visibility for different routes
//       if (isProjectDetailPage) {
//         setShowNavbar(scrollY > 100);
//         setScrolledPast100(scrollY > 100);
//       } else if (isHomePage) {
//         setShowNavbar(isOpen || scrollY > 140);
//       } else {
//         setShowNavbar(true); // Always show on other pages
//       }
//     };

//     handleScroll(); // Run on mount
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHomePage, isProjectDetailPage, isOpen]);

//   const navbarClasses = () => {
//     if (isHomePage) return "bg-white shadow-sm";
//     if (isProjectDetailPage) {
//       return scrolledPast100 ? "bg-white shadow text-black" : "bg-transparent text-white";
//     }
//     return "bg-white shadow";
//   };

//   return (
//     <>
//       {showNavbar && (
//         <header
//           className={`fixed top-0 left-0 w-full z-950 transition duration-300 ${navbarClasses()}`}
//         >
//           <div className="container mx-auto">
//             {/* Desktop Navbar */}
//             <div className="hidden md:flex justify-between items-center py-4">
//               <Link to="/" className="flex flex-col nav-logo py-1 px-3">
//                 <span className="p-0 m-0 cf font-extrabold">ATDS</span>
//                 <span className="text-[11px] mb-1">AT Developments</span>
//               </Link>
//               <nav className="flex space-x-6 text-sm  font-bold uppercase">
//                 <Link to="/" className="hover:text-[#F8B44F] transition ease-in">Home</Link>
//                 <Link to="/about" className="hover:text-[#F8B44F] transition ease-in">About</Link>
//                 <Link to="/services" className="hover:text-[#F8B44F] transition ease-in">Services</Link>
//                 <Link to="/projects" className="hover:text-[#F8B44F] transition ease-in">Projects</Link>
//                 <Link to="/testimonials" className="hover:text-[#F8B44F] transition ease-in">Testimonials</Link>
//                 <Link to="/contact" className="hover:text-[#F8B44F] transition ease-in">Contact</Link>
//               </nav>
//             </div>

//             {/* Mobile Navbar */}
//             <div className="md:hidden flex justify-between items-center py-4">
//               <Link to="/" className="flex flex-col nav-logo py-1 px-3">
//                 <span className="p-0 m-0 cf font-extrabold">ATDS</span>
//                 <span className="text-[11px] mb-1">AT Developments</span>
//               </Link>
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
//             <div className="flex justify-end items-center px-4 py-4">
//               <button onClick={toggleMenu}>
//                 <FiX size={26} />
//               </button>
//             </div>
//             <div className="px-8 flex flex-col pt-8 space-y-6 text-lg font-bold uppercase">
//               <Link to="/" onClick={toggleMenu}>Home</Link>
//               <Link to="/about" onClick={toggleMenu}>About</Link>
//               <Link to="/services" onClick={toggleMenu}>Services</Link>
//               <Link to="/projects" onClick={toggleMenu}>Projects</Link>
//               <Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link>
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

// export default MainNavbar;




// import { useState, useEffect } from "react";
// import { FiX } from "react-icons/fi";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { useLocation, Link } from "react-router-dom";

// const MainNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [scrolledPast100, setScrolledPast100] = useState(false);
//   const location = useLocation();

//   const isHomePage = location.pathname === "/";
//   const isProjectDetailPage =
//     location.pathname.startsWith("/projects/") && location.pathname !== "/projects";

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       if (isProjectDetailPage) {
//         setShowNavbar(scrollY > 100);
//         setScrolledPast100(scrollY > 100);
//       } else if (isHomePage) {
//         setShowNavbar(isOpen || scrollY > 140);
//       } else {
//         setShowNavbar(true);
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHomePage, isProjectDetailPage, isOpen]);

//   const navbarClasses = () => {
//     if (isHomePage) return "hb shadow-sm";
//     if (isProjectDetailPage) {
//       return scrolledPast100 ? "hb shadow text-black" : "bg-transparent text-white";
//     }
//     return "hb shadow";
//   };

//   return (
//     <>
//       {showNavbar && (
//         <header className={`fixed top-0 hb left-0 w-full z-950 transition duration-300 ${navbarClasses()}`}>
//           <div className="container mx-auto">
//             {/* Desktop Navbar */}
//             <div className="hidden md:flex justify-between items-center py-4">
//               <Link to="/" className="flex flex-col nav-logo py-1 px-3">
//                 <span className="p-0 m-0 cf font-extrabold">ATDS | AT Developments</span>
//                 <span className="text-[14px] mb-1">Professional Construction</span>
//               </Link>
//               <nav className="flex space-x-6 text-sm  uppercase">
//                 <Link to="/" className="hover:text-[#F8B44F] transition ease-in">Home</Link>
//                 <Link to="/about" className="hover:text-[#F8B44F] transition ease-in">About</Link>
//                 <Link to="/services" className="hover:text-[#F8B44F] transition ease-in">Services</Link>
//                 <Link to="/projects" className="hover:text-[#F8B44F] transition ease-in">Projects</Link>
//                 {/* <Link to="/testimonials" className="hover:text-[#F8B44F] transition ease-in">Testimonials</Link> */}
//                 <Link to="/contact" className="hover:text-[#F8B44F] transition ease-in">Contact</Link>
//               </nav>
//             </div>

//             {/* Mobile Navbar */}
//             <div className="md:hidden flex justify-between items-center py-4">
//               <Link to="/" className="flex flex-col nav-logo py-1 px-3">
//                 <span className="p-0 mt- cf text-xs font-bold">ATDS | AT Developments</span>
//                 <span className="text-[11px] mb-1"> Professional Construction</span>
//               </Link>
//               <button onClick={toggleMenu}>
//                 {isOpen ? <FiX size={26} /> : <HiOutlineMenuAlt4 size={26} />}
//               </button>
//             </div>
//           </div>

//           {/* Fade-in Mobile Menu */}
//           {/* <div
//             className={`fixed top-0 left-0 w-full h-full bg-white text-black z-40 md:hidden transition-all duration-500  ${
//               isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
//             }`}
//           > */}
//           <div
//             className={`
//               fixed top-0 left-0 w-full h-full bg-white text-black z-40 md:hidden
//                transition-all duration-500 
//               ${isOpen ? "opacity-100  pointer-events-auto" : "opacity-0  pointer-events-none"}
//             `}
//           >

//             <div className="flex justify-end items-center px-4 py-4">
//               <button onClick={toggleMenu}>
//                 <FiX size={26} />
//               </button>
//             </div>
//             <div className="px-8 flex flex-col pt-8 space-y-6 text-lg font-bold uppercase">
//               <Link to="/" onClick={toggleMenu}>Home</Link>
//               <Link to="/about" onClick={toggleMenu}>About</Link>
//               <Link to="/services" onClick={toggleMenu}>Services</Link>
//               <Link to="/projects" onClick={toggleMenu}>Projects</Link>
//               {/* <Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link> */}
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

// export default MainNavbar;




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
      const scrollY = window.scrollY;

      if (isHomePage) {
        setShowNavbar(isOpen || scrollY > 140);
      } else {
        setShowNavbar(true);
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, isOpen]);

  const navbarClasses = () => {
    return "hb shadow-sm";
  };


  // const navigate = useNavigate();
const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 

  return (
    <>
      {showNavbar && (
        <header
          className={`fixed top-0 left-0 w-full z-950 transition duration-300 ${navbarClasses()}`}
        >
          <div className="container mx-auto">
            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center py-4">
              {
                isHomePage ? <Link to="/" onClick={handleScrollToTop} className="flex flex-col nav-logo py-1 px-3">
                <span className="p-0 m-0 cf font-extrabold">ATDS | AT Developments</span>
                <span className="text-[14px] mb-1">Professional Construction</span>
              </Link> : <Link to="/"  className="flex flex-col nav-logo py-1 px-3">
                <span className="p-0 m-0 cf font-extrabold">ATDS | AT Developments</span>
                <span className="text-[14px] mb-1">Professional Construction</span>
              </Link>
              }
              {/* <Link to="/" onClick={handleLogoClick} className="flex flex-col nav-logo py-1 px-3">
                <span className="p-0 m-0 cf font-extrabold">ATDS | AT Developments</span>
                <span className="text-[14px] mb-1">Professional Construction</span>
              </Link> */}
              <nav className="flex space-x-6 text-sm uppercase">
                <Link to="/" onClick={handleScrollToTop} className="hover:text-[#F8B44F] transition">Home</Link>
                <Link to="/about" className="hover:text-[#F8B44F] transition">About</Link>
                <Link to="/services" className="hover:text-[#F8B44F] transition">Services</Link>
                <Link to="/projects" className="hover:text-[#F8B44F] transition">Projects</Link>
                <Link to="/contact" className="hover:text-[#F8B44F] transition">Contact</Link>
              </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden flex justify-between items-center py-4">
              <Link to="/" className="flex flex-col nav-logo py-1 px-3">
                <span className="p-0 mt-1 cf text-xs font-bold">ATDS | AT Developments</span>
                <span className="text-[11px] mb-1">Professional Construction</span>
              </Link>
              <button onClick={toggleMenu}>
                {isOpen ? <FiX size={26} /> : <HiOutlineMenuAlt4 size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              fixed top-0 left-0 w-full h-full bg-white text-black z-40 md:hidden
              transition-all duration-500
              ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
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
