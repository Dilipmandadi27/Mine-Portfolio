import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import ContactMe from "./Contact/ContactMe";
import Footer from "./Footer/Footer";
import { Route } from "react-router-dom";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default LandingPage;
