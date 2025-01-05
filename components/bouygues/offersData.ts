import { Download, Wifi, Tv } from "lucide-react";
import type { OfferType } from "@/components/bouygues/types";

export const offers: OfferType[] = [
  {
    name: "Bbox fit",
    description: "L'essentiel pour une connexion de qualité",
    price: "19,99€",
    after12Months: "32,99€/mois",
    engagement: "1 an",
    speed: "600 Mb/s",
    image: "https://www.bouyguestelecom.fr/static/fai/visuels/visuels-offres/ftth/fitftth.png",
    features: [
      { icon: Download, text: "Fibre ultra-rapide jusqu'à 600 Mb/s" },
    ],
    link: "https://tracking.publicidees.com/clic.php?promoid=155849&progid=5334&partid=63879",
  },
  {
    name: "Bbox must",
    description: "La vitesse du WiFi 6 avec TV incluse",
    price: "34,99€",
    after12Months: "41,99€/mois",
    engagement: "1 an",
    speed: "2 Gb/s (descendant), 900 Mb/s (montant)",
    image: "https://www.bouyguestelecom.fr/static/fai/visuels/visuels-offres/ftth/mustftth_v2.png",
    features: [
      { icon: Download, text: "Fibre ultra-rapide jusqu'à 2 Gb/s" },
      { icon: Wifi, text: "WiFi 6" },
      { icon: Tv, text: "Box TV 4K WiFi + 180 chaînes" },
    ],
    link: "https://tracking.publicidees.com/clic.php?promoid=155941&progid=5334&partid=63879",
  },
  {
    name: "Bbox ultym",
    description: "Le WiFi 6E et des services premium",
    price: "42,99€",
    after12Months: "49,99€/mois",
    engagement: "1 an",
    speed: "8 Gb/s (descendant), 1 Gb/s (montant)",
    image: "https://www.bouyguestelecom.fr/static/fai/visuels/visuels-offres/ftth/ultymftth.png",
    features: [
      { icon: Download, text: "Fibre ultra-rapide jusqu'à 8 Gb/s" },
      { icon: Wifi, text: "WiFi 6E + répéteurs sur demande" },
      { icon: Tv, text: "Box TV 4K HDR WiFi + 180 chaînes" },
    ],
    link: "https://tracking.publicidees.com/clic.php?promoid=164783&progid=5334&partid=63879",
  },
];