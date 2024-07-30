import React from "react";
import "./Experience.css";
import checkmark from "../../assets/checkmark.png";
import slider from "../../assets/arrow.png"
import "../../App.css"

const Experience = () => {
  return (
    <section className="experience">
      <div className="headings">
        <p>Explore My</p>
        <h1>Experience</h1>
      </div>
      <div className="Experience-section">
        <div className="container_X">
          <h2>Frontend Development</h2>
          <div className="container_1">
            <div className="tags">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="tags">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="tags">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>JavaScript</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="tags">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="tags">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>Bootstrap</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="tags">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>Material UI</h3>
                <p>Basic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container_Y">
          <h2>Frontend Development</h2>
          <div className="container_2">
            <div className="tags1">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>Node Js</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="tags1">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>Express JS</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="tags1">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>Tailwind Css</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="tags1">
              <div className="check-img">
                <img src={checkmark} alt="checkmark" />
              </div>
              <div className="contents">
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider">
        <img src={slider} alt="slider" />
      </div>
    </section>
  );
};

export default Experience;
