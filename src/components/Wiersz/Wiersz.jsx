import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeContext";
import img from "../../assets/1.png";

const Wiersz = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      id="wiersz"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-8">
        <div className="text-center mb-8">
          <h2
            className={`text-4xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-800"
            } mb-4`}
          >
            "Dobrze, że jesteś"
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left">
          <img
            src={img}
            alt="..."
            className="w-full h-auto max-w-[300px] mb-4 md:mb-0 md:mr-8 object-cover"
          />
          <div className="flex-grow max-w-[calc(100% - 320px)]">
            <div className="space-y-4">
              <p
                className={`text-lg font-medium leading-normal ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Dobrze, że jesteś,
                <br />
                choć Ciebie nie ma.
              </p>
              <p
                className={`text-lg font-medium leading-normal ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Dobrze, że kochasz,
                <br />
                choć miłość Twa płocha.
              </p>
              <p
                className={`text-lg font-medium leading-normal ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Dobrze, że tęsknisz,
                <br />
                choć nie za tym światem.
              </p>
              <p
                className={`text-lg font-medium leading-normal ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Dobrze, że płaczesz,
                <br />
                choć samotnie, czasem.
              </p>
              <p
                className={`text-lg font-medium leading-normal ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Dobrze, że pragniesz,
                <br />
                choć nie dla siebie.
              </p>
              <p
                className={`text-lg font-medium leading-normal ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Dobrze, że ufasz,
                <br />
                choć nie swemu sercu.
              </p>
              <p
                className={`text-lg font-medium leading-normal ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Dobrze, że jesteś, ta sama,
                <br />
                choć jednak odmienna.
              </p>
              <p
                className={`text-lg font-medium leading-normal ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Dobrze, że jesteś, Kochana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Wiersz;
