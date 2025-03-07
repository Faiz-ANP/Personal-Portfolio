import "./Heroimg.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import IntroImg from "../assets/img3portf.avif";
import { Link } from "react-scroll";
import { FaReact } from "react-icons/fa";

const Heroimg = () => {
  return (
    <div id="home" className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"></img>
      </div>
      <div className="content">
        {/* <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          whileInView={{ scale: 1, opacity: 1 }}
        > */}
         <motion.p
              initial={{ y: 10 }}
              animate={{ y: [-10, 0] }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
          HI , I'M FAIZ
        </motion.p>
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <TypeAnimation
          sequence={["REACT DEVELOPER.",4000]}
          speed={50}
          repeat={Infinity}
          className='font-bold italic'
          /> 
          
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link to="contact">
            <button className="btn">GET IN TOUCH</button>
          </Link>
          <a target="blank" href="https://drive.google.com/file/d/15rGtUjw9e0a44noC52SEHE0iea4kkMWm/view?usp=sharing">
            <button className="btn">RESUME</button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Heroimg;
