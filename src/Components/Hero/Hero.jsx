import React from "react";
import Heroimg from "../../assets/heroimg.png";
import linkedinimg from "../../assets/linkedin.png";
import githubimg from "../../assets/github.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      
      <section className="main-section">
      <div className="hero-image">
        <img src={Heroimg} alt="hero-img" />
      </div>
      <div className="hero-Content">
        <p>Hello, I'm</p>
        <h1>Dilip Mandadi</h1>
        <h3>Frontend Developer</h3>

        <a href="">
          <button className="btn1">Download CV</button>
        </a>
        <button className="btn2">Contact info</button>

        <div className="socials">
          <a href="https://www.linkedin.com/in/dilip-mandadi-b210332a1/"><img src={linkedinimg} alt="linkedin-logo" /></a>
          <a href="https://github.com/Dilipmandadi27"><img src={githubimg} alt="github-logo" /></a>
        </div>
      </div>
      </section>
    </section>
  );
};

export default Hero;
