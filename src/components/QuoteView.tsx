/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  FileText, 
  Loader2, 
  Plus, 
  Minus, 
  ShieldCheck, 
  ArrowLeft,
  ChevronDown
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface QuoteViewProps {
  onToggleView: (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => void;
}

export default function QuoteView({ onToggleView }: QuoteViewProps) {
  // Local states for the Request Quote Form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "Architectural Design",
    brief: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [projectTicket, setProjectTicket] = useState("");

  // FAQs active state
  const [activeFaqId, setActiveFaqId] = useState<string | null>("accuracy");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    "Pre-Construction Planning",
    "Architectural Design",
    "Structural Engineering",
    "Interior Fit-Outs",
    "Project Management",
    "Turnkey Construction",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when typing occurs
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Architect name/Company legal name is required.";
    if (!formData.email.trim()) {
      errors.email = "Contact email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please input a valid corporate email.";
    }
    if (!formData.brief.trim()) errors.brief = "Please provide brief details on structural needs.";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate high-end structural processing response
    setTimeout(() => {
      const ticketId = `SRC-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
      setProjectTicket(ticketId);
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      serviceType: "Architectural Design",
      brief: "",
    });
    setSubmitSuccess(false);
    setProjectTicket("");
  };

  const faqs: FAQItem[] = [
    {
      id: "accuracy",
      question: "How does S.R.chitects guarantee absolute physical accuracy on site?",
      answer: "We run daily drone-LIDAR aerial sweeps to capture spatial coordinates up to 0.25mm of tolerance. These scans are directly fed back to our live BIM (Building Information Modeling) twin to identify and fix physical variance instantly before consecutive levels are poured or structural steel is bolted down."
    },
    {
      id: "materials",
      question: "What are your standard material specifications for high-stress loads?",
      answer: "S.R.chitects strictly mandates certified high-grade C60-grade eco-concrete mixtures and premium structural carbon steel alloys. Every delivery vehicle’s batch certificate is systematically authenticated and logged by our on-site inspection committee before a single cubic meter is poured."
    },
    {
      id: "turnkey",
      question: "Do you offer complete turnkey construction or just architectural blueprint designs?",
      answer: "We are a full-scope general construction corporation. We handle the complete development timeline: beginning with parametric masterplanning and physical site surveying, leading to municipal permitting, supply chain procurement, structural load engineering, and the final turnkey handover."
    },
    {
      id: "procurement",
      question: "How do you calculate procurement costs and prevent mid-project budget increases?",
      answer: "Our 'Zero-Markup Integration' protocol bypasses middle-tier distributors, sourcing materials directly from vetted global steel and aggregate mills. We legally lock the material budgets during the initial contract stage and absorb general market fluctuations so that you face zero mid-project markup hikes."
    },
    {
      id: "external-designers",
      question: "Can we integrate independent designers into S.R.chitects' site workflows?",
      answer: "Yes. However, all external layout files must be fully translated into S.R.chitects' proprietary BIM coordination framework. Our senior engineering masters will evaluate external structural load calculations to guarantee strict compliance before physically breaking ground."
    },
    {
      id: "timeline",
      question: "What is your typical project lead time from initial quote request to ground break?",
      answer: "Normally between 6 to 12 weeks. This includes 2 weeks of parametric layout draft reviews, 4 weeks of municipal permit alignments, and 2-6 weeks of physical site clearing, heavy equipment deployment, and drone navigation beacon setup."
    }
  ];

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <div id="request-quote-page-root" className="bg-[#FFFFFF] min-h-screen">
      
      {/* 1. QUOTE HERO SECTION */}
      <section id="quote-hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#111111] overflow-hidden flex flex-col border-b border-[#EF4444]">
        {/* Full-bleed background image with a dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592dec58ef4e?q=80&w=1400"
            alt="Intake Engineering Blueprint"
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
                Estimate Configurator
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight uppercase">
              Initiate Project <br /><span className="text-zinc-500 text-transparent bg-clip-text bg-gradient-to-r from-zinc-350 to-zinc-550">Bespoke Quote</span>.
            </h1>
            <p className="text-sm md:text-base text-zinc-400 font-mono font-medium max-w-xl leading-relaxed">
              Commit your spatial coordinates, organization values, and structural goals below. S.R.chitects' engineers formulate perfect calculations for safe physical deployment.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: CONTACT DETAILS & INTAKE FORM */}
      <section id="quote-intake-form-section" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5] relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Bold contact details block */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                  01 // Operational Registry
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] leading-[1.05] tracking-tight uppercase">
                  Let's Talk About <br />Structural Reality.
                </h2>
                <div className="w-16 h-1 bg-[#EF4444]" />
              </div>

              <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed font-semibold">
                S.R.chitects transforms complex layouts directly into safe building sites. Share your coordinate blueprints, estimated square footage, and project needs to receive a comprehensive parametric proposal.
              </p>

              {/* Contact detail blocks replicated exactly from home page */}
              <div className="space-y-6 pt-4 border-t border-[#E5E5E5]">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#F5F5F5] text-[#111111] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-zinc-400 block uppercase tracking-wider">
                      DIRECT ENGINEERING REGISTRY
                    </span>
                    <a href="tel:+6328954022" className="text-sm font-mono font-medium text-[#111111] hover:text-[#EF4444] transition-colors mt-1 block">
                      +63 (2) 895-4022
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#F5F5F5] text-[#111111] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-zinc-400 block uppercase tracking-wider">
                      SECURE INTAKE FILE
                    </span>
                    <a href="mailto:briefs@srchitects.com" className="text-sm font-mono font-medium text-[#111111] hover:text-[#EF4444] transition-colors mt-1 block">
                      briefs@srchitects.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#F5F5F5] text-[#111111] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-zinc-400 block uppercase tracking-wider">
                      HEAD OFFICE GATEWAY
                    </span>
                    <span className="text-sm font-sans font-semibold text-zinc-700 leading-normal block mt-1">
                      740 Steel Avenue, Quad-City Logistics Park, Manila, PH
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-fidelity functional Intake Form */}
            <div className="lg:col-span-7 w-full">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="quote-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="bg-white border-2 border-[#111111] p-8 md:p-10 space-y-6 relative"
                  >
                    {/* Industrial details */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-[#EF4444] border-b border-l border-[#111111]" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#EF4444] border-t border-r border-[#111111]" />

                    <span className="text-[10px] font-mono font-bold text-[#EF4444] tracking-widest block uppercase">
                      SECURED QUOTE CONFIGURATOR FORM
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label id="lbl-quote-name" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                          Full Name / Principal *
                        </label>
                        <input
                          id="quote-input-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Arch. Sarah Jenkins"
                          className={`w-full bg-[#F5F5F5] border font-sans text-sm p-3 focus:outline-none transition-colors ${
                            formErrors.name ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]" : "border-[#E5E5E5] focus:border-[#111111]"
                          }`}
                        />
                        {formErrors.name && (
                          <span id="err-quote-name" className="text-[10px] font-mono text-[#EF4444] block">{formErrors.name}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label id="lbl-quote-email" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                          Corporate Email *
                        </label>
                        <input
                          id="quote-input-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. s.jenkins@company.com"
                          className={`w-full bg-[#F5F5F5] border font-mono text-sm p-3 focus:outline-none transition-colors ${
                            formErrors.email ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]" : "border-[#E5E5E5] focus:border-[#111111]"
                          }`}
                        />
                        {formErrors.email && (
                          <span id="err-quote-email" className="text-[10px] font-mono text-[#EF4444] block">{formErrors.email}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Company */}
                      <div className="space-y-1.5">
                        <label id="lbl-quote-company" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                          Organization / Firm Name
                        </label>
                        <input
                          id="quote-input-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Archon Group HQ"
                          className="w-full bg-[#F5F5F5] border border-[#E5E5E5] font-sans text-sm p-3 focus:outline-none focus:border-[#111111] transition-colors"
                        />
                      </div>

                      {/* Service Type */}
                      <div className="space-y-1.5">
                        <label id="lbl-quote-serviceType" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                          Requested Core Capability
                        </label>
                        <select
                          id="quote-select-service"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full bg-[#F5F5F5] border border-[#E5E5E5] font-sans text-sm p-3 focus:outline-none focus:border-[#111111] transition-colors appearance-none cursor-pointer"
                        >
                          {services.map((srv) => (
                            <option key={srv} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Brief */}
                    <div className="space-y-1.5">
                      <label id="lbl-quote-brief" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                        Detailed Project Requirements & Site Scope *
                      </label>
                      <textarea
                        id="quote-textarea-brief"
                        name="brief"
                        rows={5}
                        value={formData.brief}
                        onChange={handleInputChange}
                        placeholder="Elaborate on estimated budget, structural load conditions, site address or coordinate matrix, raw material preferences, and desired timeline..."
                        className={`w-full bg-[#F5F5F5] border font-sans text-sm p-3 focus:outline-none transition-colors resize-none ${
                          formErrors.brief ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]" : "border-[#E5E5E5] focus:border-[#111111]"
                        }`}
                      ></textarea>
                      {formErrors.brief && (
                        <span id="err-quote-brief" className="text-[10px] font-mono text-[#EF4444] block">{formErrors.brief}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      id="quote-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#EF4444] hover:bg-[#111111] text-white p-4 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-3 disabled:bg-zinc-400 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          ALIGNED TELEMETRY CALCULATOR RUNNING...
                        </>
                      ) : (
                        <>
                          TRANSMIT EXCLUSIVE SERVICE BRIEF
                          <Send className="w-4 h-4 text-white" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success output block */
                  <motion.div
                    key="quote-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white border-2 border-[#111111] p-8 md:p-12 text-center space-y-8 relative"
                  >
                    <div className="absolute top-0 right-0 w-3 h-3 bg-[#EF4444] border-b border-l border-[#111111]" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#EF4444] border-t border-r border-[#111111]" />

                    <div className="w-16 h-16 bg-red-50 text-[#EF4444] flex items-center justify-center mx-auto border border-[#EF4444]/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-bold text-[#EF4444] tracking-[0.25em] block uppercase">
                        PROPOSAL INTAKE SUCCESSFUL
                      </span>
                      <h3 className="font-display font-black text-3xl text-[#111111] uppercase tracking-tight">
                        Requirements Registered.
                      </h3>
                    </div>

                    <div className="bg-[#F5F5F5] border border-[#E5E5E5] p-6 text-left space-y-4 max-w-md mx-auto">
                      <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-2 text-[10px] font-mono text-zinc-500 uppercase font-black">
                        <FileText className="w-4 h-4 text-[#EF4444]" />
                        <span>OFFICIAL INTENT PROLETARIAT // RECEIPT</span>
                      </div>
                      <div className="space-y-2 font-mono text-[11px] text-[#111111]">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">PROPOSAL TICKET:</span>
                          <span className="font-bold text-[#EF4444]">{projectTicket}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">ORGANIZATION:</span>
                          <span className="font-bold truncate max-w-[200px]">{formData.company || "Indiv. Principal"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">REQUESTED FIELD:</span>
                          <span className="font-bold">{formData.serviceType}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-dashed border-[#E5E5E5] text-zinc-500">
                          <span>COMMODITY PROPOSAL TIMELINE:</span>
                          <span className="font-bold text-[#111111]">&lt; 12 Business Hours</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-zinc-600 font-sans text-xs max-w-sm mx-auto leading-relaxed">
                      S.R.chitects' Board of Directors has initiated spatial stress simulation algorithms on your provided coordinates. An absolute budget preview PDF will transpire to <span className="font-bold text-[#111111]">{formData.email}</span>.
                    </p>

                    <div className="pt-4 max-w-xs mx-auto">
                      <button
                        id="reset-quote-form-btn"
                        onClick={handleReset}
                        className="w-full bg-[#111111] hover:bg-[#EF4444] text-white py-3.5 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300"
                      >
                        File Another Project Scope
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: HIGH-END FAQS ACCORDION SECTION */}
      <section id="quote-faqs-section" className="py-24 bg-[#FFFFFF]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-16 md:mb-20 space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
              02 // STRUCTURAL RESOLUTIONS MATRIX
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] uppercase tracking-tight">
              Answering Critical Bidding Queries.
            </h2>
            <p className="text-zinc-600 font-sans text-sm font-medium leading-relaxed">
              Industrial concrete casting and seismic frameworks trigger valid engineering questions. Review S.R.chitects' standard operating parameters regarding schedules, sourcing, and on-site accuracy.
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div
                  id={`faq-item-card-${faq.id}`}
                  key={faq.id}
                  className={`border-2 transition-all duration-300 ${
                    isOpen ? "border-[#EF4444] bg-[#F5F5F5]/30" : "border-[#111111] bg-white hover:border-[#EF4444]"
                  }`}
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-black text-sm sm:text-base md:text-lg text-[#111111] uppercase tracking-tight pr-4">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-none border border-[#111111] transition-transform duration-300 flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-[#EF4444] text-white border-transparent rotate-180" : "bg-white text-[#111111]"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-content-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-dashed border-[#E5E5E5] space-y-4">
                          <p className="text-zinc-700 font-sans text-xs sm:text-sm leading-relaxed font-semibold">
                            {faq.answer}
                          </p>
                          <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-400 font-bold uppercase">
                            <ShieldCheck className="w-4 h-4 text-[#EF4444]" />
                            <span>APPROVED FOR PUBLIC DISTRIBUTION // REGISTERED UNDER PCAB RULES</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
