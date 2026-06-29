/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  MapPin, 
  ChevronDown, 
  X, 
  ShieldCheck, 
  Flame, 
  Award, 
  CheckSquare, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Search,
  CheckCircle2,
  Lock
} from "lucide-react";
import ProjectDetailsView from "./ProjectDetailsView";

interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
  year: string;
  structuralHighlight: string;
  specs: string[];
  materials: { item: string; ratio: string }[];
}

interface PortfolioViewProps {
  onToggleView: (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => void;
}

export default function PortfolioView({ onToggleView }: PortfolioViewProps) {
  // 8 Prominent Project Showcase Cards aligning with the industrial aesthetics
  const allProjects: PortfolioProject[] = [
    {
      id: "proj-1",
      title: "The Apex Tower Brutalist Complex",
      location: "Metropolitan District, Manila",
      imageUrl: "/src/assets/images/apex_tower_1780842026378.png",
      category: "Commercial High-Rise",
      year: "2025",
      structuralHighlight: "Reinforced load-bearing concrete cores & wind-resistant structural glazing design.",
      specs: ["Height: 182 meters", "Total Floors: 45 storeys", "Seismic Shear Rating: Zone-4", "Wind Tolerancy: 280 km/h"],
      materials: [
        { item: "High-Tensile Steel framing", ratio: "4,200 metric tons" },
        { item: "Proprietary C60 Concrete Aggregate", ratio: "64,000 cu.m" },
        { item: "Dual-Chamber Reinforced Glazing", ratio: "12,500 sq.m" }
      ]
    },
    {
      id: "proj-2",
      title: "The Cantilever Ridge House",
      location: "Tagaytay Ridge, Cavite",
      imageUrl: "/src/assets/images/cantilever_house_1780842043269.png",
      category: "Bespoke Residence",
      year: "2026",
      structuralHighlight: "12-meter reinforced concrete cantilever suspended over architectural valley.",
      specs: ["Footprint Area: 750 sqm", "Overhang Extension: 12 meters", "Equilibrium Index: Perfect Delta-0.01", "Foundation: Rock Anchor Grouting"],
      materials: [
        { item: "High-Density Carbon Polymer Bars", ratio: "120 metric tons" },
        { item: "Polished Pine-textured Concrete", ratio: "820 cu.m" },
        { item: "Low-E Thermal Glazing Panels", ratio: "420 sq.m" }
      ]
    },
    {
      id: "proj-3",
      title: "Steel Nexus Industrial Hub",
      location: "Imus, Cavite",
      imageUrl: "/src/assets/images/steel_nexus_1780842062992.png",
      category: "Industrial Center",
      year: "2024",
      structuralHighlight: "High-tensile structural bolted steel trusses with raw iron connection plates.",
      specs: ["Span Length: 120 meters (columnless)", "Internal Height: 18 meters", "Floor Vibrancy dampener: Yes", "Live Load Capacity: 30 kN/sqm"],
      materials: [
        { item: "Grade-50 Bolted Truss Assemblies", ratio: "2,850 metric tons" },
        { item: "Fibre-Reinforced Floor Slab C35", ratio: "18,200 cu.m" },
        { item: "Corrugated Galvanized Cladding", ratio: "22,000 sq.m" }
      ]
    },
    {
      id: "proj-4",
      title: "The Brutalist Cultural Pavilion",
      location: "Delta Sector, Laguna",
      imageUrl: "/src/assets/images/concrete_pavilion_1780842081905.png",
      category: "Cultural Landmark",
      year: "2025",
      structuralHighlight: "Polished raw aggregate concrete walls with double-glazed continuous slit windows.",
      specs: ["Exhibits Capacity: 1,200 people", "Natural Drifting Vent System: Integrated", "Concrete Finish: Acid-etched raw matte", "Solar Gain Factor: 0.18"],
      materials: [
        { item: "Eco-Cement (Carbon-Capture Aggregate)", ratio: "8,400 cu.m" },
        { item: "Architectural Raw Wood Forms", ratio: "1,500 reusable slabs" },
        { item: "Custom Cast Terrazzo blocks", ratio: "950 units" }
      ]
    },
    {
      id: "proj-5",
      title: "High-Tech Industrial Manufacturing Hub",
      location: "Laguna Technopark, Laguna",
      imageUrl: "/src/assets/images/industrial_facility_1780843787140.png",
      category: "Industrial Center",
      year: "2025",
      structuralHighlight: "Clean white & dark grey architectural panelling with sharp red steel highlights.",
      specs: ["Total Area: 3.2 Hectares", "Heavy Machinery Anchors: Yes", "Isolation Joints: Laser alignment", "Power Grid Interface: Dual Loop redundant"],
      materials: [
        { item: "Pre-Insulated Composite Panels", ratio: "32,000 sq.m" },
        { item: "Structural Columns Concrete Jacketing", ratio: "3,100 cu.m" },
        { item: "Galvanized High-Load Gantry tracks", ratio: "4.2 kilometers" }
      ]
    },
    {
      id: "proj-6",
      title: "Polished Terrazzo Interior Complex",
      location: "Ayala Alabang, Metro Manila",
      imageUrl: "/src/assets/images/interior_design_1780843766875.png",
      category: "Bespoke Residence",
      year: "2026",
      structuralHighlight: "Minimalist concrete stairs, flush lighting, and handcrafted terrazzo columns.",
      specs: ["Interiors Area: 620 sqm", "Stairway: Floating structural cantilevers", "Acoustics Coefficient: 0.22 NCR", "Built-ins: Architectural black steel"],
      materials: [
        { item: "Handcrafted Terrazzo aggregations", ratio: "180 metric tons" },
        { item: "Minimalist Black Raw Steel framing", ratio: "45 metric tons" },
        { item: "Integrated Acoustic backplates", ratio: "280 sheets" }
      ]
    },
    {
      id: "proj-7",
      title: "Seismic-Isolated Glazed Atrium Office",
      location: "Ortigas Center, Manila",
      imageUrl: "/src/assets/images/column_atrium_1780842124958.png",
      category: "Commercial High-Rise",
      year: "2026",
      structuralHighlight: "Continuous structural steel frame with foundational rubber seismic-isolation caster blocks.",
      specs: ["Lobby Height: 24 meters", "Seismic Dampening ratio: 35%", "Visual Steel Columns: Acid-treated matte finish", "Cladding: Fire-rated aluminum sheets"],
      materials: [
        { item: "Heavy Solid-Core Steel column nodes", ratio: "980 metric tons" },
        { item: "Laminated High-Security Glazing", ratio: "5,800 sq.m" },
        { item: "Architectural Brushed Aluminum", ratio: "4,600 sq.m" }
      ]
    },
    {
      id: "proj-8",
      title: "Parametric Blueprint Headquarters",
      location: "BGC Twin Districts, Manila",
      imageUrl: "/src/assets/images/values_blueprint_1780843126852.png",
      category: "Commercial High-Rise",
      year: "2025",
      structuralHighlight: "Geometric concrete spatial coordinates paired with heavy steel bracing sleeves.",
      specs: ["Design Precision Matrix: Clash-checked BIM Level-3", "Site Coordinates Tolerance: ±2 millimeters", "Fire Retardant Rating: 4-Hour envelope", "Smart Telemetry Sensors: 154 active nodes"],
      materials: [
        { item: "High-Tensile Steel framing", ratio: "1,250 metric tons" },
        { item: "Proprietary Self-Healing Concrete mix", ratio: "4,500 cu.m" },
        { item: "Embedded fiber-optic data channels", ratio: "12.8 kilometers" }
      ]
    }
  ];

  // Carousel data matching the "Related Articles" template layout (Featured projects)
  const carouselProjects = [
    { name: "The Apex Tower Brutalist Complex", category: "Commercial High-Rise", location: "Global City Manila", year: "2025", img: "/src/assets/images/apex_tower_1780842026378.png" },
    { name: "The Cantilever Ridge House", category: "Bespoke Residence", location: "Tagaytay Ridge", year: "2026", img: "/src/assets/images/cantilever_house_1780842043269.png" },
    { name: "High-Tech Industrial Manufacturing Hub", category: "Industrial Center", location: "Laguna Technopark", year: "2025", img: "/src/assets/images/industrial_facility_1780843787140.png" },
    { name: "The Brutalist Cultural Pavilion", category: "Cultural Landmark", location: "Delta Sector, Laguna", year: "2025", img: "/src/assets/images/concrete_pavilion_1780842081905.png" }
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % (carouselProjects.length - 2)); // Show 3 projects at once on grid, or step by step
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + (carouselProjects.length - 2)) % (carouselProjects.length - 2));
  };


  // Interactive filter states
  const [selectedType, setSelectedType] = useState("All Project Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const [selectedProjectSpec, setSelectedProjectSpec] = useState<PortfolioProject | null>(null);

  // Dynamic filter dropdown options
  const filterTypes = ["All Project Types", "Commercial High-Rise", "Bespoke Residence", "Industrial Center", "Cultural Landmark"];
  const filterLocations = ["All Locations", "Manila", "Cavite", "Laguna"];

  // Filter Logic:
  const filteredProjects = allProjects.filter((p) => {
    const matchType = selectedType === "All Project Types" || p.category === selectedType;
    const matchLocation = selectedLocation === "All Locations" || p.location.includes(selectedLocation);
    return matchType && matchLocation;
  });

  if (selectedProjectSpec) {
    return (
      <ProjectDetailsView 
        project={selectedProjectSpec} 
        onBack={() => setSelectedProjectSpec(null)} 
        onToggleView={onToggleView} 
      />
    );
  }

  return (
    <div id="portfolio-page-layout" className="bg-[#FFFFFF]">
      
      {/* 1. PORTFOLIO HERO SECTION */}
      <section id="portfolio-hero-section" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#111111] overflow-hidden flex items-center border-b border-[#EF4444]">
        {/* Full-bleed background with a dark industrial overlay */}
        <div className="absolute inset-0 z-0">
          <img
            id="portfolio-hero-bg-img"
            src="/src/assets/images/steel_nexus_1780842062992.png"
            alt="Full-bleed architectural structural steel background"
            className="w-full h-full object-cover filter brightness-[0.35] saturate-[0.60]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111]/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              S.R.CHITECTS DESIGN-BUILD // COMPREHENSIVE PORTFOLIO
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] tracking-tight uppercase">
              We Don't Just Build.<br />We <span className="text-[#EF4444]">Craft Your Reality</span>.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-sans leading-relaxed font-semibold max-w-2xl">
              Explore our blueprint of execution—where high-end architectural vision meets uncompromising structural engineering.
            </p>
            
            <div className="pt-2">
              <button
                id="portfolio-down-btn"
                onClick={() => {
                  const target = document.getElementById("portfolio-filter-intro");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-[#EF4444] hover:bg-white hover:text-[#111111] text-white px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer"
              >
                Inspect Built Assets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO FILTER & INTRO INTERFACE */}
      <section id="portfolio-filter-intro" className="py-20 bg-[#FFFFFF] border-b border-[#E5E5E5] scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            
            {/* Left structural intro copy */}
            <div className="max-w-2xl space-y-4">
              <span className="text-[10.5px] uppercase font-mono font-bold text-[#111111] tracking-[0.3em] block">
                WHAT WE BUILD // COMPLEMENTARY REGISTRY
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight uppercase">
                Building the future of the construction industry, one project at a time.
              </h2>
              <div className="w-16 h-1 bg-[#EF4444]" />
            </div>

            {/* Right filter dropdowns wrapper */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative">
              
              {/* Type Category Dropdown */}
              <div className="relative w-full sm:w-64 z-40">
                <button
                  id="dropdown-type-btn"
                  onClick={() => {
                    setShowTypeDropdown(!showTypeDropdown);
                    setShowLocationDropdown(false);
                  }}
                  className="w-full bg-[#FFFFFF] border border-[#111111] flex items-center justify-between p-4 text-xs font-mono font-bold uppercase tracking-wider text-[#111111] transition-colors hover:bg-neutral-50 cursor-pointer"
                >
                  <span>{selectedType}</span>
                  <div className="bg-[#111111] text-white p-1.5 shrink-0 -mr-2">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showTypeDropdown ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Dropdown Options List */}
                <AnimatePresence>
                  {showTypeDropdown && (
                    <motion.div
                      id="dropdown-type-list"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute left-0 right-0 mt-1 bg-white border-2 border-[#111111] z-50 text-[11px] font-mono shadow-2xl"
                    >
                      {filterTypes.map((tOpt) => (
                        <button
                          key={tOpt}
                          onClick={() => {
                            setSelectedType(tOpt);
                            setShowTypeDropdown(false);
                          }}
                          className={`w-full text-left p-3.5 uppercase font-bold tracking-wider hover:bg-[#EF4444] hover:text-white border-b border-[#F5F5F5] last:border-0 block transition-colors ${
                            selectedType === tOpt ? "bg-zinc-50 text-[#EF4444]" : "text-[#111111]"
                          }`}
                        >
                          {tOpt}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Location Select Dropdown */}
              <div className="relative w-full sm:w-64 z-30">
                <button
                  id="dropdown-location-btn"
                  onClick={() => {
                    setShowLocationDropdown(!showLocationDropdown);
                    setShowTypeDropdown(false);
                  }}
                  className="w-full bg-[#FFFFFF] border border-[#111111] flex items-center justify-between p-4 text-xs font-mono font-bold uppercase tracking-wider text-[#111111] transition-colors hover:bg-neutral-50 cursor-pointer"
                >
                  <span>{selectedLocation}</span>
                  <div className="bg-[#111111] text-white p-1.5 shrink-0 -mr-2">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showLocationDropdown ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Dropdown Options List */}
                <AnimatePresence>
                  {showLocationDropdown && (
                    <motion.div
                      id="dropdown-location-list"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute left-0 right-0 mt-1 bg-white border-2 border-[#111111] z-50 text-[11px] font-mono shadow-2xl"
                    >
                      {filterLocations.map((lOpt) => (
                        <button
                          key={lOpt}
                          onClick={() => {
                            setSelectedLocation(lOpt);
                            setShowLocationDropdown(false);
                          }}
                          className={`w-full text-left p-3.5 uppercase font-bold tracking-wider hover:bg-[#EF4444] hover:text-white border-b border-[#F5F5F5] last:border-0 block transition-colors ${
                            selectedLocation === lOpt ? "bg-zinc-50 text-[#EF4444]" : "text-[#111111]"
                          }`}
                        >
                          {lOpt}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* Real-time filters readout badge */}
          <div className="mt-8 flex items-center gap-3 text-xs font-mono text-zinc-500">
            <span className="w-2 h-2 bg-[#EF4444] animate-pulse rounded-full" />
            <span>Showcasing {filteredProjects.length} of {allProjects.length} Classified Corporate Assets</span>
            {(selectedType !== "All Project Types" || selectedLocation !== "All Locations") && (
              <button
                id="clear-portfolio-filters-btn"
                onClick={() => {
                  setSelectedType("All Project Types");
                  setSelectedLocation("All Locations");
                }}
                className="text-[#EF4444] hover:underline font-bold uppercase transition-all tracking-wider text-[10px]"
              >
                [ Clear Filters ]
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 3. PROJECT SHOWCASE MATRIX (2-Column Grid) */}
      <section id="portfolio-grid-matrix" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, idx) => (
                <motion.article
                  id={`portfolio-showcase-card-${p.id}`}
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white border-2 border-[#111111] flex flex-col justify-between hover:border-[#EF4444] hover:shadow-2xl transition-all duration-300 relative group cursor-pointer"
                  onClick={() => setSelectedProjectSpec(p)}
                >
                  {/* Floating index reference */}
                  <div className="absolute top-3 left-3 bg-[#111111] px-3 py-1 border border-white/10 z-20 text-[9px] font-mono font-bold text-white uppercase tracking-widest">
                    SRC-CH-{p.id.replace("proj-", "0")}
                  </div>

                  {/* Top: Image Aspect ratio window */}
                  <div className="relative w-full h-[320px] sm:h-[380px] bg-[#F5F5F5] overflow-hidden border-b-2 border-[#111111]">
                    <img
                      id={`portfolio-rect-img-${p.id}`}
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover filter brightness-[0.75] saturate-50 group-hover:scale-105 group-hover:saturate-100 group-hover:brightness-50 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Architectural coordinates overlay on image hover */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 font-mono text-[9px] text-[#EF4444] font-extrabold text-right">
                      <div className="space-y-1">
                        <div>LATITUDE: 14.3292° N</div>
                        <div>LONGITUDE: 120.9412° E</div>
                        <div>GRADE: HIGH-STRESS STEEL</div>
                      </div>
                      <div className="space-y-0.5 bg-neutral-900/90 text-white p-3 border border-zinc-800 text-left w-full sm:w-auto">
                        <span className="text-[#EF4444] block font-black text-[8px] tracking-wider uppercase mb-1">INNOVATION TARGETS:</span>
                        <p className="font-sans text-[11px] font-bold text-zinc-300 leading-normal">{p.structuralHighlight}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Card Footer block layout bar */}
                  <div className="bg-[#FFFFFF] p-8 flex justify-between items-center gap-6 group-hover:bg-[#111111] transition-colors duration-300">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#EF4444] uppercase tracking-widest block">
                        {p.category.toUpperCase()} // REGISTRY {p.year}
                      </span>
                      <h3 className="font-display font-black text-xl text-[#111111] group-hover:text-white uppercase tracking-tight leading-none transition-colors">
                        {p.title}
                      </h3>
                      <div className="flex items-center gap-2 text-zinc-400 mt-1 font-mono text-[9px] uppercase font-bold">
                        <MapPin className="w-3.5 h-3.5 text-[#EF4444]" />
                        <span>{p.location}</span>
                      </div>
                    </div>

                    <div className="shrink-0 bg-[#F5F5F5] group-hover:bg-[#EF4444] text-[#111111] group-hover:text-white p-4 border border-[#111111] transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>

                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div id="portfolio-no-results" className="text-center py-24 border-2 border-dashed border-[#E5E5E5] space-y-4">
              <Lock className="w-10 h-10 text-zinc-300 mx-auto" />
              <h3 className="font-display font-bold text-lg text-zinc-800 uppercase tracking-tight">No Matching Classified Assets</h3>
              <p className="text-zinc-500 font-sans text-xs max-w-sm mx-auto font-semibold">
                Adjust your type category or geographic coordinates dropdown selections above to query our structural blueprints archive.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* 4. QUALITY & STRUCTURAL INTEGRITY STANDARDS (Layout Row 4) */}
      <section id="portfolio-standards-section" className="py-24 bg-[#111111] text-white border-t border-b border-[#EF4444]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Detailed breakdown */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                  04 // QA MATRIX & STRUCTURAL AUDITS
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase leading-none tracking-tight">
                  Uncompromised Integrity Standards
                </h2>
                <div className="w-16 h-1 bg-[#EF4444]" />
              </div>

              <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed font-semibold max-w-xl">
                S.R.chitects guarantees the performance of every footprint coordinate through structured physical stress simulation. We reject standard broker shortcuts and mandate direct supplier-depot verification invoices inside our public ledger database:
              </p>

              {/* Data checklist matrix splits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#EF4444]" />
                    <h4 className="font-mono text-xs font-black text-white uppercase tracking-wider">Independent Core Crushing</h4>
                  </div>
                  <p className="text-zinc-500 font-sans text-xs leading-relaxed font-semibold pl-7">
                    Concrete core castings undergo rigorous compression crushing tests at continuous 7, 14, and 28-day intervals.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#EF4444]" />
                    <h4 className="font-mono text-xs font-black text-white uppercase tracking-wider">Ultrasonic Weld Inspection</h4>
                  </div>
                  <p className="text-zinc-500 font-sans text-xs leading-relaxed font-semibold pl-7">
                    Every frame joint and steel splice is scanned via ultrasonic sound telemetry to verify zero internal faults.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#EF4444]" />
                    <h4 className="font-mono text-xs font-black text-white uppercase tracking-wider">Seismic Shear Alignment</h4>
                  </div>
                  <p className="text-zinc-500 font-sans text-xs leading-relaxed font-semibold pl-7">
                    Structural designs are verified virtually under Level 8 lateral force stress configurations.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#EF4444]" />
                    <h4 className="font-mono text-xs font-black text-white uppercase tracking-wider">LIDAR Coordinate Verifier</h4>
                  </div>
                  <p className="text-zinc-500 font-sans text-xs leading-relaxed font-semibold pl-7">
                    Site columns are scanned relative to BIM blueprints on a daily operational routing matrix to prevent drift.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Column: Flat graphic placeholder framing an onsite execution photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square bg-zinc-950 border border-zinc-800 p-4">
                <div className="absolute top-2 left-2 text-[#EF4444] font-mono text-[8px] uppercase tracking-[0.2.em] z-10">
                  REAL-TIME ON-SITE EXECUTION REPORT
                </div>

                <div className="relative w-full h-full overflow-hidden border border-zinc-800">
                  <img
                    id="onsite-standards-execution-photo"
                    src="/src/assets/images/about_how_we_build_1780843092581.png"
                    alt="S.R.chitects site inspection action"
                    className="w-full h-full object-cover filter grayscale contrast-125"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/90 border border-zinc-800 p-4 text-[10px] font-mono text-zinc-400">
                    <span className="text-[#EF4444] font-black uppercase text-[8px] block mb-1">AUDITED COORDINATES:</span>
                    <span>CO-EXEC_MANDATE_0039 // MUNICIPAL COMPLIANT PROOFING</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FEATURED PROJECTS (Layout Row 5 - Carousel/Grid) */}
      <section id="portfolio-carousel-section" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Top header navigation row */}
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                05 // HIGH-FIDELITY BUILDS CAROUSEL
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] uppercase leading-none tracking-tight">
                Related Technical Showcases
              </h2>
            </div>

            {/* Minimalist arrow navigation icons */}
            <div className="flex gap-2">
              <button
                id="carousel-prev-chevron-btn"
                onClick={prevCarousel}
                className="p-3 bg-[#F5F5F5] hover:bg-[#EF4444] hover:text-white text-[#111111] border border-[#E5E5E5] transition-colors cursor-pointer"
                aria-label="Previous featured project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="carousel-next-chevron-btn"
                onClick={nextCarousel}
                className="p-3 bg-[#F5F5F5] hover:bg-[#EF4444] hover:text-white text-[#111111] border border-[#E5E5E5] transition-colors cursor-pointer"
                aria-label="Next featured project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Related Articles template layout with motion slider rendering */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carouselProjects.map((cp, idx) => (
              <div
                id={`carousel-slide-item-${idx}`}
                key={idx}
                className="border border-[#E5E5E5] hover:border-[#EF4444] p-6 bg-white flex flex-col justify-between min-h-[380px] group transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Photo window */}
                  <div className="relative w-full h-[180px] bg-[#F5F5F5] overflow-hidden border border-[#E5E5E5]">
                    <img
                      src={cp.img}
                      alt={cp.name}
                      className="w-full h-full object-cover filter saturation-50 brightness-[0.80] group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-neutral-900 border border-zinc-800 text-white text-[9px] font-mono px-2 py-0.5 z-10">
                      {cp.year}
                    </div>
                  </div>

                  <span className="text-[9px] font-mono text-[#EF4444] font-bold uppercase tracking-widest block">
                    {cp.category.toUpperCase()} // CORE
                  </span>
                  <h3 className="font-display font-black text-lg text-[#111111] uppercase tracking-tight group-hover:text-[#EF4444] transition-colors leading-tight">
                    {cp.name}
                  </h3>
                </div>

                <div className="pt-6 border-t border-[#F5F5F5] flex items-center justify-between text-[10px] font-mono font-bold text-[#111111] group-hover:text-[#EF4444] transition-colors uppercase tracking-wider">
                  <span>View Technical Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. MEET OUR EXPERTS (Layout Row 6 - Team Blocks) */}
      <section id="portfolio-experts-section" className="py-24 bg-[#F5F5F5]/30 border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-xl mb-16 space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              06 // ACTIVE ARCHITECTURAL COMMITTEE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] uppercase leading-none tracking-tight">
              Corporate Spec Specialists
            </h2>
          </div>

          {/* Balanced side-by-side profile layout cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Expert Card 1 */}
            <div id="expert-profile-jenkins" className="bg-white border-2 border-[#111111] p-6 sm:p-8 flex flex-col sm:flex-row justify-between gap-6 hover:border-[#EF4444] transition-colors">
              <div className="space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-[#EF4444] font-bold tracking-widest uppercase block">
                    AWARDS CHAIR & SPECIALIST
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#111111] uppercase tracking-tight leading-none">
                    Arch. Sarah Jenkins, AIA
                  </h3>
                  <p className="font-mono text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                    Director of Masterplanning
                  </p>
                </div>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed font-semibold max-w-sm">
                  Spearheads brutalist structural zoning alignments and parametric heat dissipation modeling for major high-density urban residential layouts.
                </p>
                <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-[#EF4444] rounded-full" />
                  <span>Licensed Architect // ID-940212</span>
                </div>
              </div>

              {/* Right Portrait */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden self-center sm:self-auto">
                <img
                  src="/src/assets/images/leader_portrait_1780843111096.png"
                  alt="Arch. Sarah Jenkins"
                  className="w-full h-full object-cover filter brightness-[0.8] saturate-50 hover:saturate-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Expert Card 2 */}
            <div id="expert-profile-rostov" className="bg-white border-2 border-[#111111] p-6 sm:p-8 flex flex-col sm:flex-row justify-between gap-6 hover:border-[#EF4444] transition-colors">
              <div className="space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-[#EF4444] font-bold tracking-widest uppercase block">
                    SEISMIC COMMITTEE CHIEF
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#111111] uppercase tracking-tight leading-none">
                    Engr. Stefan Rostov, PE
                  </h3>
                  <p className="font-mono text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                    Chief Structural Engineer
                  </p>
                </div>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed font-semibold max-w-sm">
                  Verifies wind lateral stress and deep dynamic aggregate calculations for extreme cantilever equilibrium frameworks and complex industrial facilities.
                </p>
                <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-[#EF4444] rounded-full" />
                  <span>Licensed Civil Engineer // ID-883019</span>
                </div>
              </div>

              {/* Right Portrait */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden self-center sm:self-auto">
                <img
                  src="/src/assets/images/about_how_we_build_1780843092581.png"
                  alt="Engr. Stefan Rostov"
                  className="w-full h-full object-cover filter brightness-[0.8] saturate-50 hover:saturate-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. GLOBAL CALL TO ACTION (CTA) */}
      <section id="portfolio-global-cta" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              Direct Collaborative On-Site Scope Engagement
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] uppercase tracking-tight leading-none">
              Ready to work together?
            </h2>
            <p className="text-[#111111]/70 font-sans text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-medium">
              Whether you have a blueprint ready or need a team to design and build from scratch, let's execute your vision safely, transparently, and flawlessly.
            </p>
          </div>

          <div className="pt-2 max-w-xs mx-auto">
            <button
              id="portfolio-cta-global-trigger"
              onClick={() => onToggleView("home", "contact")}
              className="w-full bg-[#111111] hover:bg-[#EF4444] text-white py-4.5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-[#111111] cursor-pointer"
            >
              Initiate Project Scope Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Modern Lightbox Modal to show Premium Project Specifications */}
      <AnimatePresence>
        {selectedProjectSpec && (
          <div
            id="portfolio-specs-lightbox"
            className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedProjectSpec(null)}
          >
            <motion.div
              id="portfolio-specs-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white text-[#111111] max-w-4xl w-full border-2 border-[#111111] overflow-hidden relative grid grid-cols-1 md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Button */}
              <button
                id="close-portfolio-specs-btn"
                onClick={() => setSelectedProjectSpec(null)}
                className="absolute top-4 right-4 bg-[#111111] text-white p-2 text-xs hover:bg-[#EF4444] font-mono uppercase tracking-widest z-30 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area Column */}
              <div className="md:col-span-6 h-[260px] md:h-full relative border-b-2 md:border-b-0 md:border-r-2 border-[#111111] bg-neutral-900">
                <img
                  id="lightbox-detailed-pic"
                  src={selectedProjectSpec.imageUrl}
                  alt={selectedProjectSpec.title}
                  className="w-full h-full object-cover filter saturation-75 brightness-[0.80]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1.5 border border-white/10 text-[9px] text-[#EF4444] font-mono uppercase tracking-widest font-extrabold">
                  VERIFIED COORDINATES SYSTEM
                </div>
              </div>

              {/* Text Specs Details Area */}
              <div className="md:col-span-6 p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="border-b border-[#E5E5E5] pb-3 mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#EF4444] uppercase tracking-widest">
                      CLASSIFIED SPECIFICATIONS // SRC-{selectedProjectSpec.id.replace("proj-", "0")}
                    </span>
                    <h3 className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight leading-none mt-1">
                      {selectedProjectSpec.title}
                    </h3>
                  </div>

                  <p className="text-zinc-600 font-sans text-xs leading-relaxed font-semibold mb-6">
                    <strong className="text-[#111111]">Structural Engineering Focus:</strong> {selectedProjectSpec.structuralHighlight} Cured with high-tensile core framing to tolerate extreme shear conditions.
                  </p>

                  {/* Technical values lookup table list */}
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono font-extrabold text-[#111111] uppercase tracking-wider block border-b border-[#F5F5F5] pb-1">
                      Zoning & Tolerance Data Sheets:
                    </span>
                    
                    {selectedProjectSpec.specs.map((spVal, sIdx) => {
                      const [label, val] = spVal.split(": ");
                      return (
                        <div key={sIdx} className="flex justify-between text-xs font-mono uppercase border-b border-[#F5F5F5] pb-1">
                          <span className="text-zinc-400 font-semibold">{label}</span>
                          <span className="text-[#111111] font-bold">{val}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Materials list */}
                  <div className="space-y-2 mt-6">
                    <span className="text-[9px] font-mono font-extrabold text-[#EF4444] uppercase tracking-wider block border-b border-rose-50 pb-1">
                      Aggregate Core Bill-of-Materials:
                    </span>
                    
                    <div className="grid grid-cols-1 gap-2 pt-1">
                      {selectedProjectSpec.materials.map((mat, mIdx) => (
                        <div key={mIdx} className="flex justify-between text-[11px] font-mono uppercase">
                          <span className="text-zinc-500 font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-[#EF4444]" />
                            {mat.item}
                          </span>
                          <span className="text-[#111111] font-black">{mat.ratio}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-[#F5F5F5] flex flex-col sm:flex-row gap-3">
                  <button
                    id="spec-modal-bid-btn"
                    onClick={() => {
                      setSelectedProjectSpec(null);
                      onToggleView("quote");
                    }}
                    className="flex-1 bg-[#EF4444] hover:bg-[#111111] text-white py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer"
                  >
                    Bid For Blueprint
                  </button>
                  <button
                    id="spec-modal-close"
                    onClick={() => setSelectedProjectSpec(null)}
                    className="border border-[#E5E5E5] hover:bg-neutral-50 text-zinc-500 py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close Sheet
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
