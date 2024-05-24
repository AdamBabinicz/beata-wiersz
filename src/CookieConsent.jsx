import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(
    Cookies.get("cookiesAccepted")
  );

  useEffect(() => {
    if (!acceptedCookies && typeof document !== "undefined") {
      document.body.classList.add("overflow-hidden"); // Zablokuj przewijanie tła, jeśli komunikat jest wyświetlany
    } else if (typeof document !== "undefined") {
      document.body.classList.remove("overflow-hidden"); // Odblokuj przewijanie, jeśli komunikat nie jest wyświetlany
    }
  }, [acceptedCookies]);

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", true, { expires: 365 });
    setAcceptedCookies(true);
    if (typeof document !== "undefined") {
      document.body.classList.remove("overflow-hidden"); // Odblokuj przewijanie po zaakceptowaniu
    }
  };

  if (acceptedCookies) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 transition-transform ease-in-out duration-300 transform ${
        !acceptedCookies ? "translate-y-0" : "translate-y-full"
      } z-50`}
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <p className="text-sm mb-2">
            Ta strona używa plików cookie, aby zapewnić lepsze doświadczenia
            użytkownikom. Korzystając z tej strony, zgadzasz się na naszą
            politykę dotyczącą ciasteczek.
          </p>
          <p className="text-xs opacity-50">
            Ta strona korzysta z ciasteczek w celu dostosowania treści do Twoich
            potrzeb.
          </p>
        </div>
        <button
          onClick={acceptCookies}
          className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
        >
          Rozumiem, zamknij
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
