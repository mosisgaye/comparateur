import Image from "next/image";
import Link from "next/link";

interface OfferCardProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaUrl: string;
}

export default function OfferCard({ title, description, imageUrl, ctaUrl }: OfferCardProps) {
  return (
    <div className="bg-[#F5F7FF] border border-[#E6E9F8] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#8cd147] mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#8cd147] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          En profiter
        </Link>
      </div>
    </div>
  );
}
