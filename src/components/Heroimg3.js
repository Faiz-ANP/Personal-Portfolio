import React from "react";
import "./Heroimg3.css";
import { EXP } from "../constants/Exp";
import { motion } from "framer-motion";

const Heroimg3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="experience"
      className="heroimg3"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="e-heading"
      >
        <h1>Experience</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="crtn"
      >
        {/* <img src={pic} alt="pic" /> */}
        <p>
          As a React Frontend Developer with 6 months of experience, I have
          worked on building dynamic and responsive web applications. I
          specialize in creating user-friendly interfaces, optimizing
          performance, and integrating APIs to deliver seamless user
          experiences.
        </p>
      </motion.div>
      <div>
        {EXP.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            key={index}
            className="main-exp"
          >
            <div className="role">
              <h4>
                {experience.role}
                <br />
              </h4>
              <p>{experience.year}</p>
            </div>
            <div className="info">
              <img src={experience.src} />
              <h4>
                {experience.company}
                <br />
              </h4>
              <p>Role:{experience.info}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Heroimg3;
