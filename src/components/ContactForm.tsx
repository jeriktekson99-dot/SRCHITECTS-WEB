/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, FileText, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
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
    // Clear errors when type occurs
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

  return (
    <section id="contact" className="bg-[#FFFFFF] py-24 md:py-32 border-b border-[#E5E5E5] relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Bold contact details block */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-mono font-bold text-[#EF4444] tracking-[0.3em] block">
                06 // Project Brief Portal
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-[1.05] tracking-tight uppercase">
                Your Dream Project Starts With A Conversation.
              </h2>
              <div className="w-16 h-1 bg-[#EF4444]" />
            </div>

            <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed font-medium">
              We translate custom designs directly into secure building sites. Share your site coordinates, scale, and requirements with S.R.chitects' structural engineers.
            </p>

            {/* Industrial Contact detail blocks */}
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

          {/* Right Column: Crisp High-Contrast Contact Form */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-white border-2 border-[#111111] p-8 md:p-10 space-y-6 relative"
                >
                  {/* Form Industrial Corner Grid Accent */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#EF4444] border-b border-l border-[#111111]" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#EF4444] border-t border-r border-[#111111]" />

                  <span className="text-[10px] font-mono font-bold text-[#EF4444] tracking-widest block uppercase">
                    ONLINE BRIEF INTAKE FORM
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label id="lbl-name" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                        Full Name / Principal *
                      </label>
                      <input
                        id="contact-input-name"
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
                        <span id="err-name" className="text-[10px] font-mono text-[#EF4444] block">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label id="lbl-email" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                        Corporate Email *
                      </label>
                      <input
                        id="contact-input-email"
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
                        <span id="err-email" className="text-[10px] font-mono text-[#EF4444] block">{formErrors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="space-y-1.5">
                      <label id="lbl-company" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                        Organization / Firm
                      </label>
                      <input
                        id="contact-input-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Archon Group HQ"
                        className="w-full bg-[#F5F5F5] border border-[#E5E5E5] font-sans text-sm p-3 focus:outline-none focus:border-[#111111] transition-colors"
                      />
                    </div>

                    {/* Service Type Selection */}
                    <div className="space-y-1.5">
                      <label id="lbl-serviceType" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                        Requested Core Capability
                      </label>
                      <select
                        id="contact-select-service"
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

                  {/* Project Brief Scope description */}
                  <div className="space-y-1.5">
                    <label id="lbl-brief" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                      Structural Brief & Requirements *
                    </label>
                    <textarea
                      id="contact-textarea-brief"
                      name="brief"
                      rows={4}
                      value={formData.brief}
                      onChange={handleInputChange}
                      placeholder="Specify estimated timeline, site context, loading requirements, or general architectural concept details..."
                      className={`w-full bg-[#F5F5F5] border font-sans text-sm p-3 focus:outline-none transition-colors resize-none ${
                        formErrors.brief ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]" : "border-[#E5E5E5] focus:border-[#111111]"
                      }`}
                    ></textarea>
                    {formErrors.brief && (
                      <span id="err-brief" className="text-[10px] font-mono text-[#EF4444] block">{formErrors.brief}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#EF4444] hover:bg-[#111111] text-white p-4 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-3 disabled:bg-zinc-400 disabled:cursor-not-allowed group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          VERIFYING STRUCTURAL BUDGET DATA...
                        </>
                      ) : (
                        <>
                          DELEGATE PROJECT BRIEF
                          <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Success receipt state block */
                <motion.div
                  key="contact-success"
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
                      INTAKE TRANSMISSION COMPLETE
                    </span>
                    <h3 className="font-display font-black text-3xl text-[#111111] uppercase tracking-tight">
                      Brief Filed Successfully.
                    </h3>
                  </div>

                  {/* Technical Receipt Breakdown */}
                  <div className="bg-[#F5F5F5] border border-[#E5E5E5] p-6 text-left space-y-4 max-w-md mx-auto">
                    <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-2 text-[10px] font-mono text-zinc-500 uppercase font-black">
                      <FileText className="w-4 h-4 text-[#EF4444]" />
                      <span>S.R.CHITEC-RECEIPT // OFFICIAL</span>
                    </div>
                    <div className="space-y-2 font-mono text-[11px] text-[#111111]">
                      <div className="flex justify-between">
                        <span className="text-zinc-500">PROJECT ID:</span>
                        <span className="font-bold text-[#EF4444]">{projectTicket}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">PRINCIPAL:</span>
                        <span className="font-bold truncate max-w-[200px]">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">CAPABILITY:</span>
                        <span className="font-bold">{formData.serviceType}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-dashed border-[#E5E5E5] text-zinc-500">
                        <span>ESTIMATED QUEUE:</span>
                        <span className="font-bold text-[#111111]">&lt; 12 Working Hours</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-600 font-sans text-xs max-w-sm mx-auto leading-relaxed">
                    S.R.chitects' senior structural engineering committee is reviewing your brief values. A secured blueprint proposal is arriving shortly at <span className="font-bold text-[#111111]">{formData.email}</span>.
                  </p>

                  <div className="pt-4 max-w-xs mx-auto">
                    <button
                      id="reset-form-btn"
                      onClick={handleReset}
                      className="w-full bg-[#111111] hover:bg-[#EF4444] text-white py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300"
                    >
                      File Another Proposal
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
