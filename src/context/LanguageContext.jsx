import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "../translations/languages.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const countryToLanguage = {
    DE: "de",
    FR: "fr",
    ES: "es",
    NL: "nl",
    JP: "ja",
    TW: "tw",
    KR: "ko",
    IT: "it",
    PT: "pt",
    CZ: "cs"
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const userCountryCode = data.country_code;
        
        if (countryToLanguage[userCountryCode]) {
          setLanguage(countryToLanguage[userCountryCode]);
        }
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    fetchUserLocation();
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
