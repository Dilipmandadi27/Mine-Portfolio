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
    < div className='containers'>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
