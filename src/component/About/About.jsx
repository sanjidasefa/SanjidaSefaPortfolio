import React from "react";
import { motion } from "framer-motion";
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
  useScrollReveal(".skill-badge", { y: 20, stagger: 0.05, delay: 0.5 });

  return (
    <section id="about" className="section-padding overflow-hidden border-t border-slate-200 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">     
          {/* LEFT SIDE: Text Content */}
          <div>
            <div className="about-text">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#1B3C53] mb-4">
                Get To Know Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8 text-slate-800">
                A Coder by Choice, <br /> 
                <span className="text-[#1B3C53] italic">An Artist by Heart.</span>
              </h3>
            </div>
            
            <div className="about-text mt-6 space-y-6 text-lg text-slate-500 leading-relaxed max-w-xl">
              <p>
                My journey into programming started with a simple curiosity about the mechanics of the web. What began as an experiment with HTML quickly evolved into a deep-seated passion for building high-performance, interactive applications.
              </p>
              <p>
                Specializing in the <span className="font-semibold">MERN stack</span>, I focus on transforming complex wireframes into seamless, user-centric interfaces. Clean architectural design and scalable code are my core principles.
              </p>
              <p>
                Beyond code, I draw inspiration from the competitive energy of <span className="text-[#1B3C53] font-semibold">football</span> and the creative soul of <span className="text-plum-600 font-semibold text-[#86198f]">painting</span>. These passions fuel my problem-solving mindset and keep my perspective fresh.
              </p>
            </div>

            <div className="mt-12 text-about">
              <p className="font-bold mb-6 flex text-slate-800 items-center gap-3">
                <span className="w-8 h-[1px] bg-[#1B3C53]"></span>
                The Technical Toolbelt
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      backgroundColor: "#f8fafc",
                      borderColor: "#10b981",
                      color: "#10b981"
                    }}
                    className="skill-badge px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-xl text-sm font-medium text-slate-600 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Journey Card */}
          <div className="relative about-card">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 overflow-hidden rounded-[2.5rem] bg-white p-10 md:p-14 text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200"
            >
              <div className="mb-8 inline-block p-4 bg-[#1B3C53] rounded-2xl border border-[#1B3C53]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1B3C53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-slate-800">The Developer Mindset</h3>
              <p className="text-slate-500 leading-relaxed text-xl mb-10 font-medium">
                "I believe that code is an art form—one that bridges the gap between raw functionality and human emotion."
              </p>

              <div className="grid grid-cols-2 gap-10 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-5xl font-black text-slate-800 tracking-tighter">100%</p>
                  <p className="text-[10px] mt-2 uppercase tracking-[0.2em] text-[#1B3C53] font-bold">Innovation</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-slate-800 tracking-tighter">24/7</p>
                  <p className="text-[10px] mt-2 uppercase tracking-[0.2em] text-[#86198f] font-bold">Curiosity</p>
                </div>
              </div>
              
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Fading Glow Effect */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#1B3C53] rounded-full blur-[100px] -z-10" />
            
            <div className="absolute -bottom-8 -right-8 -z-10 h-full w-full rounded-[2.5rem] border border-dashed border-slate-300"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
