import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/2.png";
import SmoothScrollLink from "../../SmoothScrollLink";
import { Link } from "react-router-dom";
import img1 from "../../assets/19.png";

function Hero({ toggleMenu }) {
  const handleButtonClick = (elementId) => {
    toggleMenu();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[100%] h-[100vh] bg-LightPrimary dark:bg-DarkPrimary relative overflow-hidden">
      {/* Container */}
      <div className="w-[90%] h-full m-auto flex flex-col justify-start items-start gap-4 z-10 pt-40 max-xl:pt-20 max-lg:pt-20 max-lg:center">
        {/* Details */}
        <div className="max-lg:h-[80%] max-[1025px]:h-[80%] flex flex-col justify-start items-start mt-20 gap-4 z-1">
          {/* Hero Details */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-7xl font-bold font-cabin text-DarkPrimary dark:text-LightPrimary max-xl:text-6xl max-[980px]:text-5xl max-md:text-4xl max-sm:text-3xl sm:pb-5 pb-2"
            >
              "Dobrze, że jesteś"
            </motion.h1>
          </div>

          {/* Mobile Details */}
          <div className="font-light tracking-wider flex justify-center items-center overflow-hidden">
            {/* Object Image */}
            <motion.img
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.5 }}
              className="object-cover w-40 ml-[-50px] mr-5 z-10 max-sm:w-28"
              src={img1}
              alt="..."
            />

            {/* Object Title */}
            <div className="gap-1 flex flex-col justify-center items-start z-0 overflow-hidden">
              <motion.h1
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold font-cabin text-DarkSecondary dark:text-TextPrimaryColor max-sm:text-lg overflow-hidden"
              >
                choć Ciebie nie ma
              </motion.h1>

              {/* Sub Heading */}
              <motion.h4
                initial={{ x: "150%" }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.8 }}
                className="text-medium font-bold font-cabin text-[#a7a7a7] z-10 max-sm:text-sm"
              >
                wybór z tomiku
              </motion.h4>

              {/* Price */}
              <div className="flex justify-start gap-4 items-center z-10 overflow-hidden">
                <motion.h2
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-xl font-normal font-roboto text-DarkSecondary dark:text-TextPrimaryColor z-10 max-sm:text-lg"
                >
                  "Wiersze
                </motion.h2>

                <motion.h4
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="font-normal text-xl font-cabin dark:text-[#F6F6F6B5] text-DarkSecondary line-through z-10 max-sm:text-xs"
                >
                  antypowabne"
                </motion.h4>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-4 z-20 overflow-hidden">
            <motion.button
              initial={{ y: "150%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-[200px] h-[60px] max-md:w-[150px] max-md:h-[50px] max-sm:w-[100px] max-sm:h-[40px] max-sm:text-sm rounded-full bg-DarkSecondary dark:bg-ButtonColor text-TextPrimaryColor text-xl max-md:text-lg tracking-wider font-bold font-cabin transition-all linear duration-200 hover:bg-transparent hover:dark:bg-transparent hover:text-DarkPrimary hover:border-[2px] hover:border-solid hover:border-DarkSecondary hover:dark:text-LightPrimary hover:dark:border-2 hover:dark:border-solid hover:dark:border-LightSecondary"
              // onClick={toggleMenu}
              onClick={() => handleButtonClick("wiersz")}
            >
              <SmoothScrollLink to="wiersz">Czytaj</SmoothScrollLink>
            </motion.button>

            <motion.button
              initial={{ y: "150%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-[300px] h-[60px] max-md:w-[200px] max-md:h-[50px] max-sm:h-[40px] rounded-full dark:border-[1px] border-[2px] border-solid dark:border-LightSecondary border-DarkSecondary dark:text-TextPrimaryColor text-DarkSecondary text-lg max-md:text-xs tracking-wider font-bold font-cabin hover:translate-y-[-5px] duration-500 -z-10"
              onClick={() => handleButtonClick("zobacz")}
            >
              <SmoothScrollLink to="zobacz">Zobacz</SmoothScrollLink>
            </motion.button>
          </div>
        </div>
        <div className="w-[100vw] h-[100vh] light:bg-HeroLightBg dark:bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] z-10 hidden dark:block top-0 right-0 absolute"></div>
        <div className="z-10 block top-0 right-0 absolute"></div>
        <motion.div
          initial={{ x: "150%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute top-[15%] right-[5%] z-2 max-xl:top-[10%] max-[1025px]:top-[45%] max-[1025px]:right-[10%] max-lg:top-[40%] max-lg:right-[5%] max-[980px]:top-[40%] max-md:right-[20%] max-md:top-[50%] max-sm:right-[0%]"
        >
          <img
            className="object-cover w-[560px] max-2xl:w-[525px] max-xl:w-[525px] max-lg:w-[600px] max-md:w-[350px]"
            src={img}
            alt="..."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
