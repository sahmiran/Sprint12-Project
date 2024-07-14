import React from "react";
import Header from "./Header";
import HeroContent from "./HeroContent";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-header-div">
          <Header></Header>
        </div>
        <p>TÜRKÇE’YE GEÇ</p>
        <button>Darkmod</button>
        <div className="hero-content-div">
          <HeroContent></HeroContent>
        </div>
      </section>
    </>
  );
}

export default Hero;
