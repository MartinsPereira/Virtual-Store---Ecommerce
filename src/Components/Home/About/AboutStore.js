import React from 'react'
import './AboutStore.css'
import ListCategorias from './ListCategorias'


const AboutStore = () => {
  return (
    <section className="sectionAbout">
      <div className="container">
        <h1>Bem-Vindo</h1>
        <div className="subtextAbout">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, se dam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
        </div>
        <ListCategorias/>
      </div>
    </section>
  )
}

export default AboutStore
