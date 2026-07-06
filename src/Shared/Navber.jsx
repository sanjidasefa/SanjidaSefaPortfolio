import { Send, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About-Me" },
    { name: "Tech", path: "/Tech-Section" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/My-Projects" },
    { name: "Contact", path: "/My-Contact-Info" },
  ];

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 px-4 md:px-8 py-4 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div 
        className={`mx-auto  flex items-center justify-between px-4 py-3 transition-all duration-300 border ${
          isScrolled 
            ? "bg-white/50 backdrop-blur-md border-gray-100 shadow-lg rounded-2xl" 
            : "bg-white/40 backdrop-blur-sm border-white/20 rounded-2xl"
        }`}
      >
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-black tracking-tighter text-slate-800 px-2 flex items-center gap-1 group"
        >
          <span>Sanjida</span>
          <span className="text-[#1B3C53] group-hover:text-[#1B3C53] transition-colors">Sefa</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`text-sm font-bold transition-all px-3 py-2 rounded-lg hover:bg-[#1B3C53] ${
                  location.pathname === link.path ? "text-[#1B3C53]" : "text-slate-600 hover:text-[#1B3C53]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="mailto:sanjidasefa9@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1B3C53] text-white rounded-xl font-bold text-sm hover:bg-[#1B3C53] shadow-md shadow-[#1B3C53]/10 transition-all active:scale-95"
          >
            <span>Say Hello</span>
            <Send size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-800 p-2 hover:bg-[#1B3C53] rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 p-6">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-extrabold tracking-tight transition-all hover:scale-110 ${
                location.pathname === link.path ? "text-[#1B3C53]" : "text-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:sanjidasefa9@gmail.com"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-[#1B3C53] text-white rounded-2xl font-bold text-lg hover:bg-[#1B3C53] shadow-xl shadow-[#1B3C53]/20 transition-all"
          >
            Say Hello <Send size={20} />
          </a>
        </div>
        <button 
          className="absolute top-8 right-10 text-slate-800"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

