import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router"; 
import { motion, AnimatePresence } from "framer-motion";
import { Send, Menu, X, ArrowRight } from "lucide-react";

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
    <nav className="fixed top-0 z-50 w-full px-4 md:px-8 py-4 transition-all duration-300">
      <div 
        className={`mx-auto max-w-6xl flex items-center justify-between px-6 py-3 transition-all duration-500 border ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-2xl py-2.5" 
            : "bg-white/40 backdrop-blur-sm border-slate-100 rounded-2xl"
        }`}
      >
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1 group"
        >
          <span className="text-slate-900">Sanjida</span>
          <span className="text-[#1B3C53] group-hover:translate-x-0.5 transition-transform duration-300">Sefa</span>
          <span className="text-slate-500 font-serif">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="relative">
                <Link 
                  to={link.path} 
                  className={`text-sm font-semibold transition-all px-4 py-2 rounded-xl block relative z-10 ${
                    isActive 
                      ? "text-blue-600 font-bold" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  
                  {/* Subtle Interactive Underline Highlight */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="mailto:sanjidasefa9@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-blue-600 shadow-md shadow-slate-900/5 hover:shadow-blue-600/20 transition-all duration-300 group"
          >
            <span>Say Hello</span>
            <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle Button with Rotational UI Shift */}
        <button 
          className={`lg:hidden p-2 rounded-xl transition-all duration-300 border ${
            isMobileMenuOpen 
              ? "bg-slate-900 border-slate-900 text-white z-50 relative" 
              : "bg-white/80 border-slate-200 text-slate-800"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay with Framer Motion Staggered Pop Effects */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-lg flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-5 max-w-sm w-full mx-auto">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                  >
                    <Link 
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl font-black tracking-tight flex items-center justify-between group ${
                        isActive ? "text-slate-500" : "text-slate-900 hover:text-slate-500"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight size={24} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-900" />
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <a
                  href="mailto:sanjidasefa9@gmail.com"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 inline-flex items-center justify-center gap-3 w-full py-3.5 bg-slate-500 text-white rounded-xl font-bold text-base hover:bg-slate-900 shadow-xl shadow-blue-600/10 transition-all duration-300"
                >
                  Say Hello <Send size={16} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;