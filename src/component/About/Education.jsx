import React from 'react';
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      title: "Diploma in Computer Science & Technology",
      institution: "Barisal Polytechnic Institute",
      status: "Appeared (Result Awaited)",
      result: "CGPA: 3.90 (Current)",
      duration: "2021 - 2025",
    },
  ];

  const experience = [
    {
      role: "Graphics Designer (Intern/Trainee)",
      company: "BSIT (Barisal School of IT)",
      duration: "3 Months",
      description: "Worked on UI elements, social media assets, and brand identity designs.",
    },
  ];

  return (   
      <div className="p-10 md:p20 mx-auto max-w-6xl px-6">
        <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-blue-900 text-4xl font-bold "
                  >
                   Educational Qualification
                  </motion.h3>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <GraduationCap className="text-blue-900" /> Education
            </h4>
            
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-900/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-900 rounded-full shadow-lg shadow-blue-900/40"></div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">{edu.duration}</span>
                  <h5 className="text-lg font-bold text-gray-900 mt-1">{edu.title}</h5>
                  <p className="text-gray-600 font-medium">{edu.institution}</p>
                  <div className="mt-4 flex items-center gap-2 text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full w-fit">
                    <Award size={16} /> {edu.result}
                  </div>
                  <p className="mt-2 text-xs text-blue-700 font-semibold italic">{edu.status}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Briefcase className="text-blue-900" /> Experience
            </h4>
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-900/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-900 rounded-full"></div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">{exp.duration}</span>
                  <h5 className="text-lg font-bold text-gray-900 mt-1">{exp.role}</h5>
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
   
  );
};

export default Education;