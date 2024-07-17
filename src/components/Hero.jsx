import React from "react";
import Header from "./Header";
import HeroContent from "./HeroContent";
import "./Hero.css";
import { useTheme } from "../context/useTheme";
import { useLanguage } from "../context/useLanguage";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const handleDarkModeClick = () => {
    toggleTheme();
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  const handleLanguageClick = () => {
    toggleLanguage();
    localStorage.setItem("language", JSON.stringify(language));
  };

  return (
    <>
      <section className={`hero ${theme}`}>
        <div className="hero-header-div">
          <Header></Header>
          <div className="hero-tr-darkmode-container">
            <p className="hero-tr-gec" onClick={handleLanguageClick}>
              {language === "EN" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGISH"}
            </p>
            <button
              className="hero-darkmode-switch"
              onClick={handleDarkModeClick}
            >
              {theme === "light" ? "Dark mode" : "Light mode"}
            </button>
          </div>
        </div>

        <div className="hero-content-div">
          <HeroContent></HeroContent>
        </div>
      </section>
    </>
  );
}

export default Hero;
