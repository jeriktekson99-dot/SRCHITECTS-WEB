/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Hammer, Scale, ShieldAlert } from "lucide-react";
import { FEATURES_DATA } from "../data";

export default function WhyChooseUs() {
  const getFeatureIcon = (index: string, className: string) => {
    switch (index) {
      case "ENGINEERING_01":
        return <Scale className={className} />;
      case "ENGINEERING_02":
        return <ShieldAlert className={className} />;
      case "ENGINEERING_03":
        return <Hammer className={className} />;
      default:
        return <Scale className={className} />;
    }
  };

  return (
    <section id="standards" className="bg-[#FFFFFF] py-24 md:py-32 border-b border-[#E5E5E5] relative overflow-hidden">
      {/* Structural technical watermark on bottom-left background */}
      <div className="absolute -bottom-10 -left-10 text-zinc-100 font-display font-black text-7xl lg:text-9xl select-none select-none tracking-widest leading-none pointer-events-none uppercase">
        RIGID STRUCTURES
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Massive Bold Header Statement */}
          <motion.div
            id="standards-header-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8 sticky top-28"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                04 // Our Core Standards
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] leading-[0.95] tracking-tight uppercase">
                Built Different.
                <br />
                By Design<span className="text-[#EF4444]">.</span>
              </h2>
            </div>
            
            <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed font-medium">
              We reject the industry average. S.R.chitects operates on extreme architectural integration. We consolidate planning, modeling, and fabrication into a singular, highly coordinated master phase to ensure flawless structural deployment.
            </p>

            <div className="border border-[#E5E5E5] p-5 bg-[#F5F5F5]/50 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#111111] flex items-center justify-center text-white font-mono text-sm font-bold shrink-0">
                SR
              </div>
              <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest space-y-0.5">
                <div>SYSTEM REGISTER: ARCH-CLASS-3A</div>
                <div>ISO APPROVED TIMELINE CODE // METICULOUS</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three Stacked High-contrast Feature Rows */}
          <div id="standards-features-list" className="lg:col-span-7 divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
            {FEATURES_DATA.map((feature, idx) => (
              <motion.div
                id={`standards-feature-row-${feature.id}`}
                key={feature.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="py-10 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-6 md:gap-8 group"
              >
                {/* Feature Index / Icon Column */}
                <div className="flex items-center md:items-start justify-between md:justify-start gap-4 shrink-0">
                  <div className="w-12 h-12 bg-[#F5F5F5] group-hover:bg-[#EF4444] group-hover:text-white text-[#111111] transition-all duration-300 flex items-center justify-center border border-[#E5E5E5] group-hover:border-transparent">
                    {getFeatureIcon(feature.index, "w-5 h-5")}
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400 block md:hidden">
                    {feature.index}
                  </span>
                </div>

                {/* Content Column */}
                <div className="space-y-3 flex-1">
                  <div className="hidden md:flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#EF4444] tracking-wider">
                      {feature.index}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">STATUS // APPROVED</span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#EF4444] transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 font-sans text-sm leading-relaxed max-w-xl font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
