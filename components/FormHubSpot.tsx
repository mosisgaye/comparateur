'use client';

import React, { useEffect } from 'react';

const FormHubSpot: React.FC = () => {
  useEffect(() => {
    const scriptUrl = '//js-eu1.hsforms.net/forms/embed/v2.js';

    // Check if the script is already present
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement('script');
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src = scriptUrl;

      script.onload = () => {
        if ((window as any).hbspt) {
          (window as any).hbspt.forms.create({
            region: 'eu1',
            portalId: '48060727',
            formId: 'd074bf59-9100-4473-bd8d-11ea1774ab19',
            target: '#hubspot-form',
          });
        }
      };

      document.body.appendChild(script);

      // Cleanup script on component unmount
      return () => {
        if (script.parentNode) {
          document.body.removeChild(script);
        }
      };
    } else {
      // If script already exists, directly create the form
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: 'eu1',
          portalId: '48060727',
          formId: 'd074bf59-9100-4473-bd8d-11ea1774ab19',
          target: '#hubspot-form',
        });
      }
    }
  }, []);

  return (
    <div
      id="hubspot-form"
      className="p-6 border-2 border-[#79CE25] bg-white rounded-lg shadow-md w-full max-w-md"
    ></div>
  );
};

export default FormHubSpot;
