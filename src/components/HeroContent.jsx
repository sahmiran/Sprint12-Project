import React from "react";
import "./HeroContent.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../context/useLanguage";

function HeroContent() {
  const { language } = useLanguage();
  return (
    <>
      <section className="hero-content-container">
        <div className="hero-content-left">
          <h1 className="hero-content-left-title">
            {language === "EN"
              ? "I am Frontend Developer..."
              : "Ben bir Frontend Developerım..."}
          </h1>

          <p className="hero-content-left-text">
            {language === "EN"
              ? "...who likes to craft solid and scalable frontend products with great user experiences."
              : "...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seven."}
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
            src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJSB4D6Z~7n3KXJGIBjG7ZQqh4mBD2Qs8miZEUqBgfzUF405~A1Up0ng-i5BaOUF52-zFuAeHTz6t~cFqwOP5lO6clMi8RP7vJvT6X2YEV3NVOlt63eYKxmRGFjsv5NResnymuaMrlgosiMz4ouK5BGcHn6iBk4QlCPOUnoeQ0ZymyQtE3IjQfbP2Gk2z77OF93KhSraq1OgjZXtY308qAGRVI2nx3O55rOcPeRxIwNk86zDXKiWDOPqlJjAfG4IX16zWX381BxbhKQ8ISNh7KCFcV-SUhVjKiW4Y8RNBwDSdcKqavJDO-DBoY83wfu2olpnUM6NefM5jvChD7c3Tw__"
            alt=""
            className="hero-content-right-img"
          />
        </div>
      </section>
    </>
  );
}

export default HeroContent;
