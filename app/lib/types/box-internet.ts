export interface RootBox {
  commercial: Commercial;
}

export interface Commercial {
  filtres: Filtres;
  offres: Offre[];
}

export interface Filtres {
  operateurs: Operateur[];
  services: Services;
  typeTechnos: TypeTechnos;
}

export interface Operateur {
  id: number;
  nom: string;
  url: string;
  logo: string;
  isRevendu: boolean;
  urlAffiliation: string;
}

export interface Services {
  tv: boolean;
  telephone: boolean;
  appelsVersMobilesInclus: boolean;
  forfaitMobileInclus: boolean;
}

export interface TypeTechnos {
  ADSL: boolean;
  satellite: boolean;
  fibre: boolean;
  cable: boolean;
  "4gbox": boolean;
}

export interface Offre {
  isSponsored: boolean;
  id: number;
  nom: string;
  description: string;
  dateMAJ: string;
  urlDetail: string;
  urlBoxImg: string;
  slugOffre: string;
  operateur: Operateur2;
  prix: number;
  dureeEngagement: number;
  promo?: Promo;
  mobile?: Mobile;
  vitesse: number;
  vitesseFormattee: string;
  upload: number;
  uploadFormate: string;
  fraisResiliation: number;
  isStar: boolean;
  isSelection: boolean;
  isRevenduCrm: boolean;
  typeTechno: string;
  nbDestinationsFixesInternational: number;
  nbDestinationsMobilesInternational: number;
  techno: string;
  services: Services2;
  nbChainesTv?: number;
  normeWiFiModem: string;
  url?: string;
}

export interface Operateur2 {
  id: number;
  nom: string;
  url: string;
  logo: string;
  isRevendu: boolean;
  urlAffiliation: string;
  slugOperateur: string;
}

export interface Promo {
  dateFin: string;
  duree?: number;
  prix: number;
  type: string;
  nbMoisOfferts?: number;
}

export interface Mobile {
  telephoneMobileInclus: boolean;
  voixIllimite: boolean;
  nbHeuresVoix: number;
  dataIllimite: boolean;
  quotaData: number;
  smsIllimite: boolean;
  nbSms: number;
  mmsIllimite: boolean;
  nbMms: number;
}

export interface Services2 {
  internet: boolean;
  forfaitMobileInclus: boolean;
  appelsVersMobilesInclus: boolean;
  tv: boolean;
  telephone: boolean;
}