import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { href: '/mentions-legales', text: 'Mentions légales' },
  { href: '/condition-generale', text: 'Conditions générales' },
  { href: '/cookies', text: 'Cookies' },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#012737] text-black dark:text-white font-semibold py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright section */}
          <div className="text-sm md:text-base">
            <p className="transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-300">
              © {new Date().getFullYear()} ComparePrix.
            </p>
          </div>

          {/* Central links section */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm md:text-base">
                <span className="transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">
                  {link.text}
                </span>
              </Link>
            ))}
          </nav>

          {/* GDPR section */}
          <div>
            <a
              href="https://gdprinfo.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="GDPR Information"
            >
              <Image
                src="/images/gdpr.svg"
                alt="Logo GDPR"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8 transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

