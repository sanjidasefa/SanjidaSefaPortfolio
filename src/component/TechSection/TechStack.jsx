import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "hover:shadow-orange-500/40", level: "95%" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "hover:shadow-blue-500/40", level: "90%" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "hover:shadow-yellow-500/40", level: "85%" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "hover:shadow-cyan-400/40", level: "90%" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "hover:shadow-orange-400/40", level: "80%" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "hover:shadow-green-500/40", level: "75%" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "hover:shadow-gray-400/40", level: "80%", invert: true },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "hover:shadow-green-600/40", level: "70%" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "hover:shadow-red-500/40", level: "85%" },
  ];

  return (
    <section className="py-24 bg-[#020617] text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono tracking-[0.3em] uppercase text-md mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold"
          >
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Master</span>
          </motion.h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.05 }}
              className={`group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all duration-300 shadow-xl ${tech.color}`}
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-[360deg]">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className={`w-12 h-12 object-contain ${tech.invert ? 'filter invert' : ''}`} 
                  />
                </div>
                
                <h4 className="text-sm font-bold text-slate-300 group-hover:text-white mb-3 transition-colors">
                  {tech.name}
                </h4>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: tech.level }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
        <div className="mt-24 flex justify-center opacity-40">
           <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="relative w-40 h-40 border-t-2 border-b-2 border-blue-500/30 rounded-full flex items-center justify-center"
           >
              <div className="w-24 h-24 border-l-2 border-r-2 border-cyan-500/20 rounded-full" />
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full blur-sm" />
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;