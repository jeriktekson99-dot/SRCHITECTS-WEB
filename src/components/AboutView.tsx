/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Home, 
  Warehouse, 
  ShieldCheck, 
  Hammer, 
  Map, 
  Layers, 
  Leaf, 
  Compass, 
  Target, 
  Award, 
  Eye, 
  Activity, 
  Users, 
  TrendingUp, 
  ShieldAlert, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight 
} from "lucide-react";

interface ExecutiveProfile {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  image: string;
}

interface AboutViewProps {
  onToggleView: (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => void;
}

export default function AboutView({ onToggleView }: AboutViewProps) {
  // Slider/Carousel state for Leadership Spotlight
  const [currentLeaderIdx, setCurrentLeaderIdx] = useState(0);

  const leaders: ExecutiveProfile[] = [
    {
      name: "Engr. Stefan Rostov, PE",
      title: "Chief Executive Officer & Founder",
      credentials: "MS Structural Engineering (MIT), 20+ Years On-Site Experience",
      bio: "Stefan founded S.R.chitects with the primary vision of eliminating the communication rift between conceptual draft sheets and brute civil execution. Over two decades, he has lead premium infrastructure installations valued in excess of ₱15B+ with an unyielding stance on zero-error margins.",
      image: "/src/assets/images/leader_portrait_1780843111096.png"
    },
    {
      name: "Arch. Sarah Jenkins, AIA",
      title: "Principal Designer & Director of Masterplanning",
      credentials: "B.Arch Cornell University, Director of Parametric Layouts",
      bio: "Sarah is a globally recognized pioneer in brutalist spatial aesthetics and eco-concrete aggregates. She spearheads our architectural masterplanning division, introducing sustainable thermal-regulated concrete casts to modern commercial super-structures.",
      image: "/src/assets/images/cantilever_house_1780842043269.png"
    },
    {
      name: "Director Ricardo Almeda, PMP",
      title: "VP of Operational Safety & Site Procurement",
      credentials: "Certified Operations Lead, 15+ Years Logistics Command",
      bio: "Ricardo directs our zero-incident timeline workflows across all active project locations. His implementation of laser-LIDAR site scans and decentralized supply pipelines guarantees clients absolute budget transparency with zero retail markups.",
      image: "/src/assets/images/about_how_we_build_1780843092581.png"
    }
  ];

  const handleNextLeader = () => {
    setCurrentLeaderIdx((prev) => (prev + 1) % leaders.length);
  };

  const handlePrevLeader = () => {
    setCurrentLeaderIdx((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  // 8 Core Capabilities for Expertise Matrix
  const expertiseList = [
    {
      title: "Commercial Infrastructure",
      desc: "Grade-A office towers, shopping plazas, and retail hubs engineered to accommodate soaring utility density.",
      icon: <Building2 className="w-6 h-6 text-[#EF4444]" />
    },
    {
      title: "High-End Residential",
      desc: "Bespoke estates and gravity-defying cantilever villas emphasizing high-contrast visual design and absolute privacy.",
      icon: <Home className="w-6 h-6 text-[#EF4444]" />
    },
    {
      title: "Industrial Facilities",
      desc: "Heavy logistics warehouses, aerospace manufacturing depots, and cold-storage cells built for extreme stress loads.",
      icon: <Warehouse className="w-6 h-6 text-[#EF4444]" />
    },
    {
      title: "Structural Retrofitting",
      desc: "Seismic upgrades, raw concrete pillar reinforcement, and foundation underpinning for ageing metropolitan structures.",
      icon: <ShieldCheck className="w-6 h-6 text-[#EF4444]" />
    },
    {
      title: "Civil Engineering Works",
      desc: "Bridges, retaining systems, highway ramps, and deep drainage blockages designed with extreme structural resilience.",
      icon: <Hammer className="w-6 h-6 text-[#EF4444]" />
    },
    {
      title: "Architectural Masterplanning",
      desc: "Bespoke conceptual modeling from visual sketch lines up to virtual 3D drafts ready for physical deployment.",
      icon: <Map className="w-6 h-6 text-[#EF4444]" />
    },
    {
      title: "Bespoke Interior Build-outs",
      desc: "Immaculate minimalist fittings. Polished plasters, dark industrial steel partitions, and integrated spatial electronics.",
      icon: <Layers className="w-6 h-6 text-[#EF4444]" />
    },
    {
      title: "Sustainable Environmental Design",
      desc: "Eco-friendly concrete casting, solar spatial orientations, and passive airflow vents ensuring optimized efficiency.",
      icon: <Leaf className="w-6 h-6 text-[#EF4444]" />
    }
  ];

  return (
    <div id="about-page-layout" className="bg-[#FFFFFF]">
      
      {/* 1. ABOUT HERO SECTION */}
      <section id="about-hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#111111] overflow-hidden flex items-center border-b border-[#EF4444]">
        {/* Full-bleed background image with a dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400"
            alt="Strategic Blueprint Planning"
            className="w-full h-full object-cover filter brightness-[0.22] saturate-[0.80]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111]/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-[#EF4444]" />
              <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em]">
                Strategic Profile
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight uppercase">
              How We <span className="text-zinc-500 text-transparent bg-clip-text bg-gradient-to-r from-zinc-350 to-zinc-550">Design</span> & Create.
            </h1>
            <p className="text-sm md:text-base text-zinc-400 font-mono font-medium max-w-xl leading-relaxed">
              Consolidated masterplanning, precise tolerances, and high-stress civil structures delivered without error margins.
            </p>
          </div>
        </div>
      </section>

      {/* 2. HOW WE BUILD (Philosophy & Force Split) */}
      <section id="about-intro" className="py-20 md:py-28 border-b border-[#E5E5E5] bg-white text-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Bold text details */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                  How We Build // Philosophy & Force
                </span>
                <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] leading-[0.95] tracking-tight uppercase">
                  Precision Is Our <br /><span className="text-[#EF4444]">Primary Raw</span> Material.
                </h2>
              </div>

              <div className="border-l-4 border-[#EF4444] pl-6 space-y-4">
                <p className="text-base md:text-lg text-zinc-800 font-sans font-medium leading-relaxed tracking-wide">
                  Traditional builders rely on approximate margins. We reject this. Every column, every girder, and every site foundation we erect is modeled down to the millimeter.
                </p>
                <p className="text-sm text-zinc-650 font-sans leading-relaxed">
                  S.R.chitects Construction Corporation operates on a consolidated delivery system. By organizing senior architects and structural master-inspectors into a singular on-site committee, we ensure that the architectural details designed in the studio are beautifully, structurally translated into physical form.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-[#EF4444] flex items-center justify-center shrink-0">
                    <Compass className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
                    Parametric Tolerances Only
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:ml-6">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-[#EF4444] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
                    Full Project Accountability
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Crisp geometric image frame with white-themed casing */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-xl aspect-video md:aspect-[4/3] bg-[#F5F5F5] border border-[#E5E5E5] p-6 flex items-center justify-center">
                {/* Visual guide markings */}
                <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#EF4444]" />
                <div className="absolute top-0 left-0 w-[1px] h-3 bg-[#EF4444]" />
                <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-[#EF4444]" />
                <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-[#EF4444]" />

                <div className="relative w-full h-full overflow-hidden border border-[#E5E5E5]">
                  <img
                    id="about-how-we-build-image"
                    src="/src/assets/images/about_how_we_build_1780843092581.png"
                    alt="Active premium concrete skyscraper construction site"
                    className="w-full h-full object-cover filter brightness-[0.80] saturate-[0.85]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD (Expertise Grid) */}
      <section id="about-expertise" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-16 md:mb-24 space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              What We Build // Expert Capabilities Directory
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight uppercase">
              Elite Engineering Matrix.
            </h2>
            <p className="text-zinc-600 font-sans text-sm font-medium leading-relaxed">
              We apply customized high-tensile foundations and brutalist architectural excellence across eight core construction fields. No compromises, no cut offsets.
            </p>
          </div>

          {/* Minimalist 4x2 grid matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#E5E5E5] bg-[#E5E5E5]/20">
            {expertiseList.map((item, idx) => (
              <div
                id={`expertise-card-${idx}`}
                key={idx}
                className="bg-white p-8 border border-[#E5E5E5] hover:border-[#EF4444] group transition-all duration-300 flex flex-col justify-between min-h-[260px]"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-[#F5F5F5] group-hover:bg-[#EF4444] group-hover:text-white text-[#111111] transition-all duration-300 flex items-center justify-center border border-[#E5E5E5] group-hover:border-transparent">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight group-hover:text-[#EF4444] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 font-sans text-xs leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-zinc-300 font-extrabold tracking-widest pt-4">
                  SRC_SYS_SEC_{idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BUILD BY IMPACT (Data & Analytics) */}
      <section id="about-impact" className="py-24 bg-[#111111] text-white border-b border-[#EF4444]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-16 space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              Performance Index // Verified Metrics
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase leading-none">
              Built by Impact. Measured by Force.
            </h2>
          </div>

          {/* Raw industrial 3x2 metric dashboard grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-zinc-800 bg-zinc-950">
            
            {/* Card 1 */}
            <div className="p-10 border border-zinc-800 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors">
              <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                100<span className="text-[#EF4444]">%</span>
              </span>
              <div className="mt-6 space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">SECURED SCALE RATIO</span>
                <span className="text-xs font-mono font-bold text-zinc-300 uppercase">On-Time Project Delivery Rate</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-10 border border-zinc-800 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors">
              <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                5.5K<span className="text-[#EF4444]">&plus;</span>
              </span>
              <div className="mt-6 space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">FABRICATED FOOTPRINT</span>
                <span className="text-xs font-mono font-bold text-zinc-300 uppercase">Total Sqm Engineered & Cast</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-10 border border-zinc-800 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors">
              <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                20<span className="text-[#EF4444]">&plus;</span>
              </span>
              <div className="mt-6 space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">MEMBER TECHNICAL BOARD</span>
                <span className="text-xs font-mono font-bold text-zinc-300 uppercase">Elite Architects & Site Engineers</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-10 border border-zinc-800 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors">
              <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                &#8369;9.9B<span className="text-[#EF4444]">&plus;</span>
              </span>
              <div className="mt-6 space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">LEDGER COMPLIANCE</span>
                <span className="text-xs font-mono font-bold text-zinc-300 uppercase">Managed Asset Value Released</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-10 border border-zinc-800 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors">
              <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                &#8369;9.4M
              </span>
              <div className="mt-6 space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">SAVINGS RATIO VALUE</span>
                <span className="text-xs font-mono font-bold text-zinc-300 uppercase">Optimized Procurement Savings</span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-10 border border-zinc-800 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors">
              <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                1700<span className="text-[#EF4444]">&plus;</span>
              </span>
              <div className="mt-6 space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">ZERO INJURY RECORD</span>
                <span className="text-xs font-mono font-bold text-zinc-300 uppercase">Active Days of Zero On-Site Incidents</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MISSION AND VISION (Core Pillars) */}
      <section id="about-pillars" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Vision pillar */}
            <div className="bg-white p-10 md:p-12 border-2 border-[#111111] relative flex flex-col justify-between min-h-[400px] group hover:border-[#EF4444] transition-colors duration-300">
              <div className="absolute top-4 right-6 text-[#EF4444] opacity-20 group-hover:opacity-100 transition-opacity">
                <Target className="w-8 h-8" />
              </div>
              <div className="space-y-6">
                <span className="text-[9px] font-mono font-bold text-[#EF4444] tracking-[0.25em] block uppercase">
                  SECTION PILLAR 01
                </span>
                <h3 className="font-display font-black text-3xl text-[#111111] tracking-tight uppercase leading-none">
                  Corporate Vision
                </h3>
                <div className="w-12 h-1 bg-[#111111] group-hover:bg-[#EF4444] transition-colors" />
                <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed font-semibold">
                  To permanently rewrite the standard layout of regional execution. We envision shaping a structural landscape where bold, brutalist visual geometry exists in perfect unison with high-tensile, seismic-reinforced civil durability, elevating spatial safety.
                </p>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-8">
                UNCOMPROMISING METRIC STANDARDS
              </span>
            </div>

            {/* Mission pillar */}
            <div className="bg-white p-10 md:p-12 border-2 border-[#111111] relative flex flex-col justify-between min-h-[400px] group hover:border-[#EF4444] transition-colors duration-300">
              <div className="absolute top-4 right-6 text-[#EF4444] opacity-20 group-hover:opacity-100 transition-opacity">
                <Award className="w-8 h-8" />
              </div>
              <div className="space-y-6">
                <span className="text-[9px] font-mono font-bold text-[#EF4444] tracking-[0.25em] block uppercase">
                  SECTION PILLAR 02
                </span>
                <h3 className="font-display font-black text-3xl text-[#111111] tracking-tight uppercase leading-none">
                  Operational Mission
                </h3>
                <div className="w-12 h-1 bg-[#111111] group-hover:bg-[#EF4444] transition-colors" />
                <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed font-semibold">
                  S.R.chitects exists to deliver physically flawless commercial and residential assets with absolute budget integrity. We champion zero-markup procurement paths and unified architect-inspector logistics, rendering the client’s vision without sudden changes.
                </p>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-8">
                ISO CERTIFIED CIVIL LOGISTICS
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR CORE VALUES (Strategic Foundation) */}
      <section id="about-values" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Geometric Blueprint layout */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] bg-[#F5F5F5] border border-[#E5E5E5] p-5 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#EF4444]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#EF4444]" />
                
                <div className="relative w-full h-full overflow-hidden border border-[#E5E5E5]">
                  <img
                    id="about-values-blueprint-img"
                    src="/src/assets/images/values_blueprint_1780843126852.png"
                    alt="Structural civil blueprint laser marks"
                    className="w-full h-full object-cover filter brightness-[0.7] saturate-[0.8]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/55 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Side: Three clean horizontal panels */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                  Foundations // Our Operating Code
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] leading-none tracking-tight uppercase">
                  Operational Core Values
                </h2>
              </div>

              <div className="space-y-6 divide-y divide-[#E5E5E5]">
                {/* Value 1 */}
                <div className="pt-6 first:pt-0 flex gap-6 items-start">
                  <div className="font-mono font-black text-lg text-[#EF4444] shrink-0 bg-red-50 w-10 h-10 border border-[#EF4444]/20 flex items-center justify-center">
                    01
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight">
                      Absolute Technical Authenticity
                    </h4>
                    <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed max-w-xl">
                      We do not compromise raw materials. S.R.chitects guarantees verified high-grade C60 concrete mixtures and certified structural steel alloys across all coordinates.
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="pt-6 flex gap-6 items-start">
                  <div className="font-mono font-black text-lg text-[#EF4444] shrink-0 bg-red-50 w-10 h-10 border border-[#EF4444]/20 flex items-center justify-center">
                    02
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight">
                      Decentralized Client Transparency
                    </h4>
                    <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed max-w-xl">
                      Clients have uncompromised gate-access codes to live site camera streams, digital material receipts, and real-time civil schedule metrics with zero sudden fee hikes.
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="pt-6 flex gap-6 items-start">
                  <div className="font-mono font-black text-lg text-[#EF4444] shrink-0 bg-red-50 w-10 h-10 border border-[#EF4444]/20 flex items-center justify-center">
                    03
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight">
                      Dynamic Site Safety Enforcement
                    </h4>
                    <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed max-w-xl">
                      We integrate parametric risk calculation software directly with standard site workflows to optimize physical protection, retaining an industry-leading zero incident log.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BEHIND THE TEAM (Leadership Spotlight) */}
      <section id="about-team" className="py-24 bg-[#F5F5F5]/30 border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-xl mb-12 sm:mb-16 space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              Leadership // Core Committee Board
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] leading-none tracking-tight uppercase">
              Behind the Team
            </h2>
          </div>

          {/* Premium executive profile layout featuring a split horizontal card block */}
          <div className="bg-white border-2 border-[#111111] grid grid-cols-1 md:grid-cols-12 relative overflow-hidden">
            
            {/* Split Left: Text Biography Container */}
            <div className="md:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#111111] text-xs font-mono text-white tracking-widest uppercase">
                    MEMBER // 0{currentLeaderIdx + 1}
                  </div>
                  <h3 className="font-display font-black text-3xl text-[#111111] uppercase tracking-tight">
                    {leaders[currentLeaderIdx].name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#EF4444] uppercase tracking-widest leading-relaxed">
                    {leaders[currentLeaderIdx].title}
                    <br />
                    <span className="text-zinc-500 font-medium lowercase text-[11px] block mt-1">
                      {leaders[currentLeaderIdx].credentials}
                    </span>
                  </p>
                </div>

                <div className="w-16 h-[2px] bg-[#EF4444]" />

                <p className="text-zinc-700 font-sans text-sm sm:text-base leading-relaxed font-semibold">
                  {leaders[currentLeaderIdx].bio}
                </p>
              </div>

              {/* Slider controls & carousel dots */}
              <div className="flex items-center justify-between pt-12 mt-8 border-t border-[#F5F5F5]">
                {/* Carousel Dots */}
                <div className="flex gap-2">
                  {leaders.map((_, idx) => (
                    <button
                      id={`leader-dot-${idx}`}
                      key={idx}
                      onClick={() => setCurrentLeaderIdx(idx)}
                      className={`w-3 h-3 transition-colors duration-300 ${
                        currentLeaderIdx === idx ? "bg-[#EF4444]" : "bg-zinc-200"
                      }`}
                      aria-label={`Go to leader ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow switches */}
                <div className="flex gap-2">
                  <button
                    id="prev-leader-btn"
                    onClick={handlePrevLeader}
                    className="p-3 bg-[#F5F5F5] hover:bg-[#EF4444] hover:text-white text-[#111111] transition-colors border border-[#E5E5E5] hover:border-transparent cursor-pointer"
                    aria-label="Previous board member"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    id="next-leader-btn"
                    onClick={handleNextLeader}
                    className="p-3 bg-[#F5F5F5] hover:bg-[#EF4444] hover:text-white text-[#111111] transition-colors border border-[#E5E5E5] hover:border-transparent cursor-pointer"
                    aria-label="Next board member"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Split Right: Stark structural vertical portrait frame */}
            <div className="md:col-span-5 h-[340px] md:h-auto min-h-[400px] relative border-t-2 md:border-t-0 md:border-l-2 border-[#111111]">
              <img
                id="leader-portrait-frame-img"
                src={leaders[currentLeaderIdx].image}
                alt={leaders[currentLeaderIdx].name}
                className="w-full h-full object-cover filter brightness-[0.8] saturate-50 hover:saturate-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/45 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[#FFFFFF]/70 bg-[#111111]/80 px-3 py-1 border border-white/10 uppercase tracking-widest">
                VERIFIED CORPORATE CREDENTIALS // LEVEL_5
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CALL TO ACTION (CTA Transition) */}
      <section id="about-cta" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              Initiate Dynamic Procurement Phase
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight uppercase">
              Ready to Build with Uncompromising Precision?
            </h2>
            <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium">
              We translate highly sophisticated structural blueprints into predictable physical form. Request an official budget review or consult S.R.chitects Construction Corporation directly.
            </p>
          </div>

          <div className="pt-4 max-w-xs mx-auto">
            <button
              id="about-action-cta-btn"
              onClick={() => onToggleView("quote")}
              className="w-full group flex items-center justify-center gap-3 bg-[#EF4444] hover:bg-[#111111] text-white p-5 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 relative border border-[#EF4444] cursor-pointer"
            >
              Request a Corporate Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
