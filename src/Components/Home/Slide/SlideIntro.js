import React from 'react'
import './SlideIntro.css'
import SlideIntroUl from './SlideIntroUl'

const SlideIntro = () => {
  return (
    <section className="slide-intro">
      <div className="container">
        <div className="button-prev-slide">
          <div>◁</div>
        </div>
        <div className="slide-img-overflow">
          <div>
            <SlideIntroUl/>
            <SlideIntroUl/>
          </div>
        </div>
        <div className="button-next-slide">
          <div>▷</div>
        </div>
      </div>
      
    </section>
  )
}

export default SlideIntro
