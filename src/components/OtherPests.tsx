import React from 'react';
import { Rat, Bug, Sparkles, TreeDeciduous, Shield, Check, ArrowRight } from 'lucide-react';
import { OTHER_PESTS, COMPANY_INFO } from '../data/interventions';

export const OtherPests: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rat':
        return <Rat className="w-5 h-5 text-white" />;
      case 'Bug':
        return <Bug className="w-5 h-5 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'TreeDeciduous':
        return <TreeDeciduous className="w-5 h-5 text-white" />;
      default:
        return <Bug className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="autres-nuisibles" className="py-12 sm:py-16 px-4 bg-white border-b border-[#e5dfd4]">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#203a24]/10 text-[#1f3b23] text-xs font-bold uppercase tracking-wider mb-2 border border-[#203a24]/15">
              <Shield className="w-3.5 h-3.5" />
              Polyvalence Artisanale
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1f1a14] tracking-tight">
              Autres nuisibles traités
            </h2>
            <p className="text-xs sm:text-sm text-[#5a4d3f] mt-1">
              En complément de notre spécialité guêpes et frelons, Arnaud intervient également sur les rongeurs et insectes du quotidien.
            </p>
          </div>

          <span className="text-xs text-[#204523] font-bold bg-[#edf5ed] px-3 py-1.5 rounded-full border border-[#2e5933]/30 self-start sm:self-auto shadow-2xs">
            Méthodes certifiées Certibiocide
          </span>
        </div>

        {/* Compact Grid of Small Cards with strong relief and solid filled icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {OTHER_PESTS.map((pest) => {
            return (
              <div
                key={pest.id}
                className="p-4 rounded-2xl bg-[#faf7f2] border border-[#e2d8c9] flex flex-col justify-between hover:border-[#274b29]/40 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200 shadow-sm shadow-black/5"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#203a24] flex items-center justify-center mb-3 shadow-md shadow-[#203a24]/20">
                    {getIcon(pest.iconName)}
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-[#1e1914] leading-snug">
                    {pest.title}
                  </h3>
                  <p className="text-xs text-[#5c5040] mt-1.5 leading-normal">
                    {pest.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#eee5d8] text-[11px] text-[#254b28] font-bold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#254b28] shrink-0" />
                  <span>Traitement garanti</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discreet SEO footnote */}
        <div className="mt-6 pt-4 border-t border-[#eee5d8] flex flex-wrap items-center justify-between text-xs text-[#6e5f4f] gap-2">
          <span>
            Services disponibles sur Mézidon Vallée d'Auge, Lisieux, Caen, Falaise et tout le Calvados.
          </span>
          <a
            href="#contact"
            className="text-[#944415] hover:text-[#b3531b] font-bold inline-flex items-center gap-1"
          >
            <span>Demander un devis pour un autre nuisible</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
