import './App.css';

import Landing from './pages/Landing';
import ListaProductos from './pages/ListaProductos';
import EditarProducto from './pages/EditarProducto';
import AgregarProducto from './pages/AgregarProducto';

import {HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Router>

        <Routes>
          <Route path='/' element={<Landing></Landing>} exact></Route>
          <Route path='/listaproductos' element={<ListaProductos/>} exact></Route>
          <Route path='/agregarproducto' element={<AgregarProducto/>} exact></Route>
          <Route path='/editarproducto/:codigoproducto' element={<EditarProducto/>} exact></Route>
        </Routes>

      </Router>
  );
}

export default App;
