import React from "react";
import "./Heroimg2.css";
import { VscVscode } from "react-icons/vsc";
import { SiRedux } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import {
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaWindows,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";

const Heroimg2 = () => {
  return (
    <div id="about" className="aboutpage">
      <div className="hero-img2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="heading"
        >
          <h1>Here's What I Do</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="skills"
        >
          <p>SKILLS & tools</p>
          <motion.ul>
            <motion.li
              initial={{ y: 10 }}
              animate={{ y: [-10, 10] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaHtml5
                size={75}
                title="HTML"
                style={{ color: "orange", marginRight: "1rem" }}
              />
            </motion.li>
            <motion.li
              initial={{ y: -10 }}
              animate={{ y: [10, -10] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <IoLogoCss3
                size={75}
                title="CSS"
                style={{ color: "white", marginRight: "1rem" }}
              />
            </motion.li>
            <motion.li
              initial={{ y: -10 }}
              animate={{ y: [10, -10] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <SiRedux
                size={75}
                title="Redux"
                style={{ color: "violet", marginRight: "1rem" }}
              />
            </motion.li>
            <motion.li
              initial={{ y: 10 }}
              animate={{ y: [-10, 10] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaJs
                size={75}
                title="JavaScript"
                style={{ color: "yellow", marginRight: "1rem" }}
              />
            </motion.li>
            <motion.li
              initial={{ y: -10 }}
              animate={{ y: [10, -10] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaReact
                size={75}
                title="React"
                style={{ color: "blue", marginRight: "1rem" }}
              />
            </motion.li>
            <motion.li
              initial={{ y: -10 }}
              animate={{ y: [10, -10] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <RiNextjsFill
                size={75}
                title="Next.js"
                style={{ color: "white", marginRight: "1rem" }}
              />
            </motion.li>
            <motion.li
              initial={{ y: 10 }}
              animate={{ y: [-10, 10] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaPython
                size={75}
                title="Python"
                style={{ color: "grey", marginRight: "1rem" }}
              />
            </motion.li>
            <motion.li
              initial={{ y: -10 }}
              animate={{ y: [10, -10] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaGithub
                size={75}
                title="Github"
                style={{ color: "white", marginRight: "1rem" }}
              />
            </motion.li>

            <motion.li
              initial={{ y: 10 }}
              animate={{ y: [-10, 10] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <VscVscode
                size={75}
                title="VS Code"
                style={{ color: "blue", marginRight: "1rem" }}
              />
            </motion.li>
          </motion.ul>
        </motion.div>

        <div className="about">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="points"
          >
            <ul>
              <li>
                <p>
                  ⚡ Expert in React & Modern UI Development – Proficient in
                  building dynamic, high-performance web applications using
                  React.js, Next.js, and modern frontend technologies.
                </p>
              </li>
              <br></br>
              <li>
                <p>
                  ⚡ Strong State Management Skills – Experienced with Redux,
                  Context API, and React Query for efficient application state
                  management and API integration.
                </p>
              </li>
              <br></br>
              <li>
                <p>
                  ⚡ Responsive & Scalable UI Design – Skilled in creating
                  responsive, accessible, and pixel-perfect UI using Tailwind
                  CSS, Material UI, and styled-components.
                </p>
              </li>
              <br></br>
              <li>
                <p>
                  ⚡ Version Control: Using Git and GitHub for collaboration and
                  project management.
                </p>
              </li>
              <br></br>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Heroimg2;
