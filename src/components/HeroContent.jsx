import React from "react";
import "./HeroContent.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function HeroContent() {
  return (
    <>
      <section className="hero-content-container">
        <div className="hero-content-left">
          <h1 className="hero-content-left-title">
            I am Frontend Developer...
          </h1>
          <p className="hero-content-left-text">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="hero-content-buttons">
            <button className="hero-content-buttons-button">
              <FaGithub className="hero-content-button-button-icon" />
              Github
            </button>
            <button className="hero-content-buttons-button">
              <FaLinkedinIn className="hero-content-button-button-icon" />
              Linkedin
            </button>
          </div>
        </div>

        <div className="hero-content-right">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="hero-content-right-img"
          />
        </div>
      </section>
    </>
  );
}

export default HeroContent;
