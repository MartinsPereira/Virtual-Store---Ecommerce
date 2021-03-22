import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ProdutoIndi from './Components/Produto/ProdutoIndi';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProdutoIndi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
