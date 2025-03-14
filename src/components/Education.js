import React from "react";
import "./Education.css";
import { motion } from "framer-motion";
import kannur from "../assets/univ logo.png";
import riss from "../assets/riss-technologies-logo.jpg";
import hse from "../assets/OIP.jpeg";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="education"
      className="education"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="ed-heading"
      >
        <h1>Education</h1>
        <h2>Basic Qualification and Certifications</h2>
        <p>
          I am a BSc C.S. graduate who specialize in front-end development with
          React.js. Currently I am pursuing my MCA.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="ed-crtn"
      >
        {/* <img src={gologo}></img> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="sub1"
        >
          <h2>Degree Received</h2>
          <div className="img-knr">
            <img src={kannur}></img>
            <div className="caption-knr">
              <h2>KANNUR UNIVERSITY</h2>
              <h4>Bachelor of Science in Computer Science</h4>
              <p>2021-2024</p>
              <div className="info-knr">
                <p>
                  - Completed BSC CS with a OGPA of 7.036.<br></br>- Worked on
                  one major project with a team.
                </p>
                <button className="btn1">
                  <a
                    target="blank"
                    href="https://www.kannuruniversity.ac.in/en/"
                  >
                    Visit website
                  </a>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="sub2"
        >
          <h2>Certifications</h2>
          <div className="allcrtf">
            <div className="consol">
              <a
                target="blank"
                href="https://drive.google.com/file/d/12KYKbcM1N--gNffbgR5W-y6iJfy9ngJH/view?usp=sharing"
              >
                <img src={kannur}></img>
                <div className="crtcp">
                  <h3>Degree Consolidation</h3>
                  <h5> Kannur University </h5>
                </div>
              </a>
            </div>

            <div className="riss">
              <a
                target="blank"
                href="https://drive.google.com/file/d/1QuT9e-ZkywCL7ce1oFnEH3VrBtrSJfmo/view?usp=sharing"
              >
                <img src={riss}></img>
                <div className="crtcp">
                  <h3> Software Development Certification</h3>
                  <h5>Riss Technologies</h5>
                </div>
              </a>
            </div>
            <div className="hse">
              <a
                target="blank"
                href="https://drive.google.com/file/d/1DKoKu27cjDpFbNM5KyohP2YwHRXQLOaK/view?usp=sharing"
              >
                <img src={hse}></img>
                <div className="crtcp">
                  <h3>HSE Certificate (12th)</h3>
                  <h5>Govt of Kerala</h5>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
