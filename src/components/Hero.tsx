/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Drill } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_INFO } from "../data";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center bg-[#111111] overflow-hidden pt-20"
    >
      {/* Heavy Industrial Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)] bg-[size:4rem_4rem] z-10" />

      {/* Cinematic Hero Image background */}
      <div className="absolute inset-0 select-none">
        <img
          id="hero-bg-image"
          src={BRAND_INFO.heroImage}
          alt="S.R.chitects Premium Concrete Headquarters"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110 saturate-[0.85]"
          referrerPolicy="no-referrer"
        />
        {/* Dark Industrial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]/40 z-10" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#111111]/50 to-transparent z-10 hidden lg:block" />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 py-20 w-full">
        <div className="max-w-4xl">
          {/* Engineering Badge */}
          <motion.div
            id="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#EF4444] text-white text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-6"
          >
            <Drill className="w-3.5 h-3.5" />
            Heavy Industrial Precision
          </motion.div>

          {/* Headline - Bold, heavy display typography */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.9] mb-8"
          >
            We Don't Just <span className="text-[#EF4444] block sm:inline">Build.</span>
            <br />
            We Craft Your <span className="text-[#EF4444]">Reality.</span>
          </motion.h1>

          {/* Subheading / Problem statement */}
          <div className="border-l-4 border-[#EF4444] pl-6 mb-12 max-w-2xl">
            <motion.p
              id="hero-subtext"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[#F5F5F5] font-sans font-medium leading-relaxed tracking-wide"
            >
              {BRAND_INFO.heroSubheading}
            </motion.p>
          </div>

          {/* CTA Group */}
          <motion.div
            id="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <button
              id="hero-primary-cta"
              onClick={() => handleScrollTo("portfolio")}
              className="group flex items-center justify-center gap-3 bg-[#EF4444] hover:bg-white text-white hover:text-[#111111] px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 relative border border-[#EF4444]"
            >
              Examine Our Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              id="hero-secondary-cta"
              onClick={() => handleScrollTo("contact")}
              className="group flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-white px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 border border-white/20 hover:border-white"
            >
              Consulting Brief
              <span className="text-[#EF4444] group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blueprint Corner Line */}
      <div className="absolute bottom-12 right-12 z-20 hidden xl:flex flex-col items-end text-right font-mono text-[10px] text-zinc-500 pointer-events-none">
        <span>COORDINATES: 14&deg;35'N 120&deg;58'E</span>
        <span>VERIFIED DESIGN SYSTEM // RUGGED V.1</span>
      </div>
    </section>
  );
}
