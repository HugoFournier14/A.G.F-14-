import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Youtube, Facebook, Award } from 'lucide-react';
import { COMPANY_INFO, POPULAR_COMMUNES_14 } from '../data/interventions';
import { WaspProhibitionIcon } from './WaspEmblem';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#142317] text-[#c6d7c8] pt-12 pb-24 sm:pb-12 px-4 border-t border-[#253f2a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#253f2a]">
          {/* Col 1: Identity & Description */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <WaspProhibitionIcon className="w-10 h-10 shrink-0" />
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  {COMPANY_INFO.name}
                </span>
                <div className="text-xs font-semibold text-[#8eb092]">
                  {COMPANY_INFO.tagline}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#a4c0a8] leading-relaxed max-w-sm">
              Entreprise artisanale de désinsectisation et dératisation certifiée <strong className="text-white">Certibiocide</strong>. Spécialiste de la destruction rapide de nids de guêpes et de frelons asiatiques dans tout le Calvados (14).
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#203624] hover:bg-[#c4302b] text-white flex items-center justify-center transition-colors"
                title="Chaîne YouTube AGF 14"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#332a21] hover:bg-[#1877f2] text-white flex items-center justify-center transition-colors"
                title="Page Facebook AGF 14"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services & SEO Keywords */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#e6d8c8]">
              Activités
            </div>
            <ul className="text-xs space-y-1.5 text-[#a89988]">
              <li>
                <strong className="text-white font-semibold">Nids de guêpes & frelons asiatiques</strong>
              </li>
              <li>Frelons européens & nids sous toiture</li>
              <li>Dératisation Mézidon Vallée d'Auge</li>
              <li>Extermination cafards & blattes Calvados</li>
              <li>Traitement puces de parquet & mites</li>
              <li>Fourmilières & chenilles processionnaires</li>
            </ul>
          </div>

          {/* Col 3: Contact & Guarantees */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#e6d8c8]">
              Coordonnées & Horaires
            </div>

            <div className="space-y-2 text-xs text-[#a89988]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d97736] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.city} — Calvados (14), Normandie
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#d97736] shrink-0 mt-0.5" />
                <span>
                  Disponible <strong>{COMPANY_INFO.hours}</strong> (7j/7)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-[#d97736] shrink-0 mt-0.5" />
                <span>
                  Forfait dès 90€ • Devis 100% gratuit • Garantie 6 mois
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#d97736] hover:bg-[#c26424] text-white font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Calvados Communes list for local SEO */}
        <div className="pt-6 pb-4 text-[11px] text-[#857667] leading-relaxed">
          <span className="font-semibold text-[#a89988]">Communes d'intervention dans le 14 : </span>
          {POPULAR_COMMUNES_14.join(' • ')} et l'ensemble des communes du Calvados.
        </div>

        {/* Copyright & Legal Mentions */}
        <div className="pt-4 border-t border-[#332a20] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#786b5e] gap-2">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name} — Arnaud Guêpes-Frelons. Tous droits réservés.
          </div>
          <div className="flex items-center gap-3">
            <span>Certifié Certibiocide</span>
            <span>•</span>
            <span>Interventions sécurisées & garanties</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
