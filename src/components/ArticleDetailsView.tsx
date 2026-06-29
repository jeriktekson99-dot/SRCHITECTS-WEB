/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  FileText
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

interface ArticleDetailsViewProps {
  article: Article;
  allArticles: Article[];
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  onToggleView: (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => void;
}

export default function ArticleDetailsView({ 
  article, 
  allArticles, 
  onBack, 
  onSelectArticle,
  onToggleView 
}: ArticleDetailsViewProps) {
  const [emailSub, setEmailSub] = useState("");
  const [subSuccess, setSubSuccess] = useState(false);
  const [relatedStartIndex, setRelatedStartIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [article.id]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    setSubSuccess(true);
    setTimeout(() => {
      setSubSuccess(false);
      setEmailSub("");
    }, 4000);
  };

  // Filter out current article from related list
  const relatedCandidates = allArticles.filter(art => art.id !== article.id);
  
  // Show 3 related articles, rotate index with arrow controls
  const visibleRelated = relatedCandidates.slice(relatedStartIndex, relatedStartIndex + 3);
  if (visibleRelated.length < 3 && relatedCandidates.length >= 3) {
    // Fill if we run past bounds
    visibleRelated.push(...relatedCandidates.slice(0, 3 - visibleRelated.length));
  }

  const handleNextRelated = () => {
    if (relatedCandidates.length <= 3) return;
    setRelatedStartIndex((prev) => (prev + 1) % relatedCandidates.length);
  };

  const handlePrevRelated = () => {
    if (relatedCandidates.length <= 3) return;
    setRelatedStartIndex((prev) => (prev - 1 + relatedCandidates.length) % relatedCandidates.length);
  };

  // Safe fallback images mapping or placeholders
  const defaultDetailImg = article.imageUrl || "/src/assets/images/about_how_we_build_1780843092581.png";

  return (
    <div id={`blog-article-flow-${article.id}`} className="bg-[#FFFFFF] min-h-screen">
      
      {/* Back to Insights Sub-navigation Header */}
      <div className="bg-[#111111] border-b border-zinc-900 pt-32 pb-4 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            id="article-details-back-to-insights-btn"
            onClick={onBack}
            className="group flex items-center gap-2.5 text-xs font-mono font-bold text-white hover:text-[#EF4444] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-white group-hover:text-[#EF4444]" />
            Back to Insights Lab
          </button>
          <span className="font-mono text-[9px] text-[#EF4444] font-extrabold tracking-widest hidden md:inline">
            DISPATCH REF // {article.category.toUpperCase()} // AT_{article.id.toUpperCase()}
          </span>
        </div>
      </div>

      {/* 1. GLOBAL ARTICLE HERO */}
      <section id="article-detail-hero" className="relative pt-12 pb-24 md:pt-16 md:pb-32 bg-[#111111] overflow-hidden flex items-center border-b border-[#EF4444]">
        {/* Full-bleed background construction or architectural project hero photo */}
        <div className="absolute inset-0 z-0">
          <img
            id="article-hero-bleed-img"
            src={defaultDetailImg}
            alt="S.R.chitects heavy engineering workspace"
            className="w-full h-full object-cover filter brightness-[0.28] saturate-[0.60] contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] via-[#111111]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111]/85 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl space-y-4">
            <span className="text-[10px] uppercase font-mono font-extrabold text-[#EF4444] tracking-[0.35em] block">
              PEER-REVIEWED SCIENTIFIC DEPLOYMENTS // DISPATCH MATRIX
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight uppercase tracking-tight">
              We Don't Just Build. <br className="hidden sm:inline" />We <span className="text-[#EF4444]">Craft Your Reality</span>.
            </h1>
            <p className="text-zinc-300 font-sans text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-bold uppercase tracking-wider">
              Corporate Insights & Technical Grout—Uncompromising perspectives from our on-site build teams.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE MAIN HEADER & STRUCTURAL GRID */}
      <section id="article-main-grid-layout" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Asymmetric Desktop Dual-Grid layout collapses into vertical stream on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: EDITORIAL CONTENT STREAM (70% width) */}
            <article className="lg:col-span-8 space-y-10">
              
