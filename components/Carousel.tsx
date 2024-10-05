import React from 'react';
import '@/app/globals.css';

const Carousel = () => {
  return (
    <section className="providers-carousel bg-white dark:bg-[#012737] transition-colors duration-300">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2 className="providers-carousel--title text-gray-900 dark:text-white">
              Nous comparons les fournisseurs en Énergie et Télécoms
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="providers-carousel__slider">
              <div className="providers-carousel__slider__slide-track">
                {[
                  {
                    src: "https://dte.ohm-energie.com/?a=P512BA75828231D17",
                    alt: "ohm-logo",
                    height: 100,
                    width: 200,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo-engie.svg",
                    alt: "enie-logo",
                    height: 100,
                    width: 131,
                  },
                  {
                    src: "https://www.auchantelecom.fr/themes/custom/maya/logo.svg",
                    alt: "auchantelecom-logo",
                    height: 44,
                    width: 200,
                  },
                  {
                    src: "https://www.nrjmobile.fr/sites/default/files/2024-05/logo-nrj_0.svg",
                    alt: "nrjmobile-logo",
                    height: 157,
                    width: 200,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Logo-YouPrice.svg",
                    alt: "Logo-YouPrice",
                    height: 67,
                    width: 125,
                  },
                  {
                    src: "https://dte.ohm-energie.com/?a=P512BA75828231D17",
                    alt: "ohm-logo",
                    height: 100,
                    width: 200,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo-engie.svg",
                    alt: "enie-logo",
                    height: 100,
                    width: 131,
                  },
                  {
                    src: "https://www.auchantelecom.fr/themes/custom/maya/logo.svg",
                    alt: "auchantelecom-logo",
                    height: 44,
                    width: 200,
                  },
                  {
                    src: "https://www.nrjmobile.fr/sites/default/files/2024-05/logo-nrj_0.svg",
                    alt: "nrjmobile-logo",
                    height: 157,
                    width: 200,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Logo-YouPrice.svg",
                    alt: "Logo-YouPrice",
                    height: 67,
                    width: 125,
                  },
                  {
                    src: "https://dte.ohm-energie.com/?a=P512BA75828231D17",
                    alt: "ohm-logo",
                    height: 100,
                    width: 200,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo-engie.svg",
                    alt: "enie-logo",
                    height: 100,
                    width: 131,
                  },
                  {
                    src: "https://www.auchantelecom.fr/themes/custom/maya/logo.svg",
                    alt: "auchantelecom-logo",
                    height: 44,
                    width: 200,
                  },
                  {
                    src: "https://www.nrjmobile.fr/sites/default/files/2024-05/logo-nrj_0.svg",
                    alt: "nrjmobile-logo",
                    height: 157,
                    width: 200,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Logo-YouPrice.svg",
                    alt: "Logo-YouPrice",
                    height: 67,
                    width: 125,
                  }
                ].map((provider, index) => (
                  <div className="providers-carousel__slider__slide-track--slide" key={index}>
                    <img
                      src={provider.src}
                      height={provider.height}
                      width={provider.width}
                      alt={provider.alt}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
