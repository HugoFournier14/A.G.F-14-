import React, { useState, useEffect } from 'react';
import { Play, X, ExternalLink, ChevronLeft, ChevronRight, Video, Youtube, Facebook, Shield } from 'lucide-react';
import { VIDEO_INTERVENTIONS, COMPANY_INFO } from '../data/interventions';
import { VideoIntervention } from '../types';

export const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoIntervention | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    if (activeVideo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeVideo]);

  return (
    <section id="galerie-videos" className="py-12 sm:py-16 px-4 bg-[#edf3ec] border-b border-[#d7e3d5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#203a24]/10 text-[#1f3b23] text-xs font-bold uppercase tracking-wider mb-2 border border-[#203a24]/15">
              <Video className="w-3.5 h-3.5" />
              Sur le terrain
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1d1913] tracking-tight">
              Galerie de nos interventions
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#524637] max-w-xl">
              Découvrez comment Arnaud neutralise les nids de frelons asiatiques et de guêpes en toute sécurité dans le Calvados.
            </p>
          </div>

          {/* Social Links on Header */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <a
              href={COMPANY_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#faf6f0] text-[#872e27] border border-[#d2ded0] text-xs font-bold shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Youtube className="w-4 h-4 text-[#c4302b]" />
              <span>Chaîne YouTube</span>
            </a>
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#faf6f0] text-[#1b4372] border border-[#d2ded0] text-xs font-bold shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Facebook className="w-4 h-4 text-[#1877f2]" />
              <span>Page Facebook</span>
            </a>
          </div>
        </div>

        {/* Video Thumbnails Grid / Horizontal Lite-Embed Facade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {VIDEO_INTERVENTIONS.map((video) => {
            const thumbnailUrl = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

            return (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#d2ded0] hover:border-[#274b29]/40 transition-all hover:shadow-xl hover:-translate-y-1 shadow-md shadow-black/5 flex flex-col"
              >
                {/* Facade Thumbnail Image (Pattern Lite Embed - NO IFRAME LOADED YET) */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#243425]">
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if video thumbnail format differs
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/0.jpg`;
                    }}
                  />

                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                  {/* Category Pill */}
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#1b3420]/90 text-white backdrop-blur-xs border border-white/15">
                    {video.category}
                  </span>

                  {/* Duration Badge */}
                  <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[11px] font-mono font-medium bg-black/80 text-white">
                    {video.duration}
                  </span>

                  {/* Centered Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#d97736] group-hover:bg-[#c26424] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Video Info Content */}
                <div className="p-4 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="text-[11px] font-bold text-[#627564] mb-1">
                      {video.location}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1f1a14] line-clamp-2 leading-snug group-hover:text-[#274b29] transition-colors">
                      {video.title}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#edf2ec] flex items-center justify-between text-[11px] text-[#5e5142]">
                    <span className="text-[#6d7f6e]">Intervention réelle</span>
                    <span className="font-bold text-[#944415] group-hover:underline flex items-center gap-1">
                      Voir vidéo
                      <Play className="w-3 h-3 fill-[#944415]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Call-To-Action & Social Banner as requested */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#eee5d6] border border-[#d9ccb9]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#c4302b]/15 flex items-center justify-center shrink-0">
              <Youtube className="w-5 h-5 text-[#c4302b]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#2b2319]">
                Envie d'en voir plus sur nos méthodes de destruction ?
              </div>
              <div className="text-xs text-[#635544]">
                Arnaud filme régulièrement ses interventions techniques sur nids récalcitrants.
              </div>
            </div>
          </div>

          <a
            href={COMPANY_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#292219] hover:bg-[#3d3326] text-white text-xs sm:text-sm font-bold transition-colors shrink-0 shadow-xs"
          >
            <span>Voir toutes nos interventions sur YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal for YouTube Video (Loaded ONLY when clicked) */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-[#1c1813] border border-[#3b3225] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3 bg-[#241f17] border-b border-[#3b3225] flex items-center justify-between gap-3 text-white">
              <div className="min-w-0">
                <span className="text-[11px] font-semibold text-[#d97736] uppercase tracking-wider block">
                  {activeVideo.category} • {activeVideo.location}
                </span>
                <div className="text-sm sm:text-base font-bold truncate text-[#f2ece2]">
                  {activeVideo.title}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg text-[#9e8f7d] hover:text-white hover:bg-[#3b3225] transition-colors"
                aria-label="Fermer la vidéo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* YouTube Embed Player (No-Cookie) */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer with quick context & Call Button */}
            <div className="p-4 bg-[#241f17] border-t border-[#3b3225] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#b8a996]">
              <p className="max-w-md leading-relaxed text-[#c7b9a7]">
                {activeVideo.description}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#d97736] hover:bg-[#c26424] text-white font-bold text-xs transition-colors"
                >
                  <span>Besoin d'aide ? Appeler Arnaud</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
