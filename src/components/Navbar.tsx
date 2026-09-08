import React, { useState } from 'react';
import { Phone, Clock, MapPin, ShieldCheck, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/interventions';
import { WaspProhibitionIcon } from './WaspEmblem';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#162b1b] text-white border-b border-[#24422b] shadow-md transition-colors">
      {/* Top micro-bar on desktop: availability + location + certibiocide */}
      <div className="hidden sm:block border-b border-[#203a25] bg-[#112015] text-xs py-1.5 px-4 text-[#bfd4c2]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong className="text-white">Disponible aujourd'hui :</strong> {COMPANY_INFO.hours}
            </span>
            <span className="inline-flex items-center gap-1 text-[#a3c2a7]">
              <MapPin className="w-3.5 h-3.5 text-[#88b08e]" />
              Basé à {COMPANY_INFO.city}, interventions dans tout le {COMPANY_INFO.department}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[#7ee192] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7ee192]" />
              Professionnel Agréé Certibiocide
            </span>
            <span className="text-[#99b59d]">Garantie 6 mois sur récidive</span>
          </div>
        </div>
      </div>

      {/* Main Header bar */}
      <div className="max-w-6xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-2.5 group">
          <WaspProhibitionIcon className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 drop-shadow-sm" />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#f3a670] transition-colors">
              {COMPANY_INFO.name}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#bad0bd] leading-none">
              {COMPANY_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Desktop navigation anchors */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#dbe8dc]">
          <a href="#zone-intervention" className="hover:text-[#f8a86b] transition-colors">
            Zone couverte
          </a>
          <a href="#galerie-videos" className="hover:text-[#f8a86b] transition-colors">
            Interventions vidéo
          </a>
          <a href="#autres-nuisibles" className="hover:text-[#f8a86b] transition-colors">
            Autres nuisibles
          </a>
          <a href="#tarifs-garantie" className="hover:text-[#f8a86b] transition-colors">
            Tarifs & Garantie
          </a>
          <a href="#contact" className="hover:text-[#f8a86b] transition-colors">
            Contact
          </a>
        </nav>

        {/* Primary Phone CTA */}
        <div className="flex items-center gap-2">
          <a
            id="nav-call-btn"
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#d97736] hover:bg-[#c26424] active:bg-[#b0581d] text-white font-extrabold text-sm sm:text-base shadow-md shadow-black/25 transition-all focus:outline-none focus:ring-2 focus:ring-[#f8a86b]"
            title="Appeler Arnaud pour une intervention urgente"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="hidden xs:inline">{COMPANY_INFO.phoneDisplay}</span>
            <span className="xs:hidden">Appeler</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            id="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#bfd6c2] hover:bg-[#203a25] focus:outline-none"
            aria-label="Ouvrir le menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#233f28] bg-[#142618] px-4 py-3 space-y-2.5 shadow-xl">
          <div className="text-xs font-semibold text-[#a8c7ab] flex items-center justify-between pb-2 border-b border-[#203a25]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {COMPANY_INFO.hours}
            </span>
            <span className="text-[#87ea99] font-bold">Certifié Certibiocide</span>
          </div>

          <div className="flex flex-col gap-1 text-sm font-medium text-[#d3e3d6]">
            <a
              href="#hero-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded hover:bg-[#203c26]"
            >
              Urgence Guêpes & Frelons
            </a>
            <a
              href="#zone-intervention"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded hover:bg-[#203c26]"
            >
              Vérifier votre commune (Calvados 14)
            </a>
            <a
              href="#galerie-videos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded hover:bg-[#203c26]"
            >
              Nos vidéos d'interventions
            </a>
            <a
              href="#autres-nuisibles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded hover:bg-[#203c26]"
            >
              Dératisation, Cafards & Chenilles
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded hover:bg-[#203c26]"
            >
              Demande de devis gratuit
            </a>
          </div>

          <div className="pt-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#d97736] text-white font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Appeler le {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
