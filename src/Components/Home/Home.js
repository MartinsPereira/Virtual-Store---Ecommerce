import React from 'react'
import AboutStore from './About/AboutStore'
import SlideIntro from './Slide/SlideIntro'
import BodyHome from './BodyHome'
import Footer from './Footer'

const Home = () => {

  return (
    <>
      <SlideIntro/>
      <AboutStore/>
      <BodyHome/>
      <Footer/>
    </>
  )
}

export default Home
