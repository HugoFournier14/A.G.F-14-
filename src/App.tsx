import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReassuranceBar } from './components/ReassuranceBar';
import { CoverageZone } from './components/CoverageZone';
import { VideoGallery } from './components/VideoGallery';
import { OtherPests } from './components/OtherPests';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyCall } from './components/MobileStickyCall';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f0] text-[#2c2b28] font-sans antialiased">
      {/* Top Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section with Wasp/Hornet Focus & Authentic Emblem */}
        <Hero />

        {/* 2. Compact Reassurance Ribbon (Certibiocide, 7j/7, Devis gratuit, Garantie 6 mois) */}
        <ReassuranceBar />

        {/* 3. Interactive Coverage Zone with geo.api.gouv.fr & Leaflet Map */}
        <CoverageZone />

        {/* 4. Intervention Video Gallery with Lite-Embed Facade Pattern */}
        <VideoGallery />

        {/* 5. Other Pests Handled (Sober & SEO-friendly) */}
        <OtherPests />

        {/* 6. Contact Form & Direct Call Box */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Call Button on Mobile */}
      <MobileStickyCall />
    </div>
  );
}
