import React from "react";
import Header from "./Header";
import HeroContent from "./HeroContent";
import "./Hero.css";
import { useTheme } from "../context/useTheme";
import { useLanguage } from "../context/useLanguage";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      <section className={`hero ${theme}`}>
        <div className="hero-header-div">
          <Header></Header>
          <div className="hero-tr-darkmode-container">
            <p className="hero-tr-gec">TÜRKÇE’YE GEÇ</p>
            <button className="hero-darkmode-switch" onClick={toggleTheme}>
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
