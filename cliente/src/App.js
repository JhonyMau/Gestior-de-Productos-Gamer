import './App.css';

import Landing from './pages/Landing';
import ListaProductos from './pages/ListaProductos';
import EditarProducto from './pages/EditarProducto';
import AgregarProducto from './pages/AgregarProducto';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-light" href="/">MASTER GAMING GESTOR</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/listaproductos">Lista productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/agregarproducto">Agregar producto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Landing></Landing>} exact></Route>
          <Route path='/listaproductos' element={<ListaProductos></ListaProductos>} exact></Route>
          <Route path='/agregarproducto' element={<AgregarProducto></AgregarProducto>} exact></Route>
          <Route path='/editarproducto/:codigoproducto' element={<EditarProducto></EditarProducto>} exact></Route>
        </Routes>

      </BrowserRouter>

    </div>
    
  );
}

export default App;
