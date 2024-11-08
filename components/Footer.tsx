import Link from 'next/link'; // Importation du composant Link de Next.js

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#012737] text-black font-semibold">
      <div className="container py-10 bg-white dark:bg-[#012737]">
        <div className="flex w-full items-center justify-between max-md:flex-col">
          {/* Section © 2024 ComparePrix. alignée à gauche */}
          <div className="flex flex-1 justify-start">
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              © 2024 ComparePrix.
            </p>
          </div>

          {/* Section centrale avec Mentions légales, Conditions générales, et Cookies */}
          <div className="flex items-center justify-center gap-6">
            <Link href="/mentions-legales">
              <p className="legal-after text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                Mentions légales
              </p>
            </Link>
            <Link href="/condition-generale">
              <p className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                Conditions générales
              </p>
            </Link>
            <Link href="/cookies">
              <p className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                Cookies
              </p>
            </Link>
          </div>

          {/* Section GDPR alignée à droite */}
          <div className="flex flex-1 justify-end">
            <a
              href="https://gdprinfo.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="/images/gdpr.svg"
                alt="Logo GDPR"
                className="w-8 h-8 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
