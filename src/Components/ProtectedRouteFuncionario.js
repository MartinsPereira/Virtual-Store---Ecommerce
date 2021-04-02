import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import {GlobalContext} from './GlobalStorage'

const ProtectedRoute = (props) => {
  const {login, user} = React.useContext(GlobalContext)
  
  if (login === true){ if(user.type === 'Gerente' || user.type === 'Funcionário') return  <Route {...props} />;}
  else if (login === false) return <Navigate to="/" />;
  else return null;
}

export default ProtectedRoute