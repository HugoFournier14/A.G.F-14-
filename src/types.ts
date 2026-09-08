export interface CommuneGouv {
  nom: string;
  code: string;
  codeDepartement: string;
  codePostal?: string;
  codesPostaux?: string[];
  centre?: {
    type: string;
    coordinates: [number, number]; // [longitude, latitude]
  };
  population?: number;
}

export interface VideoIntervention {
  id: string;
  youtubeId: string;
  title: string;
  location: string;
  category: 'Frelon asiatique' | 'Guêpe commune' | 'Frelon européen' | 'Nid toiture' | 'Nid sous terre';
  duration: string;
  description: string;
}

export interface PestService {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Rat' | 'Bug' | 'ShieldAlert' | 'Flame' | 'Sparkles' | 'TreeDeciduous';
  seoKeywords: string;
  treatment: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  pestType: string;
  details: string;
  urgency: 'normale' | 'urgente' | 'tres_urgente';
}
