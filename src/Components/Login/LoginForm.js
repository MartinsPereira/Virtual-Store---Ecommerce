import React from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'
import {GlobalContext} from '../GlobalStorage'

const LoginForm = () => {
  const [form, setForm] = React.useState({email: '',senha: ''})
  const {userLogin, loading} = React.useContext(GlobalContext);

  async function handleSubmit(event){
    event.preventDefault();
    userLogin(form.email, form.senha);
  }

  function handleChange({target}){
    const {id, value} = target;
    setForm({...form, [id]: value})
  }

  return (
    <div className="login-form">
      <div>
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit} className="form-login">
          <label htmlFor="email">Email</label>
          <input type="email" autoComplete="off" id="email" onChange={handleChange}/>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" onChange={handleChange}/>
          <div className="form-button">
            <button>Entrar</button>
          </div>
        </form>
        <div className="login-opcao-cadastrar">
          <p>Ainda não possui uma conta?</p>
          <Link to="/login/cadastrar">Cadastre-se</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
