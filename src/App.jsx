import "./App.css";

import {  Routes, Route } from "react-router-dom";
import { useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);

  return (
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
