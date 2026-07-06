import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Paintbrush, Trophy } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";

const About = () => {
  const skills = [
    "HTML5 & CSS3",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Firebase",
    "Node.js",
    "MongoDB",
    "NextJs",
    "Git & GitHub",
  ];

  // GSAP Revelations
  useScrollReveal(".about-text", { x: -50, stagger: 0.2 });
  useScrollReveal(".about-card", { x: 50 });
  useScrollReveal(".skill-badge", { y: 20, stagger: 0.05, delay: 0.3 });

  return (
    <section id="about" className="py-24 overflow-hidden border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">     
          
          {/* LEFT SIDE: Text Content */}
          <div>
            <div className="about-text">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#1B3C53] mb-4 bg-[#1B3C53]/5 px-3 py-1.5 rounded-md border border-[#1B3C53]/10">
                <Sparkles size={14} /> Get To Know Me
              </span>
              <h3 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8 text-slate-800 tracking-tight">
                A Coder by Choice, <br /> 
                <span className="text-[#1B3C53] italic font-serif">An Artist by Heart.</span>
              </h3>
            </div>
            
            <div className="about-text mt-6 space-y-6 text-base md:text-lg text-slate-500 leading-relaxed max-w-xl">
              <p>
                My journey into programming started with a simple curiosity about the mechanics of the web. What began as an experiment with HTML quickly evolved into a deep-seated passion for building high-performance, interactive applications.
              </p>
              <p>
                Specializing in the <span className="font-semibold text-slate-800">MERN stack</span>, I focus on transforming complex wireframes into seamless, user-centric interfaces. Clean architectural design and scalable code are my core principles.
              </p>
              <p>
                Beyond code, I draw inspiration from the competitive energy of <span className="text-[#1B3C53] font-semibold">football</span> and the creative soul of <span className="text-[#86198f] font-semibold">painting</span>. These passions fuel my problem-solving mindset and keep my perspective fresh.
              </p>
            </div>

            {/* SKILLS ZONE */}
            <div className="mt-12">
              <p className="font-bold mb-6 flex text-slate-800 text-sm uppercase tracking-wider items-center gap-3">
                <span className="w-8 h-[1px] bg-[#1B3C53]"></span>
                The Technical Toolbelt
              </p>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      backgroundColor: "rgba(27, 60, 83, 0.04)",
                      borderColor: "#1B3C53",
                      color: "#1B3C53"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="skill-badge px-4 py-2.5 bg-white border border-slate-200/80 shadow-sm rounded-xl text-sm font-semibold text-slate-600 cursor-default transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Journey Card & Live Counter */}
          <div className="relative about-card lg:mt-0 mt-8">
            <motion.div
              whileHover={{ 
                rotateX: 2, 
                rotateY: -2, 
                boxShadow: "0_20px_50px_rgba(27,60,83,0.08)" 
              }}
              style={{ transformStyle: "preserve-3d" }}
              animate={{ y: [0, -12, 0] }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                hover: { duration: 0.3 }
              }}
              className="relative z-10 overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 text-slate-800 border border-slate-200/80"
            >
              <div className="mb-8 inline-flex p-3.5 rounded-2xl border border-[#1B3C53] text-[#1B3C53] bg-[#1B3C53]/5">
                <Code2 size={24} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight text-slate-800">The Developer Mindset</h3>
              <p className="text-slate-500 leading-relaxed text-lg md:text-xl mb-10 font-medium italic">
                "I believe that code is an art form—one that bridges the gap between raw functionality and human emotion."
              </p>

              {/* Core Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">100%</p>
                  <p className="text-[10px] mt-2 uppercase tracking-[0.15em] text-[#1B3C53] font-bold flex items-center gap-1.5">
                    <Paintbrush size={12} /> Innovation
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">24/7</p>
                  <p className="text-[10px] mt-2 uppercase tracking-[0.15em] text-[#86198f] font-bold flex items-center gap-1.5">
                    <Sparkles size={12} /> Curiosity
                  </p>
                </div>
              </div>
              
              {/* Decorative Blur Inside Card */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Extra Added Component: Live Quick Stats Badge Behind the main card to look super premium */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 z-20 bg-[#1B3C53] text-white p-4 px-6 rounded-2xl shadow-xl flex items-center gap-3 hidden md:flex border border-white/10"
            >
              <div className="p-2 bg-white/10 rounded-xl">
                <Trophy size={20} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-slate-300 font-medium uppercase tracking-wider">Experience & Drive</p>
                <p className="text-sm font-bold">10+ Projects Complete</p>
              </div>
            </motion.div>

            {/* Fading Glow Effect */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#1B3C53]/5 rounded-full blur-[100px] -z-10" />
            
            {/* Dashed Border Background */}
            <div className="absolute -bottom-8 -right-8 -z-10 h-full w-full rounded-[2.5rem] border border-dashed border-slate-200"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;