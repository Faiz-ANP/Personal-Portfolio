import React from "react";
import "./Footer.css";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="phone">
          <h4>
            <FaPhoneAlt
              size={20}
              style={{ color: "white", margin: "0 1rem" }}
            />
        <a target="blank" href="tel:+917025871707">
        +917025871707</a>
          </h4>
        </div>

        <div className="email">
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: "white", margin: "0 1rem" }}
            />
            <a target="blank" href="mailto:faize1707@gmail.com">faize1707@gmail.com</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
