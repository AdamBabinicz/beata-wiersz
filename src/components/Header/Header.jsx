import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdDarkMode } from "react-icons/md";
import MobileMenuContent from "./MobileMenuContent";
import { useTheme } from "../../ThemeContext";
import SmoothScrollLink from "../../SmoothScrollLink"; // Import SmoothScrollLink lub odpowiedni komponent do przewijania

function Header() {
  const { toggleTheme, theme } = useTheme();
  const [isSearch, setIsSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Stan do kontrolowania widoczności rozwijanego menu

  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div
        className={`w-full h-28 fixed z-30 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
        id="start"
      >
        <div className="md:hidden">
          <div
            onClick={toggleMenu}
            className="fixed top-4 right-4 z-9999 cursor-pointer"
          >
            <IoMenu
              className={`text-2xl font-extrabold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            />
          </div>
          <AnimatePresence>
            {showMenu && (
              <MobileMenuContent theme={theme} toggleMenu={toggleMenu} />
            )}
          </AnimatePresence>
        </div>

        <div className="w-[90%] h-full m-auto flex justify-between items-center text-DarkPrimary dark:text-LightPrimary">
          {/* Lewa strona */}
          <div className="flex space-x-14 justify-center items-center">
            {/* Logo */}
            <motion.div
              initial={{ x: "-150%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <SmoothScrollLink to="start">
                <h1 className="text-3xl font-bold font-poppins max-sm:text-lg cursor-pointer">
                  poezja i Muza
                </h1>
              </SmoothScrollLink>
              <p className="font-roboto text-sm tracking-wider max-sm:text-xs">
                wiersz inspirowany
              </p>
            </motion.div>

            <div className="relative">
              <motion.ul className="text-[3D3D3D] font-cabin font-light tracking-wider flex justify-center items-center gap-10 max-xl:hidden">
                <motion.li
                  initial={{ y: -150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <SmoothScrollLink
                    to="start"
                    onClick={() => scrollToSection("start")}
                  >
                    Start
                  </SmoothScrollLink>
                </motion.li>
                <motion.li
                  initial={{ y: -150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex justify-center items-center gap-1 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  Rozwiń <TiArrowSortedDown />
                </motion.li>
              </motion.ul>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute mt-2 w-48 ${
                    theme === "dark" ? "bg-gray-600" : "bg-white"
                  } shadow-lg rounded-md p-2 z-10`}
                >
                  <li className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <a
                      href="//poetry.netlify.app/uczucie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onClick={handleLinkClick}
                    >
                      Uczucie
                    </a>
                  </li>
                  <li className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <a
                      href="//poetry.netlify.app/szal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onClick={handleLinkClick}
                    >
                      Szal
                    </a>
                  </li>
                  <li className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <a
                      href="//poetry.netlify.app/dlon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onClick={handleLinkClick}
                    >
                      Dłoń
                    </a>
                  </li>
                  <li className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <a
                      href="//poetry.netlify.app/pietno"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onClick={handleLinkClick}
                    >
                      Piętno
                    </a>
                  </li>
                  <li className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <a
                      href="//poetry.netlify.app/zdziwienie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onClick={handleLinkClick}
                    >
                      Zdziwienie
                    </a>
                  </li>
                </motion.ul>
              )}
            </div>
          </div>

          {/* Przycisk Dark Mode */}
          <motion.button
            className="fixed flex right-4 items-center focus:outline-none"
            onClick={toggleTheme}
          >
            <MdDarkMode className="text-2xl font-extrabold cursor-pointer" />
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Header;
