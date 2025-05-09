import { Link } from "react-router-dom";

const MiniFooterAlt = () => {
  return (
    <footer className="bg-black cf text-gray-300 py-10">
      <div className="max-w-screen-lg mx-auto text-center px-4">
        {/* Logo or Site Name */}
        {/* <h2 className="text-2xl  font-semibold mb-4 tracking-wide">AT<span className="text-amber-100">Developments</span></h2> */}

           <Link to="/" className="flex flex-col nav-logo py-1 px-3">
                <span className="p-0 mt-1 cf text-xs font-bold">ATDS | AT Developments</span>
                <span className="text-[11px] mb-1">Professional Construction</span>
            </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} ATDevelopments - All Rights Reserved. 
        </p>
        <p className="text-xs text-gray-500">Registered in England and Wales, Company Number: 14733654</p>
      </div>
    </footer>
  );
};

export default MiniFooterAlt;
