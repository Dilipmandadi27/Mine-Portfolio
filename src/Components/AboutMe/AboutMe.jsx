import React from "react";
import "./AboutMe.css";
import Dp_img from "../../assets/updatedme4.jpg";
import Experienceimg from "../../assets/experience.png";
import Educationimg from "../../assets/education.png";
import slider from "../../assets/arrow.png"
import "../../App.css"

const AboutMe = () => {
  return (
    <section className="About-me ">
      <div className="headings">
        <p>Get To Know More</p>
        <h1>About Me</h1>
      </div>

      <div className="containerX">
        <div className="about-img">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!{" "}
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
