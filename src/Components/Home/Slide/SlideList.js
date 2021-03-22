import React from 'react'
import { Link } from 'react-router-dom'
import './SlideList.css'

const SlideList = ({title, dataList}) => {
  return (
    <section className="UlSlideList">
      <div className="container">
        <header className="header-slideList">
          <h2>{title}</h2>
          <div>
            <div className="button-prev-slide">
              <div>◁</div>
            </div>
            <div className="button-next-slide">
              <div>▷</div>
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
                  <h2>{i.nome}</h2>
                  {i.desconto > 0 ?
                  <div className="price">
                    <span className="fullPrice">R$ {i.price}</span>
                    <span className="descountPrice">R$ {(i.price - i.desconto).toFixed(2)}</span>
                  </div>
                  : <span className="normalPrice">R$ {i.price}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SlideList
