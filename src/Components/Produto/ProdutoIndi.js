import React from 'react'
import './ProdutoIndi.css'
import foto1 from '../../Assets/img/fotos/pexels-anna-shvets-5325881.jpg'
import foto2 from '../../Assets/img/fotos/pexels-anna-shvets-5325884.jpg'
import foto3 from '../../Assets/img/fotos/pexels-anna-shvets-5325887.jpg'
import Comentarios from './Comentarios'
import SlideList from '../Home/Slide/SlideList'
import moletomcinza from '../../Assets/img/fotos/pexels-cottonbro-6626903.jpg'
import blusavinho from '../../Assets/img/fotos/pexels-luan-queiros-3260957.jpg'
import tenisnike from '../../Assets/img/fotos/pexels-keanen-geego-kilian-2975405.jpg'
import oculoscinza from '../../Assets/img/fotos/vonecia-carswell-D3HSYAUjVrM-unsplash.jpg'
import calcajeans from '../../Assets/img/fotos/ian-dooley-8HqPXTToMn0-unsplash.jpg'
import blusapreta from '../../Assets/img/fotos/ian-dooley-wzRKn-AjKf4-unsplash.jpg'
import Footer from '../Home/Footer'

const ProdutoIndi = () => {
  let bodyList = {
      type: 'list',
      title: 'Camisetas Masculinas',
      products: [
        {
          nome: 'Moletom Cinza',
          price: 49.99,
          desconto: 0,
          imgProd: moletomcinza
        },
        {
          nome: 'Blusa vinho',
          price: 69.99,
          desconto: 20,
          imgProd: blusavinho
        },
        {
          nome: 'Tênis Nike',
          price: 99.99,
          desconto: 0,
          imgProd: tenisnike
        },
        {
          nome: 'Óculos cinza',
          price: 29.99,
          desconto: 0,
          imgProd: oculoscinza
        },
        {
          nome: 'Calça Jeans - Feminina',
          price: 59.99,
          desconto: 0,
          imgProd: calcajeans
        },
        {
          nome: 'Blusa Preta',
          price: 49.99,
          desconto: 10,
          imgProd: blusapreta
        },
      ]
    }
  
  return (
    <>
    <section>
      <div className="container">
        <div className="produto-info">
          <div className="name-product-responsive">
            <h2 className="nomeProd">Calça Moletom Amarela</h2>
            <span className="precoProd">R$ 69,99</span>
          </div>
          <div className="produto-info-imagens">
            <ul>
              <li><img src={foto1} alt=""/></li>
              <li><img src={foto2} alt=""/></li>
              <li><img src={foto3} alt=""/></li>
              <li><img src={foto3} alt=""/></li>
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
          <h2 className="title-prod-indi">Descrição do Produto</h2>
          <div className="produto-desc-p">
            <p>     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
          </div>
        </div>
        <Comentarios/>
      </div>
    </section>
    <SlideList title="Clientes também gostaram" dataList={bodyList.products}/>
    <Footer/>
    </>
  )
}

export default ProdutoIndi
