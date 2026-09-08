import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle, Send, Award, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/interventions';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '', // phone or email
    city: '',
    pestType: 'guepes-frelons',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.contact.trim()) return;

    // Simulate submission
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 bg-[#f8f5ee] border-b border-[#e5dfd4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Phone Priority & Trust Elements in dark forest anchor */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#203a24]/10 text-[#1f3b23] text-xs font-bold uppercase tracking-wider mb-2 self-start border border-[#203a24]/15">
              <Phone className="w-3.5 h-3.5" />
              Contact Direct
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#1d1913] tracking-tight">
              Besoin d'une intervention ou d'un devis ?
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#524637] leading-relaxed">
              Pour un nid menaçant ou une situation urgente, <strong className="text-[#1e3c21]">l'appel téléphonique direct reste le moyen le plus rapide</strong> pour bloquer un créneau avec Arnaud aujourd'hui.
            </p>

            {/* Direct Big Call Box (Deep Forest Olive Anchor Card with High Contrast) */}
            <div className="mt-5 p-6 rounded-2xl bg-[#162b1b] border border-[#26492d] text-white shadow-xl shadow-black/10 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d5c36]/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="text-xs uppercase tracking-wider font-extrabold text-[#9dc9a1] mb-1">
                  Ligne directe artisan 7j/7
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-black text-[#f7a268] hover:text-[#ffb787] transition-colors"
                >
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 text-[#f7a268]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>

                <div className="mt-4 pt-3 border-t border-[#26442c] flex flex-col gap-2.5 text-xs text-[#d0e0d2]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#8ec896] shrink-0" />
                    <span>
                      <strong className="text-white">{COMPANY_INFO.hours}</strong> (du lundi au dimanche)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#8ec896] shrink-0" />
                    <span>Basé à {COMPANY_INFO.city}, interventions dans tout le Calvados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#8ec896] shrink-0" />
                    <span>
                      <strong className="text-white">Forfait dès 90€</strong> • Garantie 6 mois récidive
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    id="contact-call-btn"
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#d97736] hover:bg-[#c26424] active:bg-[#aa531b] text-white font-extrabold text-base shadow-lg shadow-[#d97736]/25 transition-all transform hover:-translate-y-0.5"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Appeler Arnaud maintenant</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Reassurance notes */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-[#ded3c2] text-xs text-[#244728] shadow-sm space-y-1">
              <div className="font-extrabold flex items-center gap-1.5 text-[#1e3c21]">
                <ShieldCheck className="w-4 h-4 text-[#203a24]" />
                Engagement Artisan AGF 14
              </div>
              <p className="text-[11px] text-[#4d4233] leading-relaxed">
                Tarif clair convenu avant toute manipulation. Matériel professionnel étanche haute sécurité et perches grande hauteur.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (Complementary) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#ded5c6] shadow-xl shadow-black/5">
              <div className="border-b border-[#ece2d4] pb-4 mb-5">
                <h3 className="text-lg font-black text-[#1e1914]">
                  Demande écrite ou demande de rappel
                </h3>
                <p className="text-xs sm:text-sm text-[#5a4d3f] mt-0.5">
                  Remplissez ce formulaire court si vous préférez être rappelé par Arnaud pour convenir d'un rendez-vous.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#2d5a34]/15 text-[#2d5a34] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-[#241f17]">
                    Demande bien enregistrée !
                  </h4>
                  <p className="text-sm text-[#5a4d3f] mt-1 max-w-md mx-auto">
                    Arnaud a bien reçu vos informations pour votre commune ({formData.city || 'Calvados'}). Il vous recontactera rapidement par téléphone.
                  </p>
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          contact: '',
                          city: '',
                          pestType: 'guepes-frelons',
                          message: '',
                        });
                      }}
                      className="text-xs font-semibold text-[#944415] hover:underline"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-bold text-[#3e3427] uppercase tracking-wide mb-1"
                      >
                        Nom & Prénom *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Ex: Jean Dupont"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc2af] text-sm text-[#272018] placeholder-[#998a7b] focus:outline-none focus:ring-2 focus:ring-[#d97736] focus:border-[#d97736]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-contact"
                        className="block text-xs font-bold text-[#3e3427] uppercase tracking-wide mb-1"
                      >
                        Téléphone ou Email *
                      </label>
                      <input
                        id="form-contact"
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                        placeholder="06 .. .. .. .. ou email"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc2af] text-sm text-[#272018] placeholder-[#998a7b] focus:outline-none focus:ring-2 focus:ring-[#d97736] focus:border-[#d97736]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-city"
                        className="block text-xs font-bold text-[#3e3427] uppercase tracking-wide mb-1"
                      >
                        Commune ou Code Postal
                      </label>
                      <input
                        id="form-city"
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        placeholder="Ex: Mézidon, Caen, 14270..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc2af] text-sm text-[#272018] placeholder-[#998a7b] focus:outline-none focus:ring-2 focus:ring-[#d97736] focus:border-[#d97736]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-pest"
                        className="block text-xs font-bold text-[#3e3427] uppercase tracking-wide mb-1"
                      >
                        Type de nuisible
                      </label>
                      <select
                        id="form-pest"
                        value={formData.pestType}
                        onChange={(e) =>
                          setFormData({ ...formData, pestType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc2af] text-sm text-[#272018] bg-white focus:outline-none focus:ring-2 focus:ring-[#d97736] focus:border-[#d97736]"
                      >
                        <option value="guepes-frelons">
                          Guêpes ou Frelons (activité phare)
                        </option>
                        <option value="deratisation">
                          Rongeurs (Rats, souris)
                        </option>
                        <option value="cafards">Cafards / Blattes</option>
                        <option value="chenilles">
                          Chenilles processionnaires
                        </option>
                        <option value="puces-fourmis">Puces, mites ou fourmis</option>
                        <option value="autre">Autre diagnostic</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-bold text-[#3e3427] uppercase tracking-wide mb-1"
                    >
                      Description de la situation (emplacement du nid, hauteur...)
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Précisez où se situe le problème (combles, toiture, terre, boîte aux lettres, arbre...) et s'il y a un danger immédiat."
                      className="w-full px-3.5 py-2 rounded-lg border border-[#cfc2af] text-sm text-[#272018] placeholder-[#998a7b] focus:outline-none focus:ring-2 focus:ring-[#d97736] focus:border-[#d97736]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-[#716352]">
                      * Devis 100% gratuit et sans engagement
                    </span>

                    <button
                      id="form-submit-btn"
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3b5e3d] hover:bg-[#304e32] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Envoyer la demande</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
