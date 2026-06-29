/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Drill } from "lucide-react";

interface FooterProps {
  onToggleView: (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => void;
}

export default function Footer({ onToggleView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onToggleView("home");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="main-footer" className="bg-[#111111] text-zinc-500 py-16 md:py-24 border-t border-zinc-850 relative overflow-hidden">
      {/* Heavy industrial grid backdrop in dark theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444402_1px,transparent_1px),linear-gradient(to_bottom,#ef444402_1px,transparent_1px)] bg-[size:3rem_3rem] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-zinc-800">
          
          {/* Column 1: Brand descriptor */}
          <div className="lg:col-span-4 space-y-6">
            <a
              id="footer-logo"
              href="#overview"
              onClick={handleScrollToTop}
              className="flex items-center gap-3 group inline-block"
            >
              <div className="w-9 h-9 bg-white text-[#111111] group-hover:bg-[#EF4444] group-hover:text-white transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                <span className="font-display font-black text-base tracking-widest pl-0.5">
                  SR
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg text-white leading-none tracking-tight">
                  S.R.CHITECTS
                </span>
                <span className="text-[8px] font-mono font-medium text-[#EF4444] tracking-[0.25em] uppercase mt-0.5">
                  Construction Corp.
                </span>
              </div>
            </a>

            <p className="text-zinc-400 font-sans text-xs md:text-sm leading-relaxed max-w-sm">
              S.R.chitects Construction Corporation specializes in elite modern structural integration, bridging custom conceptual architecture directly with high-performance on-site concrete and steel fabrication.
            </p>

            <div className="flex items-center gap-2 text-[10px] font-mono text-[#EF4444] font-black uppercase">
              <Drill className="w-3.5 h-3.5 animate-pulse" />
              <span>Rigid Engineering // Level-1 Registered</span>
            </div>
          </div>

          {/* Column 2: Interactive Navigation Portal */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest">
              Company Portal
            </h4>
            <ul id="footer-navigation-list" className="space-y-2.5 text-xs font-mono font-bold text-zinc-400">
              <li>
                <button 
                  onClick={() => onToggleView("home")}
                  className="hover:text-white hover:underline transition-colors uppercase cursor-pointer flex items-center gap-2"
                >
                  <span className="text-[#EF4444] text-[9px] font-bold">01.</span> Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onToggleView("about")}
                  className="hover:text-white hover:underline transition-colors uppercase cursor-pointer flex items-center gap-2"
                >
                  <span className="text-[#EF4444] text-[9px] font-bold">02.</span> Strategic About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onToggleView("services")}
                  className="hover:text-white hover:underline transition-colors uppercase cursor-pointer flex items-center gap-2"
                >
                  <span className="text-[#EF4444] text-[9px] font-bold">03.</span> Core Capabilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onToggleView("portfolio")}
                  className="hover:text-white hover:underline transition-colors uppercase cursor-pointer flex items-center gap-2"
                >
                  <span className="text-[#EF4444] text-[9px] font-bold">04.</span> Built Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onToggleView("blog")}
                  className="hover:text-white hover:underline transition-colors uppercase cursor-pointer flex items-center gap-2"
                >
                  <span className="text-[#EF4444] text-[9px] font-bold">05.</span> Corporate Insights
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onToggleView("quote")}
                  className="text-white hover:text-[#EF4444] hover:underline transition-all uppercase cursor-pointer flex items-center gap-2"
                >
                  <span className="text-[#EF4444] text-[9px] font-bold">06.</span> Request Estimate / FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Registry Directory */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest">
              Capabilities
            </h4>
            <ul id="footer-capabilities-list" className="space-y-2 text-xs font-sans font-medium text-zinc-400">
              <li><span className="text-[#EF4444] font-mono mr-1.5">&#9642;</span>Planning</li>
              <li><span className="text-[#EF4444] font-mono mr-1.5">&#9642;</span>Design</li>
              <li><span className="text-[#EF4444] font-mono mr-1.5">&#9642;</span>Concrete Pouring</li>
              <li><span className="text-[#EF4444] font-mono mr-1.5">&#9642;</span>Structural Steel</li>
              <li><span className="text-[#EF4444] font-mono mr-1.5">&#9642;</span>Glazing Systems</li>
            </ul>
          </div>

          {/* Column 4: Standards and Compliance codes */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest">
              Regulatory compliance
            </h4>
            <div id="footer-regulatory-block" className="space-y-3 font-mono text-[10px] bg-zinc-950 border border-zinc-800 p-4">
              <div className="flex justify-between border-b border-zinc-800 pb-1 text-zinc-500">
                <span>SEC REGISTRY NO:</span>
                <span className="text-zinc-300">CS202685741</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-1 text-zinc-500">
                <span>PCAB LICENSE NO:</span>
                <span className="text-zinc-300">95847 (Category AAA)</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>STRUCTURAL CLASS:</span>
                <span className="text-[#EF4444]">Unrestricted Heavy Civil</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footnotes */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 font-mono text-[9px] uppercase tracking-wider">
          <div>
            &copy; {currentYear} S.R.chitects Construction Corporation. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-[#EF4444] transition-colors cursor-pointer">Security Safeguards</span>
            <span className="hover:text-[#EF4444] transition-colors cursor-pointer">PCAB Registration Specs</span>
            <span className="hover:text-[#EF4444] transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Top &uarr;</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
