import React from "react";
import "./AboutMe.css";
import Dp_img from "../../assets/updatedme4.jpg";
import Experienceimg from "../../assets/experience.png";
import Educationimg from "../../assets/education.png";
import slider from "../../assets/arrow.png";
import "../../App.css";

const AboutMe = () => {
  return (
    <section className="About-me ">
      <div className="headings">
        <p>Get To Know More</p>
        <h1>About Me</h1>
      </div>

      <div className="containerX">
        <div className="about-img ">
          <img src={Dp_img} alt="Dp_img" />
        </div>

        <section className="containerY">
          <div className="about-content">
            <div className="exp-section">
              <img src={Experienceimg} alt="Experience-img" />
              <h3>Experience</h3>
              <p>2+ years</p>
              <p>Frontend Development</p>
            </div>
            <div className="edu-section">
              <img src={Educationimg} alt="Education-img" />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree</p>
              <p>M.Sc. Masters Degree</p>
            </div>
          </div>
          <p className="para">
            I’m an enthusiastic front-end developer embarking on my professional
            journey with a deep passion for creating engaging and impactful web
            experiences. I approach each project with a blend of creativity and
            dedication, eager to turn innovative ideas into reality. With a
            strong commitment to excellence and a drive for continuous learning,
            I’m excited to contribute to a dynamic team and make a meaningful
            impact. Ready to tackle challenges and grow in a thriving,
            collaborative environment.
          </p>
        </section>
      </div>
      <div className="slider">
        <img src={slider} alt="slider" />
      </div>
    </section>
  );
};

export default AboutMe;
