import React from 'react'
import facebook from '../../Assets/img//icon/Icon awesome-facebook-f.svg'
import instagram from '../../Assets/img/icon/Icon awesome-instagram.svg'
import twitter from '../../Assets/img/icon/Icon awesome-twitter.svg'
import carrinho from '../../Assets/img/icon/Icon feather-shopping-cart.svg'
import clienteIcon from '../../Assets/img/icon/Icon material-person-outline.svg'
import logo from '../../Assets/img/icon/Logo.svg'
import lupa from '../../Assets/img/icon/Icon open-magnifying-glass.svg'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [hamburger, activeHamburber] = React.useState(false)

  function clickHamburger(){
    activeHamburber(!hamburger)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-redes">
          <span>Frete Grátis a partir de 159,99</span>
          <div>
            <i><a href="https://www.facebook.com/"><img src={facebook} alt="Facebook"/></a></i>
            <i><a href="https://www.instagram.com/"><img src={instagram} alt="Instagram"/></a></i>
            <i><a href="https://twitter.com/"><img src={twitter} alt="Twitter"/></a></i>
          </div>
        </div>
        <div className="header-central">
          <div className="opcoes-header-central">
            <div><i><img src={carrinho} alt="Carrinho"/></i></div>
            <div><i><img src={clienteIcon} alt="Cliente"/></i></div>
          </div>
          <div className="logo-header">
            <i><img src={logo} alt="Sport"/></i>
          </div>
          <div className="header-search-input">
            <div>
              <div className="input-search">
                <input type="text"/>
                <i><img src={lupa} alt="Pesquisar"/></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-menu">
          <div onClick={clickHamburger} className={hamburger ? "hamburger-button active" : 'hamburger-button'}>
            <div></div>
          </div>
          <nav className={hamburger ? "active" : ''}>
            <ul>
              <li><Link to="/">Masculino</Link></li>
              <li><Link to="/">Feminino</Link></li>
              <li><Link to="/">Infantil</Link></li>
              <li><Link to="/">Camisetas</Link></li>
              <li><Link to="/">Calças</Link></li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header
