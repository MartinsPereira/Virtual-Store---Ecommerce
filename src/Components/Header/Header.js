import React from 'react'
import facebook from '../../Assets/img//icon/Icon awesome-facebook-f.svg'
import instagram from '../../Assets/img/icon/Icon awesome-instagram.svg'
import twitter from '../../Assets/img/icon/Icon awesome-twitter.svg'
import logo from '../../Assets/img/icon/Logo.svg'
import lupa from '../../Assets/img/icon/Icon open-magnifying-glass.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import IconCarrinho from './IconCarrinho'
import IconCliente from './IconCliente'

const Header = () => {
  const [hamburger, activeHamburber] = React.useState(false)

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
            <IconCarrinho/>
            <IconCliente/>
          </div>
          <div className="logo-header">
            <i><Link to="/"><img src={logo} alt="Sport"/></Link></i>
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
        <div onClick={() => activeHamburber(!hamburger)} className={hamburger ? "hamburger-button active":   'hamburger-button'}>
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
