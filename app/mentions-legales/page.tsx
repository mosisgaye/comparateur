export const metadata = {
  title: "Mentions Légales - ComparePrix",
  description: "Consultez les mentions légales de ComparePrix, incluant les informations sur l'éditeur, l'hébergeur, et la confidentialité des données personnelles.",
  keywords: ["Mentions légales", "éditeur", "hébergeur", "données personnelles", "confidentialité", "cookies", "CNIL"],
  robots: "index, follow",
  openGraph: {
    title: "Mentions Légales - ComparePrix",
    description: "Découvrez les mentions légales du site ComparePrix, avec des informations sur l'éditeur, l'hébergeur et la gestion des données personnelles.",
    url: "https://compareprix.net/mentions-legales",
    type: "website",
  },
};

const MentionsLegales = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-[#012737] shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-[#012737] dark:text-white">Mentions Légales</h1>
      <div className="text-lg text-gray-800 dark:text-gray-200 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Éditeur</h2>
        <p>Optima Outsourcing CV - Karel De Preterlei 61 2140 Antwerpen</p>
        <p>RCS Rennes</p>
        <p>SIREN : BE 0797.493.220</p>
        <p>N° de TVA : BE0797493220</p>
        <p>ORIAS : 20002587</p>
        <p>Capital : 10000 €</p>
        <p>Directeur de publication : Mohamed Bouzambou</p>
        <p>N° de téléphone : +32 (0)4 97 603 703</p>
        <p>Contact par email : contact[at]compareprix.net ou en ligne</p>

        <h2 className="text-2xl font-semibold mb-2">Hébergeur</h2>
        <p>Les sites optima outsourcing sont hébergés par Vercel.</p>

        <h2 className="text-2xl font-semibold mb-2">Confidentialité / Données personnelles</h2>
        <p className="mb-4">
          Conformément aux dispositions de la Loi "Informatique et libertés", le site <a href="https://compareprix.net" className="text-blue-600 underline">www.compareprix.net</a> a fait l'objet d'une déclaration à la CNIL.
        </p>
        {/* (Suite du contenu) */}
      </div>
    </div>
  );
};

export default MentionsLegales;
