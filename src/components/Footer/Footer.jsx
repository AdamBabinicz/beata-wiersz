import React from "react";
import { useTheme } from "../../ThemeContext";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme(); // Pobieramy aktualny motyw za pomocą hooka ThemeContext

  return (
    <footer
      className={`footer ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="footer-section md:border-r">
            <h3 className="text-sm:2xl text-xl font-bold mb-4">O Beacie</h3>
            <p className="text-sm:xl">
              "Nic dla siebie, wszystko dla chwały Bożej i dla ludzi"
            </p>
          </div>
          <div className="footer-section md:border-r">
            <h3 className="text-sm:2xl text-xl font-bold mb-4">Kontakt</h3>
            <a
              href="https:facebook.com/beata.podymniak.9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 mr-4 transition-all text-sm:xl"
            >
              <FaFacebook className="inline-block mr-2" />
              Facebook
            </a>
          </div>
          <div className="footer-section">
            <h3 className="text-sm:2xl text-xl font-bold mb-4">Linki</h3>
            <ul className="flex text-sm:xl">
              <li>
                <a
                  href="https://resurrexit.netlify.app"
                  className="text-gray-400 hover:text-gray-500 mr-4 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resurrexit
                </a>
              </li>
              <li>
                <a
                  href="https://bozyplan.netlify.app"
                  className="text-gray-400 hover:text-gray-500 mr-4 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Boży plan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`flex items-center justify-center py-5 ${
          theme === "dark"
            ? "bg-gray-700 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="text-center text-sm">
          Radom 2024 - {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
