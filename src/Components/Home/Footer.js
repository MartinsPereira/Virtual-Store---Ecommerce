import React from 'react'
import './Footer.css'
import logo from '../../Assets/img/icon/Logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt=""/>
      <div>
        <span>&copy; Martins Pereira</span>
      </div>
    </footer>
  )
}

export default Footer