              {/* Category, Date & Read Time */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono border-b border-[#E5E5E5] pb-5">
                <span className="bg-[#EF4444] text-white px-2.5 py-1 text-[9px] font-extrabold tracking-widest uppercase">
                  {article.category}
                </span>
                <span className="text-zinc-400 font-semibold uppercase tracking-wider">/</span>
                <div className="flex items-center gap-1.5 text-zinc-500 font-bold uppercase">
                  <Calendar className="w-4 h-4 text-[#EF4444]" />
                  <span>{article.date}</span>
                </div>
                <span className="text-zinc-400 font-semibold uppercase tracking-wider">/</span>
                <div className="flex items-center gap-1.5 text-zinc-500 font-bold uppercase">
                  <Clock className="w-4 h-4 text-[#EF4444]" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Main Title Header - Large, heavy, aggressive typography */}
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-[1.05] tracking-tight uppercase">
                {article.title}
              </h2>

              {/* Primary Media Window - clean rectangular boundary, no rounded corners */}
              <div className="relative w-full aspect-video bg-[#F5F5F5] border-2 border-[#111111] p-3">
                <div className="absolute -top-3 -left-3 bg-[#111111] text-white text-[8px] font-mono px-3 py-1 uppercase tracking-widest font-extrabold border border-white/15">
                  LIDAR COORDINATE BLUEPRINT GRAPHIC // SRC_MODEL_{article.id.toUpperCase()}
                </div>
                <div className="w-full h-full overflow-hidden border border-zinc-200">
                  <img
                    id="article-detail-primary-frame"
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover filter saturation-[0.70] brightness-[0.85]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Editorial Paragraphs block with bold headers and crimson highlights */}
              <div className="space-y-8 text-[#111111] font-sans">
                
