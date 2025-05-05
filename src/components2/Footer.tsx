// import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-4">
        {/* ATDevelopments Section - Full Width on Small */}
        <div className="sm:col-span-1 md:col-span-1">
          <h3 className="text-xl font-semibold">ATDS</h3>
          <span className="text-sm">AT Developments</span>
          <p className="text-gray-900">West London <br />
                                Acton <br />
                                W3 7BS </p>
        </div>

        {/* Wrapping Remaining 4 Sections for Mobile */}
        <div className="grid grid-cols-2 sm:gap-10 md:contents sm:col-span-1 md:col-span-4">
          {/* atds */}
          <div className="hidden md:block">
            <ul className="space-y-2 text-sm">
              <li>© ATDS. {new Date().getFullYear()}</li>
              <li>All Rights Reserved</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#F8B44F]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#F8B44F]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F8B44F]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#F8B44F]">
                  News
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F8B44F]">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="">
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#F8B44F]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F8B44F]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F8B44F]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#F8B44F]">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F8B44F]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* socials */}
          {/* <div className="flex mt-4 sm:mt-0 gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8B44F]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8B44F]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8B44F]"
            >
              <FaYoutube />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8B44F]"
            >
              <FaInstagram />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
