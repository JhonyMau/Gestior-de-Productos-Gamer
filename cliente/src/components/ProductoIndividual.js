import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, Link } from 'react-router-dom'

function ProductoIndividual({producto}){
    const navigate = useNavigate();
    function borrarProducto(codigo){
        
        axios.post('https://gestordeproductosgaming-api.onrender.com/api/producto/borrarProducto', {codigo})

        Swal.fire({
            title: 'Producto',
            text: 'Producto Eliminado',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#F66A0D'
        })
        .then(response =>{
            navigate('/listaproductos')
        })
    }

    return(
        <div className='card'>

            <div className='cont-img'>
                <button className='btn-eliminar' onClick={() => {borrarProducto(producto.codigo)}}>X</button>
                <p>{producto.codigo}</p>
                <img src={ producto.file ? "https://gestordeproductosgaming-api.onrender.com/"+producto.file : "https://gestordeproductosgaming-api.onrender.com/imagen_por_defecto.jpg" }></img>
            </div>

            <div className='info'>
                <p className='categoria'>{producto.categoria}</p>
                <p className='nombre'>{producto.nombre}</p>
                <p className='precio'>${producto.precio}</p>
                <p className='descripcion'>{producto.descripcion}</p>
            </div>
            
            <div className='cont-edit'>
                <Link to={`/EditarProducto/${producto.codigo}`}><li className='btn-editar'>Editar</li></Link>
            </div>

        </div>
    )
}

export default ProductoIndividual