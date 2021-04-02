import React from 'react'
import api from '../Service/Api'
import { useNavigate  } from 'react-router-dom'

export const GlobalContext = React.createContext();


export const GlobalStorage = ({children}) => {
  const [user, setUser] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [dashboardShow, setDashboardShow] = React.useState(false);
  const [itemCarrinho, setItemCarrinho] = React.useState()
  const navigate = useNavigate();

  React.useEffect(() => {
    async function autoLogin(){
      const token = window.localStorage.getItem('token');
      if(token){
        try{
          setLoading(true)
          const response = await api.get('/users', {headers: {Authorization: 'Bearer ' + token,}});
          if(response.statusText !== "OK") throw new Error('Token Invalid')
          setUser(response.data[0])
          setLogin(true);
        }catch(erro){
          logout()
        }finally{
          setLoading(false)
        }
      }else{
        setLogin(false)
      }
    }
    autoLogin()
    searchItemCarrinho()
  },[])

  async function searchItemCarrinho(token){
    const response = await api.get('/procurar/carrinho/produto',{headers: {Authorization: 'Bearer ' + window.localStorage.getItem('token'),}})
    setItemCarrinho(response.data)
  }

  const logout = React.useCallback(
    async function logout(){
      setUser(null);
      setLogin(false);
      setLoading(false)
      window.localStorage.removeItem('token');
      navigate('/')
    },
    [navigate]
  );

  async function getUser(token){
    const response = await api.get('/users', {headers: {Authorization: 'Bearer ' + token, }});
    setUser(response.data[0]);
    setLogin(true);
  }
  
  async function userLogin(email, password){
    try{
      setLoading(true)
      const formData = new FormData();
      formData.append('email', email)
      formData.append('password', password)
      const response = await api.post('/authenticate', formData);
      if(response.statusText !== "OK") throw new Error('Token Invalid')
      window.localStorage.setItem('token', response.data.token)
      await getUser(response.data.token);
      navigate('/')
    }catch(err){
      setLogin(false)
    }finally{
      setLoading(false)
    }
  }

  return <GlobalContext.Provider value={{userLogin, user, login, loading,logout,itemCarrinho,dashboardShow, setDashboardShow}}>{children}</GlobalContext.Provider>
}

