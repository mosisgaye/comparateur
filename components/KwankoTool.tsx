"use client";

import React, { useEffect } from "react";

const KwankoTool: React.FC = () => {
  useEffect(() => {
    // Vérifie si le code est exécuté côté client
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src =
        "https://tools.metaffiliation.com/load?config=9wKpJNpFWnyIfb4RFi6Hj2bbzggTgrUC7ZZTj9OywL941aab7EfLOCvyrUZYw7Ed6vGKln0z";
      script.type = "text/javascript";
      script.async = true;
      script.id = "kwanko-script";
      document.getElementById("kwanko-tool-container")?.appendChild(script);

      // Fonction de nettoyage pour supprimer le script au démontage du composant
      return () => {
        const existingScript = document.getElementById("kwanko-script");
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []); // Tableau de dépendances vide pour exécuter une seule fois

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {/* Conteneur pour l'outil Kwanko */}
      <div id="kwanko-tool-container"></div>
    </div>
  );
};

export default KwankoTool;
