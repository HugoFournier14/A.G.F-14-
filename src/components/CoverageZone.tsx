import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, CheckCircle, AlertCircle, Phone, Loader2, Sparkles, Navigation } from 'lucide-react';
import L from 'leaflet';
import { COMPANY_INFO, POPULAR_COMMUNES_14 } from '../data/interventions';
import { CommuneGouv } from '../types';

// Mézidon Vallée d'Auge coordinates (headquarters)
const MEZIDON_COORDS: [number, number] = [49.0747, -0.0754];

// Key surrounding hubs in Calvados
const CALVADOS_HUBS = [
  { name: "Mézidon Vallée d'Auge (Base AGF 14)", coords: [49.0747, -0.0754] as [number, number], isBase: true },
  { name: 'Caen', coords: [49.1828, -0.3706] as [number, number], isBase: false },
  { name: 'Lisieux', coords: [49.1459, 0.2268] as [number, number], isBase: false },
  { name: 'Falaise', coords: [48.8958, -0.2014] as [number, number], isBase: false },
  { name: 'Saint-Pierre-en-Auge', coords: [48.9715, -0.0381] as [number, number], isBase: false },
  { name: 'Argences', coords: [49.1246, -0.1654] as [number, number], isBase: false },
  { name: 'Cabourg', coords: [49.2928, -0.1172] as [number, number], isBase: false },
];

