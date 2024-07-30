import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import AboutMe from './Components/Navbar/AboutMe/AboutMe'
import Experience from './Components/Navbar/Experience/Experience'
import Projects from './Components/Navbar/Projects/Projects'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Experience/>
      <Projects/>
    </>
  )
}

export default App
