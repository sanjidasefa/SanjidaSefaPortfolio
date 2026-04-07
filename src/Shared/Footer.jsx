import React from "react";
import { Github, Mail, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* PROFILE */}
          <div>
            <h2 className="text-2xl font-black tracking-tight mb-4 italic">
              SANJIDA <span className="text-blue-500">SEFA</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              MERN Stack Developer focused on building clean, user-centric web solutions.
              Passionate about turning complex problems into simple, elegant designs.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "About Me", path: "/About-Me" },
                { name: "Projects", path: "/My-Projects" },
                { name: "Contact", path: "/My-Contact-Info" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="relative hover:text-white transition"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-2">
            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-6">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">

              <a
                href="mailto:sanjidasefa@gmail.com"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail size={16} className="text-blue-500" />
                sanjidasefa@gmail.com
              </a>

              <a
                href="tel:01735802904"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone size={16} className="text-blue-500" />
                01735802904
              </a>

              <div className="flex items-start gap-3 col-span-1 sm:col-span-2">
                <MapPin size={16} className="text-blue-500 mt-1" />
                <span>
                  Khan Mansion, Brown Compound Road, Barishal
                </span>
              </div>

              <a
                href="https://github.com/sanjidasefa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <Github size={16} className="text-blue-500 group-hover:scale-110 transition" />
                github.com/sanjidasefa
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs uppercase tracking-widest">

          <p className="text-center md:text-left">
            © {currentYear} Kazi Sanjida Akter Sefa
          </p>

          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1">
              <Globe size={12} /> Barishal, Bangladesh
            </span>
            <span>Diploma in CST</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;