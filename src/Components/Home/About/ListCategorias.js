import React from 'react'
import './ListCategorias.css'
import { Link } from 'react-router-dom'
import catMasculino from '../../../Assets/img/fotos/javier-reyes-qi2cD5oR_fE-unsplash.jpg'
import catFeminino from '../../../Assets/img/fotos/pexels-murat-esibatir-4355631.jpg'
import catInfantil from '../../../Assets/img/fotos/pexels-bess-hamiti-35188.jpg'

const ListCategorias = () => {
  return (
    <div className="categorias-produto">
      <ul>
        <li>
          <Link to="/">
            <div>
              <img src={catMasculino} alt="Categoria Masculina"/>
            </div>
            <h3>Masculino</h3>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div>
              <img src={catFeminino} alt="Categoria Feminina"/>
            </div>
            <h3>Feminino</h3>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div>
              <img src={catInfantil} alt="Categoria Infantil"/>
            </div>
            <h3>Infantil</h3>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ListCategorias
