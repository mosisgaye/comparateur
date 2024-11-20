import React from 'react';

interface NewsletterSignupProps {
  title: string;
  description: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ title, description }) => {
  return (
    <div className="bg-[#1b28b5] py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-semibold mb-6">
          {title}
        </h2>
        <p className="text-white mb-4">
          {description} Inscrivez-vous pour recevoir les meilleures offres de téléphones et de box internet.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          <div className="flex items-center w-full md:w-auto">
            <label htmlFor="email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre adresse mail"
              className="py-3 px-4 rounded-l-md text-black bg-white w-full md:w-80 focus:outline-none dark:bg-gray-800 dark:text-white"
              aria-label="Entrez votre adresse e-mail pour vous inscrire"
            />
            <button
              className="bg-[#B91C1C] text-white py-3 px-6 rounded-r-md font-semibold hover:bg-red-600 transition-colors"
              aria-label="Cliquez pour vous inscrire à la newsletter"
            >
              Je m'inscris
            </button>
          </div>
        </div>
        <p className="text-sm text-white mt-4">
          Votre email sera collecté par ComparePrix pour vous informer des offres des opérateurs. Consultez{' '}
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