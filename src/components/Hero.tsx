import React, { useState, useRef, useEffect } from 'react';
import { Phone, Shield, ArrowDown, CheckCircle2, Camera, Upload, Check, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/interventions';
import { WaspProhibitionIcon, CertibiocideBadge } from './WaspEmblem';

// Realistic, high-resolution photo of professional exterminator in protective bee/hornet suit & hood
const DEFAULT_INTERVENTION_PHOTO =
  'https://images.unsplash.com/photo-1598084999517-f58c704f5e8b?auto=format&fit=crop&w=1000&q=85';

const PHOTO_STORAGE_KEY = 'agf14_saved_intervention_photo';

export const Hero: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_INTERVENTION_PHOTO);
  const [isSavedLocally, setIsSavedLocally] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Restore saved photo on load
  useEffect(() => {
    try {
      const stored = localStorage.getItem(PHOTO_STORAGE_KEY);
      if (stored) {
        setPhotoUrl(stored);
        setIsSavedLocally(true);
        return;
      }
    } catch {
      // ignore localStorage disabled
    }

    // Check if hero-intervention.jpg was written to public folder
    const img = new Image();
    img.src = '/hero-intervention.jpg';
    img.onload = () => {
      setPhotoUrl('/hero-intervention.jpg');
      setIsSavedLocally(true);
    };
  }, []);

  const saveAndApplyPhoto = async (file: File) => {
    setIsSaving(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPhotoUrl(dataUrl);
        setIsSavedLocally(true);

        // 1. Save permanently in client's localStorage
        try {
          localStorage.setItem(PHOTO_STORAGE_KEY, dataUrl);
        } catch (e) {
          console.warn('LocalStorage quota or storage issue', e);
        }

        // 2. Persist to server disk in public/hero-intervention.jpg via Vite dev middleware
        try {
          await fetch('/api/save-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageBase64: dataUrl }),
          });
        } catch (e) {
          console.warn('Could not write to server disk', e);
        }
      }
      setIsSaving(false);
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      saveAndApplyPhoto(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      saveAndApplyPhoto(file);
    }
  };

  return (
    <section id="hero-section" className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 bg-[#f8f5ee] border-b border-[#e6dece] overflow-hidden">
      {/* Background subtle radial texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d5232]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Urgency message, trust points, primary CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Urgency & Certification Pill with higher contrast */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#203a24] text-white text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Interventions d'urgence 7j/7</span>
              <span className="text-[#a8c7ab]">•</span>
              <span className="text-[#e2eee4]">Mézidon & tout le Calvados (14)</span>
            </div>

            {/* Main Urgency Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1d1913] tracking-tight leading-[1.12]">
              Un nid de guêpes ou de frelons ?
              <span className="block text-[#274b29] mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold">
                Intervention rapide, 7j/7 chez vous.
              </span>
            </h1>

            {/* Reassuring subtitle */}
            <p className="mt-4 text-base sm:text-lg text-[#524637] leading-relaxed max-w-xl">
              Artisan désinsectiseur certifié <strong className="text-[#1e3c21] font-bold">Certibiocide</strong> basé à{' '}
              <strong className="text-[#241f17]">{COMPANY_INFO.city}</strong>. Traitement sécurisé avec équipement étanche professionnel, matériel télescopique et neutralisation complète dès la 1ère visite.
            </p>

            {/* Pricing trust anchor banner with real relief & depth */}
            <div className="mt-5 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-[#dbcfbd] shadow-md shadow-black/5 text-xs sm:text-sm text-[#3e3427]">
              <span className="font-black text-lg sm:text-xl text-[#b54a16] shrink-0">
                Dès 90€ TTC
              </span>
              <span className="text-[#594d3e] font-medium leading-snug">
                forfait complet guêpes / frelons (déplacement, matériel sécurisé & garantie 6 mois inclus)
              </span>
            </div>

            {/* Large Call-To-Action button (Terracotta) + Quick Action */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                id="hero-primary-call-btn"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#d97736] hover:bg-[#c26424] active:bg-[#aa531b] text-white text-base sm:text-lg font-black shadow-lg shadow-[#d97736]/25 transition-all focus:outline-none focus:ring-4 focus:ring-[#d97736]/30 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span>Appeler Arnaud : {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#zone-intervention"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white hover:bg-[#f3ede3] text-[#382f24] font-bold text-sm sm:text-base border border-[#d4c6b2] shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Vérifier ma commune</span>
                <ArrowDown className="w-4 h-4 text-[#72624f]" />
              </a>
            </div>

            {/* 3 bullet quick trust points with elevated soft background */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full pt-4 border-t border-[#e2d7c7] text-xs text-[#44382a] font-medium">
              <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#e5dcd0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#264b28] shrink-0" />
                <span>Sans surcoût week-end</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#e5dcd0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#264b28] shrink-0" />
                <span>Garantie 6 mois récidive</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#e5dcd0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#264b28] shrink-0" />
                <span>Devis immédiat par tél.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Intervention Photo Frame with Van Emblem & Certibiocide (Tabs removed) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Top Bar above Photo: Status badge + simple action */}
            <div className="w-full max-w-md flex items-center justify-between gap-2 mb-2 px-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#234226]">
                <Camera className="w-4 h-4 text-[#234226]" />
                <span>Photo réelle d'intervention</span>
                {isSavedLocally && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full ml-1 border border-emerald-300">
                    <Check className="w-3 h-3" />
                    Enregistrée
                  </span>
                )}
              </div>

              {/* Discreet button to replace or change photo if needed */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isSaving}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#5a4d3e] hover:text-[#203e23] px-2.5 py-1 rounded-lg bg-white/90 hover:bg-white border border-[#d6c7b3] shadow-xs transition-colors cursor-pointer"
                title="Remplacer la photo par une autre"
              >
                <Upload className="w-3.5 h-3.5 text-[#203e23]" />
                <span>{isSaving ? 'Enregistrement...' : 'Changer photo'}</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>

            {/* Main Visual Card with strong depth, soft shadow & drop capability */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="w-full max-w-md bg-white rounded-2xl border border-[#dbcfbc] shadow-xl shadow-black/10 overflow-hidden relative group"
            >
              {/* Photo Presentation Container */}
              <div className="relative aspect-4/3 w-full bg-[#1b2b1e] overflow-hidden">
                <img
                  src={photoUrl}
                  alt="Arnaud en tenue intégrale Apiroutec de protection guêpes et frelons lors d'une intervention"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />

                {/* Gradient shadow for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none"></div>

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Sur le terrain • Calvados (14)</span>
                  </div>
                  <CertibiocideBadge compact />
                </div>

                {/* Corner emblem: authentic vehicle circular logo badge */}
                <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                  <div className="p-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 flex items-center gap-1.5">
                    <WaspProhibitionIcon className="w-8 h-8 shrink-0" />
                    <div className="pr-1 text-left">
                      <div className="text-[10px] font-black text-[#1e1a14] leading-none">A.G.F 14</div>
                      <div className="text-[8px] font-bold text-[#2a5430] leading-tight">Artisan Local</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-3 left-3 z-10 max-w-[62%] text-left pointer-events-none">
                  <div className="text-white text-xs font-bold leading-tight drop-shadow-md">
                    Arnaud en intervention
                  </div>
                  <div className="text-[#dfd5c7] text-[10px] leading-snug mt-0.5 drop-shadow-sm line-clamp-2">
                    Tenue intégrale hermétique Apiroutec & casque grillagé haute sécurité.
                  </div>
                </div>
              </div>

              {/* Card bottom details */}
              <div className="p-4 bg-[#fbf9f4] border-t border-[#eee6d9] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#524535]">
                  <span className="font-semibold text-[#254b29]">Matériel grande hauteur</span>
                  <span>Canne télescopique jusqu'à 30m</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#234427]/10 border border-[#234427]/20 flex items-start gap-2 text-left">
                  <Shield className="w-4 h-4 text-[#234427] shrink-0 mt-0.5" />
                  <div className="text-[11px] text-[#1e3c23] leading-snug">
                    <strong>Garantie 6 mois sérénité :</strong> Neutralisation garantie. Si récidive au même endroit sous 6 mois, réintervention gratuite.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
