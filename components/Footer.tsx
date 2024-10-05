import Link from 'next/link'; // Importation du composant Link de Next.js
import { socials } from "@/constants/index";

const Footer = () => {
  return (
    <footer className="bg-[#012737] dark:bg-[#012737]">
      <div className="container py-10 bg-[#012737] dark:bg-[#012737]">
        <div className="flex w-full items-center max-md:flex-col">
          <div className="small-compact flex flex-1 items-center justify-center gap-5">
            <p className="text-p5 transition-all duration-500 hover:text-p1 text-white px-5">
              © 2024 ComparePrix.
            </p>
          </div>

          <div className="flex items-center justify-center sm:ml-auto gap-6">
            <Link href="/mentions-legales">
              <p className="legal-after text-p5 transition-all duration-500 hover:text-p1 text-white cursor-pointer">
                Mentions légales
              </p>
            </Link>
            <Link href="/conditions-generales">
              <p className="text-p5 transition-all duration-500 hover:text-p1 text-white mr-6 cursor-pointer">
                Conditions générales
              </p>
            </Link>
            <Link href="/politique-cookies">
              <p className="text-p5 transition-all duration-500 hover:text-p1 text-white mr-6 cursor-pointer">
                Cookies
              </p>
            </Link>

            {/* Ajout de l'espace ici */}
            <div className="flex items-center justify-center ml-6">
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

          <ul className="flex flex-1 items-center justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
