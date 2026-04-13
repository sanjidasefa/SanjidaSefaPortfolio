import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center bg-slate-50 text-slate-800">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-emerald-500 font-mono tracking-widest uppercase text-sm"
            >
              My Works
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-2"
            >
              Featured <span className="text-emerald-500">Projects</span>
            </motion.h2>

            <p className="text-slate-500 max-w-sm mt-3 leading-relaxed">
              A collection of projects where I've turned complex ideas into functional digital solutions.
            </p>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-emerald-500/40 transition-all duration-500 shadow-sm hover:shadow-emerald-500/10"
            >

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition"></div>
              </div>

              {/* CONTENT */}
              <div className="p-8">

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-emerald-500 transition">
                  {project.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* BUTTON */}
                <Link
                  to={`/My-Projects/${project.id}`}
                  className="inline-flex items-center gap-3 text-emerald-600 font-semibold group/btn"
                >
                  <span className="relative">
                    View Details
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-500 transition-all group-hover/btn:w-full"></span>
                  </span>

                  <span className="w-9 h-9 text-white rounded-full bg-emerald-500 flex items-center justify-center group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-300 shadow-md shadow-emerald-500/30">
                    <ArrowRight size={16} />
                  </span>
                </Link>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;