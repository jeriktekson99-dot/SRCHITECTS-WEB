/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BRAND_INFO } from "../data";

export default function Solution() {
  return (
    <section id="solution" className="bg-white py-24 md:py-32 overflow-hidden border-b border-[#E5E5E5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: High-contrast Text Block */}
          <motion.div
            id="solution-text-block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                01 // Dynamic Solutions
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight uppercase">
                {BRAND_INFO.solutionHeading}
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-zinc-700 font-sans font-medium leading-relaxed tracking-wide">
              {BRAND_INFO.solutionBody}
            </p>
            
            <div className="pt-4 border-t border-[#E5E5E5] grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <span className="font-display font-black text-2xl text-[#111111] block">
                  &plus;0.00mm
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mt-1">
                  Draft Tolerance
                </span>
              </div>
              <div>
                <span className="font-display font-black text-2xl text-[#EF4444] block">
                  100%
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mt-1">
                  Feasibility Ratio
                </span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="font-display font-black text-2xl text-[#111111] block">
                  C60 Grade
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mt-1">
                  Average Strength
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Crisp Minimalist Geometric Sketch Frame */}
          <motion.div
            id="solution-graphic-frame"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square bg-[#F5F5F5] border border-[#E5E5E5] p-6 md:p-8 flex items-center justify-center group">
              {/* Outer Alignment Markings (Simulated drafting limits) */}
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#EF4444]" />
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-[#EF4444]" />
              <div className="absolute top-0 right-0 w-4 h-[1px] bg-[#EF4444]" />
              <div className="absolute top-0 right-0 w-[1px] h-4 bg-[#EF4444]" />
              <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-[#EF4444]" />
              <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-[#EF4444]" />
              <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#EF4444]" />
              <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-[#EF4444]" />

              {/* High-quality Asset Visual with industrial lines overlay */}
              <div className="relative w-full h-full overflow-hidden border border-[#E5E5E5]">
                <img
                  id="solution-blueprint-sketch"
                  src={BRAND_INFO.solutionImage}
                  alt="S.R.chitects Geometric Architectural Drafting Sketch"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Overlay with technical dimensions */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/30 to-transparent pointer-events-none" />
                
                {/* Horizontal Level Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#EF4444]/30 border-dashed border-t border-[#EF4444]/50 flex items-center justify-between px-4 text-[9px] font-mono text-[#EF4444]/80 select-none">
                  <span>LATERAL BALANCING ZONE</span>
                  <span>Z-AXIS // 100% SECURE</span>
                </div>
              </div>

              {/* Floating Architectural Index tag */}
              <div className="absolute -bottom-4 right-10 bg-[#111111] text-white text-[10px] font-mono tracking-widest px-4 py-2 flex items-center gap-2 border border-[#E5E5E5]">
                <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse"></span>
                SPEC_DRAFT_2026.DXF
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
