import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Heroimg from "./components/Heroimg";
import Heroimg2 from "./components/Heroimg2";
import Heroimg3 from "./components/Heroimg3";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import Education from "./components/Education";

import LoaderComp from "./loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div>
      {isLoading ? (
        <div>
          <LoaderComp />
        </div>
      ) : (
        <div>
          <Navbar />
          <Heroimg />
          <Heroimg2 />
          <Heroimg3 />
          <Projects />
          <Education />

          <Contact />

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
