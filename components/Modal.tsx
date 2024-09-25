// components/Modal.tsx
import React from 'react';
import '@/app/globals.css'

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg z-50">
        <button
          onClick={closeModal}
          className="text-gray-600 float-right focus:outline-none"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Votre box internet à 19,99€/mois</h2>
        <p>Comparez les meilleures offres</p>
        <div className="mt-4">
          <button className="text-blue-500 border-2 border-blue-500 px-4 py-2 rounded-lg">
            Appelez-nous
          </button>
        </div>
        <div className="mt-4">
          <label className="block mb-2">Faites-vous rappeler</label>
          <input
            type="text"
            placeholder="Mon numéro (fixe ou mobile)"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-blue-500 text-white w-full mt-4 py-2 rounded-lg">
            Rappel gratuit
          </button>
        </div>
      </div>
    </div>
  );
};


export default Modal;
