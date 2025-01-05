import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  text: string;
}

export interface OfferType {
  name: string;
  description: string;
  price: string;
  after12Months: string;
  engagement: string;
  speed: string;
  image: string;
  features: Feature[];
  link: string;
}