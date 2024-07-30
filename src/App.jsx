import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/Contact/ContactMe'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App
