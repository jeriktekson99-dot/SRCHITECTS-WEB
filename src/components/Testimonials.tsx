/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F5F5F5]/30 py-24 md:py-32 border-b border-[#E5E5E5] relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 space-y-6">
          <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
            05 // Client Testimonials
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight uppercase">
            Proven On-Site. Endorsed Overall.
          </h2>
          <div className="w-16 h-1 bg-[#EF4444]" />
        </div>

        {/* 3-card layout grid */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              id={`testimonial-card-${t.id}`}
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#FFFFFF] p-8 md:p-10 border border-[#E5E5E5] flex flex-col justify-between relative relative group hover:border-[#EF4444] transition-all duration-300"
            >
              {/* Massive Decorative Heavy Quote Accent */}
              <div className="absolute top-4 right-6 text-zinc-100 font-display font-black text-7xl select-none select-none tracking-tight leading-none pointer-events-none group-hover:text-red-50/50 transition-colors">
                &ldquo;
              </div>

              {/* Star Rating Graphic Component at top of each card */}
              <div className="space-y-6 relative z-10">
                <div id={`testimonial-rating-${t.id}`} className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4.5 h-4.5 fill-[#EF4444] text-[#EF4444]"
                    />
                  ))}
                </div>

                {/* Body Content */}
                <p className="text-zinc-700 italic font-medium leading-relaxed tracking-wide text-sm sm:text-base">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Identity Block at bottom info */}
              <div className="pt-8 mt-8 border-t border-[#F5F5F5] flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F5F5F5] group-hover:bg-[#EF4444]/10 flex items-center justify-center text-[#111111] transition-colors duration-300">
                  <MessageSquare className="w-4 h-4 text-zinc-500 group-hover:text-[#EF4444] transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#111111] uppercase tracking-wide">
                    {t.author}
                  </h4>
                  <p className="text-[10px] font-mono font-medium text-zinc-500 uppercase tracking-widest mt-0.5">
                    {t.role} // {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
