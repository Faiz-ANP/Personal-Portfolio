import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeBar = () => setClick(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? ".header header-bg" : "header"}>
      <Link
        to="home"
        smooth={true}
        offset={-100}
        duration={500}
        onClick={closeBar}
      >
        <h1>Portfolio</h1>
      </Link>

      <ul className={click ? "menu active" : "menu"}>
        <li>
          <Link
            to="home"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeBar}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeBar}
          >
            About
          </Link>
        </li>
        <li className="p-5">
          <Link
            to="experience"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeBar}
          >
            Experience
          </Link>
        </li>
        <li className="p-5">
          <Link
            to="projects"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeBar}
          >
            Projects
          </Link>
        </li>
        <li className="p-5">
          <Link
            to="education"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeBar}
          >
            Education
          </Link>
        </li>
        <li className="p-5">
          <Link
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeBar}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} color="white" />
        ) : (
          <FaBars size={20} color="white" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
