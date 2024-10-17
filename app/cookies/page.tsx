export const metadata = {
    title: "Politique de Gestion des Cookies - ComparePrix",
    description: "Découvrez notre politique de gestion des cookies pour améliorer votre expérience utilisateur sur ComparePrix.",
    keywords: ["cookies", "politique de cookies", "gestion des cookies", "confidentialité"],
    robots: "index, follow",
    openGraph: {
      title: "Politique de Gestion des Cookies - ComparePrix",
      description: "Informations sur l'utilisation des cookies sur le site ComparePrix, incluant les types de cookies et leur gestion.",
      url: "https://compareprix.net/cookies",
      type: "website",
    },
  };
  
  const Cookies = () => {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-[#012737] shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-[#012737] dark:text-white">Politique de gestion des cookies</h1>
        <div className="text-lg text-gray-800 dark:text-gray-200 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">1. Utilisation des cookies</h2>
          <p>
            Notre site utilise des cookies afin d'améliorer votre expérience utilisateur et de fournir des services personnalisés. En naviguant sur notre site, vous acceptez l'utilisation de ces cookies conformément à la présente politique.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">2. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone) lorsque vous visitez un site web. Il permet au site de se souvenir de vos actions et préférences sur une période donnée, pour vous éviter de devoir les réintroduire à chaque visite.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">3. Types de cookies utilisés</h2>
          <p>
            Nous utilisons les types de cookies suivants :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Cookies essentiels :</strong> nécessaires pour le bon fonctionnement du site, ils ne peuvent pas être désactivés.</li>
            <li><strong>Cookies analytiques :</strong> nous permettent de collecter des informations sur la façon dont vous utilisez notre site, afin de l'améliorer.</li>
            <li><strong>Cookies publicitaires :</strong> utilisés pour afficher des publicités pertinentes en fonction de vos intérêts et habitudes de navigation.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mb-2">4. Gestion des cookies</h2>
          <p>
            Vous pouvez contrôler l'utilisation des cookies directement depuis les paramètres de votre navigateur. Vous avez la possibilité de bloquer ou de supprimer les cookies, cependant cela peut altérer certaines fonctionnalités du site.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">5. Durée de conservation des cookies</h2>
          <p>
            Les cookies ont une durée de vie limitée à 13 mois maximum après leur premier dépôt sur votre appareil. À l'expiration de ce délai, votre consentement sera de nouveau requis.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">6. Modifications de la politique de cookies</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique à tout moment. Les changements seront publiés sur cette page et seront effectifs immédiatement.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">7. Contact</h2>
          <p>
            Pour toute question concernant notre politique de gestion des cookies, vous pouvez nous contacter via notre formulaire en ligne ou à l'adresse email suivante : contact[at]comparetelecom.net.
          </p>
        </div>
      </div>
    );
  };
  
  export default Cookies;
  