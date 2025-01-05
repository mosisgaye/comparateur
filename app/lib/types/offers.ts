export interface Root {
    offres: never[]
    commercial: Commercial
  }
  
  export interface Commercial {
    filtres: Filtres
    offres: Offre[]
  }
  
  
  export interface Filtres {
    reseaux: any
    services: Services
    typeForfaits: TypeForfaits
    reseauxOperateurs: ReseauxOperateurs
    operateurs: Operateur[]
    nbOffreMatching: number
  }
  
  export interface Services {
    isStar: IsStar
    appelsIllimites: AppelsIllimites
    smsMmsIllimites: SmsMmsIllimites
    internetIllimite: InternetIllimite
    compatible5G: Compatible5G
  }
  
  export interface IsStar {
    active: boolean
    selected: boolean
  }
  
  export interface AppelsIllimites {
    active: boolean
    selected: boolean
  }
  
  export interface SmsMmsIllimites {
    active: boolean
    selected: boolean
  }
  
  export interface InternetIllimite {
    active: boolean
    selected: boolean
  }
  
  export interface Compatible5G {
    active: boolean
    selected: boolean
  }
  
  export interface TypeForfaits {
    pasCher: PasCher
    MoinsDe5Euros: MoinsDe5Euros
    SansEngagement: SansEngagement
    AvecMobile: AvecMobile
  }
  
  export interface PasCher {
    active: boolean
    selected: boolean
  }
  
  export interface MoinsDe5Euros {
    active: boolean
    selected: boolean
  }
  
  export interface SansEngagement {
    active: boolean
    selected: boolean
  }
  
  export interface AvecMobile {
    active: boolean
    selected: boolean
  }
  
  export interface ReseauxOperateurs {
    "Bouygues télécom": BouyguesTlcom
    Free: Free
    Orange: Orange
    SFR: Sfr
  }
  
  export interface BouyguesTlcom {
    active: boolean
    selected: boolean
  }
  
  export interface Free {
    active: boolean
    selected: boolean
  }
  
  export interface Orange {
    active: boolean
    selected: boolean
  }
  
  export interface Sfr {
    active: boolean
    selected: boolean
  }
  
  export interface Operateur {
    id: number
    nom: string
    logo: string
    isRevendu: string
    revendu: boolean
    url?: string
    active: boolean
    selected: boolean
    slug: string
  }
  
  export interface Offre {
    plusDe100Go: unknown
    sansEngagement: unknown
    compatible5G: unknown
    id: number
    nom: string
    url: string
    operateur: Operateur2
    slugOffre: string
    prix: number
    typeTechno: string
    dureeEngagement: number
    reseaux: string[]
    services: Services2
    appelsSmsMms: string
    data: Data
    appels: string
    smsMms: string
    internet: string
    isTelephoneInclus: boolean
    description: string
    descriptionCourte: string
    isSponsored: boolean
    isStar: boolean
    isPromue: boolean
    isPasCher: boolean
    isRevenduCrm: boolean
    note: number
    dateMAJ: string
    promo?: Promo
  }
  
  export interface Operateur2 {
    slug: string
    reseaux: any
    id: number
    nom: string
    url: string
    slugOperateur: string
    logo: string
    revendu: boolean
    rang: number
    rangTelephone: number
  }
  
  export interface Services2 {
    appelsIllimites: boolean
    smsMmsIllimites: boolean
    internetIllimite: boolean
    compatible5G: boolean
  }
  
  export interface Data {
    illimite: boolean
    quota: string
    technoInternet: string
  }
  
  export interface Promo {
    type: string
    prix: number
    dateFin?: string
    duree?: number
    nbMoisOfferts?: number
  }
  
  export interface MobileOffer {
    id: number;
    nom: string;
    prix: number;
    operateur: string;
    description: string;
  }
  



  