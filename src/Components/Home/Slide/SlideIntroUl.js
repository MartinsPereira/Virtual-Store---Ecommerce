import React from 'react'
import './SlideIntroUl.css'
import foto1 from '../../../Assets/img/fotos/talen-de-st-croix-EXr_Qif3Vl8-unsplash.jpg'
import foto2 from '../../../Assets/img/fotos/ian-dooley-wzRKn-AjKf4-unsplash.jpg'
import foto3 from '../../../Assets/img/fotos/pexels-david-yu-3136182.jpg'
import foto4 from '../../../Assets/img/fotos/michael-larosa-mJJ-cpqwIhA-unsplash.jpg'

const SlideIntroUl = () => {
  return (
    <ul className="slide-imgs">
      <li><img src={foto1} alt=""/></li>
      <li><img src={foto2} alt=""/></li>
      <li><img src={foto3} alt=""/></li>
      <li><img src={foto4} alt=""/></li>
    </ul>
  )
}

export default SlideIntroUl
