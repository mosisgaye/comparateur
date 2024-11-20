import React from 'react';

interface NewsletterSignupProps {
  title: string;
  description: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ title, description }) => {
  return (
    <section className="bg-gradient-to-r from-[#1b28b5] to-[#3844d6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-white text-lg md:text-xl mb-6">
          {description} Inscrivez-vous pour recevoir les meilleures offres de téléphones et de box internet.
        </p>
        
        <div className="flex flex-col md:flex-row md:justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row w-full md:max-w-md">
            <label htmlFor="email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre adresse mail"
              className="py-3 px-4 rounded-md md:rounded-l-md text-gray-900 bg-white w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:flex-1"
              aria-label="Entrez votre adresse e-mail pour vous inscrire"
            />
            <button
              className="mt-2 md:mt-0 md:ml-2 py-3 px-6 rounded-md md:rounded-r-md font-semibold text-white bg-[#B91C1C] hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              aria-label="Cliquez pour vous inscrire à la newsletter"
            >
              Je m'inscris
            </button>
          </div>
        </div>
        
        <p className="text-sm text-white mt-4 max-w-lg mx-auto">
          Votre email sera collecté par ComparePrix pour vous informer des offres des opérateurs. Consultez{' '}
          <a href="#" className="underline hover:text-gray-200 transition-colors">
            notre politique de confidentialité
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
