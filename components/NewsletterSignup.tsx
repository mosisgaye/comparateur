import React from 'react';

const NewsletterSignup = () => {
  return (
    <div className="bg-[#1b28b5] dark:bg-[#012737] py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-semibold mb-6">
          Reprenez le contrôle de vos factures : recevez les meilleures offres et actualités des opérateurs.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          <div className="flex items-center w-full md:w-auto">
            <input
              type="email"
              placeholder="Votre adresse mail"
              className="py-3 px-4 rounded-l-md text-black bg-white w-full md:w-80 focus:outline-none dark:bg-gray-800 dark:text-white"
            />
            <button className="bg-red-500 text-white py-3 px-6 rounded-r-md font-semibold hover:bg-red-600 transition-colors">
              Je m'inscris
            </button>
          </div>
        </div>
        <p className="text-sm text-white mt-4">
          Votre email sera collecté par compareprix, pour vous informer des offres des opérateurs. Consultez{' '}
          <a href="#" className="underline">
            notre politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