export const CoverageZone: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<CommuneGouv[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CommuneGouv | null>(null);
  const [isCovered, setIsCovered] = useState<boolean | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Leaflet map refs
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);

  // Initialize Leaflet Map safely once
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    try {
      const map = L.map(mapContainerRef.current, {
        center: MEZIDON_COORDS,
        zoom: 9,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      // Calmer, softer tiles matching our nature/beige palette (CartoDB Positron / OSM)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
      }).addTo(map);

      // Attribution control minimal
      L.control.attribution({ position: 'bottomright' })
        .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>')
        .addTo(map);

      // Coverage radius around Mézidon covering the Calvados area (~45km)
      L.circle(MEZIDON_COORDS, {
        radius: 46000,
        color: '#3b613e',
        fillColor: '#3b613e',
        fillOpacity: 0.12,
        weight: 1.5,
        dashArray: '5, 5',
      }).addTo(map);

      // Custom base icon for Arnaud's HQ
      const baseIcon = L.divIcon({
        className: 'custom-map-base-icon',
        html: `
          <div style="background-color: #d97736; color: white; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.25); font-size: 16px; font-weight: bold;">
            ★
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
      });

      // Regular hub icons
      const hubIcon = L.divIcon({
        className: 'custom-map-hub-icon',
        html: `
          <div style="background-color: #3f6041; color: white; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"></div>
        `,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      });

      // Add pins for key hubs
      CALVADOS_HUBS.forEach((hub) => {
        const marker = L.marker(hub.coords, {
          icon: hub.isBase ? baseIcon : hubIcon,
        }).addTo(map);

        marker.bindPopup(`
          <div style="font-family: sans-serif; font-size: 13px; line-height: 1.4; color: #2d261e; padding: 2px;">
            <strong style="color: ${hub.isBase ? '#d97736' : '#2d5331'};">${hub.name}</strong><br/>
            ${hub.isBase ? 'Siège AGF 14 • Départ des interventions' : 'Zone d\'intervention régulière 7j/7'}
          </div>
        `);
      });

      mapInstanceRef.current = map;
    } catch (e) {
      console.warn('Leaflet map initialization skipped or failed:', e);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Search communes with debounce
  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setSuggestions([]);
      setDropdownOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(
            searchTerm.trim()
          )}&fields=nom,code,codeDepartement,codesPostaux,centre,population&boost=population&limit=6`
        );
        if (response.ok) {
          const data: CommuneGouv[] = await response.json();
          setSuggestions(data);
          setDropdownOpen(data.length > 0);
        }
      } catch (err) {
        console.error('Erreur API geo.api.gouv.fr:', err);
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSelectCommune = (commune: CommuneGouv) => {
    setSelectedCity(commune);
    setSearchTerm(`${commune.nom} (${commune.codesPostaux?.[0] || commune.codeDepartement})`);
    setDropdownOpen(false);

    // Rule as requested: codeDepartement === "14"
    const covered = commune.codeDepartement === '14';
    setIsCovered(covered);

    // If map is available and coords exist, pan to commune
    if (mapInstanceRef.current && commune.centre?.coordinates) {
      const [lng, lat] = commune.centre.coordinates;
      const targetCoords: [number, number] = [lat, lng];

      mapInstanceRef.current.flyTo(targetCoords, covered ? 11 : 9, {
        duration: 1.2,
      });

      // Update or create user marker
      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng(targetCoords);
      } else {
        const targetMarkerIcon = L.divIcon({
          className: 'target-marker-icon',
          html: `
            <div style="background-color: ${covered ? '#2d5a34' : '#b3513a'}; color: white; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 3px 8px rgba(0,0,0,0.3); font-size: 14px;">
              ${covered ? '✓' : '!'}
            </div>
          `,
          iconSize: [26, 26],
          iconAnchor: [13, 13],
        });

        userMarkerRef.current = L.marker(targetCoords, { icon: targetMarkerIcon }).addTo(
          mapInstanceRef.current
        );
      }

      userMarkerRef.current.bindPopup(`
        <div style="font-family: sans-serif; font-size: 13px; color: #2d261e;">
          <strong>${commune.nom}</strong> (${commune.codesPostaux?.[0] || commune.codeDepartement})<br/>
          ${covered ? '<span style="color: #2b5431; font-weight: bold;">✓ Desservi par Arnaud</span>' : '<span style="color: #b3513a;">Hors Calvados</span>'}
        </div>
      `).openPopup();
    }
  };

  const handleQuickSelect = (cityName: string) => {
    setSearchTerm(cityName);
    // Fetch directly from API
    fetch(`https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(cityName)}&fields=nom,code,codeDepartement,codesPostaux,centre&limit=1`)
      .then((res) => res.json())
      .then((data: CommuneGouv[]) => {
        if (data.length > 0) {
          handleSelectCommune(data[0]);
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <section id="zone-intervention" className="py-12 sm:py-16 px-4 bg-white border-b border-[#e5dfd4]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#203a24]/10 text-[#1f3b23] text-xs font-bold uppercase tracking-wider mb-2 border border-[#203a24]/15">
            <MapPin className="w-3.5 h-3.5" />
            Calvados & Environs
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1f1b15] tracking-tight">
            Zone d'intervention interactive
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#524637]">
            Basé à <strong className="text-[#1e3b23]">Mézidon Vallée d'Auge</strong>, Arnaud se déplace dans tout le Calvados (14) pour éradiquer vos nids de guêpes, frelons et autres nuisibles.
          </p>
        </div>

        {/* Search Bar & Result Notification */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="relative bg-[#fbf9f5] p-3 sm:p-4 rounded-2xl border border-[#ded5c6] shadow-md shadow-black/5">
            <label htmlFor="city-search" className="block text-xs font-black text-[#2e261e] uppercase tracking-wide mb-1.5">
              Vérifier si Arnaud intervient chez vous :
            </label>
            <div className="relative">
              <input
                id="city-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => suggestions.length > 0 && setDropdownOpen(true)}
                placeholder="Entrez votre commune ou code postal (ex: Caen, Lisieux, 14270...)"
                className="w-full px-4 py-3.5 pl-11 rounded-xl bg-white border border-[#cfc2af] text-[#292219] placeholder-[#8c7e6e] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#d97736] focus:border-[#d97736] shadow-sm"
                autoComplete="off"
              />
              <Search className="w-5 h-5 text-[#8c7e6e] absolute left-3.5 top-4" />
              {isLoading && (
                <Loader2 className="w-5 h-5 text-[#d97736] animate-spin absolute right-3.5 top-4" />
              )}
            </div>

            {/* Autocomplete Dropdown from geo.api.gouv.fr */}
            {dropdownOpen && suggestions.length > 0 && (
              <ul className="absolute z-30 left-0 right-0 mt-1.5 bg-white border border-[#cfc2af] rounded-xl shadow-lg max-h-60 overflow-y-auto divide-y divide-[#f0e8dc]">
                {suggestions.map((commune) => {
                  const inCalvados = commune.codeDepartement === '14';
                  return (
                    <li
                      key={commune.code}
                      onClick={() => handleSelectCommune(commune)}
                      className="px-4 py-2.5 hover:bg-[#f7f2ea] cursor-pointer flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${inCalvados ? 'text-[#38603b]' : 'text-[#887a6c]'}`} />
                        <span className="font-semibold text-sm text-[#27211a]">
                          {commune.nom}
                        </span>
                        <span className="text-xs text-[#736555]">
                          ({commune.codesPostaux?.[0] || commune.code})
                        </span>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded font-medium ${
                          inCalvados
                            ? 'bg-[#e4ede3] text-[#244b27]'
                            : 'bg-[#f0e8dc] text-[#6d5f50]'
                        }`}
                      >
                        {inCalvados ? 'Calvados (14)' : `Dép. ${commune.codeDepartement}`}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Validation Result Box */}
          {selectedCity && isCovered !== null && (
            <div className="mt-3">
              {isCovered ? (
                /* Success Green Box */
                <div className="p-4 rounded-xl bg-[#e3ece2] border border-[#2d5a34]/30 text-[#1a381e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#2d5a34] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold text-sm sm:text-base">
                        Arnaud dessert votre ville !
                      </div>
                      <div className="text-xs sm:text-sm text-[#28492a] mt-0.5">
                        Intervention rapide à <strong>{selectedCity.nom}</strong> depuis Mézidon Vallée d'Auge. Disponible 7j/7 de 7h à 22h.
                      </div>
                    </div>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d97736] hover:bg-[#c26424] text-white font-bold text-xs sm:text-sm shrink-0 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Appeler Arnaud
                  </a>
                </div>
              ) : (
                /* Non-Covered Desaturated Red / Terracotta Box as requested */
                <div className="p-4 rounded-xl bg-[#f5e9e6] border border-[#b85c49]/35 text-[#5e2b21] flex items-start gap-3 shadow-xs">
                  <AlertCircle className="w-6 h-6 text-[#b85c49] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-extrabold text-sm sm:text-base">
                      Désolé, cette zone n'est pas couverte pour le moment
                    </div>
                    <div className="text-xs sm:text-sm text-[#723b30] mt-0.5">
                      Arnaud intervient exclusivement dans le <strong>Calvados (14)</strong> et ses communes limitrophes directes pour vous garantir des délais ultra-rapides.
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick Commune Chips */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-[#665949] mr-1">Villes fréquentes :</span>
            {POPULAR_COMMUNES_14.slice(0, 7).map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => handleQuickSelect(city)}
                className="text-xs px-2.5 py-1 rounded-md bg-[#e7ddce] hover:bg-[#ddd1c0] text-[#3d3326] font-medium transition-colors border border-[#d6c7b3]"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Map Component */}
        <div className="rounded-2xl overflow-hidden border border-[#d6c6b1] bg-white shadow-sm">
          {/* Top map info bar */}
          <div className="bg-[#ede4d7] px-4 py-2.5 border-b border-[#dfd2c0] flex flex-wrap items-center justify-between gap-2 text-xs text-[#524535]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d97736]"></span>
              <strong>Base technique :</strong> Mézidon Vallée d'Auge
              <span className="text-[#8e7e6d]">|</span>
              <span className="hidden sm:inline">Rayon régulier de 45 km</span>
            </div>
            <div className="flex items-center gap-2 text-[#2d5a34] font-medium">
              <Navigation className="w-3.5 h-3.5 text-[#2d5a34]" />
              Intervention sous 2h à 24h selon le niveau d'urgence
            </div>
          </div>

          {/* Map canvas */}
          <div
            ref={mapContainerRef}
            className="w-full h-72 sm:h-96 z-10"
            style={{ minHeight: '280px' }}
          />

          {/* Bottom legend */}
          <div className="bg-[#f9f7f3] px-4 py-2 text-[11px] text-[#6d5e4d] flex flex-wrap items-center justify-between gap-2 border-t border-[#ede4d6]">
            <span>Calvados : Caen, Lisieux, Falaise, Cabourg, Deauville, Saint-Pierre-en-Auge, Argences...</span>
            <span className="font-semibold text-[#305232]">Déplacement sans surcoût week-end & jours fériés</span>
          </div>
        </div>
      </div>
    </section>
  );
};
