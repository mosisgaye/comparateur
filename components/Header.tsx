'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f0f3ff] dark:bg-[#012737] text-black dark:text-white px-4 h-12 md:px-10 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center px-10">
        <Link href="/">
          <img className="w-[124px] h-[77px] md:w-[124px] md:h-[77px]" src="/images/compareprix.svg" alt="Logo" />
        </Link>
      </div>

      {/* Navigation Links for desktop */}
      <nav className="hidden xl:flex space-x-8 lg:space-x-12 px-20 flex-grow items-center justify-center">
        <a href="/energie/" className="mx-2 text-lg font-semibold hover:text-gray-400">Énergie</a>
        <a href="/telecom/" className="mx-2 text-lg font-semibold hover:text-gray-400">Télécom</a>
        <a href="/esim/" className="mx-2 text-lg font-semibold hover:text-gray-400">Esim</a>
        <a href="/blog/" className="mx-2 text-lg font-semibold hover:text-gray-400">Blogue</a>
        <ThemeSwitcher />
      </nav>

      {/* Action Buttons */}
      <nav className="flex items-center">
        <Link
          href="https://souscription.ekwateur.fr/"
          className="bg-[#79CE25] text-white rounded-full px-4 py-2 mr-2 text-sm hover:bg-[#79CE25]"
        >
          Estimer mon prix
        </Link>
        <Link
          href="/"
          rel="noopener noreferrer"
          aria-label="espace client"
          className="hidden xl:flex items-center justify-center w-9 h-9 rounded-full border border-[#ffc65a] text-[#ffc65a] hover:border-[#e0a43c] hover:text-[#e0a43c]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21c0-4 3-7 7-7s7 3 7 7" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
        </Link>

        {/* Hamburger Menu for mobile */}
        <button className="xl:hidden ml-2" onClick={toggleMenu}>
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#012737] text-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <a href="/" className="relative w-40" aria-label="compareprix logo">
              <Image
                alt="Logo ComparePrix"
                src="/images/compareprix.svg"
                layout="fill"
                objectFit="contain"
                priority
              />
            </a>
            <button onClick={toggleMenu} className="text-white">
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
            <a href="/telecom/" className="block text-lg font-semibold">Télécom</a>
            <a href="/esim/" className="block text-lg font-semibold">Esim</a>
            <a href="/blog/" className="block text-lg font-semibold">Blogue</a>
            <ThemeSwitcher />
          </nav>

          {/* Action Buttons */}
          <div className="mt-8 space-y-4 text-center">
            <a
              href="https://mon-espace.ekwateur.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#79CE25] text-white rounded-full text-center py-3"
            >
              Connexion
            </a>
            <a
              href="/contact"
              className="block border-2 border-[#79CE25] rounded-full text-center py-3 text-[#79CE25]"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
