import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe/AboutMe";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/Contact/ContactMe";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

const App = () => {
  return (
    <div className="containers">
      <BrowserRouter>
        <div className="content_space">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactMe" element={<ContactMe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
