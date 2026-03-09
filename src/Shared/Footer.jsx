import React from 'react';
import { Github, Mail, MapPin, Phone, Globe, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* প্রোফাইল সেকশন */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black tracking-tighter mb-4 italic text-white">
              SANJIDA <span className="text-blue-500">SEFA</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              MERN Stack Developer focused on building clean, user-centric web solutions. [cite: 6, 41] 
              Passionate about turning complex problems into simple, elegant designs. [cite: 7]
            </p>
          </div>

          {/* নেভিগেশন */}
          <div>
            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/About-Me" className="hover:text-white transition-colors">About Me</Link></li>
              <li><Link to="/My-Projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/My-Contact-Info" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* কন্টাক্ট ইনফো (রেজুমে থেকে প্রাপ্ত) */}
          <div className="lg:col-span-2">
            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <a href="mailto:sanjidasefa@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-blue-500" /> sanjidasefa@gmail.com 
              </a>
              <a href="tel:01735802904" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-blue-500" /> 01735802904 
              </a>
              <div className="flex items-start gap-3 col-span-1 sm:col-span-2">
                <MapPin size={16} className="text-blue-500 mt-1" />
                <span>Khan Mansion, Brown Compound Road, Barishal </span>
              </div>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <Github size={16} className="text-blue-500" /> github.com [cite: 4]
              </a>
            </div>
          </div>
        </div>

        {/* নিচের অংশ */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs uppercase tracking-widest">
          <p>© {currentYear} Kazi Sanjida Akter Sefa </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><Globe size={12} /> Barishal, Bangladesh </span>
            <span>Diploma in CST [cite: 24]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;