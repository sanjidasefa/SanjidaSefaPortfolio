import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Next.js"],
    },
    {
      category: "Backend & DB",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "JWT Auth"],
    },
    {
      category: "Tools & Others",
      skills: ["Adobe illustrator", "VS Code", "Figma","Canva", "Postman", "Vercel"],
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-md font-bold uppercase tracking-[0.2em] text-blue-900">My Skills</h2>
            <h3 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
              A Coder by Choice, <br /> An Artist by Heart.
            </h3>
            
            <div className="mt-6 space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                My programming journey started with curiosity and turned into a passion for the <strong>MERN stack</strong>. I love turning complex problems into simple, functional, and aesthetic web experiences.
              </p>
              <p>
                Outside of coding, I'm an avid <strong>football</strong> player and a <strong>painter</strong>. These hobbies keep my mind creative and help me approach debugging with a fresh perspective.
              </p>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-10 p-8 rounded-3xl bg-blue-900 text-white shadow-xl border border-blue-800 relative overflow-hidden"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-black">10+</p>
                  <p className="text-xs uppercase tracking-widest text-blue-300">Projects Done</p>
                </div>
                <div>
                  <p className="text-3xl font-black">500+</p>
                  <p className="text-xs uppercase tracking-widest text-blue-300">Hours Coding</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400 blur-3xl opacity-20"></div>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Skills (No Percentages) */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-900 rounded-full"></span>
              Technical Proficiency
            </h4>

            {skillCategories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h5 className="text-blue-900 font-bold mb-4 uppercase text-xs tracking-widest">
                  {cat.category}
                </h5>
                
                {/* Visual Badges/Tags instead of progress bars */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.05, backgroundColor: "#1e3a8a", color: "#fff" }}
                      className="px-4 py-2 bg-blue-50 text-blue-900 rounded-xl text-sm font-semibold border border-blue-100 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;