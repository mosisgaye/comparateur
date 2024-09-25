"use client";
import React, { useEffect } from "react";

const DaisyconTool = () => {
  useEffect(() => {
    // Crée un élément script et configure ses attributs
    const script = document.createElement("script");
    script.src = "https://daisycon.tools/all-in-one/app.js"; // Lien vers le script Daisycon
    script.type = "text/javascript";
    script.async = true;

    // Ajoute le script au DOM
    document.body.appendChild(script);

    // Nettoyage du script lors du démontage du composant
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg dark:bg-[#012737] ">
      {/* Div pour l'outil Daisycon avec la configuration et la langue en français */}
      <div
        className="dc-tool dc-all-in-one-tool"
        data-config='{"mediaId":{"daisycon":403414,"xpartners":null},"language":"fr","buttonText":"Voir","showFilters":true,"limit":25}'
      ></div>
    </div>
  );
};

export default DaisyconTool;
