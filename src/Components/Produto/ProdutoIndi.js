import React from 'react'
import './ProdutoIndi.css'
import foto1 from '../../Assets/img/fotos/pexels-anna-shvets-5325881.jpg'
import foto2 from '../../Assets/img/fotos/pexels-anna-shvets-5325884.jpg'
import foto3 from '../../Assets/img/fotos/pexels-anna-shvets-5325887.jpg'

const ProdutoIndi = () => {
  return (
    <section>
      <div className="container">
        <div className="produto-info">
          <div className="produto-info-imagens">
            <ul>
              <li><img src={foto1} alt=""/></li>
              <li><img src={foto2} alt=""/></li>
              <li><img src={foto3} alt=""/></li>
            </ul>
            <div>
              <img src={foto1} alt=""/>
            </div>
          </div>
          <div className="produto-info-informacoes">
            <h2 className="nomeProd">Calça Moletom Amarela</h2>
            <span className="precoProd">R$ 69,99</span>
            <div className="tamanhoProd">
              <select name="" id="">
                <option value="">Escolha um tamanho</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
              </select>
            </div>
            <div className="corProd">
              <span>Escolha uma cor: </span>
              <ul>
                <li><input type="radio" name="cor"/><span>Verde</span></li>
                <li><input type="radio" name="cor"/><span>Amarelo</span></li>
                <li><input type="radio" name="cor"/><span>Vermelho</span></li>
                <li><input type="radio" name="cor"/><span>Vermelho</span></li>
                <li><input type="radio" name="cor"/><span>Vermelho</span></li>
              </ul>
            </div>
            <div className="buttonProd">
              <button>Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
        <div className="produto-desc">

        </div>
      </div>
    </section>
  )
}

export default ProdutoIndi
