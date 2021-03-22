import React from 'react'
import { Link } from 'react-router-dom'
import './SlidePromo.css'

const SlidePromo = ({title, dataList,backgroundColor, lettersColor,buttonColor}) => {

  return (
    <section className="sectionPromocao" style={{background: backgroundColor || "rgb(235,235,235)", color: lettersColor}}>
      <div className="container">
        <div className="divPromocao">
          <div className="titlePromocao">
            <h2>{title}</h2>
          </div>
          <div>
            <header className="header-slideList">
              <span></span>
              <div>
                <div className="button-prev-slide">
                  <div style={{borderColor: buttonColor, color: buttonColor}}>◁</div>
                </div>
                <div className="button-next-slide">
                  <div style={{borderColor: buttonColor, color: buttonColor}}>▷</div>
                </div>
              </div>
            </header>
            <div className="ul-slideList">
              <ul>
                {dataList.map(i => (
                  <li className="li-slideList">
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
