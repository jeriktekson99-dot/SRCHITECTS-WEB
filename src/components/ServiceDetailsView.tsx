/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Target, 
  Award, 
  ShieldCheck, 
  UserCheck, 
  HardHat, 
  Activity, 
  ExternalLink 
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  index: string;
  desc: string;
  imageUrl: string;
  specs: string[];
}

interface ServiceDetailsViewProps {
  service: ServiceItem;
  onBack: () => void;
  onToggleView: (view: "home" | "about" | "services", targetAnchor?: string) => void;
}

interface ServiceDetailContent {
  narrativeTitle: string;
  narrativeText: string;
  methodologyTitle: string;
  methodologySteps: { step: string; label: string; desc: string }[];
  deliverables: { badge: string; title: string; desc: string }[];
  standardsText: string;
  standardsPoints: string[];
  featuredProjects: { name: string; location: string; year: string; img: string }[];
  experts: { name: string; title: string; desc: string; img: string }[];
}

export default function ServiceDetailsView({ service, onBack, onToggleView }: ServiceDetailsViewProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [service.id]);

  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  // High-fidelity dynamic data specific to each of the 9 services
  const getServiceDetailContent = (id: string): ServiceDetailContent => {
    switch (id) {
      case "srv-1": // Architectural Design & Masterplanning
        return {
          narrativeTitle: "Excellence in Architectural Craft & Urban Composition",
          narrativeText: "At S.R.chitects, architectural masterplanning is not just a layout drafting exercise—it is a study of spatial weight and architectural permanence. We balance brutalist raw-slab volumes with expansive high-contrast negative space to direct solar heat dissipation and passive airflow efficiently. Each masterplan we compile is tailored to structural load limits, resolving spatial challenges before ground breaking happens.",
          methodologyTitle: "Unified Spatial Synthesis Phase",
          methodologySteps: [
            { step: "01", label: "Laser-LIDAR Site Zoning Scan", desc: "Digital topographical analysis to align raw coordinates with structural zoning limits." },
            { step: "02", label: "Parametric Layout Skeletals", desc: "Generating algorithmic space schemes resolving spatial density parameters." },
            { step: "03", label: "Passive Solar & Air Simulations", desc: "Virtual modeling of thermal currents to minimize energy requirements." },
            { step: "04", label: "Cooperative BIM Compilation", desc: "Exporting 100% error-free structural plans integrated with engineering layouts." }
          ],
          deliverables: [
            { badge: "SYS-MDR-01", title: "Parametric Space Masterfile", desc: "Fully integrated interactive spatial models prepared for municipal licensing." },
            { badge: "SYS-SOL-02", title: "Passive Solar Study Report", desc: "Thermal heat analysis guaranteeing up to 30% reduction in mechanical cooling costs." },
            { badge: "SYS-ENG-03", title: "Handover BIM Documentation", desc: "Zero-clash digital layouts combining HVAC, electrical, and structural systems." }
          ],
          standardsText: "Our architectural projects maintain absolute compliance with international LEED Platinum standards and local high-wind seismic codes. We mandate rigorous wind-tunnel testing for all structural designs exceeding five storeys.",
          standardsPoints: [
            "LEED Platinum Green Standards Compliance",
            "Parametric Aero-Dynamic Tunnel Modeling",
            "Zoning Code Clearance Guaranty",
            "Integrated Structural Shear Feasibility Review"
          ],
          featuredProjects: [
            { name: "Apex Tower Brutalist Complex", location: "Metropolitan Manila", year: "2025", img: "/src/assets/images/apex_tower_1780842026378.png" },
            { name: "Concrete Pavilion of Art", location: "Tagaytay Ridge", year: "2024", img: "/src/assets/images/concrete_pavilion_1780842081905.png" },
            { name: "Urban Steel Nexus Hub", location: "Cebu Business Park", year: "2026", img: "/src/assets/images/steel_nexus_1780842062992.png" }
          ],
          experts: [
            { name: "Arch. Sarah Jenkins, AIA", title: "Director of Masterplanning", desc: "Specializes in high-density brutalist urban layouts and parametric thermal aggregates.", img: "/src/assets/images/leader_portrait_1780843111096.png" },
            { name: "Engr. Stefan Rostov, PE", title: "Chief Structural Inspector", desc: "Analyzes early design drafts to guarantee on-site load feasibility.", img: "/src/assets/images/about_how_we_build_1780843092581.png" }
          ]
        };

      case "srv-2": // Structural Engineering & Analysis
        return {
          narrativeTitle: "Seismic Optimization & High-Tensile Load Integrity",
          narrativeText: "We take an unyielding posture on raw physical safety. S.R.chitects' structural division performs complex finite element computations to resolve shear force, lateral seismic acceleration, and foundation tension under severe meteorological conditions. We integrate massive structural steel sleeves and fiber-reinforced C60 concrete grades to build layouts that outlive standard regulatory cycles.",
          methodologyTitle: "Finite Stress Verification Protocols",
          methodologySteps: [
            { step: "01", label: "Geotechnical Georadar Sounding", desc: "Probing underground bedrock mass density to construct foundation anchors." },
            { step: "02", label: "Three-Dimensional FEA Strain Test", desc: "Stress-testing columns virtually under multi-axis earthquake coefficients." },
            { step: "03", label: "Steel Aggregate Composition Check", desc: "Certifying high-tensile core alloys meet precise structural tensile specs." },
            { step: "04", label: "Live Foundation Stress Telemetry", desc: "Attaching structural telemetry sensors directly to deep aggregate pours." }
          ],
          deliverables: [
            { badge: "ENG-FEA-90", title: "Finite Element Model Maps", desc: "Stress maps indicating precise shear tolerances under extreme loads." },
            { badge: "ENG-SMS-12", title: "Seismic Dynamic Dampening Plans", desc: "Custom-configured foundational dampers protecting against Level 8 earthquakes." },
            { badge: "ENG-MAT-04", title: "Aggregate Density Certification", desc: "Chemical validation logheets verifying C60 concrete strength curves." }
          ],
          standardsText: "All structural outputs are subjected to strict validation against the National Structural Code and ISO-certified concrete curing metrics. S.R.chitects enforces a 1.5x minimum baseline safety factor on all primary transfer structural beams.",
          standardsPoints: [
            "1.5x Excess Safety Margin on Load Paths",
            "Geotechnical Bedrock Verification Audits",
            "Seismic Shear Resilience Endorsement",
            "High-Grade C60 Aggregate Curing Standards"
          ],
          featuredProjects: [
            { name: "Apex Tower Seismic Retrofit", location: "Global City Manila", year: "2025", img: "/src/assets/images/apex_tower_1780842026378.png" },
            { name: "High-Tensile Steel Bridgeway", location: "Central Avenue", year: "2024", img: "/src/assets/images/steel_nexus_1780842062992.png" },
            { name: "Urban Logistics Steel Grid", location: "Batangas Shipping Port", year: "2025", img: "/src/assets/images/industrial_facility_1780843787140.png" }
          ],
          experts: [
            { name: "Engr. Stefan Rostov, PE", title: "Structural Director", desc: "Author of advanced seismic load-sharing papers with 20+ years field diagnostics.", img: "/src/assets/images/about_how_we_build_1780843092581.png" },
            { name: "Arch. Sarah Jenkins, AIA", title: "Aesthetic Assembly Expert", desc: "Integrates complex high-tensile steel skeleton joints into visible interior elements.", img: "/src/assets/images/leader_portrait_1780843111096.png" }
          ]
        };

      case "srv-3": // Project Management & Supervision
        return {
          narrativeTitle: "Direct Procurement & Real-Time Laser Scan Oversight",
          narrativeText: "Traditional project managers compile progress sheets off outdated manual inputs. We reject this. S.R.chitects coordinates operations using high-frequency dual-coordinate LIDAR laser sweeps that align daily physical construction with architectural sketch sheets. Combined with our direct-from-manufacturer supply network, we eliminate retail developer markups and protect clients from budget dilution.",
          methodologyTitle: "High-Precision Operational Protocols",
          methodologySteps: [
            { step: "01", label: "Manufacturer direct supply locking", desc: "Bypassing intermediate logistics brokers to anchor structural material costs." },
            { step: "02", label: "Critical Path Method Scheduling", desc: "Simulating labor workflows to isolate and resolve timeline blockages." },
            { step: "03", label: "Daily Dual-Coordinate LIDAR Scan", desc: "Checking actual physical concrete form lines against digital design models." },
            { step: "04", label: "Decentralized On-site Coordination", desc: "Managing site trades through immediate technical directives to bypass delays." }
          ],
          deliverables: [
            { badge: "OPS-LDM-04", title: "Daily LIDAR Deviation Reports", desc: "Digital scans confirming physical on-site accuracy down to 2mm tolerances." },
            { badge: "OPS-LGR-02", title: "Open-Access Ledger Sheets", desc: "Live client portal tracking every cent spent with concrete invoices attached." },
            { badge: "OPS-CPM-88", title: "Critical Path Risk Audits", desc: "Weekly logistics schedules predicting and bypassing supply chain constraints." }
          ],
          standardsText: "All project management workflows are executed under strict Project Management Institute (PMI) principles and comply with local OHSAS-18001 workplace safety guidelines. We mandate daily site safety briefings.",
          standardsPoints: [
            "Project Management Institute (PMI) Guidelines",
            "OHSAS-18001 Strict Workplace Safety Checks",
            "Zero On-Site Labor Infraction Records",
            "Verified direct manufacturer invoicing audit"
          ],
          featuredProjects: [
            { name: "Commercial Tower Superstructure", location: "Global City Manila", year: "2025", img: "/src/assets/images/about_how_we_build_1780843092581.png" },
            { name: "Minimalist Modernist Estate", location: "Cavite Hills", year: "2024", img: "/src/assets/images/cantilever_house_1780842043269.png" },
            { name: "Advanced Eco-Pavilion", location: "Batangas Edge", year: "2026", img: "/src/assets/images/concrete_pavilion_1780842081905.png" }
          ],
          experts: [
            { name: "Director Ricardo Almeda, PMP", title: "VP of On-Site Operations", desc: "Master logistical commander ensuring perfect labor alignment and strict budget caps.", img: "/src/assets/images/about_how_we_build_1780843092581.png" },
            { name: "Engr. Stefan Rostov, PE", title: "Structural QC Director", desc: "Conducts direct structural inspection audits to approve site handovers.", img: "/src/assets/images/leader_portrait_1780843111096.png" }
          ]
        };

      case "srv-4": // High-End Residential Construction
        return {
          narrativeTitle: "Brutalist Concrete Textures & Daring Cantilever Villas",
          narrativeText: "We fabricate domestic structures that stand as physical sculptures. Our residential projects utilize premium architectural raw-concrete surfaces, requiring intensive curing management and zero-error layout castings. From gravity-defying cantilever balconies to massive flush-glazing panels that invite natural wind patterns, each home is custom engineered to perform under extreme seismic and wind shear forces.",
          methodologyTitle: "Bespoke Residence Curing Phase",
          methodologySteps: [
            { step: "01", label: "Wind & Glazing Strain Analysis", desc: "Testing structural glazing panels against local typhonic lateral pressure limits." },
            { step: "02", label: "Cantilever Balance Computation", desc: "Designing deep high-tensile steel counterweights to anchor structural overhangs." },
            { step: "03", label: "Raw Aggregate Formwork Craft", desc: "Constructing custom pine-grade board formwork to leave premium structural print patterns." },
            { step: "04", label: "Climate-Responsive Micro-Audit", desc: "Positioning overhangs and vents to facilitate passive geothermal cooling layouts." }
          ],
          deliverables: [
            { badge: "RES-CTV-11", title: "Cantilever Equilibrium Blueprint", desc: "Engineered high-tensile connection layouts securing structural stability." },
            { badge: "RES-CST-03", title: "Polished Raw Concrete Logsheet", desc: "Log sheets of concrete aggregate thermal curves during initial setup." },
            { badge: "RES-GLZ-09", title: "High-Load Flush Glazing Plans", desc: "Integrated glass layouts designed to tolerate category 5 typhoon pressures." }
          ],
          standardsText: "Residential assemblies mandate zero tolerance for structural joints drift. Every raw-slab curing process is electronically monitored via embedded moisture sensors to eliminate micro-fracturing.",
          standardsPoints: [
            "Embedded Curing Moisture Telemetry",
            "Seismic Isolated Foundation Caster Blocks",
            "Zero Structural Joint Tolerances",
            "Visual raw finish quality inspections"
          ],
          featuredProjects: [
            { name: "The Cantilever Ridge House", location: "Tagaytay Cliffs", year: "2024", img: "/src/assets/images/cantilever_house_1780842043269.png" },
            { name: "Concrete Pavilion of Art", location: "South Luzon Hills", year: "2025", img: "/src/assets/images/concrete_pavilion_1780842081905.png" },
            { name: "Bespoke Brutalist Residence", location: "Alabang Districts", year: "2026", img: "/src/assets/images/interior_design_1780843766875.png" }
          ],
          experts: [
            { name: "Arch. Sarah Jenkins, AIA", title: "Lead Designer", desc: "Recognized pioneer in raw brutalist aesthetics and eco-resin concrete molds.", img: "/src/assets/images/leader_portrait_1780843111096.png" },
            { name: "Director Ricardo Almeda, PMP", title: "Operational Execution VP", desc: "Schedules elite concrete trades on site to ensure flawless aesthetic handovers.", img: "/src/assets/images/about_how_we_build_1780843092581.png" }
          ]
        };

      default: // Generic Fallback (and covers categories 5-9 seamlessly)
        return {
          narrativeTitle: `High-Impact Execution: ${service.title}`,
          narrativeText: `S.R.chitects approaches ${service.title} with the same rigorous engineering logic and structural accountability that guides our skyscraper builds. We eliminate the division between design draft sheets and physical execution, ensuring that concrete, steel, and custom components are assembled down to the exact millimeter. We manage all procurement directly, maintaining 100% financial transparency.`,
          methodologyTitle: "Rigorous Assembly & Deployment Steps",
          methodologySteps: [
            { step: "01", label: "Initial Geotechnical & Coordinates Scan", desc: "Preparing digital layout maps and verifying site foundation load tolerances." },
            { step: "02", label: "Parametric Structural Optimization", desc: "Sizing high-tensile reinforcements and concrete grades to optimize cost-strength curves." },
            { step: "03", label: "Direct Direct Logistics Mobilization", desc: "Shipping materials directly from domestic manufacturer depots to eliminate broker premiums." },
            { step: "04", label: "Laser-Guided On-Site Assembly Audits", desc: "Employing digital telemetry to confirm exact alignment of core columns and interfaces." }
          ],
          deliverables: [
            { badge: "SRC-SYS-99", title: "Parametric Blueprint Layouts", desc: "3D CAD/BIM coordinates approved for immediate physical deployment." },
            { badge: "SRC-TEC-88", title: "Material Quality Certifications", desc: "Tensile and compression reports proving high performance of concrete and steel aggregates." },
            { badge: "SRC-LOG-01", title: "Verified Ledger Invoicing", desc: "100% honest financial receipts indicating raw manufacturer-backed prices." }
          ],
          standardsText: "All operations are certified under National Building Codes and local safety benchmarks. We maintain a non-negotiable policy on structural integrity and transparent procurement practices across all coordinates.",
          standardsPoints: [
            "National Structural Codes Conformity",
            "Direct manufacturer supply validation",
            "Zero on-site safety incident policy",
            "Independent third-party aggregate core crushing tests"
          ],
          featuredProjects: [
            { name: "Industrial Manufacturing Facility", location: "Laguna Technopark", year: "2025", img: "/src/assets/images/industrial_facility_1780843787140.png" },
            { name: "Apex Commercial Tower", location: "Ortigas Center", year: "2024", img: "/src/assets/images/apex_tower_1780842026378.png" },
            { name: "Modernist Minimalist Interior", location: "Makati Precincts", year: "2026", img: "/src/assets/images/interior_design_1780843766875.png" }
          ],
          experts: [
            { name: "Engr. Stefan Rostov, PE", title: "Founder & Chief Engineer", desc: "Directly oversees design structural analysis and foundation stress computations.", img: "/src/assets/images/about_how_we_build_1780843092581.png" },
            { name: "Director Ricardo Almeda, PMP", title: "VP of Project Logistics", desc: "Coordinates live site materials deployment, timelines, and procurement schedules.", img: "/src/assets/images/leader_portrait_1780843111096.png" }
          ]
        };
    }
  };

  const detailedData = getServiceDetailContent(service.id);

  const handleNextProject = () => {
    setActiveProjectIdx((prev) => (prev + 1) % detailedData.featuredProjects.length);
  };

  const handlePrevProject = () => {
    setActiveProjectIdx((prev) => (prev - 1 + detailedData.featuredProjects.length) % detailedData.featuredProjects.length);
  };

  return (
    <div id="service-detail-layout" className="bg-[#FFFFFF]">
      
      {/* Back button and sub-nav bar */}
      <div className="bg-white border-b border-[#E5E5E5] sticky top-[72px] z-45 py-4 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            id="back-to-services-btn"
            onClick={onBack}
            className="group flex items-center gap-2.5 text-xs font-mono font-bold text-[#111111] hover:text-[#EF4444] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Capabilities
          </button>
          <span className="font-mono text-[9px] text-[#EF4444] font-extrabold tracking-widest hidden md:inline">
            CORE DIVISION // {service.index} // {service.category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* 1. SERVICE OVERVIEW (Hero & Layout Row 1) */}
      <section id="service-overview-section" className="relative">
        
        {/* Hero Block with dark overlay */}
        <div id="service-detail-hero" className="relative h-[40vh] min-h-[320px] bg-[#111111] flex items-center justify-center overflow-hidden border-b border-[#EF4444]">
          <div className="absolute inset-0 z-0">
            <img
              id="detail-hero-bg-img"
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover filter brightness-[0.35] saturate-[0.60]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#111111]/70" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              S.R.CHITECTS CO. // STRUCTURAL EXECUTION
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-none max-w-4xl mx-auto">
              We Don't Just Build. We Craft Your Reality.
            </h1>
            <div className="pt-2">
              <button
                id="hero-inquire-direct-btn"
                onClick={() => onToggleView("home", "contact")}
                className="bg-[#EF4444] hover:bg-white hover:text-[#111111] text-white px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300 pointer-events-auto cursor-pointer"
              >
                Inquire For This Service
              </button>
            </div>
          </div>
        </div>

        {/* Layout Row 1 (Image Left, Text Right) */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 border-b border-[#E5E5E5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Image in Action */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] bg-[#F5F5F5] border-2 border-[#111111] p-4 flex items-center justify-center">
                <div className="absolute -top-3 -left-3 bg-[#EF4444] text-white text-[8px] font-mono px-2 py-0.5 uppercase tracking-widest">
                  Active Coordinates
                </div>
                
                <div className="relative w-full h-full overflow-hidden border border-[#E5E5E5]">
                  <img
                    id="service-action-image"
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover filter saturate-[0.7] brightness-[0.9]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/30 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right Column: Narrative content info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                01 // Comprehensive Scope Overview
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] leading-tight uppercase tracking-tight">
                {detailedData.narrativeTitle}
              </h2>
              <div className="w-16 h-1 bg-[#EF4444]" />
              <p className="text-zinc-800 font-sans text-sm md:text-base leading-relaxed font-semibold">
                {detailedData.narrativeText}
              </p>
              
              {/* Highlight specs bullet matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#F5F5F5]">
                {service.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 font-mono text-[11px] text-zinc-700 font-bold">
                    <div className="w-1.5 h-1.5 bg-[#EF4444]" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR METHODOLOGY & APPROACH (Layout Row 2) */}
      <section id="service-methodology-section" className="py-24 bg-[#F5F5F5]/40 border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Text Focus */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                  02 // Step-By-Step Engineering Algorithm
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] leading-none uppercase tracking-tight">
                  {detailedData.methodologyTitle}
                </h2>
                <div className="w-16 h-1 bg-[#111111]" />
              </div>

              {/* Methodology list steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {detailedData.methodologySteps.map((mStep, i) => (
                  <div key={i} className="space-y-3 p-5 bg-white border border-[#E5E5E5] hover:border-[#EF4444] transition-colors">
                    <span className="font-mono font-black text-2xl text-[#EF4444] block">
                      {mStep.step}
                    </span>
                    <h4 className="font-display font-bold text-sm text-[#111111] uppercase tracking-tight">
                      {mStep.label}
                    </h4>
                    <p className="text-zinc-500 font-sans text-xs leading-relaxed font-semibold">
                      {mStep.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Blueprint Placeholder structure */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] bg-[#111111] border-2 border-[#111111] p-4">
                <div className="absolute top-2 left-2 font-mono text-[8px] text-[#EF4444] uppercase tracking-[0.2em] z-10">
                  REF_BLUEPRINT_LIDAR_26
                </div>

                <div className="relative w-full h-full overflow-hidden border border-white/10">
                  <img
                    id="methodology-blueprint-img"
                    src="/src/assets/images/values_blueprint_1780843126852.png"
                    alt="Tactical architecture blueprint"
                    className="w-full h-full object-cover filter brightness-[0.7] saturate-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. KEY DELIVERABLES & BENCHMARKS (Layout Row 3 - Stacked List) */}
      <section id="service-deliverables-section" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-xl mb-16 space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              03 // Contract Deliverables & Gate Releases
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] uppercase leading-none tracking-tight">
              Definitive Technical Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Large vertical imagery block anchoring */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[480px] bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden">
                <img
                  id="deliverables-vertical-anchor-img"
                  src="/src/assets/images/apex_tower_1780842026378.png"
                  alt="Apex tower structural vertical profile layout"
                  className="w-full h-full object-cover filter saturate-[0.60] brightness-[0.85]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white space-y-2">
                  <span className="font-mono text-[9px] text-[#EF4444] font-bold tracking-widest uppercase block">
                    PROJECT LOGS 2026
                  </span>
                  <p className="font-display font-bold text-lg uppercase tracking-tight max-w-xs leading-none">
                    Establishing Uncompromised Benchmarks From Spatial Drafting Up To Handover Codes.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Three vertically stacked, low-profile horizontal panels */}
            <div className="lg:col-span-7 space-y-6">
              {detailedData.deliverables.map((deliv, i) => (
                <div
                  id={`deliverable-panel-${i}`}
                  key={i}
                  className="border-2 border-[#111111] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center bg-white hover:border-[#EF4444] transition-all"
                >
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-0.5 bg-[#EF4444] text-white text-[9px] font-mono tracking-widest uppercase">
                      CODE: {deliv.badge}
                    </span>
                    <h3 className="font-display font-black text-lg sm:text-xl text-[#111111] uppercase tracking-tight leading-none">
                      {deliv.title}
                    </h3>
                    <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed font-semibold max-w-xl">
                      {deliv.desc}
                    </p>
                  </div>
                  
                  <div className="shrink-0 font-mono text-[10px] uppercase font-bold text-zinc-400 bg-zinc-50 border border-[#E5E5E5] px-3 py-1 self-end sm:self-center">
                    VERIFIED // RELEASE_0{i + 1}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. QUALITY & STRUCTURAL INTEGRITY STANDARDS (Layout Row 4) */}
      <section id="service-standards-section" className="py-24 bg-[#111111] text-white border-b border-[#EF4444]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Detailed breakdown */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                  04 // Materials Compliance & Certifications
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase leading-none tracking-tight">
                  Structural Integrity & Safety Benchmarks
                </h2>
                <div className="w-16 h-1 bg-[#EF4444]" />
              </div>

              <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed font-semibold max-w-xl">
                {detailedData.standardsText} We execute direct third-party core crushing assessments on all concrete mixtures, providing physical aggregates files that back up spatial drawings.
              </p>

              {/* Checklist points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
                {detailedData.standardsPoints.map((pt, i) => (
                  <div key={i} className="pt-4 sm:pt-0 sm:pl-6 first:pl-0 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                    <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Custom graphic placeholder with on-site photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-video sm:aspect-square bg-zinc-950 border border-zinc-800 p-4">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1),transparent_70%)] pointer-events-none" />
                
                <div className="relative w-full h-full overflow-hidden border border-zinc-800">
                  <img
                    id="standards-execution-photo"
                    src="/src/assets/images/about_how_we_build_1780843092581.png"
                    alt="Active concrete site structure inspection"
                    className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 right-3 bg-[#EF4444] text-white text-[9px] font-mono px-3 py-1 uppercase tracking-widest font-extrabold shadow-lg">
                    ISO-9001 APPROVED
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS (Layout Row 5 - Carousel/Grid) */}
      <section id="service-projects-section" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Header with navigation buttons */}
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                05 // Structural Portfolio Showcase
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] uppercase leading-none tracking-tight">
                Featured Projects
              </h2>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-2">
              <button
                id="prev-project-carousel-btn"
                onClick={handlePrevProject}
                className="p-3 bg-[#F5F5F5] hover:bg-[#EF4444] hover:text-white text-[#111111] transition-colors border border-[#E5E5E5] hover:border-transparent cursor-pointer"
                aria-label="Previous portfolio project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="next-project-carousel-btn"
                onClick={handleNextProject}
                className="p-3 bg-[#F5F5F5] hover:bg-[#EF4444] hover:text-white text-[#111111] transition-colors border border-[#E5E5E5] hover:border-transparent cursor-pointer"
                aria-label="Next portfolio project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Grid Layout conforming to horizontal Related Articles template layout with highlight item */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detailedData.featuredProjects.map((p, idx) => {
              // Highlight the active index to give smooth desktop responsive visual weight
              const isActive = idx === activeProjectIdx;
              return (
                <div
                  id={`project-carous-card-${idx}`}
                  key={idx}
                  className={`border p-6 flex flex-col justify-between transition-all duration-300 min-h-[380px] bg-white group cursor-pointer ${
                    isActive
                      ? "border-[#EF4444] bg-neutral-50/50 shadow-lg"
                      : "border-[#E5E5E5] hover:border-zinc-800"
                  }`}
                  onClick={() => setActiveProjectIdx(idx)}
                >
                  <div className="space-y-4">
                    {/* Project image */}
                    <div className="relative w-full h-44 bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden">
                      <img
                        id={`proj-carousel-img-${idx}`}
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover filter brightness-[0.80] saturate-50 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-[#111111] text-white text-[8px] font-mono px-2 py-0.5 tracking-widest uppercase">
                        {p.year}
                      </div>
                    </div>

                    <span className="text-[9px] font-mono text-zinc-400 font-bold uppercase tracking-widest block">
                      LOCATION: {p.location.toUpperCase()}
                    </span>
                    <h3 className="font-display font-black text-lg text-[#111111] uppercase tracking-tight group-hover:text-[#EF4444] transition-colors">
                      {p.name}
                    </h3>
                  </div>

                  <div className="pt-6 border-t border-[#F5F5F5] flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider group-hover:text-[#EF4444] transition-colors">
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. MEET OUR EXPERTS (Layout Row 6 - Team Blocks) */}
      <section id="service-experts-section" className="py-24 bg-[#F5F5F5]/30 border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-xl mb-16 space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              06 // Technical Specialty Advisory Committee
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] uppercase leading-none tracking-tight">
              Meet Our Specialist Board
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {detailedData.experts.map((exp, idx) => (
              <div
                id={`expert-profile-${idx}`}
                key={idx}
                className="bg-white border-2 border-[#111111] p-6 sm:p-8 flex flex-col sm:flex-row justify-between gap-6 hover:border-[#EF4444] transition-colors"
              >
                {/* Left: Text data */}
                <div className="space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-[#EF4444] font-bold tracking-widest uppercase block">
                      VERIFIED EXPERT SPECIALIST
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#111111] uppercase tracking-tight leading-none">
                      {exp.name}
                    </h3>
                    <p className="font-mono text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                      {exp.title}
                    </p>
                  </div>
                  <p className="text-zinc-600 font-sans text-xs leading-relaxed font-semibold max-w-sm">
                    {exp.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                    <UserCheck className="w-4 h-4 text-[#EF4444]" />
                    <span>Active Security Pass Level_5</span>
                  </div>
                </div>

                {/* Right: Square photo docked */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden self-center sm:self-auto">
                  <img
                    id={`expert-portrait-img-${idx}`}
                    src={exp.img}
                    alt={exp.name}
                    className="w-full h-full object-cover filter brightness-[0.8] saturate-50 hover:saturate-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. GLOBAL CALL TO ACTION (CTA) */}
      <section id="service-global-cta" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              Direct Collaborative On-Site Scope Engagement
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] uppercase tracking-tight leading-none">
              Ready to work together?
            </h2>
            <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-medium">
              Join forces with S.R.chitects Construction Corporation. We execute parametric structural drafts with uncompromising coordinate verification down to standard tolerances.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center pt-2">
            <button
              id="detail-action-primary-cta"
              onClick={() => onToggleView("home", "contact")}
              className="flex-1 bg-[#111111] hover:bg-[#EF4444] text-white py-4.5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-[#111111] hover:border-[#EF4444] cursor-pointer"
            >
              Initiate Corporate Quote
            </button>
            <button
              id="detail-action-secondary-cta"
              onClick={onBack}
              className="flex-1 bg-transparent hover:bg-neutral-50 text-zinc-600 py-4.5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-zinc-300 hover:border-zinc-800 cursor-pointer"
            >
              Compare other Capabilities
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
