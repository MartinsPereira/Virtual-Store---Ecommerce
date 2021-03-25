import React from 'react'
import './SlideIntro.css'
import SlideIntroUl from './SlideIntroUl'

const SlideIntro = () => {
  const [active,setActive] = React.useState(0)
  const [position, setPosition] = React.useState(0)
  const SlideRef = React.useRef()

  React.useEffect(() => {
    const {width} = SlideRef.current.getBoundingClientRect()
    setPosition(-(width * active))
  },[active])

  function slidePrev(){
    if(active > 0) setActive(active - 1)
  }
  
  function slideNext(){
    setActive(active + 1)
  }

  return (
    <section className="slide-intro">
      <div className="container">
        <div className="slide-intro-div">
          <div className="button-prev-slide">
            <div onClick={slidePrev}>◁</div>
          </div>
          <div className="slide-img-overflow">
            <div ref={SlideRef} style={{transform: `translateX(${position}px)`}}>
              <SlideIntroUl/>
              <SlideIntroUl/>
              <SlideIntroUl/>
              <SlideIntroUl/>
              <SlideIntroUl/>
            </div>
          </div>
          <div className="button-next-slide">
            <div onClick={slideNext}>▷</div>
          </div>
        </div>
        <div className="button-intro-responsive">
          <div className="button-prev-slide">
            <div onClick={slidePrev}>◁</div>
          </div>
          <div className="button-next-slide">
            <div onClick={slideNext}>▷</div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default SlideIntro
