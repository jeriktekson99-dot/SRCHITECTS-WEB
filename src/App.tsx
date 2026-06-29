/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solution from "./components/Solution";
import Services from "./components/Services";
import ProjectGallery from "./components/ProjectGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import PortfolioView from "./components/PortfolioView";
import BlogView from "./components/BlogView";
import QuoteView from "./components/QuoteView";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "about" | "services" | "portfolio" | "blog" | "quote">("home");

  const handleToggleView = (view: "home" | "about" | "services" | "portfolio" | "blog" | "quote", targetAnchor?: string) => {
    setCurrentView(view);
    
    if (view === "about" || view === "services" || view === "portfolio" || view === "blog" || view === "quote") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (view === "home" && targetAnchor) {
      setTimeout(() => {
        const element = document.getElementById(targetAnchor);
        if (element) {
          const headerOffset = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div id="srchitects-homepage" className="min-h-screen bg-white text-[#111111] antialiased">
      {/* 1. Header Navigation Component with dynamic view toggles */}
      <Header currentView={currentView} onToggleView={handleToggleView} />

      <main id="main-content-layout">
        {currentView === "home" && (
          <>
            {/* 1. Hero and Problem Statement Section */}
            <Hero />

            {/* 2. Solution Statement Division Block */}
            <Solution />

            {/* 3. Core Offered Services capabilities grid */}
            <Services />

            {/* 4. Asymmetrical high-end Project Gallery */}
            <ProjectGallery />

            {/* 5. Standards and Principles section */}
            <WhyChooseUs />

            {/* 6. Testimonials and approvals */}
            <Testimonials />

            {/* 7. Contact zone form submission block */}
            <ContactForm />
          </>
        )}
        {currentView === "about" && (
          /* Fully customized high-impact About Page designed for S.R.chitects */
          <AboutView onToggleView={handleToggleView} />
        )}
        {currentView === "services" && (
          /* Fully customized high-impact Services Page designed for S.R.chitects */
          <ServicesView onToggleView={handleToggleView} />
        )}
        {currentView === "portfolio" && (
          /* Fully customized high-impact Portfolio Page designed for S.R.chitects */
          <PortfolioView onToggleView={handleToggleView} />
        )}
        {currentView === "blog" && (
          /* Fully customized high-impact Blog/Insights Page designed for S.R.chitects */
          <BlogView onToggleView={handleToggleView} />
        )}
        {currentView === "quote" && (
          /* Fully customized high-fidelity Request a Quote & FAQ View */
          <QuoteView onToggleView={handleToggleView} />
        )}
      </main>

      {/* Corporate directory and compliance Footer */}
      <Footer onToggleView={handleToggleView} />
    </div>
  );
}
