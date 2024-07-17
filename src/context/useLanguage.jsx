import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  let defaultLang = "TR";
  if (localStorage.getItem("language")) {
    defaultLang = localStorage.getItem("language");
  } else {
    defaultLang = "TR";
  }

  const [language, setLanguage] = useState(defaultLang);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "TR" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  return useContext(LanguageContext);
}
