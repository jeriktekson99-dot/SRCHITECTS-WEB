/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight,
  ShieldAlert, 
  MapPin, 
  User, 
  Briefcase, 
  Compass, 
  Layers, 
  HardHat, 
  CheckCircle2, 
  Send 
} from "lucide-react";

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

interface ProjectDetailsViewProps {
  project: PortfolioProject;
  onBack: () => void;
  onToggleView: (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => void;
}

interface RichProjectMeta {
  client: string;
  timeline: string;
  totalSqm: string;
  status: string;
  projectDirector: string;
  leadEngineer: string;
  narrativeTitle: string;
  paragraphs: string[];
  galleryThumbs: string[];
}

export default function ProjectDetailsView({ project, onBack, onToggleView }: ProjectDetailsViewProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  // Dynamic Metadata Mapper returning realistic high-fidelity parameters per project
  const getRichMeta = (id: string): RichProjectMeta => {
    switch (id) {
      case "proj-1":
        return {
          client: "Apex Development Corp",
          timeline: "24 Months",
          totalSqm: "42,000 SQM",
          status: "Completed",
          projectDirector: "Dir. Ricardo Almeda, PMP",
          leadEngineer: "Engr. Stefan Rostov, PE",
          narrativeTitle: "Bringing Structural Dominance and Brutalist Precision to Apex Plaza",
          paragraphs: [
            "The challenge of the Apex Tower lay in its soaring aspect ratio coupled with severe typhonic wind shear profiles in the metropolitan corridor. S.R.chitects resolved these forces by designing a continuous vertical load-bearing concrete core, cast using proprietary C60 high-durability aggregates.",
            "Instead of hiding the core behind aluminum composite sheets, our designers celebrate it. The building features an exposed, sand-textured concrete exterior grid that functions as a structural frame while providing natural shade panels that lower thermal loading by up to 22%.",
            "This landmark integrates advanced foundation jet grouting and high-capacity seismic dampers at three intermediate levels, establishing a new safety baseline for metropolitan high-rises."
          ],
          galleryThumbs: [
            "/src/assets/images/apex_tower_1780842026378.png",
            "/src/assets/images/values_blueprint_1780843126852.png",
            "/src/assets/images/column_atrium_1780842124958.png",
            "/src/assets/images/about_how_we_build_1780843092581.png"
          ]
        };
      case "proj-2":
        return {
          client: "Private Elite Client",
          timeline: "14 Months",
          totalSqm: "750 SQM",
          status: "Completed",
          projectDirector: "Arch. Sarah Jenkins, AIA",
          leadEngineer: "Engr. Stefan Rostov, PE",
          narrativeTitle: "Defying Gravity with a 12-Meter Structural Cantilever Over Tagaytay Ridge",
          paragraphs: [
            "Suspended directly over a severe 45-degree slope, the Cantilever Ridge House represents an extraordinary intersection of architectural courage and rigid civil engineering calculations. S.R.chitects calculated the rock-anchor foundation down to sub-millimeter tolerances.",
            "High-tensile carbon polymer tension rods run throughout the top and base concrete slabs, forming a unified box truss that counterweights the massive visual overhang. The raw timber imprint of our custom board formwork remains visible across the building's facade.",
            "Wide panoramic low-E insulated glass panels wrap around the front, providing uninterrupted territorial reviews while offering absolute defense against extreme typhonic crosswinds."
          ],
          galleryThumbs: [
            "/src/assets/images/cantilever_house_1780842043269.png",
            "/src/assets/images/concrete_pavilion_1780842081905.png",
            "/src/assets/images/interior_design_1780843766875.png",
            "/src/assets/images/values_blueprint_1780843126852.png"
          ]
        };
      case "proj-3":
        return {
          client: "Nexus Global Logistics Corp",
          timeline: "18 Months",
          totalSqm: "22,000 SQM",
          status: "Completed",
          projectDirector: "Director Ricardo Almeda",
          leadEngineer: "Engr. Stefan Rostov, PE",
          narrativeTitle: "High-Capacity Column-Free Space Engineering for Steel Nexus Hub",
          paragraphs: [
            "S.R.chitects' engineering team compiled advanced structural blueprints to achieve an unprecedented 120-meter clear column-free span. We designed massive Grade-50 bolted steel truss assemblies and anchor collars that handle lateral shear cleanly.",
            "The floor utilizes a specialized high-density C35 concrete aggregate mixed with synthetic fibers to form a jointless monolithic slab. This slab absorbs intense vibration forces from high-capacity automated gantry cranes and logistics equipment.",
            "By managing the supply pipeline directly from steel foundry yards to the site coordinates, we preserved perfect project margins while finishing two weeks ahead of schedule."
          ],
          galleryThumbs: [
            "/src/assets/images/steel_nexus_1780842062992.png",
            "/src/assets/images/industrial_facility_1780843787140.png",
            "/src/assets/images/about_how_we_build_1780843092581.png",
            "/src/assets/images/values_blueprint_1780843126852.png"
          ]
        };
      default:
        return {
          client: "Luzon Infrastructure Partners",
          timeline: "12 Months",
          totalSqm: "1,850 SQM",
          status: "Completed",
          projectDirector: "Arch. Sarah Jenkins, AIA",
          leadEngineer: "Engr. Stefan Rostov, PE",
          narrativeTitle: "Structural Raw Concrete Harmony & Minimalist Spatial Organization",
          paragraphs: [
            `S.R.chitects approached this physical asset with our core philosophy: stripping away superficial decoration to expose the pure structural truth of the materials. We cast high-volume monolithic concrete walls and polished terrazzo aggregates that require zero maintenance over their life cycles.`,
            "Continuous micro-slit thermal glazing strips are mathematically positioned to harness passive sea drafts and solar orientation ratios. The result is a structure that regulates its own thermal mass.",
            "Every load path and concrete poured on this site was inspected daily using LIDAR laser sweeps, validating that the final construction mirrors the master coordinate layouts."
          ],
          galleryThumbs: [
            project.imageUrl,
            "/src/assets/images/concrete_pavilion_1780842081905.png",
            "/src/assets/images/interior_design_1780843766875.png",
            "/src/assets/images/values_blueprint_1780843126852.png"
          ]
        };
    }
  };

  const richData = getRichMeta(project.id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setClientName("");
      setClientEmail("");
      setClientMessage("");
    }, 3000);
  };

  return (
    <div id={`project-case-details-${project.id}`} className="bg-[#FFFFFF] min-h-screen">
      
      {/* 0. Sub-Navigation Back Panel Pin */}
      <div className="bg-[#111111] border-b border-zinc-900 pt-32 pb-4 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            id="details-page-back-btn"
            onClick={onBack}
            className="group flex items-center gap-2.5 text-xs font-mono font-bold text-white hover:text-[#EF4444] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-white group-hover:text-[#EF4444]" />
            Back to Registry Portfolio
          </button>
          <span className="font-mono text-[9px] text-[#EF4444] font-extrabold tracking-widest hidden md:inline">
            CASE DETAILED SHADOWS // {project.category.toUpperCase()} // REG_{project.year}
          </span>
        </div>
      </div>

      {/* 1. PROJECT HERO COVER */}
      <section id="project-detail-hero" className="relative pt-12 pb-24 md:pt-16 md:pb-32 bg-[#111111] overflow-hidden flex items-center border-b border-[#EF4444]">
        {/* Full-bleed background architectural image */}
        <div className="absolute inset-0 z-0">
          <img
            id="detail-hero-cover-img"
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-[0.30] saturate-[0.5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#111111]/60" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111]/85 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              Case Analysis // Building Structural Report
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight uppercase tracking-tight">
              We Don't Just Build. <br className="hidden sm:inline" />We <span className="text-[#EF4444]">Craft Your Reality</span>.
            </h1>
            <p className="text-zinc-300 font-sans text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-bold uppercase tracking-wider">
              Project Blueprint Case Study: Uncompromising execution from foundation matrix to finish handover.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROJECT METADATA & SPECS BAR */}
      <section id="project-metadata-specs-bar" className="bg-[#FFFFFF] border-b border-[#E5E5E5] relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Metadata Grid blocks with fine grey border dividers - Two stacked responsive rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-r border-[#E5E5E5] md:divide-x divide-y md:divide-y-0 divide-[#E5E5E5]">
            
            {/* Column 1 */}
            <div className="p-6 md:p-8 space-y-1">
              <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">01 // CLIENT SIGNATORY</span>
              <p className="font-display font-black text-[#111111] text-lg uppercase tracking-tight">{richData.client}</p>
            </div>
            
            {/* Column 2 */}
            <div className="p-6 md:p-8 space-y-1">
              <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">02 // GEOGRAPHIC TARGET</span>
              <p className="font-display font-black text-[#111111] text-lg uppercase tracking-tight">{project.location}</p>
            </div>
            
            {/* Column 3 */}
            <div className="p-6 md:p-8 space-y-1">
              <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">03 // DIVISION CLASSIFICATION</span>
              <p className="font-display font-black text-[#EF4444] text-lg uppercase tracking-tight">{project.category}</p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#E5E5E5] border-r border-[#E5E5E5] md:divide-x divide-y md:divide-y-0 divide-[#E5E5E5]">
            
            {/* Column 4 */}
            <div className="p-6 md:p-8 space-y-1">
              <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">04 // EXECUTION TIMELINE</span>
              <p className="font-display font-black text-[#111111] text-lg uppercase tracking-tight">{richData.timeline}</p>
            </div>
            
            {/* Column 5 */}
            <div className="p-6 md:p-8 space-y-1">
              <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">05 // STRUCTURAL TOTAL AREA</span>
              <p className="font-display font-black text-[#111111] text-lg uppercase tracking-tight">{richData.totalSqm}</p>
            </div>
            
            {/* Column 6 */}
            <div className="p-6 md:p-8 space-y-1">
              <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">06 // DEPLOYMENT STATUS</span>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#EF4444] rounded-full animate-pulse" />
                <p className="font-display font-black text-[#111111] text-lg uppercase tracking-tight">{richData.status}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC MAIN CONTENT & SIDEBAR BLOCK */}
      <section id="project-asymmetric-narrative" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN COMPONENTS (70% on desktop) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Primary High-Fidelity Media Window */}
              <div className="relative w-full aspect-video bg-[#F5F5F5] border-2 border-[#111111] p-4 flex items-center justify-center">
                <div className="absolute -top-3 -left-3 bg-[#111111] text-white text-[8px] font-mono px-3 py-1 uppercase tracking-widest font-extrabold border border-white/10">
                  CAMERA FRAME PROTOCOL 0{activeMediaIndex + 1}
                </div>

                <div className="relative w-full h-full overflow-hidden border border-[#E5E5E5]">
                  <img
                    id="lightbox-primary-view-frame"
                    src={richData.galleryThumbs[activeMediaIndex]}
                    alt={`${project.title} detailed architectural coordinate view`}
                    className="w-full h-full object-cover filter saturation-[0.70] brightness-[0.90]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent" />
                </div>
              </div>

              {/* Thumbnail Gallery Strip */}
              <div className="grid grid-cols-4 gap-4 pt-2">
                {richData.galleryThumbs.map((thumbSrc, tIdx) => (
                  <button
                    id={`media-thumb-selector-${tIdx}`}
                    key={tIdx}
                    onClick={() => setActiveMediaIndex(tIdx)}
                    className={`relative aspect-square border-2 overflow-hidden transition-all duration-300 bg-[#F5F5F5] group ${
                      activeMediaIndex === tIdx ? "border-[#EF4444] scale-[0.98]" : "border-[#111111] hover:border-zinc-500"
                    }`}
                  >
                    <img
                      src={thumbSrc}
                      alt="Interior spec blueprint thumb"
                      className="w-full h-full object-cover filter saturate-50 group-hover:saturate-100 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  </button>
                ))}
              </div>

              {/* Editorial Narrative Content */}
              <div className="space-y-6 pt-4">
                <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                  Project Narrative // Core Implementation Analysis
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#111111] uppercase tracking-tight leading-none">
                  {richData.narrativeTitle}
                </h2>
                <div className="w-16 h-1 bg-[#EF4444]" />

                {/* Editorial Body Text Blocks */}
                <div className="space-y-4 text-zinc-700 font-sans text-sm md:text-base leading-relaxed font-semibold">
                  {richData.paragraphs.map((pText, pIdx) => (
                    <p key={pIdx}>
                      {pText}
                    </p>
                  ))}
                </div>

                {/* Structural highlight metrics check card */}
                <div className="border border-[#111111] p-6 bg-[#F5F5F5]/30">
                  <span className="text-[9px] font-mono font-extrabold text-[#EF4444] uppercase tracking-wider block mb-3">
                    Verified Structural Specifications Sheet Check:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.specs.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 font-mono text-[11px] font-bold text-[#111111]">
                        <CheckCircle2 className="w-4 h-4 text-[#EF4444] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bill of materials display table */}
                <div className="space-y-3 pt-6 border-t border-[#F5F5F5]">
                  <span className="text-[9px] font-mono font-extrabold text-[#111111] uppercase tracking-widest block">
                    Material Aggregate Deployment Ratios:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.materials.map((mat, i) => (
                      <div key={i} className="border border-zinc-200 p-4 bg-white">
                        <span className="text-[#EF4444] font-mono text-[9px] uppercase font-bold block mb-1">AGGREGATE 0{i + 1}</span>
                        <h4 className="text-[#111111] font-display font-black text-sm uppercase leading-none mb-2">{mat.item}</h4>
                        <span className="text-[#111111] font-mono text-xs font-extrabold">{mat.ratio}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN COMPONENTS (30% on desktop, sticky engagement sidebar) */}
            <div className="lg:col-span-4 lg:sticky lg:top-[160px]">
              
              <div className="border-2 border-[#111111] bg-[#F5F5F5] p-6 sm:p-8 space-y-8">
                
                {/* Informational Team Leads Block */}
                <div className="space-y-4">
                  <div className="border-b border-[#E5E5E5] pb-3">
                    <span className="text-[9px] font-mono font-extrabold text-zinc-400 uppercase tracking-widest">
                      SRC // ADVISORY LEAD BOARD
                    </span>
                    <h3 className="font-display font-black text-lg text-[#111111] uppercase tracking-tight mt-1">
                      Project Team Leads
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#EF4444] text-white p-2 shrink-0">
                        <User className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-zinc-400 block uppercase font-bold">PROJECT DIRECTOR</span>
                        <p className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wide">{richData.projectDirector}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#111111] text-white p-2 shrink-0">
                        <User className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-zinc-400 block uppercase font-bold">LEAD STRUCTURAL ENGINEER</span>
                        <p className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wide">{richData.leadEngineer}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Sidebar Scoping Form */}
                <div className="space-y-4 pt-6 border-t border-[#E5E5E5]">
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-[#EF4444] font-extrabold uppercase tracking-widest block">
                      SECURE PIPELINE DISPATCH
                    </span>
                    <h3 className="font-display font-black text-lg text-[#111111] uppercase tracking-tight">
                      Inquire About Similar Projects
                    </h3>
                    <p className="text-zinc-500 font-sans text-xs leading-normal font-semibold">
                      Establish spatial parameters with S.R.chitects relative to this asset layout code:
                    </p>
                  </div>

                  {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 block">
                          Full Name // Representative *
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Director Carlos Mendoza"
                          className="w-full bg-white border border-[#111111] p-3 text-xs font-mono text-[#111111] focus:border-[#EF4444] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 block">
                          Contact Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="e.g. engineering@alliance-assets.com"
                          className="w-full bg-white border border-[#111111] p-3 text-xs font-mono text-[#111111] focus:border-[#EF4444] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 block">
                          Technical brief / site limits *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={clientMessage}
                          onChange={(e) => setClientMessage(e.target.value)}
                          placeholder="Briefly state your site coordinate challenges, loading demands, or architectural target timelines..."
                          className="w-full bg-white border border-[#111111] p-3 text-xs font-mono text-[#111111] focus:border-[#EF4444] focus:outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#111111] hover:bg-[#EF4444] text-white py-3.5 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Dispatch Scoping Codes
                      </button>

                    </form>
                  ) : (
                    <div className="text-center py-6 space-y-4 bg-white border border-[#EF4444]/20 p-4">
                      <div className="w-12 h-12 bg-red-50 text-[#EF4444] rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] font-mono uppercase font-bold text-[#EF4444] tracking-wider block">TRANSMISSION DEPLOYED</span>
                        <h4 className="font-display font-bold text-xs text-[#111111] uppercase tracking-tight">Scoping Request Received</h4>
                        <p className="text-zinc-500 font-sans text-[10px] leading-relaxed">
                          Our legal & operations desk has indexed your coordinate parameters. S.R.chitects will follow-up shortly.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex items-center gap-2 text-[9px] font-mono text-zinc-400 font-bold justify-center uppercase">
                    <ShieldAlert className="w-4.5 h-4.5 text-[#EF4444]" />
                    <span>Secure SSL Scoping Route Active</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. GLOBAL CALL TO ACTION (CTA) */}
      <section id="details-global-contact-cta" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              Direct Collaborative On-Site Scope Engagement
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] uppercase tracking-tight leading-none">
              Ready to work together?
            </h2>
            <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-medium">
              Whether you have a project plan ready or need a team to design and build from scratch, let's talk about execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center pt-2">
            <button
              id="details-cta-primary-btn"
              onClick={() => onToggleView("quote")}
              className="flex-1 bg-[#111111] hover:bg-[#EF4444] text-white py-4.5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-[#111111] hover:border-[#EF4444] cursor-pointer"
            >
              Initiate Project Scope
            </button>
            <button
              id="details-cta-secondary-btn"
              onClick={onBack}
              className="flex-1 bg-transparent hover:bg-neutral-50 text-zinc-600 py-4.5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-zinc-300 hover:border-zinc-800 cursor-pointer"
            >
              Compare other Projects
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
