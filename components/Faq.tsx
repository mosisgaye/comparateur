const Faq = () => {
  

  const faqs = [
    {
      question: "Comment ComparePrix m'aide-t-il à trouver l'offre télécom idéale ?",
      answer:
        "ComparePrix analyse et compare les offres télécoms disponibles sur le marché français, que ce soit pour les forfaits mobiles, les abonnements internet (fibre, ADSL) ou les téléphones fixes. Grâce à des filtres personnalisés, vous pouvez trier les offres selon vos besoins : quantité de données mobiles, appels illimités, prix, ou encore services inclus (TV, streaming, etc.). Nous mettons également à jour nos bases en temps réel pour vous garantir des informations précises et actuelles.",
    },
    {
      question: "Pourquoi est-il avantageux d'utiliser ComparePrix ?",
      answer:
        "Utiliser ComparePrix, c'est économiser du temps et de l'argent. Plutôt que de consulter les sites des opérateurs un par un, vous accédez ici à une vue d'ensemble complète et objective. De plus, nous mettons en lumière les promotions en cours, les séries limitées et les forfaits spécialement conçus pour différents profils (jeunes, familles, professionnels). Vous évitez ainsi les mauvaises surprises et choisissez une offre vraiment adaptée à vos besoins.",
    },
    {
      question: "Les informations fournies par ComparePrix sont-elles fiables et à jour ?",
      answer:
        "Oui, nous nous engageons à vous fournir des données fiables et régulièrement mises à jour. Nos partenariats avec les opérateurs télécoms et notre système de veille automatisée nous permettent d'intégrer les changements de prix, les nouvelles promotions et les conditions des offres en temps réel. Vous pouvez donc prendre vos décisions en toute confiance.",
    },
    {
      question: "Quels types d’offres sont comparés sur ComparePrix ?",
      answer:
        "ComparePrix compare une large gamme d’offres télécoms : forfaits mobiles avec ou sans engagement, abonnements internet (fibre, ADSL, 4G fixe), offres combinées (box + mobile), et même des solutions professionnelles. Nous incluons également des options spécifiques comme les abonnements internationaux, les forfaits pour les étudiants ou les offres avec smartphone inclus.",
    },
    {
      question: "Combien puis-je économiser en utilisant ComparePrix ?",
      answer:
        "En changeant d’opérateur ou en adaptant votre forfait à vos besoins réels, vous pouvez économiser jusqu'à 50% par mois sur vos factures télécoms. Par exemple, un forfait à 30 € par mois peut être remplacé par une offre équivalente à moins de 10 € grâce à une promotion. De même, pour internet, passer à la fibre peut parfois coûter moins cher que votre abonnement ADSL actuel, tout en offrant de meilleures performances.",
    },
    {
      question: "ComparePrix est-il un service gratuit ?",
      answer:
        "Oui, ComparePrix est totalement gratuit pour les utilisateurs. Vous n’avez rien à payer pour comparer les offres et accéder à nos conseils. Nous générons nos revenus via des partenariats avec certains opérateurs, mais cela n’affecte en rien l’impartialité de nos recommandations. Notre priorité est de vous aider à faire le meilleur choix.",
    },
    {
      question: "Quelles sont les étapes pour souscrire à une offre via ComparePrix ?",
      answer:
        "Souscrire à une offre via ComparePrix est très simple. Une fois que vous avez trouvé une offre qui vous convient, cliquez sur le bouton ‘Souscrire’ ou ‘Voir l’offre’. Vous serez redirigé vers le site officiel de l’opérateur pour finaliser votre souscription. Nous vous accompagnons avec des conseils et des guides pratiques pour que le processus soit rapide et sans tracas.",
    },
    {
      question: "Comment savoir si je peux bénéficier de la fibre optique à mon adresse ?",
      answer:
        "ComparePrix propose un test d’éligibilité à la fibre optique directement sur son site. En saisissant votre adresse ou votre code postal, nous vérifions en temps réel les opérateurs qui proposent la fibre dans votre zone. Vous obtenez une liste des offres disponibles avec leurs caractéristiques et leurs tarifs. Cela vous permet de savoir rapidement si vous pouvez passer à un internet plus rapide et plus performant.",
    },
  ];
  
  
  
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white text-[#000] py-20 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#111] mb-6">
          Les réponses à vos questions
        </h2>
        <div className="space-y-4 divide-y divide-white divide-opacity-100">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-gray-300 py-4 cursor-pointer"
              style={{
                borderBottomWidth: 'calc(2px * var(--tw-divide-y-reverse))',
                borderTopWidth: 'calc(2px * (1 - var(--tw-divide-y-reverse)))',
                borderColor: 'rgb(255 255 255 / 1)', // Ajuster la transparence si nécessaire
              }}
            >
              <summary className="text-lg font-medium text-[#111] dark:text-[#fff]">
                {faq.question}
              </summary>
              <div className="transition-max-height max-h-0 overflow-hidden duration-500 ease-in-out group-open:max-h-96">
                <p className="py-2 text-[#111] dark:text-[#fff]">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    );
  };
  
  export default Faq;
  