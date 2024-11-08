'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import Popup from '@/components/Popup';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fonction pour ouvrir et fermer le popup
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f0f3ff] dark:bg-[#012737] text-black dark:text-white px-4 h-12 md:px-10 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center px-10">
        <Link href="/" aria-label="Retourner à l'accueil ComparePrix">
          <img className="w-[124px] h-[77px] md:w-[124px] md:h-[77px]" src="/images/compareprix.svg" alt="Logo ComparePrix" />
        </Link>
      </div>

      {/* Navigation Links for desktop */}
      <nav className="hidden xl:flex space-x-8 lg:space-x-12 px-20 flex-grow items-center justify-center">
        <a href="/energie/" className="mx-2 text-lg font-semibold hover:text-gray-400">Énergie</a>
        <a href="/forfait-mobile/" className="mx-2 text-lg font-semibold hover:text-gray-400">Forfait mobile</a>
        <a href="/esim/" className="mx-2 text-lg font-semibold hover:text-gray-400">Esim</a>
        <a href="/articles/" className="mx-2 text-lg font-semibold hover:text-gray-400">Blogue</a>
      </nav>

      {/* Action Buttons */}
      <nav className="flex items-center">
        {/* Button to open the popup */}
        <button
          onClick={openPopup}
          className="bg-[#79CE25] text-white rounded-full px-4 py-2 mr-2 text-sm hover:bg-[#79CE25]"
          aria-label="Parler à un expert"
        >
          Parlez à un expert
        </button>

        {/* Hamburger Menu for mobile */}
        <button className="xl:hidden ml-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-black dark:text-white"
            >
              <path d="M5 17h14M5 12h14M5 7h14" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </nav>

      {/* Popup */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#012737] text-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <a href="/" className="relative w-40" aria-label="Retourner à l'accueil ComparePrix">
              <img
                alt="Logo ComparePrix"
                src="/images/compareprix.svg"
                className="w-full h-auto"
              />
            </a>
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
            <a href="/energie/" className="block text-lg font-semibold">Énergie</a>
            <a href="/forfait-mobile/" className="block text-lg font-semibold">Forfait mobile</a>
            <a href="/esim/" className="block text-lg font-semibold">Esim</a>
            <a href="/articles/" className="block text-lg font-semibold">Blogue</a>
           
          </nav>
        </div>
      </div>
    </header>
  );
}
