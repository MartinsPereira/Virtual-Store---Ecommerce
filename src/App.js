import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound';
import Login from './Components/Login/Login';
import ProdutoIndi from './Components/Produto/ProdutoIndi';
import ProtectedRouteFunc from './Components/ProtectedRouteFuncionario'
import Dashboard from './Components/Dashboard/Dashboard'
import {GlobalStorage} from './Components/GlobalStorage'

function App() {
  console.log()
  return (
    <BrowserRouter>
      <GlobalStorage>
        {window.location.pathname.indexOf('dashboard') === 1 ? '' : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/produto/:id" element={<ProdutoIndi />} />
          <ProtectedRouteFunc path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
