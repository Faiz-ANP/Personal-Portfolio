import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact">
      <div className="mainc">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h1>
        <div className="infoc">
          <div className="c-desc">
            <motion.h5
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Let’s connect! If you have questions, collaboration ideas, or just
              want to chat about development, feel free to reach out. Use the
              form below or connect with me on social media—I’d love to hear
              from you!
            </motion.h5>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="icons"
            >
              <a target="blank" href="https://www.linkedin.com/in/faiz-anp-761271322/?originalSubdomain=in">
                <FaLinkedin
                  size={25}
                  target="_blank"
                  style={{ color: "white" }}
                />
              </a>
              <a target="blank" href="https://github.com/Faiz-ANP">
                <FaGithub
                  size={25}
                  target="_blank"
                  style={{ color: "white" }}
                />
              </a>
              <a target="blank" href="tel:+917025871707">
                <FaPhoneSquareAlt
                  size={25}
                  target="_blank"
                  style={{ color: "white" }}
                />
              </a>
              <a target="blank" href='href="mailto:faize1707@gmail.com"'>
                <AiOutlineMail
                  size={25}
                  target="_blank"
                  style={{ color: "white" }}
                />
              </a>
              <a target="blank" href="https://wa.me/917025871707?text=">
                <FaSquareWhatsapp
                  size={25}
                  target="_blank"
                  style={{ color: "white" }}
                />
              </a>
              <a target="blank" href="https://www.instagram.com/faiz.anp/">
                <FaSquareInstagram
                  size={25}
                  target="_blank"
                  style={{ color: "white" }}
                />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="form"
          >
            <h2>Get in touch</h2>
            <form method="POST" action="https://getform.io/f/bwngpkna">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <textarea
                type="text"
                id="message"
                cols={24}
                rows={10}
                name="message"
                placeholder="Message"
                required
              />

              <button type="submit">Send</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
