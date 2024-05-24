import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeContext";
import { data } from "../../data"; // Przyjąłem, że masz odpowiednią strukturę plików dla danych

const Zobacz = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`page-container pb-6 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
      id="zobacz"
    >
      <div className="py-20 bg-white dark:bg-gray-800">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-center text-gray-800 dark:text-white"
        >
          Zobacz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-xl text-center text-gray-600 dark:text-gray-400"
        >
          Mama, babcia, animatorka życia duchowego, wolontariuszka.
        </motion.p>
      </div>

      <div className="w-4/5 mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-6 my-10">
        {data.map((item, i) => (
          <div
            key={i}
            className={`relative bg-gray-300 dark:bg-gray-700 overflow-hidden ${
              i === 0 || i === 4 || i === 5 || i === 6 ? "md:col-span-2" : ""
            } ${i === 2 ? "md:row-span-2" : ""}`}
          >
            <img
              src={item.img}
              alt={`Placeholder ${i + 1}`}
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zobacz;
