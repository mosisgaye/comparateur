export const metadata = {
    title: "Conditions Générales - ComparePrix",
    description: "Consultez les conditions générales d'utilisation du site ComparePrix, incluant les modalités de service et les droits des utilisateurs.",
    keywords: ["conditions générales", "utilisation", "services", "responsabilité", "données personnelles", "propriété intellectuelle"],
    robots: "index, follow",
    openGraph: {
      title: "Conditions Générales - ComparePrix",
      description: "Découvrez les conditions générales d'utilisation de ComparePrix, avec des informations sur les services proposés et la responsabilité.",
      url: "https://compareprix.net/condition-generale",
      type: "website",
    },
  };
  
  const ConditionsGenerales = () => {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-[#012737] shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-[#012737] dark:text-white">Conditions Générales</h1>
        <div className="text-lg text-gray-800 dark:text-gray-200 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">1. Objet</h2>
          <p>
            Les présentes conditions générales régissent l'utilisation du site de comparaison des offres de télécommunications et d'énergie. Elles ont pour but de définir les modalités de mise à disposition des services ainsi que les obligations des utilisateurs.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">2. Services proposés</h2>
          <p>
            Le site permet aux utilisateurs de comparer les offres des fournisseurs d'énergie et de télécommunications, en fonction de divers critères tels que le prix, les services inclus et la zone géographique.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">3. Responsabilité</h2>
          <p>
            Le site s'efforce de fournir des informations actualisées et précises, mais ne peut être tenu responsable d'éventuelles erreurs ou omissions. Les offres présentées sont susceptibles de modification par les fournisseurs sans préavis.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">4. Utilisation des données personnelles</h2>
          <p>
            Conformément aux dispositions relatives à la protection des données, les informations personnelles collectées lors de l'utilisation du site sont strictement utilisées pour le bon fonctionnement des services. L'utilisateur a le droit de rectification et de suppression de ses données.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">5. Propriété intellectuelle</h2>
          <p>
            Tous les éléments présents sur le site, y compris les textes, images, logos, et marques, sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction ou utilisation non autorisée est strictement interdite.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">6. Modification des conditions</h2>
          <p>
            Le site se réserve le droit de modifier les présentes conditions générales à tout moment. Les utilisateurs seront informés de toute modification via une mise à jour sur le site.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">7. Loi applicable</h2>
          <p>
            Les présentes conditions générales sont soumises à la loi applicable au siège social de l'éditeur du site. Tout litige sera soumis aux juridictions compétentes.
          </p>
        </div>
      </div>
    );
  };
  
  export default ConditionsGenerales;
  