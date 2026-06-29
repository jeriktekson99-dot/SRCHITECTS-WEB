/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, PenTool, Cpu, Layers, Briefcase, Key, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES_DATA } from "../data";

export default function Services() {
  // Safe mapping of service icon strings to real Lucide Components
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case "Compass":
        return <Compass className={className} />;
      case "PenTool":
        return <PenTool className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "Layers":
        return <Layers className={className} />;
      case "Briefcase":
        return <Briefcase className={className} />;
      case "Key":
        return <Key className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="bg-[#FFFFFF] py-24 md:py-32 border-b border-[#E5E5E5] relative">
      {/* Decorative Blueprint Guide Grid Lines on Left Margins */}
      <div className="absolute top-12 left-6 md:left-12 font-mono text-[9px] text-zinc-400 select-none hidden lg:block tracking-widest leading-relaxed">
        <span>[CAPABILITY SPECS]</span>
        <br />
        <span>S.R.CHITECTS ENGINEERING GROUP</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div id="services-header" className="max-w-3xl mb-16 md:mb-24 space-y-6">
          <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
            02 // Deep Segment Capabilities
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight uppercase">
            Architectural Precision <span className="text-[#EF4444]">+</span> Heavy structural execution.
          </h2>
          <div className="w-16 h-1 bg-[#EF4444]" />
        </div>

        {/* 3x2 Grid of Minimalist Unshadowed Cards with structural Grey Borders */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#E5E5E5] bg-[#E5E5E5]/20">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              id={`service-card-${service.id}`}
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 border border-[#E5E5E5] flex flex-col justify-between group hover:border-[#EF4444] hover:bg-neutral-50/50 transition-all duration-300 min-h-[320px] relative overflow-hidden"
            >
              {/* Card Index / Number Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold text-zinc-400 group-hover:text-[#EF4444] transition-colors tracking-widest">
                  DEPT_INDEX // {service.index}
                </span>
                <span className="text-[10px] font-mono font-bold text-zinc-300 transition-colors uppercase">
                  ACTIVE
                </span>
              </div>

              {/* Icon & Title */}
              <div className="space-y-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F5F5F5] group-hover:bg-[#EF4444] group-hover:text-white text-[#111111] transition-all duration-300 border border-[#E5E5E5] group-hover:border-transparent">
                  {renderIcon(service.iconName, "w-6 h-6")}
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#EF4444] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-zinc-600 font-sans text-sm font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Subtle visual arrow footer */}
              <button
                id={`service-learn-btn-${service.id}`}
                onClick={handleScrollToContact}
                className="flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-[#EF4444] font-mono uppercase tracking-wider self-start cursor-pointer pt-4 mt-auto border-t border-transparent group-hover:border-[#E5E5E5] w-full transition-all duration-300"
              >
                Inquire Service
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
