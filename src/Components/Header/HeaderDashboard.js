import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/img/icon/Logo.svg'
import './HeaderDashboard.css'

const HeaderDashboard = () => {
  function handleClick({target}){
    target.nextElementSibling.classList.toggle('active')
  } 

  return (
    <header className="header-dashboard">
          <div className="header-logo">
            <img src={logo} alt="Logo"/>
          </div>
          <div className="header-lista-dashboard">
            <nav>
              <ul>
                <li className="naoSelecionavel"><span onClick={handleClick}>Produtos</span>
                  <ul>
                    <li><Link to="/dashboard/produto/cadastrar">Cadastrar</Link></li>
                    <li><Link to="/dashboard/produto/editar">Editar</Link></li>
                    <li><Link to="/dashboard/produto/excluir">Excluir</Link></li>
                  </ul>
                </li>
                <li className="naoSelecionavel"><span>Item Produtos</span>
                </li>
                <li className="naoSelecionavel"><span>Funcionários</span>
                  <ul>
                    <li>Cadastrar</li>
                    <li>Editar</li>
                    <li>Excluir</li>
                  </ul>
                </li>
                <li className="naoSelecionavel"><span>Estoque</span>
                </li>
              </ul>
            </nav>
          </div>
        </header>
  )
}

export default HeaderDashboard
