import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Gift, Bell, Shield } from 'lucide-react';

interface NewsletterSignupProps {
  title: string;
  description: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ title, description }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Gift className="w-4 h-4 text-yellow-400" />
                Offres Exclusives
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Avantages */}
            <div className="space-y-4">
              {[
                { icon: Bell, text: "Alertes en temps réel sur les meilleures offres" },
                { icon: Gift, text: "Accès prioritaire aux promotions exclusives" },
                { icon: Shield, text: "Conseils d'experts et guides d'achat gratuits" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-yellow-400" />
                  </div>
                  <span className="text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Rejoignez 50,000+ abonnés
              </h3>
              <p className="text-blue-100">
                Et ne ratez plus aucune bonne affaire !
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="votre@email.com"
                    className="w-full py-4 px-6 rounded-2xl bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Prénom (optionnel)
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Votre prénom"
                    className="w-full py-4 px-6 rounded-2xl bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Je m'inscris gratuitement
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>

              <p className="text-sm text-blue-200 text-center leading-relaxed">
                Votre email sera collecté par ComparePrix pour vous informer des offres des opérateurs. 
                <br />
                <a href="/cookies" className="underline hover:text-white transition-colors">
                  Consultez notre politique de confidentialité
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;