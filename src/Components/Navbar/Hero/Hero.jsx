import React from "react";
import Heroimg from "../../../assets/heroimg.png";
import linkedinimg from "../../../assets/linkedin.png";
import githubimg from "../../../assets/github.png";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero-section">
      <div className="hero-image">
        <img src={Heroimg} alt="hero-img" />
      </div>
      <div className="hero-Content">
        <p>Hello, I'm</p>
        <h1>Dilip Mandadi</h1>
        <h3>Frontend Developer</h3>

        <a href="">
          <button>Download CV</button>
        </a>
        <button>Contact info</button>

        <div className="socials">
          <img src={linkedinimg} alt="linkedin-logo" />
          <img src={githubimg} alt="github-logo" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
