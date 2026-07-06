import React from "react";
import { GraduationCap, Briefcase, Award, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      title: "Diploma in Computer Science & Technology",
      institution: "Barisal Polytechnic Institute",
      result: "CGPA: 3.80",
      duration: "2021 - 2025",
    },
  ];

  const experience = [
    {
      role: "Graphics Designer (Intern/Trainee)",
      company: "BSIT (Barisal School of IT)",
      duration: "3 Months",
      date: "October, 2025 - December, 2025",
      description:
        "Worked on UI elements, social media assets, and brand identity designs.",
    },
    {
      role: "Frontend Developer Intern",
      company: "Rank More Technology",
      duration: "3 Months",
      date: "June, 2026 - Present",
      description:
        "Developing and optimizing high-fidelity responsive user interfaces from design mockups and image prototypes. Leveraging HTML5, CSS3, JavaScript, and React.js to convert visual concepts into clean, pixel-perfect, and maintainable code while ensuring smooth cross-browser compatibility and submission standard compliance.",
    },
  ];

  // Framer Motion Variants for Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="py-16 md:py-24 mx-auto max-w-6xl px-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center lg:text-left"
      >
        <h3 className="text-slate-800 text-4xl font-extrabold tracking-tight md:text-5xl">
          History & Experience
        </h3>
        <p className="text-slate-500 mt-3 text-lg">My academic journey and professional milestones.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h4 className="text-2xl font-bold text-slate-800 flex items-center gap-3 pb-4 border-b border-slate-100">
            <span className="p-2 bg-blue-50 text-[#1B3C53] rounded-xl"><GraduationCap size={24} /></span>
            Education
          </h4>

          <div className="relative pl-6 space-y-8 border-l-2 border-slate-200">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Timeline Node Icon */}
                <div className="absolute -left-[33px] top-7 w-4 h-4 bg-white border-4 border-[#1B3C53] rounded-full transition-transform group-hover:scale-125"></div>
                
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#1B3C53] mb-3">
                  <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar size={13} /> {edu.duration}
                  </span>
                </div>

                <h5 className="text-xl font-bold text-slate-800 group-hover:text-[#1B3C53] transition-colors flex items-center gap-1">
                  {edu.title}
                </h5>
                <p className="text-slate-500 font-medium mt-1">{edu.institution}</p>
                
                <div className="mt-4 flex items-center gap-2 text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1.5 rounded-xl w-fit">
                  <Award size={16} /> {edu.result}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h4 className="text-2xl font-bold text-slate-800 flex items-center gap-3 pb-4 border-b border-slate-100">
            <span className="p-2 bg-blue-50 text-[#1B3C53] rounded-xl"><Briefcase size={24} /></span>
            Experience
          </h4>

          <div className="relative pl-6 space-y-8 border-l-2 border-slate-200">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Timeline Node Icon */}
                <div className="absolute -left-[33px] top-7 w-4 h-4 bg-white border-4 border-[#1B3C53] rounded-full transition-transform group-hover:scale-125"></div>
                
                {/* Badges Layout */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#1B3C53] mb-3">
                  <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md表">
                    <Calendar size={13} /> {exp.date}
                  </span>
                  <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
                    <Clock size={13} /> {exp.duration}
                  </span>
                  {exp.date.includes("Present") && (
                    <span className="animate-pulse bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md">
                      Active
                    </span>
                  )}
                </div>

                <h5 className="text-xl font-bold text-slate-800 group-hover:text-[#1B3C53] transition-colors">
                  {exp.role}
                </h5>
                <p className="text-slate-500 font-medium mt-1 mb-3">{exp.company}</p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Education;