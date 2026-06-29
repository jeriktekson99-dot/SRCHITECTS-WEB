/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Map, 
  Compass, 
  Layers, 
  Building, 
  Home, 
  ShieldAlert, 
  Leaf, 
  Hammer, 
  Briefcase, 
  CheckCircle,
  FileText,
  X
} from "lucide-react";
import ServiceDetailsView from "./ServiceDetailsView";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  index: string;
  desc: string;
  imageUrl: string;
  icon: React.ReactNode;
  specs: string[];
}

interface ServicesViewProps {
  onToggleView: (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => void;
  onSelectInquiryTopic?: (topic: string) => void;
}

export default function ServicesView({ onToggleView, onSelectInquiryTopic }: ServicesViewProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectBrief, setProjectBrief] = useState("");

  const services: ServiceItem[] = [
    {
      id: "srv-1",
      index: "CAP_01",
      category: "Conceptual Phase",
      title: "Architectural Design & Masterplanning",
      desc: "Comprehensive urban layout plans and bold brutalist blueprints. We translate visionary conceptual sketch lines into parametrically optimized, structurally balanced models.",
      imageUrl: "/src/assets/images/geo_sketch_1780842009578.png",
      icon: <Map className="w-5 h-5" />,
      specs: [
        "Parametric Space Modeling",
        "Brutalist & Minimalist Aesthetics",
        "Virtual 3D Site Simulations",
        "Regulatory Zoning Consultation"
      ]
    },
    {
      id: "srv-2",
      index: "CAP_02",
      category: "Engineering Phase",
      title: "Structural Engineering & Analysis",
      desc: "Advanced load path computations and seismic coefficient simulations. We design custom high-tensile steel skeleton structures and massive load-bearing columns built to defy shear force.",
      imageUrl: "/src/assets/images/steel_nexus_1780842062992.png",
      icon: <Compass className="w-5 h-5" />,
      specs: [
        "Seismic Shear Calculations",
        "Wind and Gravity Load Pathing",
        "Fibre-Reinforced Concrete Specifications",
        "Foundation Stress Profiling"
      ]
    },
    {
      id: "srv-3",
      index: "CAP_03",
      category: "Operational Oversight",
      title: "Project Management & Supervision",
      desc: "Active on-site logistical command backed by real-time laser-LIDAR coordinate scans. We coordinate supplier streams directly with zero developer margins and zero milestone drift.",
      imageUrl: "/src/assets/images/about_how_we_build_1780843092581.png",
      icon: <Briefcase className="w-5 h-5" />,
      specs: [
        "Laser-LIDAR Site Alignment Scans",
        "Decentralized Direct Procurement",
        "Strict Critical Path Method (CPM)",
        "On-Site Quality Assurance Audits"
      ]
    },
    {
      id: "srv-4",
      index: "CAP_04",
      category: "Bespoke Residential",
      title: "High-End Residential Construction",
      desc: "Crafting iconic private estates and custom gravity-defying cantilevered villas. Every residence integrates pure, raw architectural concrete textures with expansive panoramic glazing.",
      imageUrl: "/src/assets/images/cantilever_house_1780842043269.png",
      icon: <Home className="w-5 h-5" />,
      specs: [
        "Cantilever Equilibrium Framing",
        "Polished Concrete Finish Curing",
        "Integrated Natural Light Pathways",
        "Ultra-High-Privacy Perimeter Design"
      ]
    },
    {
      id: "srv-5",
      index: "CAP_05",
      category: "Heavy Industry",
      title: "Commercial & Industrial Infrastructure",
      desc: "Robust high-capacity commercial spaces, cold storage cells, and deep manufacturing facilities engineered to tolerate intensive automated load machinery.",
      imageUrl: "/src/assets/images/industrial_facility_1780843787140.png",
      icon: <Building className="w-5 h-5" />,
      specs: [
        "High-Durability C60 Slab Casts",
        "Intense Live-Load Floor Vibration Dampers",
        "Logistics Hub Spatial Optimization",
        "Complex Built-in Utility Integration"
      ]
    },
    {
      id: "srv-6",
      index: "CAP_06",
      category: "Interior Finish",
      title: "Interior Fit-Out & Space Planning",
      desc: "Clean interior layouts stripped of unnecessary ornamentation. We install bespoke architectural steel dividers, cast terrazzo blocks, and flush-integrated technology arrays.",
      imageUrl: "/src/assets/images/interior_design_1780843766875.png",
      icon: <Layers className="w-5 h-5" />,
      specs: [
        "Minimalist Brutalist Built-ins",
        "Bespoke Steel & Terrazzo Craft",
        "Acoustic & Thermal Panel Layering",
        "Concealed Automated Lighting Fixtures"
      ]
    },
    {
      id: "srv-7",
      index: "CAP_07",
      category: "Structural Safety",
      title: "Renovations & Structural Retrofitting",
      desc: "Reinforcing ageing metropolitan foundations and columns. We apply high-strength carbon fiber polymers and steel bracing sleeves to restore load safety indexes.",
      imageUrl: "/src/assets/images/values_blueprint_1780843126852.png",
      icon: <ShieldAlert className="w-5 h-5" />,
      specs: [
        "Carbon Fiber Reinforced Polymer (CFRP)",
        "Foundation Jet Grouting Underpinning",
        "Steel Core Concrete Jacketing",
        "Historic Structure Preservation"
      ]
    },
    {
      id: "srv-8",
      index: "CAP_08",
      category: "Ecological Engineering",
      title: "Green Building & Sustainable Design",
      desc: "Deploying structural systems utilizing passive airflow drafts and carbon-neutral raw aggregate mixes. We minimize operational carbon footprints without compromising structural integrity.",
      imageUrl: "/src/assets/images/concrete_pavilion_1780842081905.png",
      icon: <Leaf className="w-5 h-5" />,
      specs: [
        "Carbon-Capture Aggregate Cement",
        "Passive Geothermal Thermal Venting",
        "Solar Angle Energy Orientation",
        "Rainwater Filtration Reservoir Casting"
      ]
    },
    {
      id: "srv-9",
      index: "CAP_09",
      category: "Consolidated Delivery",
      title: "Turnkey Design-Build Services",
      desc: "A singular, unified contract that streamlines the design and building pipeline. One single source of on-site accountability from spatial rendering up to handover codes.",
      imageUrl: "/src/assets/images/apex_tower_1780842026378.png",
      icon: <Hammer className="w-5 h-5" />,
      specs: [
        "Consolidated Project Indemnity",
        "Unified Cost Guarantee Sheets",
        "Accelerated Fast-Track Timelines",
        "Complete Facility Handover Code Releases"
      ]
    }
  ];

  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);

  const handleInquireClick = (service: ServiceItem) => {
    setActiveServiceDetail(service);
    if (onSelectInquiryTopic) {
      onSelectInquiryTopic(service.title);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setSelectedService(null);
      onToggleView("quote");
    }, 2500);
  };

  if (activeServiceDetail) {
    return (
      <ServiceDetailsView 
        service={activeServiceDetail} 
        onBack={() => setActiveServiceDetail(null)} 
        onToggleView={onToggleView} 
      />
    );
  }

  return (
    <div id="services-page-layout" className="bg-[#FFFFFF]">
      
      {/* 1. SERVICES HERO SECTION - Styled to integrate with transparent header */}
      <section id="services-hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#111111] overflow-hidden flex items-center border-b border-[#EF4444]">
        {/* Full-bleed background image with a dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            id="services-hero-bg-img"
            src="/src/assets/images/hero_arch_1780841992150.png"
            alt="Full-bleed architectural structural steel frame background"
            className="w-full h-full object-cover filter brightness-[0.4] saturate-[0.70]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(239,68,68,0.15),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              S.R.chitects // Capabilities Matrix
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] tracking-tight uppercase">
              We Don't Just Build.<br />We <span className="text-[#EF4444]">Craft Your Reality</span>.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-sans leading-relaxed font-semibold max-w-2xl">
              From initial architectural concept to heavy-duty structural execution, we deliver uncompromised precision at every phase.
            </p>
            <div className="pt-2">
              <button
                id="services-scroll-btn"
                onClick={() => {
                  const target = document.getElementById("services-grid-intro");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-[#EF4444] hover:bg-white hover:text-[#111111] text-white px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300 pointer-events-auto cursor-pointer"
              >
                Scan Project Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES INTRO */}
      <section id="services-grid-intro" className="py-20 bg-[#FFFFFF] border-b border-[#E5E5E5] scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                What We Build // Engineering Portfolio Guide
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight uppercase">
                One Team. Every Stage of Construction.
              </h2>
              <div className="w-16 h-1 bg-[#EF4444]" />
            </div>

            <div className="lg:col-span-6">
              <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed font-semibold">
                S.R.chitects guarantees the end-to-end integration of architectural layout design and rigid structural engineering execution. By consolidating conceptual design, concrete aggregates, procurement, and safety metrics into a single accountability framework, we execute the most complex architectural geometries on time and on budget.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID MATRIX (3x3 Layout) */}
      <section id="services-grid-section" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <motion.article
                id={`service-card-${srv.id}`}
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white border border-[#E5E5E5] flex flex-col justify-between hover:border-[#EF4444] hover:shadow-xl transition-all duration-300 min-h-[500px] group relative cursor-pointer"
                onClick={() => handleInquireClick(srv)}
              >
                {/* Visual marker pin */}
                <div className="absolute top-2 right-2 bg-white/90 border border-[#E5E5E5] px-2 py-0.5 z-10 text-[8px] font-mono font-bold text-zinc-500 tracking-wider">
                  {srv.index}
                </div>

                <div>
                  {/* Top Section: Photo holder */}
                  <div className="relative w-full h-56 bg-[#F5F5F5] overflow-hidden border-b border-[#E5E5E5]">
                    <img
                      id={`service-img-preview-${srv.id}`}
                      src={srv.imageUrl}
                      alt={srv.title}
                      className="w-full h-full object-cover filter brightness-[0.80] saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Floating Service Icon */}
                    <div className="absolute bottom-4 left-4 bg-[#111111] group-hover:bg-[#EF4444] text-white p-3 border border-white/10 transition-colors duration-300 shadow-lg">
                      {srv.icon}
                    </div>
                  </div>

                  {/* Bottom Section: Content padding zone */}
                  <div className="p-8 space-y-4">
                    <span className="text-[9px] font-mono font-bold text-[#EF4444] tracking-widest uppercase block">
                      {srv.category}
                    </span>
                    <h3 className="font-display font-black text-xl text-[#111111] uppercase tracking-tight leading-tight group-hover:text-[#EF4444] transition-colors duration-200">
                      {srv.title}
                    </h3>
                    <p className="text-zinc-500 font-sans text-xs leading-relaxed font-semibold">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="px-8 pb-8 pt-4 border-t border-[#F5F5F5] flex items-center justify-between">
                  <span className="text-[8px] font-mono font-medium text-zinc-400 uppercase tracking-widest">
                    S.R.CHITECTS CO // LEVEL_5
                  </span>
                  
                  <button
                    id={`service-inquire-btn-${srv.id}`}
                    onClick={() => handleInquireClick(srv)}
                    className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#111111] hover:text-[#EF4444] uppercase tracking-wider relative group/btn transition-colors cursor-pointer"
                  >
                    INQUIRE SERVICE
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SECTION CTA TRANSITION */}
      <section id="services-cta" className="py-24 bg-[#111111] text-white border-t border-b border-[#EF4444]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              Immediate Bid Engagement Phase
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-none">
              Need Custom Structural Execution?
            </h2>
            <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-medium">
              We translate critical architectural geometry into predictable, durable physical form. Engage directly with S.R.chitects for comprehensive on-site review.
            </p>
          </div>

          <div className="pt-2 max-w-xs mx-auto">
            <button
              id="services-cta-global-btn"
              onClick={() => onToggleView("quote")}
              className="w-full group flex items-center justify-center gap-3 bg-[#EF4444] hover:bg-white hover:text-[#111111] p-5 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-[#EF4444] cursor-pointer"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Dynamic Modal Inquiry Overlay Panel */}
      <AnimatePresence>
        {selectedService && (
          <div
            id="service-inquiry-modal-backdrop"
            className="fixed inset-0 z-50 bg-[#111111]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              id="service-inquiry-modal-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-[#111111] max-w-xl w-full border-2 border-[#111111] overflow-hidden relative p-8 md:p-10 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="close-inquiry-modal-btn"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-[#111111] text-white p-2 text-xs hover:bg-[#EF4444] font-mono uppercase tracking-widest cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Inquiry Header */}
              <div className="border-b border-[#E5E5E5] pb-4">
                <span className="text-[10px] font-mono font-bold text-[#EF4444] uppercase tracking-widest">
                  SERVICE DETAILED SCOPE // {selectedService.index}
                </span>
                <h3 className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight leading-none mt-2">
                  {selectedService.title}
                </h3>
              </div>

              {!inquirySubmitted ? (
                /* Interactive Engagement Form */
                <form id="srv-inquiry-form" onSubmit={handleFormSubmit} className="space-y-4">
                  <p className="text-zinc-600 font-sans text-xs leading-relaxed font-semibold">
                    You are formulating an advisory request for S.R.chitects' <strong className="text-[#111111]">{selectedService.title}</strong> division. Please enter high-level project parameters to launch our scoping protocols:
                  </p>

                  <div className="border border-zinc-200 bg-zinc-50 p-4">
                    <span className="text-[9px] font-mono font-bold text-[#111111] uppercase tracking-wider block mb-2">
                      Division Capabilities Included:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] font-mono text-zinc-600 font-semibold">
                          <CheckCircle className="w-3.5 h-3.5 text-[#EF4444]" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Full Name // Authorized Signatory *
                      </label>
                      <input
                        id="inquiry-client-name"
                        type="text"
                        required
                        placeholder="e.g. Director Carlos Mendoza"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-white border border-[#E5E5E5] p-3 text-xs font-mono text-[#111111] focus:border-[#EF4444] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Corporate Contact Email Address *
                      </label>
                      <input
                        id="inquiry-client-email"
                        type="email"
                        required
                        placeholder="e.g. engineering@alliance-assets.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-white border border-[#E5E5E5] p-3 text-xs font-mono text-[#111111] focus:border-[#EF4444] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Scope parameters // Estimated Sqm *
                      </label>
                      <textarea
                        id="inquiry-project-brief"
                        required
                        rows={3}
                        placeholder="Describe your site challenges, seismic needs, structural targets, or dynamic spatial requirements..."
                        value={projectBrief}
                        onChange={(e) => setProjectBrief(e.target.value)}
                        className="w-full bg-white border border-[#E5E5E5] p-3 text-xs font-mono text-[#111111] focus:border-[#EF4444] focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Form Trigger buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      id="inquiry-form-submit-btn"
                      type="submit"
                      className="flex-1 bg-[#EF4444] hover:bg-[#111111] text-white py-3.5 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 pointer-events-auto cursor-pointer"
                    >
                      Authenticate Inquiry
                    </button>
                    <button
                      id="inquiry-form-cancel-btn"
                      type="button"
                      onClick={() => setSelectedService(null)}
                      className="border border-[#E5E5E5] hover:bg-neutral-50 text-zinc-500 font-mono py-3.5 px-4 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </form>
              ) : (
                /* Success visual state */
                <div id="inquiry-success-state" className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-red-50 text-[#EF4444] rounded-full flex items-center justify-center mx-auto border border-[#EF4444]/20">
                    <FileText className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.2em] block">
                      TRANSMISSION SUCCESSFUL
                    </span>
                    <h4 className="font-display font-black text-xl text-[#111111] uppercase tracking-tight">
                      Corporate Scoping Approved
                    </h4>
                    <p className="text-zinc-500 font-sans text-xs leading-relaxed max-w-sm mx-auto font-semibold">
                      Inquiry files for {selectedService.title} have been indexed by S.R.chitects Cooperative Legal Division. Redirecting to contact protocols...
                    </p>
                  </div>

                  <div className="w-24 h-[2px] bg-zinc-200 mx-auto animate-pulse" />
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
