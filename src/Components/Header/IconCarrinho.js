import React from 'react'
import Carrinho from './Carrinho'
import carrinho from '../../Assets/img/icon/Icon feather-shopping-cart.svg'

const IconCarrinho = () => {
  const [carrinhoShow, setCarrinhoShow] = React.useState(false)
  const carrinhos = React.useRef()

  React.useEffect(() => {
    if(carrinhos.current){
      carrinhos.current.addEventListener('click', showCarrinho)
    }
  },[carrinhoShow])

  function showCarrinho(event){
    event.preventDefault()
    setCarrinhoShow(true)
    OutSide(this,() => {
      setCarrinhoShow(false)
    });
  }
  function OutSide(element,callback){
    const html = document.documentElement;
    if(!element.hasAttribute('data-outside')){
      html.addEventListener("click", handleOutSidClick)
      element.setAttribute('data-outside','')
    }
    function handleOutSidClick(event){
      if(carrinhos.current.classList.contains('show')){
        if(!element.contains(event.target)){
          element.removeAttribute('data-outside')
          html.removeEventListener("click", handleOutSidClick)
          callback()
        }
      }
    }
  }
  return (
    <div ref={carrinhos} className={carrinhoShow ? 'show' : ''}>
      <i><img src={carrinho} alt="Carrinho"/></i>
      <Carrinho show={carrinhoShow} setShow={setCarrinhoShow}/>
    </div>
  )
}

export default IconCarrinho
