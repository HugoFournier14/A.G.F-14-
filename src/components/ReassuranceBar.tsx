import React from 'react';
import { ShieldCheck, Clock, FileCheck2, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/interventions';

export const ReassuranceBar: React.FC = () => {
  const items = [
    {
      id: 'certibiocide',
      icon: ShieldCheck,
      badge: 'Agrément d\'État',
      badgeColor: 'bg-[#2a502f]/10 text-[#254829] border-[#2a502f]/20',
      iconBg: 'bg-[#244929] text-white',
      title: 'Certifié Certibiocide',
      subtitle: 'Habilitation ministérielle pour l\'usage sécurisé de produits professionnels.',
      highlight: 'Zéro risque pour vos proches & animaux'
    },
    {
      id: 'disponibilite',
      icon: Clock,
      badge: '7j/7 en urgence',
      badgeColor: 'bg-[#264c2a]/10 text-[#264c2a] border-[#264c2a]/20',
      iconBg: 'bg-[#1e3c22] text-white',
      title: '7j/7 de 7h à 22h',
      subtitle: 'Disponibilité continue en semaine, week-end et jours fériés sans surcoût.',
      highlight: 'Déplacement rapide dans le 14'
    },
    {
      id: 'devis',
      icon: FileCheck2,
      badge: 'Transparence totale',
      badgeColor: 'bg-[#524434]/10 text-[#524434] border-[#524434]/20',
      iconBg: 'bg-[#4a3c2e] text-white',
      title: 'Devis 100% gratuit',
      subtitle: 'Tarif fixe annoncé avant départ. Forfait guêpes & frelons dès 90€ TTC.',
      highlight: 'Pas de mauvaise surprise à l\'arrivée'
    },
    {
      id: 'garantie',
      icon: Award,
      badge: 'Engagement sérénité',
      badgeColor: 'bg-[#d97736]/10 text-[#964716] border-[#d97736]/25',
      iconBg: 'bg-[#d97736] text-white shadow-sm shadow-[#d97736]/30',
      title: 'Garantie 6 mois',
      subtitle: 'Si des frelons ou guêpes réapparaissent au même endroit, Arnaud réintervient.',
      highlight: 'Nouvelle intervention 100% offerte'
    }
  ];

  return (
    <section id="tarifs-garantie" className="bg-[#1a3320] text-white py-12 sm:py-16 px-4 border-y border-[#294c2f] relative overflow-hidden">
      {/* Decorative subtle texture light */}
      <div className="absolute inset-0 bg-[radial-gradient(#2f5c37_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#274c2d] text-[#a9dfb2] text-xs font-bold uppercase tracking-wider mb-2 border border-[#3b6d44]">
            <Award className="w-3.5 h-3.5 text-[#f8a86b]" />
            Nos 4 Engagements Sécurité & Qualité
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Pourquoi faire appel à Arnaud (A.G.F 14) ?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#bfd9c3]">
            Un artisan local expérimenté, équipé pour les nids difficiles d'accès et engagé sur le résultat.
          </p>
        </div>

        {/* 4 Elevated Relief Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl shadow-black/25 border border-[#e5dfd4] flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-200 group text-left"
              >
                <div>
                  {/* Top card bar: solid filled icon + category pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle with high contrast */}
                  <h3 className="text-lg font-black text-[#1f1b15] leading-snug group-hover:text-[#28502d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a4e3e] leading-relaxed mt-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom highlighted assurance */}
                <div className="mt-4 pt-3 border-t border-[#eee7dc] flex items-center gap-1.5 text-xs font-semibold text-[#294e2d]">
                  <CheckCircle2 className="w-4 h-4 text-[#294e2d] shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
