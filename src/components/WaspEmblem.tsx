import React from 'react';

/**
 * Wasp in a red prohibition circle, styled faithfully to Arnaud's van badge
 */
export const WaspProhibitionIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-16 h-16',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Soft background glow */}
        <circle cx="50" cy="50" r="46" fill="#fdfbf7" />

        {/* Realistic Hornet / Wasp Vector */}
        <g id="wasp-graphic">
          {/* Wings */}
          <path
            d="M50 40 C35 22 25 24 32 36 C36 43 45 42 50 43 Z"
            fill="#dbe4ea"
            fillOpacity="0.85"
            stroke="#738a9c"
            strokeWidth="1.2"
          />
          <path
            d="M50 40 C65 20 75 23 68 35 C64 42 55 42 50 43 Z"
            fill="#dbe4ea"
            fillOpacity="0.85"
            stroke="#738a9c"
            strokeWidth="1.2"
          />

          {/* Legs */}
          <path
            d="M44 48 L32 54 M42 52 L30 62 M46 56 L36 68"
            stroke="#40362c"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M56 48 L68 54 M58 52 L70 62 M54 56 L64 68"
            stroke="#40362c"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Head & Antennae */}
          <ellipse cx="50" cy="34" rx="5.5" ry="4.5" fill="#3a2f26" />
          <path
            d="M47 31 C43 25 40 23 37 24 M53 31 C57 25 60 23 63 24"
            stroke="#2d241d"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Thorax */}
          <path
            d="M44 38 C44 36 56 36 56 38 C57 44 57 47 50 48 C43 47 43 44 44 38 Z"
            fill="#38291e"
          />
          <ellipse cx="50" cy="42" rx="6.5" ry="6" fill="#2b1f16" />
          <ellipse cx="50" cy="40" rx="3" ry="1.5" fill="#eab308" />

          {/* Striped Abdomen */}
          <path
            d="M46 50 C46 48 54 48 54 50 C57 56 56 65 50 72 C44 65 43 56 46 50 Z"
            fill="#eab308"
          />
          {/* Black hornet stripes */}
          <path d="M45.5 53 Q50 56 54.5 53" stroke="#22170f" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M45 58 Q50 61 55 58" stroke="#22170f" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M46 63 Q50 66 54 63" stroke="#22170f" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M48 67 Q50 69 52 67" stroke="#22170f" strokeWidth="1.8" strokeLinecap="round" />

          {/* Stinger */}
          <path d="M50 72 L50 75" stroke="#1c120c" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Red Prohibition Ring & Slash */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="#dc3545"
          strokeWidth="7"
          fill="none"
        />
        <line
          x1="20"
          y1="20"
          x2="80"
          y2="80"
          stroke="#dc3545"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

/**
 * Green Certibiocide official certification badge style
 */
export const CertibiocideBadge: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2d5a34]/10 text-[#244b2a] border border-[#2d5a34]/25 text-xs font-semibold">
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#2d5a34]">
          <path
            d="M12 2L4 6V11C4 16.55 7.41 21.74 12 23C16.59 21.74 20 16.55 20 11V6L12 2Z"
            fill="#2d5a34"
            fillOpacity="0.15"
            stroke="#2d5a34"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12L10.5 14L15.5 9"
            stroke="#2d5a34"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Certibiocide Certifié</span>
      </div>
    );
  }

  return (
    <div className="relative inline-flex items-center justify-center p-3 rounded-lg border-2 border-[#2d5a34]/35 bg-[#eef4ee] text-[#1c3e21] shadow-xs">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-[#2d5a34] flex items-center justify-center bg-white shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#2d5a34]">
            <path
              d="M12 2L4 6V11C4 16.55 7.41 21.74 12 23C16.59 21.74 20 16.55 20 11V6L12 2Z"
              fill="#2d5a34"
              fillOpacity="0.2"
              stroke="#2d5a34"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 12L11 14.5L16 9"
              stroke="#2d5a34"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text-left">
          <div className="text-[11px] uppercase tracking-wider font-bold text-[#2d5a34]">
            Professionnel Agréé
          </div>
          <div className="text-sm font-extrabold text-[#17311b] tracking-tight">
            CERTIBIOCIDE CERTIFIÉ
          </div>
          <div className="text-[11px] text-[#36573a]">
            Habilité par le Ministère de la Transition Écologique
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Authentic Vehicle Emblem Card - faithfully echoing the graphic on Arnaud's truck
 */
export const VanEmblemCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#d6c7b2] bg-[#f0e8dc] p-5 md:p-6 shadow-sm">
      {/* Decorative texture border mimicking vehicle magnetic plate */}
      <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-80">
        <span className="w-2 h-2 rounded-full bg-[#3d5a3d]"></span>
        <span className="text-[11px] font-medium text-[#4a4136]">Plaque artisan AGF 14</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Left: Prohibition Sign & Title */}
        <div className="md:col-span-4 flex flex-col items-center text-center sm:text-left sm:flex-row md:flex-col gap-3">
          <WaspProhibitionIcon className="w-24 h-24 md:w-28 md:h-28 shrink-0" />
          <div>
            <span className="inline-block text-2xl font-extrabold text-[#2a241c] tracking-wider">
              A.G.F 14
            </span>
            <div className="text-sm font-bold text-[#625647]">
              Arnaud Guêpes-Frelons
            </div>
            <div className="text-xs text-[#736553] font-medium">
              Mézidon Vallée d'Auge (14)
            </div>
          </div>
        </div>

        {/* Center: List of services directly as displayed on his vehicle */}
        <div className="md:col-span-5 space-y-1.5 border-t sm:border-t-0 md:border-l md:border-r border-[#d4c3ac]/60 py-2 md:px-5">
          <div className="text-xs uppercase font-bold tracking-wide text-[#594d3f] mb-1">
            Activités homologuées :
          </div>
          <ul className="text-sm text-[#383126] font-medium space-y-1">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97736]"></span>
              <strong className="text-[#241f17]">Désinsectisation & Dératisation</strong>
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#597858]"></span>
              Guêpes & Frelons asiatiques / européens
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#597858]"></span>
              Chenilles processionnaires
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#597858]"></span>
              Puces, Mites & Cafards
            </li>
          </ul>
        </div>

        {/* Right: Certibiocide seal and availability */}
        <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <div className="inline-flex flex-col items-center md:items-end px-3 py-2 rounded-lg bg-[#e2ede2] border border-[#2d5a34]/30">
            <span className="text-[10px] font-bold text-[#2d5a34] uppercase tracking-wider">
              Professionnel
            </span>
            <span className="text-xs font-black text-[#1e4224] tracking-tight">
              CERTIBIOCIDE
            </span>
            <span className="text-[10px] font-semibold text-[#2d5a34]">
              CERTIFIÉ D'ÉTAT
            </span>
          </div>

          <div className="text-xs font-semibold text-[#3d3429]">
            <div className="text-[#204925] font-bold flex items-center justify-center md:justify-end gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              7j/7 de 7h à 22h
            </div>
            <div className="text-[#685c4d] mt-0.5">Devis gratuit • Garantie 6 mois</div>
          </div>
        </div>
      </div>
    </div>
  );
};
