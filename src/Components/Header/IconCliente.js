import React from 'react'
import { Link } from 'react-router-dom'
import clienteIcon from '../../Assets/img/icon/Icon material-person-outline.svg'
import {GlobalContext} from '../GlobalStorage'

const IconCliente = () => {
  const [clienteShow, setClienteShow] = React.useState(false)
  const clientes = React.useRef()
  const {login,logout,user} = React.useContext(GlobalContext);
  
  function showCarrinho(event){
    if(clienteShow){
      setClienteShow(false)
    }else{
      setClienteShow(true)
      OutSide(event.target.parentElement.parentElement,() => {
        setClienteShow(false)
      });
    }
   
  }
  function OutSide(element,callback){
    const html = document.documentElement;
    if(!element.hasAttribute('data-outside')){
      html.addEventListener("click", handleOutSidClick)
      element.setAttribute('data-outside','')
    }
    function handleOutSidClick(event){
      if(clientes.current.classList.contains('show')){
        if(!element.contains(event.target)){
          element.removeAttribute('data-outside')
          html.removeEventListener("click", handleOutSidClick)
          callback()
        }
      }
    }
  }
  return (
    <div onClick={showCarrinho} ref={clientes} className={clienteShow ? 'header-icon-cliente show' : 'header-icon-cliente'}>
      <i><img src={clienteIcon} alt="Cliente"/></i>
      {login ? user.type === 'Funcionário' || user.type === 'Gerente' ?
        <div className={clienteShow ? 'opcoes-header-cliente show' : 'opcoes-header-cliente'}>
        <div>
          <span></span>
          <div>
            <a href="/dashboard">Dashboard</a>
            <Link to="/" onClick={(event) =>{event.preventDefault(); logout()}}>Sair</Link>
          </div>
        </div>
      </div>
       : 
      <div className={clienteShow ? 'opcoes-header-cliente show' : 'opcoes-header-cliente'}>
        <div>
          <span></span>
          <div>
            <Link to="/">Pedidos</Link>
            <Link to="/" onClick={(event) =>{event.preventDefault(); logout()}}>Sair</Link>
          </div>
        </div>
      </div>
      :
      <div className={clienteShow ? 'opcoes-header-cliente show' : 'opcoes-header-cliente'}>
        <div>
          <span></span>
          <div>
            <Link to="/login">Entrar</Link>
            <Link to="/">Cadastrar</Link>
          </div>
        </div>
      </div>}
      
    </div>
  )
}

export default IconCliente
