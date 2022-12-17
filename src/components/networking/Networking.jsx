import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Networking.css";

export const Networking = () => {
  return (
    <div className="networking__container">
      <div className="networking">
        <i className="networking__icon">
          <FaGithub />
        </i>
        <i className="networking__icon">
          <FaTwitter />
        </i>
        <i className="networking__icon">
          <FaInstagram />
        </i>
        <i className="networking__icon">
          <FaLinkedin />
        </i>
        <i className="networking__icon">
          <FaWhatsapp />
        </i>
      </div>
    </div>
  );
};
