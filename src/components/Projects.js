import React from "react";
import "./Projects.css";
import { PROJECTS } from "../constants/Proj";
import { FaReact, FaJs, FaHtml5, FaGithub } from "react-icons/fa";
import { SiCss3, SiRedux } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="p-main">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p_heading"
      >
        <h1>Projects</h1>
        <div className="crtn1">
          {/* <img src={proj} /> */}
          <p>
            Welcome to my project showcase! Here, you'll find a collection of
            React-based applications that highlight my skills in frontend
            development, UI/UX design, and API integration. Each project is
            built with modern web technologies, demonstrating my ability to
            create responsive, interactive, and user-friendly experiences. Feel
            free to explore my work below!
          </p>
        </div>
      </motion.div>
      <div className="list">
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            key={index}
            className="projects"
          >
            {/* <div className="pimg">
              <img src={project.img} alt={project.title} />
            </div> */}
            <div className="pinfo">
              <h4>{project.title}</h4>
              <p>{project.info}</p>
              {project.tools.map((icon, index) => (
                <div className="icons" key={index}>
                  {icon}
                </div>
              ))}
              <div className={project.git ? "viewgit" : "viewnogit"}>
                <button>
                  <a target="blank" href={project.git}>
                    View code 
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="git"
      >
        <button>
          <a target="blank" href="https://github.com/Faiz-ANP">
            More Projects on Github <FaGithub size={12} />
          </a>
        </button>
      </motion.div>
    </div>
  );
};

export default Projects;
