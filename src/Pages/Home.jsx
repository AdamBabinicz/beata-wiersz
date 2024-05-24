import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import Wiersz from "../components/Wiersz/Wiersz";
import Zobacz from "../components/Wiersz/Zobacz";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Hero toggleMenu={toggleMenu} />
      <Wiersz />
      <Zobacz />
    </>
  );
}

export default Home;
