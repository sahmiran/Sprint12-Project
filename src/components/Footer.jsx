import React from "react";
import "./Footer.css";
import { FiTwitter } from "react-icons/fi";
import { RiCodepenFill } from "react-icons/ri";
import { FiAtSign } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-content">
        <h1 className="footer-title">Send me a message!</h1>
        <p className="footer-text">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <p className="footer-email">hasancantural19@gmail.com</p>
        <div className="footer-social-media-icon">
          <FiTwitter className="social-icon" />
          <RiCodepenFill className="social-icon" />
          <FiAtSign className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
