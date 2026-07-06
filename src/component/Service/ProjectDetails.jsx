import React, { useEffect, useRef } from "react";
import { useLoaderData, Link } from "react-router";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, Github, Layers, Sparkles } from "lucide-react";
import gsap from "gsap";

const ProjectDetails = () => {
  const project = useLoaderData();
  const heroCardRef = useRef(null);
  const bgGlowRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Premium UI Interaction: Interactive Mouse-Tracking Background Glow
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(bgGlowRef.current, {
        x: clientX - 250,
        y: clientY - 250,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    // Recruiter Eye-Catcher: Premium 3D Tilt Effect on Main Image Card
    const handleCardTilt = (e) => {
      const card = heroCardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(card, {
        rotationY: x * 0.05,
        rotationX: -y * 0.05,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power3.out"
      });
    };

    const resetCardTilt = () => {
      gsap.to(heroCardRef.current, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    const cardElement = heroCardRef.current;
    if (cardElement) {
      cardElement.addEventListener("mousemove", handleCardTilt);
      cardElement.addEventListener("mouseleave", resetCardTilt);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (cardElement) {
        cardElement.removeEventListener("mousemove", handleCardTilt);
        cardElement.removeEventListener("mouseleave", resetCardTilt);
      }
    };
  }, [project]);

  if (!project) {
    return (
      <div className="h-screen bg-white flex flex-col items-center justify-center text-slate-800 p-6">
        <h2 className="text-xl font-bold mb-4 text-rose-600">Project Not Found</h2>
        <Link to="/My-Projects" className="px-5 py-2 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    // State-of-the-art UI: Pure White with Tech Dot-Matrix Pattern & Dynamic Spotlight Glow
    <div className="min-h-screen bg-white text-slate-900 py-16 px-6 relative overflow-hidden selection:bg-blue-600/10">
      
      {/* Interactive Mesh/Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      
      {/* Dynamic GSAP Mouse Spotlight */}
      <div 
        ref={bgGlowRef} 
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10 transform translate-x-0 translate-y-0"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link
          to="/My-Projects"
          className="inline-flex items-center gap-2 text-slate-500 mb-8 hover:text-slate-900 font-medium transition text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Showcase
        </Link>

        {/* HERO HEADER & PRESENTATION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* LEFT: 3D HERO IMAGE WITH EMBEDDED SPARKS BADGE */}
          <div className="lg:col-span-7 w-full">
            <div
              ref={heroCardRef}
              className="rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.06)] group relative aspect-video will-change-transform"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                <Sparkles size={14} className="text-blue-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-slate-800">Production Ready</span>
              </div>
            </div>
          </div>

          {/* RIGHT: COMPACT META, TECH & LINKS */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text">
              {project.name}
            </h1>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* QUICK ACTIONS */}
            <div className="flex gap-3 flex-wrap mb-6">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 text-sm group"
              >
                Live Demo <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition shadow-sm text-sm"
              >
                <Github size={14} /> Repository
              </a>
            </div>

            {/* INTEGRATED TECH PIPELINE */}
            <div className="border border-slate-100 bg-slate-50/50 p-5 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers size={14} className="text-slate-500" /> Technology Infrastructure
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech?.map((t) => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 bg-white border border-slate-200/60 rounded-lg text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CORE CASE STUDY SECTIONS (CLEAN, NO CLUTTER) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
          
          {/* OVERVIEW */}
          <div className="bg-slate-50/30 border border-slate-100 p-6 rounded-2xl hover:border-slate-200 transition duration-300">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-2">
              01 / Architecture
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed whitespace-pre-line">
              {project.fullDesc || project.description}
            </p>
          </div>

          {/* CHALLENGES */}
          <div className="bg-slate-50/30 border border-slate-100 p-6 rounded-2xl hover:border-slate-200 transition duration-300">
            <h2 className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-2">
              02 / Engineering Bottlenecks
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed italic">
              {project.challenges || "Optimized structural architecture to bypass core runtime blockages successfully."}
            </p>
          </div>

          {/* ROADMAP */}
          <div className="bg-slate-50/30 border border-slate-100 p-6 rounded-2xl hover:border-slate-200 transition duration-300">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-600 mb-2">
              03 / Next Iteration
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed">
              {project.improvements || "Scaling system protocols and upgrading component processing loops."}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;