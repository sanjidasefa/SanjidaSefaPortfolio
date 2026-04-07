import React from "react";
import { useLoaderData, Link } from "react-router";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowLeft,
  Terminal,
  Lightbulb,
  Wrench,
  CheckCircle,
  Github,
} from "lucide-react";

const ProjectDetails = () => {
  const project = useLoaderData();

  if (!project) {
    return (
      <div className="h-screen bg-[#020617] flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4 text-red-500">
          Project Data Not Found!
        </h2>
        <Link
          to="/My-Projects"
          className="px-6 py-2 bg-blue-600 rounded-lg"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#020617] text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* BACK BUTTON */}
        <Link
          to="/My-Projects"
          className="inline-flex items-center gap-2 text-blue-400 mb-10 hover:text-blue-300 transition"
        >
          <ArrowLeft size={20} /> Back to Works
        </Link>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden border border-slate-800 relative group"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
          </motion.div>

          {/* INFO */}
          <div>
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              {project.name}
            </h1>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-6 text-blue-400">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-blue-500/30 px-3 py-1 rounded-full bg-blue-500/5 hover:bg-blue-500/20 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <p className="text-gray-400 text-lg mb-8 italic leading-relaxed">
              "{project.description}"
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">
              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
              >
                <ExternalLink size={18} /> Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-xl font-bold hover:bg-slate-700 transition"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-10">

            {/* DESCRIPTION */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="text-blue-500" /> Description
              </h2>
              <p className="text-gray-400 leading-relaxed text-justify">
                {project.fullDesc}
              </p>
            </motion.section>

            {/* CHALLENGES */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-red-500/5 border border-red-500/10 p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
                <Wrench size={20} /> Challenges Faced
              </h2>
              <p className="text-gray-300 italic leading-relaxed">
                "{project.challenges}"
              </p>
            </motion.section>

            {/* IMPROVEMENTS */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-green-500/5 border border-green-500/10 p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-500 flex items-center gap-2">
                <Lightbulb size={20} /> Future Improvements
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.improvements}
              </p>
            </motion.section>
          </div>

          {/* SIDEBAR */}
          <aside className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl h-fit sticky top-24">
            <h3 className="text-xl font-bold mb-6 border-b border-slate-800 pb-4">
              Technologies
            </h3>

            <ul className="space-y-4">
              {project.tech?.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition"
                >
                  <CheckCircle size={14} className="text-blue-500" /> {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;