                {/* Introduction section */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-black text-[#EF4444] uppercase tracking-wider block">
                    SECTION // 01 // OVERVIEW OF VARIABLES
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed font-semibold text-zinc-800">
                    {article.content[0] || "We approach every infrastructure challenge as a calculation matrix ready to be solved. Our teams operate strictly under zero-tolerance quality goals."}
                  </p>
                  <blockquote className="border-l-4 border-[#EF4444] pl-5 py-2 my-6 bg-[#F5F5F5] font-mono text-xs sm:text-sm font-bold uppercase tracking-wide text-[#111111]">
                    "UNCOMPROMISING PRECISION IN ARCHITECTURAL PLACEMENTS CONCRETIZES THE ULTIMATE LEVEL OF SECURITY FOR COMMERCIAL INFRASTRUCTURE."
                  </blockquote>
                </div>

                {/* Subheader 1 Section */}
                <div className="space-y-4">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight pt-4">
                    BIM Integration & Structural Convergence
                  </h3>
                  <div className="w-12 h-1 bg-[#EF4444] mb-4" />
                  <p className="text-sm leading-relaxed text-zinc-700 font-semibold">
                    {article.content[1] || "The convergence of our BIM modeling assets and on-site concrete pours represents our signature workflow. Daily scan coordinates are analyzed to guarantee flawless structural outcomes."}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-700 font-semibold">
                    Our digital twin layers calculate core compression shifts in advance, routing critical structural loads smoothly. This eliminates physical drift before it propagates to vertical expansion. You can explore more at our{" "}
                    <span 
                      onClick={() => onToggleView("portfolio")} 
                      className="text-[#EF4444] font-mono underline hover:text-[#111111] transition-colors cursor-pointer uppercase font-extrabold"
                    >
                      [ BUILT REGISTRY PORTFOLIO ]
                    </span>.
                  </p>
                </div>

                {/* Subheader 2 Section */}
                <div className="space-y-4">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight pt-4">
                    Drone Technology on On-Site Accuracy
                  </h3>
                  <div className="w-12 h-1 bg-[#EF4444] mb-4" />
                  <p className="text-sm leading-relaxed text-zinc-700 font-semibold">
                    {article.content[2] || "Autonomous drone units dispatch every morning, sweeping absolute coordinates with high-frequency LIDAR lasers. The resulting telemetry clouds identify millimeter errors instantly."}
                  </p>
                  <div className="bg-[#111111] p-6 text-white space-y-3 border-l-2 border-[#EF4444]">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#EF4444] font-black">ACTIVE TELEMETRY PROTOCOL:</span>
                    <p className="font-sans text-xs text-zinc-300 font-semibold">
                      Drone scanners align physical structures against spatial coordinates within a 0.25 millimeter boundary, maintaining total structural envelope alignment across every active level.
                    </p>
                  </div>
                </div>

                {/* Scientific tags summary list */}
                <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-2">
                  <span className="text-[9px] font-mono text-[#111111] font-bold uppercase self-center mr-2">INDEX TRACKERS:</span>
                  {article.tags.map((val, k) => (
                    <span 
                      key={k} 
                      className="bg-neutral-100 border border-zinc-200 text-[#111111] px-2.5 py-1 text-[9px] font-mono uppercase font-bold tracking-wider"
                    >
                      #{val.replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>

              </div>

            </article>

            {/* RIGHT COLUMN: STICKY ENGAGEMENT SIDEBAR (30% width) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-[160px] space-y-8">
              
              {/* Sticky high-contrast vertical box container */}
              <div className="border-2 border-[#111111] bg-[#F5F5F5] p-6 sm:p-8 space-y-8">
                
                {/* Author Spotlight Block */}
                <div className="space-y-4">
                  <div className="border-b border-zinc-200 pb-3">
                    <span className="text-[9px] font-mono font-extrabold text-zinc-400 uppercase tracking-widest block">
                      SRC // WRITER SPOTLIGHT
                    </span>
                    <h4 className="font-display font-black text-base text-[#111111] uppercase tracking-tight mt-1">
                      Author Biography
                    </h4>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 border-2 border-[#111111] overflow-hidden bg-white shrink-0">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-full h-full object-cover filter grayscale contrast-125"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wide">
                        {article.author.name}
                      </h5>
                      <span className="text-[10px] text-zinc-400 font-bold uppercase block leading-tight">
                        {article.author.role}
                      </span>
                      
                      {/* Non-functional or nice informational triggers */}
                      <span className="text-[9px] text-[#EF4444] font-mono tracking-widest uppercase font-extrabold block pt-2 hover:underline cursor-pointer">
                        [ Articles by this Author → ]
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subscription Widget */}
                <div className="space-y-4 pt-6 border-t border-zinc-200">
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-[#EF4444] font-bold tracking-widest uppercase block">
                      WEEKLY SCIENTIFIC DEPLOYMENTS
                    </span>
                    <h4 className="font-display font-black text-base text-[#111111] uppercase tracking-tight">
                      Subscribe to S.R.chitects Insights
                    </h4>
                    <p className="text-zinc-500 font-sans text-xs leading-normal font-semibold">
                      Receive detailed technical whitepapers, engineering templates, and physical coordinate analyses directly to your desk.
                    </p>
                  </div>

                  {!subSuccess ? (
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <div className="space-y-1">
                        <input
                          type="email"
                          required
                          value={emailSub}
                          onChange={(e) => setEmailSub(e.target.value)}
                          placeholder="e.g. director@alliance-corp.com"
                          className="w-full bg-white border border-[#111111] p-3 text-xs font-mono text-[#111111] focus:border-[#EF4444] focus:outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#111111] hover:bg-[#EF4444] text-white py-3.5 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer"
                      >
                        SUBMIT SUBSCRIPTION
                      </button>
                    </form>
                  ) : (
                    <div className="bg-white border border-[#EF4444]/20 p-4 text-center space-y-2">
                      <Check className="w-5 h-5 text-[#EF4444] mx-auto" />
                      <span className="text-[8px] font-mono uppercase font-bold text-[#EF4444] block">SUBSCRIPTION LOCKED</span>
                      <p className="text-zinc-600 font-sans text-[10px] font-medium leading-normal">
                        Your coordinate email address has been logged in our insights registry.
                      </p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 justify-center text-[9px] font-mono text-zinc-400 font-semibold pt-1 uppercase">
                    <Shield className="w-4 h-4 text-[#EF4444] shrink-0" />
                    <span>Privacy Assured // Direct Transmission</span>
                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* 3. RELATED ARTICLES GRID */}
      <section id="article-related-insights" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Section Header with Left/Right arrows */}
          <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-6 mb-12">
            <div>
              <span className="text-[10px] uppercase font-mono font-extrabold text-[#EF4444] tracking-[0.25em] block">
                COMPLEMENTARY CAD KNOWLEDGE SHEETS
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                Related Technical Dispatches
              </h3>
            </div>

            {/* Arrow Nav controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevRelated}
                className="w-10 h-10 border-2 border-[#111111] text-[#111111] hover:bg-[#EF4444] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous related articles"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextRelated}
                className="w-10 h-10 border-2 border-[#111111] text-[#111111] hover:bg-[#EF4444] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next related articles"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3-Card Related Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleRelated.map((cand) => (
              <div
                id={`related-card-art-${cand.id}`}
                key={cand.id}
                onClick={() => onSelectArticle(cand)}
                className="bg-white border border-[#E5E5E5] flex flex-col justify-between hover:border-[#EF4444] hover:shadow-xl transition-all duration-300 min-h-[460px] group cursor-pointer"
              >
                <div>
                  {/* Top aligned aspect-ratio project photography */}
                  <div className="relative w-full h-[200px] bg-[#F5F5F5] overflow-hidden border-b border-[#E5E5E5]">
                    <img
                      src={cand.imageUrl}
                      alt={cand.title}
                      className="w-full h-full object-cover filter saturation-50 brightness-[0.80] group-hover:scale-105 group-hover:saturate-100 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Body zones */}
                  <div className="p-6 space-y-3">
                    {/* Timestamp, Category tag */}
                    <div className="flex items-center justify-between text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                      <span>{cand.date}</span>
                      <span className="text-[#EF4444]">{cand.category}</span>
                    </div>

                    {/* Bold article title */}
                    <h4 className="font-display font-black text-lg text-[#111111] group-hover:text-[#EF4444] transition-colors leading-tight uppercase tracking-tight">
                      {cand.title}
                    </h4>
                    
                    <p className="text-zinc-500 font-sans text-xs leading-relaxed font-semibold line-clamp-2">
                      {cand.excerpt}
                    </p>
                  </div>
                </div>

                {/* Sharp text link to view */}
                <div className="p-6 border-t border-[#F5F5F5] flex items-center justify-between text-[10px] font-mono text-[#111111] font-bold uppercase tracking-wider group-hover:text-[#EF4444] transition-colors">
                  <span>[ READ ANALYSIS DISPATCH ]</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. GLOBAL CALL TO ACTION (CTA) */}
      <section id="article-global-cta" className="py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
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
              id="article-cta-primary-btn"
              onClick={() => onToggleView("quote")}
              className="flex-1 bg-[#111111] hover:bg-[#EF4444] text-white py-4.5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-[#111111] hover:border-[#EF4444] cursor-pointer"
            >
              Initiate Project Scope
            </button>
            <button
              id="article-cta-secondary-btn"
              onClick={onBack}
              className="flex-1 bg-transparent hover:bg-neutral-50 text-[#111111] py-4.5 px-6 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 border border-zinc-300 hover:border-[#111111] cursor-pointer"
            >
              Back to lab registry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
