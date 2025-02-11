import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import topupskuyy from "../assets/topupskuyy.png";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate/50 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <img src={topupskuyy} className="w-[50px]"></img>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/track-order"
              className="flex items-center gap-2 text-white border border-[#54c0e4] bg-transparent hover:bg-[#54c0e4] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#54c0e4]/50 font-medium rounded-md text-xs px-4 py-2 transition"
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="text-white group-hover:text-white text-sm"
              />
              Track Order
            </Link>

            <Link
              to="/login"
              className="text-white border border-[#54c0e4] bg-transparent hover:bg-[#54c0e4] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#54c0e4]/50 font-medium rounded-md text-xs px-4 py-2 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="text-white border border-[#54c0e4] bg-transparent hover:bg-[#54c0e4] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#54c0e4]/50 font-medium rounded-md text-xs px-4 py-2 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              size="lg"
              className="text-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-2 shadow-md">
          <Link
            to="/track-order"
            className="block py-2 hover:text-[#54c0e4] transition"
          >
            Track Order
          </Link>
          <Link
            to="/login"
            className="block py-2 hover:text-[#54c0e4] transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block py-2 text-[#54c0e4] border border-[#54c0e4] bg-transparent text-center rounded-lg hover:bg-[#54c0e4] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#54c0e4]/50 font-medium transition"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;
