import React from 'react';
import { Phone, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/interventions';

export const MobileStickyCall: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#f7f4ee]/95 backdrop-blur-md border-t border-[#dfd2c0] p-2.5 shadow-xl">
      <div className="flex items-center gap-2">
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#d97736] active:bg-[#b0581d] text-white font-extrabold text-base shadow-md transition-transform active:scale-[0.99]"
        >
          <Phone className="w-5 h-5 shrink-0" />
          <span>Appeler Arnaud : {COMPANY_INFO.phoneDisplay}</span>
        </a>
      </div>

      <div className="flex items-center justify-between px-1.5 pt-1.5 text-[10px] text-[#635544]">
        <span className="flex items-center gap-1 font-semibold text-[#2b4d2d]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
          Disponible 7j/7 (7h - 22h)
        </span>
        <span className="font-medium">
          Dès 90€ • Devis gratuit
        </span>
      </div>
    </div>
  );
};
