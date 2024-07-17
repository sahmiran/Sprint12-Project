import React from "react";
import "./Footer.css";
import { FiTwitter } from "react-icons/fi";
import { RiCodepenFill } from "react-icons/ri";
import { FiAtSign } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/useTheme";
import { useLanguage } from "../context/useLanguage";

function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <section className={`footer-container ${theme}`}>
      <div className="footer-content">
        <h1 className={`footer-title ${theme}`}>
          {language === "EN" ? "Send me a message!" : "Bana mesaj gönder!"}
        </h1>
        <p className={`footer-text ${theme}`}>
          {language === "EN"
            ? "Got a question or proposal, or just want to say hello? Go ahead."
            : "Soru yada önerin varsa, yada sadece merhaba demek istiyorsan"}
        </p>
        <p className={`footer-email ${theme}`}>hasancantural19@gmail.com</p>
        <div className={`footer-social-media-icon`}>
          <FiTwitter className={`social-icon ${theme}`} />
          <RiCodepenFill className={`social-icon ${theme}`} />
          <FiAtSign className={`social-icon ${theme}`} />
          <FaInstagram className={`social-icon ${theme}`} />
        </div>
      </div>
    </section>
  );
}

export default Footer;
