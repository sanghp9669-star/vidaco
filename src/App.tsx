import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnersSection } from './components/PartnersSection';
import { AboutSection } from './components/AboutSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { QuoteConsultationSection } from './components/QuoteConsultationSection';
import { Footer } from './components/Footer';
import { SolutionModal } from './components/SolutionModal';
import { FloatingSupportButton } from './components/FloatingSupportButton';
import { Solution } from './data/viendatData';

export default function App() {
  const [activeModalSolution, setActiveModalSolution] = useState<Solution | null>(null);
  const [selectedSolutionForQuote, setSelectedSolutionForQuote] = useState<string>('contact-center');

  const scrollToConsultation = (solutionId?: string) => {
    if (solutionId) {
      setSelectedSolutionForQuote(solutionId);
    }
    const el = document.getElementById('lien-he');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Top Bar */}
      <Navbar onOpenConsultation={() => scrollToConsultation()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => scrollToConsultation()} />

        {/* Global Technology Partners Bar */}
        <PartnersSection />

        {/* About Viendat */}
        <AboutSection />

        {/* Core Solutions Bento / Showcase */}
        <SolutionsSection
          onSelectSolution={(sol) => setActiveModalSolution(sol)}
          onOpenConsultation={() => scrollToConsultation()}
        />

        {/* Technical Services & SLA */}
        <ServicesSection />

        {/* Enterprise Case Studies & Track Record */}
        <CaseStudiesSection />

        {/* Interactive Consultation / Quote Form & Offices */}
        <QuoteConsultationSection preselectedSolutionId={selectedSolutionForQuote} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Solution Deep-Dive Modal */}
      <SolutionModal
        solution={activeModalSolution}
        onClose={() => setActiveModalSolution(null)}
        onRequestQuote={(solId) => scrollToConsultation(solId)}
      />

      {/* Floating Action Support Button (Live Chat, Zalo, WhatsApp, Hotline) */}
      <FloatingSupportButton />
    </div>
  );
}
