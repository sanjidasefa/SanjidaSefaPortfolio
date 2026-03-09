import { Send } from "lucide-react";
import React from "react";
import { Link } from "react-router"; 

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full px-2 md:px-10 py-4">
      <div className="navbar bg-white/80 backdrop-blur-md text-blue-900 shadow-xl rounded-2xl border border-white/20 px-2 md:px-4">
          <div className="navbar-start w-auto lg:w-1/2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-blue-50 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-xl z-[1] mt-3 w-52 p-4 shadow-2xl border border-slate-100 space-y-2"
            >
              <li><Link to="/" className="font-semibold">Home</Link></li>
              <li><Link to="/About-Me" className="font-semibold">About</Link></li>
              <li><Link to="/Tech-Section" className="font-semibold">Tech</Link></li>
              <li><Link to="/services" className="font-semibold">Services</Link></li>
              <li><Link to="/My-Projects" className="font-semibold">Projects</Link></li>
              <li><Link to="/My-Contact-Info" className="font-semibold">Contact</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-lg md:text-2xl font-black tracking-tighter text-blue-900 italic px-2">
            Sanjida<span className="text-blue-600 italic ml-2">Sefa</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link to="/" className="font-semibold hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link to="/About-Me" className="font-semibold hover:text-blue-600 transition-colors">About</Link></li>
            <li><Link to="/Tech-Section" className="font-semibold hover:text-blue-600 transition-colors">Tech</Link></li>
            <li><Link to="/services" className="font-semibold hover:text-blue-600 transition-colors">Services</Link></li>
            <li><Link to="/My-Projects" className="font-semibold hover:text-blue-600 transition-colors">Projects</Link></li>
            <li><Link to="/My-Contact-Info" className="font-semibold hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end flex-1 justify-end">
          <a
            href="mailto:sanjidasefa9@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 md:px-8 md:py-3 bg-blue-600 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            <span className="hidden sm:inline">Say Hello</span>
            <Send size={16} className="md:w-5 md:h-5" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;