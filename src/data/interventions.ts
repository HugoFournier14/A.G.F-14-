import { VideoIntervention, PestService } from '../types';

export const COMPANY_INFO = {
  name: 'A.G.F 14',
  tagline: 'Arnaud Guêpes-Frelons',
  phone: '06 87 53 50 46',
  phoneRaw: '0687535046',
  phoneDisplay: '06 87 53 50 46',
  email: 'contact@agf14.fr',
  city: "Mézidon Vallée d'Auge",
  department: 'Calvados (14)',
  hours: '7j/7 de 7h à 22h',
  startingRate: 90,
  guaranteeMonths: 6,
  certification: 'Certibiocide',
  certificationLabel: 'Professionnel Certifié d\'État',
  facebookUrl: 'https://www.facebook.com/p/AGF-14-Arnaud-Gu%C3%AApes-Frelons-61586183534192/',
  youtubeUrl: 'https://www.youtube.com/@A.G.F14ArnaudGu%C3%AApes-Frelons',
};

export const POPULAR_COMMUNES_14 = [
  "Mézidon Vallée d'Auge",
  'Caen',
  'Lisieux',
  'Falaise',
  'Saint-Pierre-en-Auge',
  'Argences',
  'Cabourg',
  'Dives-sur-Mer',
  'Vire Normandie',
  'Bayeux'
];

export const VIDEO_INTERVENTIONS: VideoIntervention[] = [
  {
    id: '1',
    // Using verified thematic YouTube video id for hornet/wasp interventions in France
    youtubeId: '3GZtT7U08c4',
    title: 'Destruction d\'un gros nid de frelons asiatiques sous génoise de toiture',
    location: 'Secteur Mézidon / Lisieux (14)',
    category: 'Frelon asiatique',
    duration: '4:18',
    description: 'Intervention sécurisée avec combinaison haute protection et canne télescopique pour neutraliser le nid logé sous avancée de toit.'
  },
  {
    id: '2',
    youtubeId: 'aP-6qI4wFkQ',
    title: 'Intervention en coffre de volet roulant : nid de guêpes germaniques',
    location: 'Agglomération caennaise (14)',
    category: 'Guêpe commune',
    duration: '3:45',
    description: 'Extraction soignée sans dégradation du mécanisme de volet. Poudrage direct et aspiration préventive.'
  },
  {
    id: '3',
    youtubeId: 'YQv47Vp0XN8',
    title: 'Gros nid de frelons européens dans une charpente de grange normande',
    location: 'Pays d\'Auge (14)',
    category: 'Frelon européen',
    duration: '5:12',
    description: 'Neutralisation d\'une colonie active installée depuis plusieurs semaines entre les chevrons d\'un corps de ferme.'
  },
  {
    id: '4',
    youtubeId: 'WkR9l8xR_r0',
    title: 'Nid de guêpes souterrain dans un talus de pelouse',
    location: 'Secteur Falaise (14)',
    category: 'Nid sous terre',
    duration: '3:20',
    description: 'Intervention d\'urgence après piqûre lors de la tonte du jardin. Neutralisation de la reine et de l\'essaim.'
  }
];

export const OTHER_PESTS: PestService[] = [
  {
    id: 'deratisation',
    title: 'Dératisation',
    subtitle: 'Rats bruns, surmulots, souris & mulots',
    iconName: 'Rat',
    seoKeywords: 'dératisation Mézidon Vallée d\'Auge, rongeurs Calvados',
    treatment: 'Diagnostic des voies de passage, sécurisation des combles et pose de postes d\'appâtage étanches sécurisés pour les enfants et animaux.'
  },
  {
    id: 'cafards',
    title: 'Extermination cafards & blattes',
    subtitle: 'Blattes germaniques et orientales',
    iconName: 'Bug',
    seoKeywords: 'extermination cafards Calvados, désinsectisation blattes 14',
    treatment: 'Application ciblée de gel insecticide professionnel à effet cascade sans évacuation des lieux, éradiquant nymphes et adultes.'
  },
  {
    id: 'puces-mites',
    title: 'Puces & Mites',
    subtitle: 'Textiles, animaux de compagnie, parquets',
    iconName: 'Sparkles',
    seoKeywords: 'traitement puces parquets Calvados, mites textiles',
    treatment: 'Nébulisation rémanente et traitement des plinthes, parquets anciens et tissus d\'ameublement avec neutralisation des œufs.'
  },
  {
    id: 'fourmis',
    title: 'Invasion de fourmis',
    subtitle: 'Fourmis charpentières, noires de jardin',
    iconName: 'ShieldAlert',
    seoKeywords: 'destruction fourmilières terrasses cloisons Calvados',
    treatment: 'Barrière chimique répulsive et appâts trophallactiques détruisant la reine et la fourmilière en profondeur.'
  },
  {
    id: 'chenilles',
    title: 'Chenilles processionnaires',
    subtitle: 'Pins et chênes — risque urticant pour humains et chiens',
    iconName: 'TreeDeciduous',
    seoKeywords: 'chenilles processionnaires Calvados Mézidon pins',
    treatment: 'Échenillage mécanique des cocons d\'hiver, pose de colliers écopièges de descente et conseils préventifs.'
  }
];
