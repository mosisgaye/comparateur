// components/EnergyTool.jsx
"use client";
import React, { useEffect } from "react";

const EnergyTool = () => {
  useEffect(() => {
    // Créez un élément script et configurez ses attributs
    const script = document.createElement("script");
    script.src = "https://daisycon.tools/energy-be/app.js";
    script.type = "text/javascript";
    script.async = true;

    // Ajoutez le script au DOM
    document.body.appendChild(script);

    // Nettoyage du script lors du démontage du composant
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg dark:bg-[#012737] ">
      {/* Div pour l'outil */}
      <div
        className="dc-tool dc-energy-tool"
        data-config='{"mediaId":{"daisycon":403417,"xpartners":null},"subId":{"daisycon":null,"xpartners":null},"showFilters":true,"limit":10}'
      ></div>
    </div>
  );
};

export default EnergyTool;







