import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight} from "lucide-react";
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
      <div className="h-96 flex items-center justify-center bg-[#020617] text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 bg-[#020617] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-500 font-mono tracking-widest uppercase text-sm"
            >
              My Works
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
          <p className="text-gray-400 max-w-sm mt-2">
            A collection of projects where I've turned complex ideas into functional digital solutions.
          </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] uppercase tracking-wider bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                <Link 
                  to={`/My-Projects/${project.id}`} 
                  className="inline-flex items-center gap-2 text-white font-bold group/btn"
                >
                  View Details 
                  <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center group-hover/btn:translate-x-2 transition-transform">
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