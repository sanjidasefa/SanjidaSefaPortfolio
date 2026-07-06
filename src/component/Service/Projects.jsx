import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router"; 

const Projects = ({ limit }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(limit ? data.slice(0, limit) : data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, [limit]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    },
  };

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center bg-slate-50 text-slate-800">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-[#1B3C53]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-[#1B3C53] animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 bg-slate-50 text-slate-800 overflow-hidden">
      <div className="mx-auto max-w-6xl px-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#1B3C53] font-mono tracking-widest uppercase text-xs bg-[#1B3C53]/5 px-3 py-1.5 rounded-md border border-[#1B3C53]/10">
              My Works
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
              Featured <span className="text-[#1B3C53] relative">Projects
                <span className="absolute left-0 bottom-1 w-full h-[4px] bg-[#1B3C53]/10 rounded"></span>
              </span>
            </h2>

            <p className="text-slate-500 max-w-md mt-3 leading-relaxed text-sm md:text-base">
              A collection of projects where I've turned complex ideas into functional digital solutions.
            </p>
          </motion.div>

          {/* যদি Home পেজে লিমিট থাকে, তবে একটি "View All" বাটন রিক্রুটারদের পুরো পোর্টফোলিও দেখতে সাহায্য করবে */}
          {limit && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="shrink-0"
            >
              <Link
                to="/projects" // আপনার প্রজেক্ট পেজের রাউট এখানে দিন
                className="group flex items-center gap-2 bg-white text-[#1B3C53] border border-slate-200 px-5 py-3 rounded-full font-semibold shadow-sm hover:shadow-md hover:border-[#1B3C53] transition-all duration-300 text-sm"
              >
                See All Projects <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>

        {/* PROJECT GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl border border-slate-200/80 overflow-hidden hover:border-[#1B3C53]/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-[#1B3C53]/5 flex flex-col h-full"
            >

              {/* IMAGE ZONE */}
              <div className="relative h-60 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* CONTENT ZONE */}
              <div className="p-7 flex flex-col flex-grow">

                {/* TAGS */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-100 group-hover:bg-[#1B3C53]/5 group-hover:text-[#1B3C53] group-hover:border-[#1B3C53]/10 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold mb-2.5 text-slate-800 group-hover:text-[#1B3C53] transition-colors duration-300">
                  {project.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed font-normal flex-grow">
                  {project.description}
                </p>

                {/* BUTTON */}
                <div className="mt-auto pt-4 border-t border-slate-50">
                  <Link
                    to={`/My-Projects/${project.id}`}
                    className="inline-flex items-center gap-3 text-[#1B3C53] font-bold group/btn w-full justify-between"
                  >
                    <span className="relative text-sm tracking-wide">
                      Explore Project Details
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1B3C53] transition-all duration-300 group-hover/btn:w-full"></span>
                    </span>

                    <span className="w-9 h-9 text-white rounded-xl bg-[#1B3C53] flex items-center justify-center group-hover/btn:translate-x-1 group-hover/btn:rotate-45 transition-all duration-300 shadow-md shadow-[#1B3C53]/20">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;