import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./ThemeContext";
import Footer from "./components/Footer/Footer";
import CookieConsent from "./CookieConsent";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
      <CookieConsent />
    </ThemeProvider>
  );
}

export default App;
