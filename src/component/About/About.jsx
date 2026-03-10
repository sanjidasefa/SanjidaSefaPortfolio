import React from "react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">     
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-md font-bold uppercase tracking-[0.2em] text-blue-900">
              Get To Know Me
            </h2>
            <h3 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
              A Coder by Choice, <br /> An Artist by Heart.
            </h3>
            
            <div className="mt-6 space-y-4 text-lg text-gray-900 leading-relaxed">
              <p>
                My journey into the world of programming started with a simple curiosity about how things work behind the screen. What began as an experiment with HTML tags quickly turned into a passion for building complex, interactive web applications. 
              </p>
              <p>
                As a fresh developer, I thrive on the MERN stack. I enjoy the process of turning a wireframe into a living, breathing interface that provides a seamless user experience. Clean code and scalable architecture are my standards.
              </p>
              <p>
                Beyond the terminal, I’m a person of many colors. Whether it's the adrenaline of playing <strong>football</strong> or the tranquility of <strong>painting</strong>, I find inspiration everywhere. These hobbies keep my creativity sharp and my problem-solving skills fresh.
              </p>
            </div>

            <div className="mt-10">
              <p className="font-bold text-gray-900 mb-5 italic">My Technical Toolbelt:</p>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      backgroundColor: "#1e3a8a",
                      color: "#fff",
                    }}
                    className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Journey Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 overflow-hidden rounded-3xl bg-blue-900 p-10 text-white shadow-2xl border border-blue-800"
            >
              <div className="mb-6 inline-block p-3 bg-blue-800 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Developer Mindset</h3>
              <p className="text-blue-100 leading-relaxed text-lg mb-8 italic">
                "I believe that coding is not just about solving problems, but about creating tools that empower people."
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-blue-800">
                <div>
                  <p className="text-4xl font-black text-white">100%</p>
                  <p className="text-xs mt-1 uppercase tracking-widest text-blue-400 font-bold">Dedication</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">24/7</p>
                  <p className="text-xs mt-1 uppercase tracking-widest text-blue-400 font-bold">Curiosity</p>
                </div>
              </div>
            </motion.div>

            {/* Fading Glow Effect - ফিক্স করা অংশ */}
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-[80px] -z-10"
            />
            
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border-2 border-dashed border-blue-900/20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;