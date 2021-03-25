import React from 'react'
import { Link } from 'react-router-dom'
import './SlidePromo.css'

const SlidePromo = ({title, dataList,backgroundColor, lettersColor,buttonColor}) => {
  const [active,setActive] = React.useState(0)
  const [position, setPosition] = React.useState(0)
  const SlideRef = React.useRef()

  React.useEffect(() => {
    const width = (parseInt(getComputedStyle(SlideRef.current).marginRight) * 2) + SlideRef.current.offsetWidth
    setPosition(-(width * active))
  },[active])

  function slidePrev(){
    if(active > 0) setActive(active - 1)
    else setActive(dataList.length - 1)
  }
  
  function slideNext(){
    if(active < dataList.length - 1) setActive(active + 1)
    else setActive(0)
  }

  return (
    <section className="sectionPromocao" style={{background: backgroundColor || "rgb(235,235,235)", color: lettersColor}}>
      <div className="container">
        <div className="divPromocao">
          <div className="titlePromocao">
            <h2>{title}</h2>
          </div>
          <div className="slidePromo-list">
            <header className="header-slideList">
              <div>
                <div onClick={slidePrev} className="button-prev-slide">
                  <div style={{borderColor: buttonColor, color: buttonColor}}>◁</div>
                </div>
                <div onClick={slideNext} className="button-next-slide">
                  <div style={{borderColor: buttonColor, color: buttonColor}}>▷</div>
                </div>
              </div>
            </header>
            <div className="ul-slideList">
              <ul style={{transform: `translateX(${position}px)`}}>
                {dataList.map(i => (
                  <li className="li-slideList" ref={SlideRef}>
                    <Link to="/">
                      <div>
                        <img src={i.imgProd} alt=""/>
                      </div>
                      <h2 style={{color: lettersColor}}>{i.nome}</h2>
                      {i.desconto > 0 ?
                      <div className="price" style={{color: lettersColor}}>
                        <span className="fullPrice">R$ {i.price}</span>
                        <span className="descountPrice">R$ {(i.price - i.desconto).toFixed(2)}</span>
                      </div>
                      : <span style={{color: lettersColor}} className="normalPrice">R$ {i.price}</span>
                      }
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SlidePromo
