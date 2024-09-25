'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import Modal from '@/components/Modal'; // Assure-toi que le chemin est correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour le modal

  // Fonction pour ouvrir le modal
  const openModal = () => setIsModalOpen(true);

  // Fonction pour fermer le modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="w-full bg-[#f0f3ff] dark:bg-[#012737] flex justify-between items-center h-[35px] px-8 text-black dark:text-white">
        La fibre à partir de 19,99€
        <button
          onClick={openModal} // Ouvre le modal
          className="border border-[#2f55d4] text-[#2f55d4] dark:border-white dark:text-white px-3 py-1 rounded-full text-sm flex items-center hover:bg-[#2f55d4] hover:text-white dark:hover:bg-white dark:hover:text-[#012737] transition-colors"
        >
          <span className="mr-1">📞</span> Rappel gratuit
        </button>
      </div>

      {/* Main Navbar */}
      <div className="w-full h-[77px] flex items-center justify-between px-8 md:px-16 bg-white dark:bg-[#012737] shadow-md">
        {/* Logo */}
        <div className="flex items-center px-20">
          <Link href="/" className="ml-4 text-pink-500 dark:text-white text-[18px] md:text-[20px] font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <img className="w-[100px] h-[70px] md:w-[124px] md:h-[77px]" src="/images/Compareprix.svg" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12 items-center px-20">
          <Link href="/energie" className="text-black dark:text-white text-[18px] md:text-[20px] font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Énergie
          </Link>
          <Link href="/telecom" className="text-black dark:text-white text-[18px] md:text-[20px] font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Télécom
          </Link>
          <Link href="/blog" className="text-black dark:text-white text-[18px] md:text-[20px] font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Blogue
          </Link>
          <Link href="/esim" className="text-black dark:text-white text-[18px] md:text-[20px] font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Esim
          </Link>
          <ThemeSwitcher />
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className={`block md:hidden z-50 ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`w-[30px] h-[3px] bg-black dark:bg-white mb-[6px] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`} />
          <div className={`w-[30px] h-[3px] bg-black dark:bg-white mb-[6px] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`w-[30px] h-[3px] bg-black dark:bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-[-45deg] translate-x-[5px] -translate-y-[5px]' : ''}`} />
        </button>

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 w-[250px] h-full bg-white dark:bg-[#012737] shadow-lg z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className="flex flex-col items-start p-4 space-y-6 mt-[77px]">
            <Link href="/energie" className="text-gray-800 dark:text-white text-[18px] font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Énergie
            </Link>
            <Link href="/telecom" className="text-gray-800 dark:text-white text-[18px] font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Télécom
            </Link>
            <Link href="/blog" className="text-gray-800 dark:text-white text-[18px] font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Blogue
            </Link>
            <Link href="/actualité" className="text-gray-800 dark:text-white text-[18px] font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Esim
            </Link>
          </nav>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </header>
  );
};

export default Navbar;
