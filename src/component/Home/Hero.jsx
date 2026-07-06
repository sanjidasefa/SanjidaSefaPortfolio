import React from "react";
import { motion } from "framer-motion";
import { Download } from 'lucide-react';
import img from '../../assets/Pi7_Passport_Photo.png';
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left flex-1"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-[#86198f]">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-[#1B3C53]">Sanjida Sefa</span>
            <br />
            <span className="text-3xl sm:text-5xl lg:text-6xl text-slate-500">Web Developer.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500 font-medium">
            I craft clean, user-friendly experiences and turn complex problems into simple, elegant web solutions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Resume.pdf"
              download="Kazi_Sanjida_Sefa_Resume.pdf"
              className="flex gap-2 items-center justify-center px-8 py-4 bg-[#1B3C53] text-white font-bold rounded-xl hover:bg-[#1B3C53] hover:shadow-lg hover:shadow-[#1B3C53]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Download Resume <Download size={20} />
            </a>

            <Link
              to="/My-Contact-Info"
              className="flex items-center justify-center px-8 py-4 border-2 border-[#1B3C53] text-[#1B3C53] font-bold rounded-xl hover:bg-[#1B3C53] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* ইমেজ সেকশন */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              borderRadius: [
                "60% 40% 30% 70%/60% 30% 70% 40%",
                "30% 60% 70% 40%/50% 60% 30% 60%",
                "60% 40% 30% 70%/60% 30% 70% 40%",
              ],
            }}
            transition={{
              borderRadius: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
              default: { duration: 1 }
            }}
            className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden border-4 border-[#1B3C53]/10 shadow-2xl shadow-[#1B3C53]/20"
          >
            <img
              src={img}
              alt="Sanjida Sefa"
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;