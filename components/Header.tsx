'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';


const navItems = [
  { href: '/partenaires', label: 'Partenaires' },
  { href: '/forfaits/', label: 'Forfait mobile' },
  { href: '/box/', label: 'Box Internet' },
  { href: '/energie/', label: 'Energie' },
 
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const openPopup = useCallback(() => setIsPopupOpen(true), []);
  const closePopup = useCallback(() => setIsPopupOpen(false), []);

  return (
    <header className="sticky top-0 z-50 bg-[#f0f3ff] text-black px-4 py-2 md:px-10 md:py-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" aria-label="Retourner à l'accueil ComparePrix">
          <Image
            src="/images/compareprix.png"
            alt="Logo ComparePrix"
            width={124}
            height={77}
            className="w-24 h-auto md:w-32"
            priority
          />
        </Link>
      </div>

      <nav className="hidden xl:flex space-x-8 flex-grow items-center justify-center">
        {navItems.map(item => (
          <Link 
            key={item.href} 
            href={item.href} 
            className="text-lg font-semibold hover:text-gray-400 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center">
        <a href="https://compareprix.net/forfaits" className="hidden md:block">
          <button
            onClick={openPopup}
            className="font-bold flex items-center bg-[#8cd147] text-white rounded-full px-4 py-2 mr-2 text-sm hover:bg-[#79CE25] transition-colors"
            aria-label="Parler à un expert"
          >
            <Phone className="w-5 h-5 mr-2" />
            09 71 00 19 18
          </button>
        </a>

        <button 
          className="xl:hidden ml-2" 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-black dark:text-white"
          >
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#012737] text-white z-40 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <Link href="/" aria-label="Retourner à l'accueil ComparePrix">
                <Image
                  src="/images/compareprix.svg"
                  alt="Logo ComparePrix"
                  width={160}
                  height={40}
                  className="w-40 h-auto"
                />
              </Link>
              <button onClick={toggleMenu} className="text-white" aria-label="Fermer le menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mt-10 space-y-4 text-center">
              {navItems.map(item => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="block text-lg font-semibold"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

