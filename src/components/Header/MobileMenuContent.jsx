import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import img from "../../assets/24.png";
import SmoothScrollLink from "../../SmoothScrollLink";

const MobileMenuContent = ({ theme, toggleMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    toggleMenu();
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 bottom-0 min-w-full h-screen z-50 flex flex-col items-center justify-between ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className="fixed top-4 right-4 z-50 cursor-pointer"
        onClick={toggleMenu}
      >
        <IoClose
          className={`text-2xl font-extrabold ${
            theme !== "dark" && "text-gray-800"
          }`}
        />
      </div>

      <div className="font-cabin font-light tracking-wider flex flex-col items-center gap-10 mt-20 list-none">
        <motion.li
          initial={{ y: "-150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="cursor-pointer"
        >
          <SmoothScrollLink to="start" onClick={handleLinkClick}>
            Start
          </SmoothScrollLink>
        </motion.li>

        <motion.div
          initial={{ y: "-150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="cursor-pointer flex items-center gap-1"
          onClick={toggleDropdown}
        >
          Rozwiń <TiArrowSortedDown />
        </motion.div>
        {isDropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute mt-24 w-48 ${
              theme === "dark" ? "bg-gray-600" : "bg-white"
            } shadow-lg rounded-md p-2 z-20 list-none`}
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
        <motion.li
          initial={{ y: "-150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="cursor-pointer"
        >
          <SmoothScrollLink to="wiersz" onClick={handleLinkClick}>
            Czytaj
          </SmoothScrollLink>
        </motion.li>
        <motion.li
          initial={{ y: "-150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="cursor-pointer"
        >
          <SmoothScrollLink to="zobacz" onClick={handleLinkClick}>
            Zobacz
          </SmoothScrollLink>
        </motion.li>
      </div>

      <motion.div
        className="w-full"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <img src={img} alt="..." className="w-full h-[400px] object-contain " />
      </motion.div>
    </motion.div>
  );
};

export default MobileMenuContent;
