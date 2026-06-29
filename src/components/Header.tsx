/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  currentView: "home" | "about" | "services" | "portfolio" | "blog" | "quote";
  onToggleView: (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => void;
}

export default function Header({ currentView, onToggleView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scrolling to add subtle visual border and change opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", view: "home" as const, anchor: "overview" },
    { label: "About", view: "about" as const, anchor: "" },
    { label: "Services", view: "services" as const, anchor: "" },
    { label: "Portfolio", view: "portfolio" as const, anchor: "" },
    { label: "Blog", view: "blog" as const, anchor: "" }
  ];

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    view: "home" | "about" | "services" | "portfolio" | "blog" | "quote",
    anchor?: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    onToggleView(view, anchor);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#EF4444]/20 py-4"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo block */}
        <a
          id="logo-brand"
          href="#overview"
          onClick={(e) => handleItemClick(e, "home", "overview")}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-white group-hover:bg-[#EF4444] transition-colors duration-300 flex items-center justify-center relative overflow-hidden">
            <span className="font-display font-black text-lg text-[#111111] group-hover:text-white tracking-widest pl-0.5">
              SR
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl text-white leading-none tracking-tight">
              S.R.CHITECTS
            </span>
            <span className="text-[9px] font-mono font-medium text-[#EF4444] tracking-[0.2em] uppercase mt-0.5">
              Construction Corp.
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav id="desktop-navigation" className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              id={`nav-item-${item.label.toLowerCase()}`}
              key={item.label}
              href={item.view === "home" ? `#${item.anchor}` : "#about"}
              onClick={(e) => handleItemClick(e, item.view, item.anchor)}
              className={`text-xs font-mono font-medium uppercase tracking-wider hover:text-[#EF4444] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EF4444] hover:after:w-full after:transition-all after:duration-300 ${
                item.view === currentView
                  ? "text-[#EF4444]"
                  : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            id="nav-cta-button"
            href="#quote"
            onClick={(e) => handleItemClick(e, "quote")}
            className="group flex items-center gap-2 bg-white hover:bg-neutral-50 text-[#111111] border border-[#EF4444] px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 relative"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4 text-[#111111] group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-nav-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:text-[#EF4444] focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#111111] border-b border-[#EF4444]/20 shadow-xl py-6 px-8 flex flex-col gap-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item, idx) => (
                <a
                  id={`mobile-nav-item-${item.label.toLowerCase()}`}
                  key={item.label}
                  href={item.view === "home" ? `#${item.anchor}` : "#about"}
                  onClick={(e) => handleItemClick(e, item.view, item.anchor)}
                  className={`text-sm font-mono font-semibold uppercase tracking-wider hover:text-[#EF4444] transition-colors py-2 border-b border-zinc-800 ${
                    item.view === currentView ? "text-[#EF4444]" : "text-white"
                  }`}
                >
                  <span className="text-[10px] text-zinc-500 mr-2 font-mono">0{idx + 1}.</span>
                  {item.label}
                </a>
              ))}
            </div>
            <a
              id="mobile-nav-cta"
              href="#quote"
              onClick={(e) => handleItemClick(e, "quote")}
              className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#111111] border border-[#EF4444] py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 text-[#111111]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
