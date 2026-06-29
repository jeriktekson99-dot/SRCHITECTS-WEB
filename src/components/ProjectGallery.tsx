/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowRight, Drill, Eye, Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Elite modern filtering system
  const categories = ["All", "Commercial High-Rise", "Bespoke Residence", "Industrial Center", "Cultural Landmark", "Corporate Atrium"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-white py-24 md:py-32 border-b border-[#E5E5E5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              03 // Concrete Portfolio
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight uppercase">
              Heavy Structural Showcases
            </h2>
            <div className="w-16 h-1 bg-[#EF4444]" />
          </div>
          
          {/* Active stats badge */}
          <div className="hidden lg:flex flex-col items-end text-right font-mono text-[10px] text-zinc-500">
            <span>REGISTERED CODES: SRC-05</span>
            <span>ALL BUILDS CLASSIFIED EXCELLENT // LEVEL-1</span>
          </div>
        </div>

        {/* Categories filtration tab */}
        <div id="category-scroller" className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#F5F5F5]">
          {categories.map((cat) => (
            <button
              id={`category-filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white text-zinc-500 border-[#E5E5E5] hover:text-[#111111] hover:border-[#111111]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Project Showcases Gallery Grid matching the asymmetrical 2x3 specification */}
        <motion.div
          id="project-showcase-grid"
          layout
          className="grid grid-cols-1 lg:grid-cols-6 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Decide columns based on isWide or filter layout
              const gridSpan = project.isWide ? "lg:col-span-3 h-[420px]" : "lg:col-span-2 h-[340px]";
              
              return (
                <motion.div
                  id={`project-card-${project.id}`}
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`${gridSpan} relative overflow-hidden group cursor-pointer border border-[#E5E5E5] bg-[#111111]`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Heavy Structural Cover Image */}
                  <img
                    id={`project-image-${project.id}`}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 transform scale-100 group-hover:scale-110 filter brightness-[0.8] group-hover:brightness-[0.4] saturate-[0.80] group-hover:saturate-100"
                    referrerPolicy="no-referrer"
                  />

                  {/* Corner Index Tag */}
                  <div className="absolute top-4 left-4 bg-[#111111]/80 backdrop-blur-sm px-3 py-1 border border-white/10 text-[9px] font-mono text-[#EF4444] uppercase tracking-widest z-20">
                    SRC-{idx + 1} // {project.year}
                  </div>

                  {/* Sleek Overlay Text Info & Indicators */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                  {/* Absolute Bottom Contents */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end h-full">
                    <span className="text-[10px] font-mono font-bold text-[#EF4444] uppercase tracking-[0.2em] mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-[#EF4444] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-400 mt-2 font-mono text-[10px] uppercase">
                      <MapPin className="w-3.5 h-3.5 text-[#EF4444]" />
                      <span>{project.location}</span>
                    </div>

                    {/* Revealable technical layout info on hover */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden pt-4 mt-2 border-t border-white/10">
                      <p className="text-[10px] font-mono text-zinc-300 leading-relaxed italic uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#EF4444] inline-block rounded-full animate-ping"></span>
                        Highlight: {project.structuralHighlight}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs font-mono text-[#EF4444] font-bold mt-3">
                        VIEW STRUCTURAL SPECS
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Minimalist Portfolio Quick Statistics Rule */}
        <div className="mt-12 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-400 font-mono text-[10px]">
          <span>TOTAL ESTIMATED STRUCTURES OVERSEEN: 142 globally</span>
          <span>COMPLETED ON-SCHED RATIO: 98.4%</span>
        </div>
      </div>

      {/* Modern Lightbox Modal to show Premium Project Specifications */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="specs-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              id="specs-lightbox-container"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white text-[#111111] max-w-5xl w-full border border-[#E5E5E5] overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="close-lightbox-btn"
                className="absolute top-4 right-4 bg-[#111111] text-white p-2.5 z-30 hover:bg-[#EF4444] transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                &times; Close Blueprint
              </button>

              {/* Specification Left: High-quality Image */}
              <div className="lg:col-span-7 h-[300px] lg:h-[500px] relative">
                <img
                  id="lightbox-project-pic"
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 border border-white/20 text-[10px] text-white font-mono uppercase tracking-widest flex items-center gap-2">
                  <Drill className="w-3.5 h-3.5 text-[#EF4444]" />
                  ACTIVE BUILDING METRICS
                </div>
              </div>

              {/* Specification Right: Deep Technical Details */}
              <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-6">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                      BUILD_CODE // SRC-{selectedProject.id}
                    </span>
                    <span className="text-xs font-mono font-black text-white bg-[#EF4444] px-2 py-0.5">
                      {selectedProject.year}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-3xl text-[#111111] uppercase tracking-tight leading-tight mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-xs uppercase mb-8">
                    <MapPin className="w-4 h-4 text-[#EF4444]" />
                    <span>{selectedProject.location}</span>
                  </div>

                  {/* Key technical details table */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs py-2 border-b border-[#F5F5F5] font-mono uppercase">
                      <span className="text-zinc-500">Asset Category:</span>
                      <span className="font-bold text-[#111111]">{selectedProject.category}</span>
                    </div>
                    <div className="flex justify-between text-xs py-2 border-b border-[#F5F5F5] font-mono uppercase">
                      <span className="text-zinc-500">Execution Timeline:</span>
                      <span className="font-bold text-[#111111]">11 Months (Completed)</span>
                    </div>
                    <div className="flex justify-between text-xs py-2 border-b border-[#F5F5F5] font-mono uppercase">
                      <span className="text-zinc-500">Seismic Load Grade:</span>
                      <span className="font-bold text-[#EF4444]">Zone-4 Extreme</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-[9px] font-mono font-bold text-[#EF4444] uppercase tracking-[0.2em] block mb-1">
                        Structural Innovation Highlights
                      </span>
                      <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                        {selectedProject.structuralHighlight} Integrated parameterized core beams with local aggregate concrete pour blocks to ensure grand safety.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    id="lightbox-cta-btn"
                    onClick={() => {
                      setSelectedProject(null);
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full bg-[#111111] hover:bg-[#EF4444] text-white py-4 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300"
                  >
                    Inquire Structural Blueprint &rarr;
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
