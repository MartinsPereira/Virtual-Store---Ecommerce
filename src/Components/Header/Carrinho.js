import React from 'react'
import './Carrinho.css'
import foto from '../../Assets/img/fotos/pexels-anna-shvets-5325881.jpg'
import iconDelete from '../../Assets/img/icon/Icon feather-delete.svg'
import iconDeleteBlack from '../../Assets/img/icon/Icon feather-delete-black.svg'
import {GlobalContext} from '../GlobalStorage'

const Carrinho = ({show,setShow}) => {
  const {itemCarrinho, login} = React.useContext(GlobalContext);
  
  return (
    <div className={show ? 'header-carrinho show' : 'header-carrinho'}>
      <div className="header-carrinho-title">
        <h2>Carrinho</h2>
        <button onClick={() => setShow(!show)}><img src={iconDeleteBlack} alt=""/></button>
      </div>
      <ul>
        {itemCarrinho ? !login ? <div className="header-carrinho-message"><h2>Faça Login para usar o Carrinho</h2></div> : itemCarrinho.product.length === 0 ? <div className="header-carrinho-message"><h2>Seu Carrinho está Vazio</h2></div>  :
          itemCarrinho.products.map((i) => (
            <li className="header-carrinho-li">
              <div className="header-carrinho-li-img">
                <img src={i.img} alt=""/>
              </div>
              <div className="header-carrinho-li-info">
                <h3>{i.name}</h3>
                {i.descount > 0 ? <div className="price">
                  <span className="fullPrice">{i.price}</span><span className="descountPrice">{i.price - i.descount}</span></div>:
                  <span>{i.price}</span>
                }
                <span>M | Rosa</span>
              </div>
              <div className="header-carrinho-li-button">
                <button><img src={iconDelete} alt=""/></button>
              </div>
            </li>
          ))
        : ''}
      </ul>
    </div>
  )
}

export default Carrinho
