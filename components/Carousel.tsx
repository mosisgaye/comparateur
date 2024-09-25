import React from 'react';
import '@/app/globals.css';

const Carousel = () => {
  return (
    <section className="providers-carousel bg-white dark:bg-[#012737] transition-colors duration-300">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2 className="providers-carousel--title text-gray-900 dark:text-white">
              Nous comparons pour vous tous les fournisseurs en Énergie:
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
                    src: "https://www.mega.be/images/svg/logo-mega.svg",
                    alt: "Beobank",
                    height: 100,
                    width: 200,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo-engie.svg",
                    alt: "DHB Bank",
                    height: 100,
                    width: 131,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/fr/f/f7/Logo_TotalEnergies.svg",
                    alt: "Mozzeno",
                    height: 44,
                    width: 200,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Eneco_logo.png",
                    alt: "Cofidis",
                    height: 157,
                    width: 200,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/fr/c/c6/Logo_Luminus.svg",
                    alt: "Elantis",
                    height: 67,
                    width: 125,
                  },
                  {
                    src: "https://cdn-aus.aglty.io/frank-energy/Attachments/NewItems/logo_20230517214229_0.svg",
                    alt: "Alphacredit",
                    height: 67,
                    width: 125,
                  },
                  {
                    src: "https://api.comparateur.be/uploads/media/file_6123804d132fa5.54814991.svg",
                    alt: "Aviza",
                    height: 95,
                    width: 200,
                  },
                  {
                    src: "https://trevion.be/wp-content/uploads/2021/05/logo-hd.svg",
                    alt: "Cardif",
                    height: 42,
                    width: 200,
                  },
                  {
                    src: "https://www.octaplus.be/static/img/logo.png",
                    alt: "Beobank",
                    height: 100,
                    width: 200,
                  },
                  {
                    src: "https://www.elegant.be/Assets/images/FR-Logo_elegant-RGB-255x114.png",
                    alt: "DHB Bank",
                    height: 100,
                    width: 131,
                  },
                  {
                    src: "https://api.comparateur.be/uploads/media/file_6123823b305135.38730196.svg",
                    alt: "Mozzeno",
                    height: 44,
                    width: 200,
                  },
                  {
                    src: "https://api.comparateur.be/uploads/media/file_61237f00acc5e0.61590635.png",
                    alt: "Cofidis",
                    height: 157,
                    width: 200,
                  },
                  {
                    src: "https://api.comparateur.be/uploads/media/file_61237f4521afc1.91464779.png",
                    alt: "Elantis",
                    height: 67,
                    width: 125,
                  },
                  {
                    src: "https://api.comparateur.be/uploads/media/file_6123806ff2eb18.04915272.png",
                    alt: "Alphacredit",
                    height: 67,
                    width: 125,
                  },
                  {
                    src: "https://api.comparateur.be/uploads/media/file_6123807dab54d5.24968359.png",
                    alt: "Aviza",
                    height: 95,
                    width: 200,
                  },
                  {
                    src: "https://api.comparateur.be/uploads/media/66a201a902e63.svg",
                    alt: "Cardif",
                    height: 42,
                    width: 200,
                  },
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
