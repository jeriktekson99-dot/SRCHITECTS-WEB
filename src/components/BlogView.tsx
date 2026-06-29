/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ArticleDetailsView from "./ArticleDetailsView";
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  X, 
  ChevronRight, 
  FileText, 
  ArrowLeft,
  MessageSquare,
  Globe,
  Share2,
  CheckCircle2
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

interface BlogViewProps {
  onToggleView: (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => void;
}

export default function BlogView({ onToggleView }: BlogViewProps) {
  // 1. Array of Articles aligning with S.R.chitects' high-end execution & technical themes
  const initialArticles: Article[] = [
    {
      id: "blog-1",
      title: "Seismic Grounding & Deep Cantilever Safety Tolerances",
      category: "CIVIL ENGINEERING",
      excerpt: "An in-depth calculation guide modeling Level 8 lateral forces against high-tensile box steel trusses.",
      imageUrl: "/src/assets/images/cantilever_house_1780842043269.png",
      date: "June 2, 2026",
      readTime: "8 Min Read",
      author: {
        name: "Engr. Stefan Rostov, PE",
        role: "Chief Structural Engineer",
        avatar: "/src/assets/images/about_how_we_build_1780843092581.png"
      },
      tags: ["Seismic", "Structural Integrity", "Cantilever Calculation"],
      content: [
        "Modern architectural ambition increasingly mandates gravity-defying designs of massive projection volumes. When executing extreme civil cantilevers, S.R.chitects ignores decorative facades to prioritize pristine mathematical equilibrium under seismic configurations.",
        "To offset severe lateral ground shifts, our teams design deep-grouted rock anchor systems integrated with continuous high-density carbon-polymer reinforcement. Tension cords run throughout the concrete matrix to form an active box frame designed to neutralize extreme shear forces.",
        "Every batch of composite concrete aggregate poured is calibrated down to sub-millimeter coordinates. This guarantees that physical deflection curves strictly respect Level 8 seismic design standards without compromising visual structural lightness."
      ]
    },
    {
      id: "blog-2",
      title: "Parametric Thermal Chimneys in High-Rise Brutalism",
      category: "ARCHITECTURAL INNOVATION",
      excerpt: "Explorations into vertical ventilation shafts designed to lower core thermal loading by up to 22%.",
      imageUrl: "/src/assets/images/apex_tower_1780842026378.png",
      date: "May 28, 2026",
      readTime: "11 Min Read",
      author: {
        name: "Arch. Sarah Jenkins, AIA",
        role: "Director of Masterplanning",
        avatar: "/src/assets/images/leader_portrait_1780843111096.png"
      },
      tags: ["Monolithic Design", "Sustainability", "Thermal Massing"],
      content: [
        "As metropolitan heat domes expand, conventional active cooling corridors rapidly prove inefficient. Deep brutalist elements represent a raw, architectural opportunity to implement passive thermal zoning directly within the structural skeleton.",
        "By integrating hollow structural columns and vertical passive ventilation corridors, we create a stack-induced drafts loop. Continuous ocean winds enter the sub-atrium, absorb interior thermal load, and naturally vent through the geometric crown.",
        "This structural air routing decreases reliance on continuous electric HVAC systems by up to 22%, proving that heavy monolithic concrete coordinates can perform as intelligent green vessels."
      ]
    },
    {
      id: "blog-3",
      title: "Leveraging LIDAR Analysis for On-Site Column Placement",
      category: "INTELLIGENT TECHNOLOGY",
      excerpt: "Stripping off manual measurement lag. How daily drone scans isolate construction drift and protect margins.",
      imageUrl: "/src/assets/images/values_blueprint_1780843126852.png",
      date: "May 15, 2026",
      readTime: "6 Min Read",
      author: {
        name: "Dir. Ricardo Almeda, PMP",
        role: "Director of Project Operations",
        avatar: "/src/assets/images/about_how_we_build_1780843092581.png"
      },
      tags: ["LIDAR", "BIM Coordination", "Construction Management"],
      content: [
        "In typical construction workflows, structural drift is caught retrospectively, prompting expensive remedial structural steel jackets. Our zero-tolerance paradigm relies on active geometric auditing via BIM Level-3 coordination layers.",
        "Every active coordinate is scanned daily using premium orbital LIDAR sensors. Drones transmit point clouds directly to our digital twin frameworks, locating millimeter deviations before they multiply through upper concrete pours.",
        "Automated collision checking maintains flawless structural envelope alignment, delivering perfect peace of mind and maximum resource productivity on the ground."
      ]
    },
    {
      id: "blog-4",
      title: "Optimizing High-Volume Jointless Slabs in Commercial Zones",
      category: "MATERIAL COMPOSITION",
      excerpt: "Evaluating C35 concrete aggregates reinforced with fiber mesh overlays to handle continuous heavy machinery loads.",
      imageUrl: "/src/assets/images/steel_nexus_1780842062992.png",
      date: "May 09, 2026",
      readTime: "7 Min Read",
      author: {
        name: "Engr. Stefan Rostov, PE",
        role: "Chief Structural Engineer",
        avatar: "/src/assets/images/about_how_we_build_1780843092581.png"
      },
      tags: ["Concrete Chemistry", "Industrial Layouts", "Foundations"],
      content: [
        "Industrial logistics halls demand floor platforms that resist localized continuous pressure. Conventional expansion joints deteriorate rapidly under constant forklift friction, leading to concrete dusting and core fissures.",
        "S.R.chitects specifies proprietary fibre-mesh concrete aggregates poured monolithically in 1,200 sqm sections. This continuous C35 slab utilizes low-shrinkage chemistry to bound the core under extreme curing speed restrictions.",
        "The resulting seamless floor satisfies strict industrial vibration dampening specifications, ensuring a life-cycle span exceeding 40 years of continuous heavy-machinery activity."
      ]
    },
    {
      id: "blog-5",
      title: "Bespoke Terrazzo Columns and Advanced Fluid Grouting",
      category: "CRAFT & DETAIL",
      excerpt: "How meticulous aggregate selection and acid-etching produce architectural columns of pure raw beauty.",
      imageUrl: "/src/assets/images/interior_design_1780843766875.png",
      date: "April 24, 2026",
      readTime: "9 Min Read",
      author: {
        name: "Arch. Sarah Jenkins, AIA",
        role: "Director of Masterplanning",
        avatar: "/src/assets/images/leader_portrait_1780843111096.png"
      },
      tags: ["Interior Design", "Terrazzo", "Raw Aesthetic"],
      content: [
        "Structural columns should never be simplified as static loading pillars. In S.R.chitects' high-end residences, columns function as the visual anchor of the internal volume, pairing architectural brutalism with exquisite detail work.",
        "Our terrazzo mixtures utilize quartz, marble, and granite aggregations blended manually with premium light-grey ecological cement. Formwork is left to cure slowly, and acid-etched in three progressive passes to bring out the raw geological pattern.",
        "The resulting finish contains depth, absorbing and refracting light in deep shadows to create an enduring spatial narrative."
      ]
    },
    {
      id: "blog-6",
      title: "Urban Renewal Framing with Seismic Structural Glass Atriums",
      category: "COMMERCIAL DEVELOPMENT",
      excerpt: "Integrating massive laminated glazing envelopes with flexible steel expansion rings in metropolitan commercial centers.",
      imageUrl: "/src/assets/images/column_atrium_1780842124958.png",
      date: "April 11, 2026",
      readTime: "10 Min Read",
      author: {
        name: "Dir. Ricardo Almeda, PMP",
        role: "Director of Project Operations",
        avatar: "/src/assets/images/about_how_we_build_1780843092581.png"
      },
      tags: ["Structural Glazing", "High-Rise Atriums", "Seismic Isolation"],
      content: [
        "Atrium lobbies connecting multi-tower developments must handle extreme wind drift and temperature-induced expansion without structural strain. Standard rigid framing systems crack under violent seismic shear shifts.",
        "Our office introduced flexible steel gasket couplers at structural nodes, isolating the glazed panels from the secondary tower skeleton. High-performance safety glass sits suspended inside rubber-injected aluminum sleeves.",
        "This configuration creates localized seismic dampers at every corner, letting the glass facade float independently up to 15 centimeters during catastrophic coordinate movements."
      ]
    }
  ];

  // Extra paginated articles appended when "Load More Articles" is triggered
  const paginatedArticles: Article[] = [
    {
      id: "blog-7",
      title: "Low-Carbon Cement Synthetics: The Future of High-Rise Durability",
      category: "MATERIAL COMPOSITION",
      excerpt: "Testing carbon-capturing concrete aggregates that reduce corporate carbon footprints by up to 34% without sacrificing strength.",
      imageUrl: "/src/assets/images/industrial_facility_1780843787140.png",
      date: "March 30, 2026",
      readTime: "8 Min Read",
      author: {
        name: "Engr. Stefan Rostov, PE",
        role: "Chief Structural Engineer",
        avatar: "/src/assets/images/about_how_we_build_1780843092581.png"
      },
      tags: ["Eco-Tech", "Concrete Geometries", "Green Blueprints"],
      content: [
        "The construction sector is traditionally criticized for high carbon yields. At S.R.chitects, we deploy synthetic carbon-absorbing admixtures that permanently bind atmospheric carbon inside the cured building core.",
        "This specialized aggregate achieves a complete 48 MPa strength profile within standard 28-day hydration curves, establishing a sustainable, high-rise compliant building material.",
        "Structural engineers can now execute high-stress commercial structures with pristine safety matrices while delivering measurable corporate carbon offset indices."
      ]
    },
    {
      id: "blog-8",
      title: "Clash Detection Paradigms In Hyper-Dense Mechanical Blueprints",
      category: "INTELLIGENT TECHNOLOGY",
      excerpt: "Resolving piping, HVAC, and wiring conflict loops inside BIM platforms to optimize build cycles.",
      imageUrl: "/src/assets/images/values_blueprint_1780843126852.png",
      date: "March 12, 2026",
      readTime: "6 Min Read",
      author: {
        name: "Dir. Ricardo Almeda, PMP",
        role: "Director of Project Operations",
        avatar: "/src/assets/images/about_how_we_build_1780843092581.png"
      },
      tags: ["BIM Data", "Project Control", "Clash Mapping"],
      content: [
        "In complex industrial facilities, plumbing, high-voltage conduits, and HVAC duct networks regularly collide. Traditionally, these errors are resolved manually on site, inflating labor costs and breaking timeline scopes.",
        "Our digital-first BIM matrix conducts non-destructive virtual collision passes, identifying structural and pneumatic coordinate overlaps. This prevents routing delays and saves up to 4.5% of total project capital in field modification labor.",
        "Our execution teams receive absolute precision sheets before laying foundations, assuring safe, rapid, and transparent progress."
      ]
    },
    {
      id: "blog-9",
      title: "Crafting Floating Steel Staircase Cantilevers in Modern Atriums",
      category: "CRAFT & DETAIL",
      excerpt: "How structural steel plates and precise micro-welds create the illusion of weightlessness in minimalist spaces.",
      imageUrl: "/src/assets/images/concrete_pavilion_1780842081905.png",
      date: "February 22, 2026",
      readTime: "7 Min Read",
      author: {
        name: "Arch. Sarah Jenkins, AIA",
        role: "Director of Masterplanning",
        avatar: "/src/assets/images/leader_portrait_1780843111096.png"
      },
      tags: ["Interior Design", "Steel Crafting", "Minimalism"],
      content: [
        "At S.R.chitects, we treat transitional staircase steps as functional sculptures. By welding high-gauge steel plate stair fins directly to the concealed lateral wall beams, we eradicate the need for vertical support pillars.",
        "The treads are covered with micro-polished grey terrazzo, providing a robust tactile experience while maintaining the raw architectural theme. Sound dampening panels are isolated inside to prevent structural acoustic loops.",
        "This sculptural approach delivers an immaculate, weightless aesthetic that elevates the core volumetric space of custom luxury residences."
      ]
    }
  ];

  // States
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [selectedArticleDetail, setSelectedArticleDetail] = useState<Article | null>(null);

  // Categories list
  const categoriesList = ["All Insights", "CIVIL ENGINEERING", "ARCHITECTURAL INNOVATION", "INTELLIGENT TECHNOLOGY", "MATERIAL COMPOSITION", "CRAFT & DETAIL"];

  // Filter logic
  const filteredArticles = articles.filter((art) => {
    return activeCategory === "All Insights" || art.category === activeCategory;
  });

  // Dynamic pagination simulate trigger
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setArticles((prev) => [...prev, ...paginatedArticles]);
      setHasMore(false); // No more extra arrays to append
      setIsLoadingMore(false);
    }, 1500);
  };

  if (selectedArticleDetail) {
    return (
      <ArticleDetailsView
        article={selectedArticleDetail}
        allArticles={articles}
        onBack={() => setSelectedArticleDetail(null)}
        onSelectArticle={(art) => setSelectedArticleDetail(art)}
        onToggleView={onToggleView}
      />
    );
  }

  return (
    <div id="blog-insights-layout" className="bg-[#FFFFFF] min-h-screen">
      
      {/* 1. BLOG HERO SECTION */}
      <section id="blog-hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#111111] overflow-hidden flex items-center border-b border-[#EF4444]">
        {/* Full-bleed background construction site or architectural project background image */}
        <div className="absolute inset-0 z-0">
          <img
            id="blog-hero-bg-img"
            src="/src/assets/images/about_how_we_build_1780843092581.png"
            alt="Heavy steel construction coordinates backdrop"
            className="w-full h-full object-cover filter brightness-[0.32] saturate-[0.60] contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111111]/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              S.R.CHITECTS DESIGN-BUILD // CORPORATE INSIGHTS LAB
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] tracking-tight uppercase">
              We Don't Just Build.<br />We <span className="text-[#EF4444]">Craft Your Reality</span>.
            </h1>
            <p className="text-zinc-300 font-sans text-xs sm:text-sm md:text-lg leading-relaxed font-bold uppercase tracking-wider max-w-2xl">
              Blueprints, breakthroughs, and building blocks—expert technical insights from our on-site engineering and design teams.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SPOTLIGHT (Asymmetric Layout Row - Left 55% / Right 45%) */}
      <section id="blog-featured-spotlight" className="py-20 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="border-2 border-[#111111] grid grid-cols-1 lg:grid-cols-12 overflow-hidden hover:shadow-2xl transition-all duration-300">
            
            {/* Left Column (Text - 55% width) - Heavy typography architecture */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-[#111111]">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#EF4444] uppercase tracking-[0.25em] block">
                  INNOVATION & TECHNOLOGY // SPOTLIGHT FEATURE
                </span>
                
                <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#111111] leading-[1.05] tracking-tight uppercase hover:text-[#EF4444] transition-colors cursor-pointer"
                  onClick={() => {
                    // Set custom featured article detail
                    setSelectedArticleDetail({
                      id: "blog-featured",
                      title: "Standardizing Reality Capture Across Complex Structural Projects",
                      category: "INNOVATION & TECHNOLOGY",
                      excerpt: "How our teams combine continuous LIDAR point clouds and Drone telemetry coordinates to verify structural placements down to the sub-millimeter.",
                      imageUrl: "/src/assets/images/values_blueprint_1780843126852.png",
                      date: "June 7, 2026",
                      readTime: "12 Min Read",
                      author: {
                        name: "Dir. Ricardo Almeda, PMP",
                        role: "Director of Project Operations",
                        avatar: "/src/assets/images/about_how_we_build_1780843092581.png"
                      },
                      tags: ["Reality Capture", "Construction Drones", "LIDAR Mapping", "High-End Quality Control"],
                      content: [
                        "Traditional survey and site proofing templates generate continuous delays, keeping architectural modeling distinct from actual on-site structural execution. S.R.chitects bridges this coordination gap using live orbital reality capture systems.",
                        "Our field engineers dispatch autonomous drones each daily shift to map the exact steel framework and concrete grid coordinate system. This point cloud data compiles automatically, generating a real-time BIM Level-3 clash analysis overlay on our operations boards.",
                        "Millimeter variances are highlighted and corrected immediately, guaranteeing zero alignment draft drift prior to upper levels pouring, and protecting project timelines safely and flawlessly."
                      ]
                    });
                  }}
                >
                  Standardizing Reality Capture Across Complex Structural Projects
                </h2>
                
                <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed font-semibold max-w-xl">
                  Uncompromised accuracy requires stripping away manual tape measurements. Our operations team maps raw framing coordinates daily using orbital LIDAR drones and continuous BIM Level-3 point clouds to isolate structural drift instantly.
                </p>
              </div>

              {/* Author & Read info at bottom */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#F5F5F5] text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#111111] overflow-hidden bg-[#F5F5F5] shrink-0">
                    <img
                      src="/src/assets/images/about_how_we_build_1780843092581.png"
                      alt="Dir. Ricardo Almeda"
                      className="w-full h-full object-cover filter grayscale contrast-125"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111] uppercase leading-tight">Dir. Ricardo Almeda, PMP</h4>
                    <p className="text-[10px] text-zinc-400 font-semibold uppercase leading-tight">Director of Project Operations</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-zinc-500 font-bold uppercase tracking-wider text-[10px]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                    <span>June 7, 2026</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#EF4444]" />
                    <span>12 Min Read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Image - 45% width) - Showcase modern construction tech */}
            <div className="lg:col-span-5 relative min-h-[300px] bg-[#F5F5F5] group overflow-hidden">
              <img
                src="/src/assets/images/values_blueprint_1780843126852.png"
                alt="Construction reality capture blue coordinate blueprint"
                className="w-full h-full object-cover filter brightness-[0.70] saturate-50 group-hover:scale-105 group-hover:saturate-100 group-hover:brightness-50 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              
              {/* Technical LIDAR coordinate overlays */}
              <div className="absolute inset-0 bg-neutral-900/40 pointer-events-none" />
              <div className="absolute top-4 right-4 bg-[#111111] text-white text-[8px] font-mono px-3 py-1 uppercase tracking-widest font-extrabold border border-[#EF4444]/40">
                ACTIVE SCAN NODE // 0929
              </div>
              
              <div className="absolute bottom-6 left-6 p-4 bg-white/95 border border-[#111111] max-w-xs text-[10px] font-mono text-[#111111] hidden sm:block">
                <span className="text-[#EF4444] font-black text-[8px] block mb-1">FIELD AUDIT COMPLIANT:</span>
                <p className="font-sans text-[11px] font-bold text-zinc-700 leading-normal">Our proprietary scans align material aggregates against the direct target coordinates flawlessly.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ARTICLES GRID MATRIX (3-Column Layout & Category Selector) */}
      <section id="blog-insights-grid" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Categories Inline Slider Navigation */}
          <div className="border-b border-[#E5E5E5] pb-6 mb-12 flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-mono font-bold text-[#111111] uppercase tracking-[0.2em] mr-4 whitespace-nowrap">
              FILTER SCIENTIFIC DISPATCHES:
            </span>
            {categoriesList.map((catOpt) => (
              <button
                key={catOpt}
                onClick={() => setActiveCategory(catOpt)}
                className={`px-4 py-2 font-mono text-[10px] font-bold uppercase border-2 transition-all cursor-pointer ${
                  activeCategory === catOpt 
                    ? "bg-[#111111] border-[#111111] text-white" 
                    : "border-zinc-200 text-zinc-500 hover:border-[#EF4444] hover:text-[#EF4444]"
                }`}
              >
                {catOpt === "All Insights" ? "[ ALL LAB PAPERS ]" : catOpt}
              </button>
            ))}
          </div>

          {/* 3-Column Grid representing modular standard blog cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((art, idx) => (
                <motion.article
                  id={`article-card-${art.id}`}
                  key={art.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white border border-[#E5E5E5] flex flex-col justify-between hover:border-[#EF4444] hover:shadow-xl transition-all duration-300 min-h-[500px] group relative cursor-pointer"
                  onClick={() => setSelectedArticleDetail(art)}
                >
                  <div>
                    {/* Top: Aspect-ratio image window */}
                    <div className="relative w-full h-[220px] bg-[#F5F5F5] overflow-hidden border-b border-[#E5E5E5]">
                      <img
                        id={`article-card-cover-${art.id}`}
                        src={art.imageUrl}
                        alt={art.title}
                        className="w-full h-full object-cover filter saturation-50 brightness-[0.80] group-hover:scale-105 group-hover:saturate-100 group-hover:brightness-60 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent pointer-events-none" />
                      
                      <div className="absolute top-2.5 left-2.5 bg-neutral-900 border border-zinc-800 text-white text-[8px] font-mono px-2 py-0.5 z-10 uppercase tracking-widest font-extrabold">
                        {art.readTime}
                      </div>
                    </div>

                    {/* Bottom: Padding zone */}
                    <div className="p-6 space-y-4">
                      <span className="text-[9px] font-mono font-bold text-[#EF4444] uppercase tracking-widest block">
                        {art.category} // S.R.C
                      </span>
                      <h3 className="font-display font-black text-xl text-[#111111] group-hover:text-[#EF4444] transition-colors leading-tight uppercase tracking-tight">
                        {art.title}
                      </h3>
                      <p className="text-zinc-500 font-sans text-xs leading-relaxed font-semibold line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Base Metadata Line */}
                  <div className="p-6 border-t border-[#F5F5F5] flex items-center justify-between text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                      <span>{art.date}</span>
                    </span>
                    <span className="text-[#111111] group-hover:text-[#EF4444] flex items-center gap-1 transition-colors">
                      [ INSPECT BLUEPRINT ]
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty Results state */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-24 border border-dashed border-zinc-200">
              <FileText className="w-10 h-10 text-zinc-300 mx-auto mb-4" />
              <h3 className="font-display font-bold text-base text-[#111111] uppercase tracking-wider">No Dispatches Indexed Under This Class</h3>
              <p className="text-zinc-500 font-sans text-xs max-w-sm mx-auto font-semibold mt-1">
                Our operations team is currently drafting more peer-reviewed field reports for this classification segment.
              </p>
            </div>
          )}

          {/* Pagination Load More Button */}
          {hasMore && filteredArticles.length > 0 && (
            <div className="mt-16 text-center">
              <button
                id="load-more-articles-btn"
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="w-full bg-[#111111] hover:bg-[#EF4444] disabled:bg-zinc-300 text-white py-5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-[#111111] hover:border-[#EF4444] flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoadingMore ? (
                  <>
                    <span className="w-4.5 h-4.5 border-2 border-white border-t-transparent animate-spin rounded-full" />
                    QUERYING COMPLEMENTARY SITES CORRELATION LEDGERS...
                  </>
                ) : (
                  "Load More Inspected Articles"
                )}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. FOR MEDIA INQUIRIES (PR & Communications Zone with split card designs) */}
      <section id="blog-pr-communications" className="py-24 bg-[#F5F5F5]/30 border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-xl mb-16 space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              04 // PRESS INQUIRIES & CORPORATE RELATIONS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] uppercase leading-none tracking-tight">
              Media Relations & PR Desks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* PR Card 1 - Corporate PR Manager */}
            <div id="media-pr-card-1" className="bg-white border-2 border-[#111111] flex flex-col sm:flex-row overflow-hidden hover:border-[#EF4444] transition-colors group">
              {/* Left Side: Contact metadata text */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-[9px] font-mono text-[#EF4444] font-bold tracking-widest uppercase block">
                    PHILIPPINES CORPORATE CORRESPONDENT
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight leading-none">
                    Media Relations Team
                  </h3>
                  <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">
                    Manila Regional Head Office
                  </p>
                </div>

                <div className="space-y-2.5 text-xs font-mono text-zinc-600">
                  <a href="mailto:press@srchitects-corp.com" className="flex items-center gap-2.5 hover:text-[#EF4444] transition-colors font-bold">
                    <Mail className="w-4 h-4 text-[#EF4444]" />
                    <span>press@srchitects-corp.com</span>
                  </a>
                  <div className="flex items-center gap-2.5 font-bold">
                    <Phone className="w-4 h-4 text-[#EF4444]" />
                    <span>+63 (02) 8802-9421</span>
                  </div>
                  <div className="pt-2 text-[10px] uppercase font-semibold text-zinc-400">
                    Office Hours: Mon-Fri 08:00 - 17:00 UTC+8
                  </div>
                </div>
              </div>

              {/* Right Side: Square structural image placeholder */}
              <div className="w-full sm:w-44 h-44 sm:h-full bg-[#F5F5F5] border-t-2 sm:border-t-0 sm:border-l-2 border-[#111111] overflow-hidden shrink-0">
                <img
                  src="/src/assets/images/leader_portrait_1780843111096.png"
                  alt="S.R.chitects public relations desk officer placeholder portrait"
                  className="w-full h-full object-cover filter grayscale contrast-125 saturate-50 group-hover:saturate-100 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* PR Card 2 - Global Operations Inquiries */}
            <div id="media-pr-card-2" className="bg-white border-2 border-[#111111] flex flex-col sm:flex-row overflow-hidden hover:border-[#EF4444] transition-colors group">
              {/* Left Side: Contact metadata text */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-[9px] font-mono text-[#EF4444] font-bold tracking-widest uppercase block">
                    JOINT VENTURES & ASSETS DEVELOPMENT
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight leading-none">
                    Investment Desk
                  </h3>
                  <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">
                    Global Contracting & Core Alliances
                  </p>
                </div>

                <div className="space-y-2.5 text-xs font-mono text-zinc-600">
                  <a href="mailto:alliance@srchitects-corp.com" className="flex items-center gap-2.5 hover:text-[#EF4444] transition-colors font-bold">
                    <Mail className="w-4 h-4 text-[#EF4444]" />
                    <span>alliance@srchitects-corp.com</span>
                  </a>
                  <div className="flex items-center gap-2.5 font-bold">
                    <Phone className="w-4 h-4 text-[#EF4444]" />
                    <span>+63 (046) 412-8822</span>
                  </div>
                  <div className="pt-2 text-[10px] uppercase font-semibold text-zinc-400">
                    Zoning Alignment Scope: Global Portfolio
                  </div>
                </div>
              </div>

              {/* Right Side: Square structural image placeholder */}
              <div className="w-full sm:w-44 h-44 sm:h-full bg-[#F5F5F5] border-t-2 sm:border-t-0 sm:border-l-2 border-[#111111] overflow-hidden shrink-0">
                <img
                  src="/src/assets/images/about_how_we_build_1780843092581.png"
                  alt="Industrial layout blueprint site coordination team"
                  className="w-full h-full object-cover filter grayscale contrast-125 saturate-50 group-hover:saturate-100 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. GLOBAL CALL TO ACTION (CTA) */}
      <section id="blog-global-cta" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              Direct Collaborative On-Site Scope Engagement
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] uppercase tracking-tight leading-none">
              Ready to work together?
            </h2>
            <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-medium">
              Whether you have a project plan ready or need to build from scratch, let's talk about execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center pt-2">
            <button
              id="blog-cta-primary-btn"
              onClick={() => onToggleView("home", "contact")}
              className="flex-1 bg-[#111111] hover:bg-[#EF4444] text-white py-4.5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-[#111111] hover:border-[#EF4444] cursor-pointer"
            >
              Initiate Project Scope
            </button>
            <button
              id="blog-cta-secondary-btn"
              onClick={() => onToggleView("portfolio")}
              className="flex-1 bg-transparent hover:bg-neutral-50 text-[#111111] py-4.5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-zinc-300 hover:border-[#111111] cursor-pointer"
            >
              View Built Registry
            </button>
          </div>
        </div>
      </section>

      {/* Deep-Insight Article Reading Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedArticleDetail && (
          <div
            id="article-details-lightbox"
            className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedArticleDetail(null)}
          >
            <motion.div
              id="article-details-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white text-[#111111] max-w-4xl w-full border-2 border-[#111111] overflow-hidden relative grid grid-cols-1 md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Button */}
              <button
                id="close-article-details-btn"
                onClick={() => setSelectedArticleDetail(null)}
                className="absolute top-4 right-4 bg-[#111111] text-white p-2 text-xs hover:bg-[#EF4444] font-mono uppercase tracking-widest z-35 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area Column */}
              <div className="md:col-span-5 h-[240px] md:h-full relative border-b-2 md:border-b-0 md:border-r-2 border-[#111111] bg-neutral-900">
                <img
                  id="lightbox-article-detailed-pic"
                  src={selectedArticleDetail.imageUrl}
                  alt={selectedArticleDetail.title}
                  className="w-full h-full object-cover filter saturation-75 brightness-[0.80]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
                
                {/* Visual specs metadata badge tags */}
                <div className="absolute bottom-6 left-6 right-6 space-y-4">
                  <span className="bg-[#EF4444] text-white px-2.5 py-1 text-[8px] font-mono uppercase tracking-widest font-extrabold border border-white/10 inline-block">
                    {selectedArticleDetail.category}
                  </span>
                  <div>
                    <h4 className="font-display font-medium text-xs text-white uppercase tracking-wider block">AUTHORED ADVISORY BOARD:</h4>
                    <span className="font-mono text-[10px] text-zinc-300 font-bold uppercase">{selectedArticleDetail.author.name}</span>
                  </div>
                </div>
              </div>

              {/* Text Editorial Reading Zone */}
              <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8 max-h-[85vh] overflow-y-auto">
                <div className="space-y-6">
                  
                  {/* Category / Date Bar */}
                  <div className="border-b border-[#E5E5E5] pb-3 mb-1 flex items-center justify-between text-[9px] font-mono text-zinc-400 font-bold">
                    <span className="text-[#EF4444] uppercase tracking-widest">
                      CLASSIFIED DISPATCH // S.R.C
                    </span>
                    <span className="uppercase tracking-widest">
                      {selectedArticleDetail.date} // {selectedArticleDetail.readTime}
                    </span>
                  </div>

                  {/* Headline Title */}
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight leading-tight">
                    {selectedArticleDetail.title}
                  </h3>

                  {/* Narrative paragraphs */}
                  <div className="space-y-4 text-zinc-700 font-sans text-xs sm:text-sm leading-relaxed font-semibold">
                    {selectedArticleDetail.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Scientific taxonomy tags list */}
                  <div className="pt-4 border-t border-[#F5F5F5] flex flex-wrap gap-2">
                    {selectedArticleDetail.tags.map((tg, tgIdx) => (
                      <span key={tgIdx} className="bg-[#F5F5F5] border border-zinc-200 text-zinc-600 px-2.5 py-1 text-[9px] font-mono uppercase font-bold tracking-wider">
                        #{tg.replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Controls buttons block */}
                <div className="pt-6 border-t border-[#F5F5F5] flex flex-col sm:flex-row gap-4">
                  <button
                    id="lightbox-close-sheet-btn"
                    onClick={() => setSelectedArticleDetail(null)}
                    className="flex-1 bg-[#111111] hover:bg-[#EF4444] text-white py-3 px-4 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer text-center"
                  >
                    Close Reading Sheet
                  </button>
                  <button
                    id="lightbox-inquiring-btn"
                    onClick={() => {
                      setSelectedArticleDetail(null);
                      onToggleView("quote");
                    }}
                    className="flex-1 border-2 border-[#111111] hover:bg-neutral-50 text-[#111111] py-3 px-4 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer text-center"
                  >
                    Connect With Author
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
