import React from 'react'
import "../../App.css"
import "./Project.css"
import Project_img from "../../assets/updatedme4.jpg"
import slider from "../../assets/arrow.png"

const Projects = () => {
  return (
    <section className='Projects'>
        <div className="headings">
        <p>Browse My Recent</p>
        <h1>Projects</h1>
        </div>  
        <section className='Projects-section'>
            <div className="card1">
              <div className="img-container">
                <img src={Project_img} alt="img-1" />
              </div>
              <div className="project-navigation">
                <h2>Project One</h2>
                <div className='project-navigation-btns'>
                <a href=""><button className='btn1'> Github</button></a>
                <a href=""><button className='btn2'>Live Demo</button></a>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="img-container">
                <img src={Project_img} alt="img-1" />
              </div>
              <div className="project-navigation">
                <h2>Project One</h2>
                <div className='project-navigation-btns '>
                <a href=""><button className='btn1'> Github</button></a>
                <a href=""><button className='btn2'>Live Demo</button></a>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="img-container">
                <img src={Project_img} alt="img-1" />
              </div>
              <div className="project-navigation">
                <h2>Project One</h2>
                <div className='project-navigation-btns'>
                <a href=""><button className='btn1'> Github</button></a>
                <a href=""><button className='btn2'>Live Demo</button></a>
                </div>
              </div>
            </div>

        </section>
        <div className="slider">
        <img src={slider} alt="slider" />
      </div>

      
    </section>
  )
}

export default Projects
