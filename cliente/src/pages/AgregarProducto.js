import React, { useState } from 'react'
import clienteAxios from '../components/axios/ClienteAxios'
import Swal from 'sweetalert2'

function AgregarProducto(){

    // HOOKS
    const[codigo, setCodigo]=useState('')
    const[nombre, setNombre]=useState('')
    const[categoria, setCategoria]=useState('')
    const[precio, setPrecio]=useState('')
    const[descripcion, setDescripcion]=useState('')
    const [file, setFile] = useState('')


    function addProducto(){

        let producto = {
            codigo: codigo,
            nombre: nombre,
            categoria: categoria,
            precio: precio,
            descripcion: descripcion,
            file: file
        }
        
        
        Swal.fire({
            title: 'Producto',
            text: 'Producto Agregado',
            confirmButtonText: 'Ok'
        })
        .then(response =>{
            clienteAxios.post('http://localhost:5000/api/producto/agregarproducto', producto)
            .then(res =>{
                window.location= '/listaProductos'
            })
            .then(err => {console.log(err)})
            
        })
        

    }

    return(
        <div className='container mt-5'>
            <h3>Crear un nuevo producto</h3>

            <form className='mt-5'>

                <div className="mb-3">
                    <label className="form-label">Codigo</label>
                    <input type="text" className="form-control" value={codigo} onChange={(e)=>{setCodigo(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input type="file" className='form-control' onChange={(e) => {setFile(e.target.files[0])}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Categoria</label>
                    <input type="text" className="form-control" value={categoria} onChange={(e)=>{setCategoria(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input type="number" className="form-control" value={precio} onChange={(e)=>{setPrecio(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <textarea type="text" className="form-control" value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}}></textarea>
                </div>
                <button onClick={addProducto} type="button" className="btn btn-primary">Agregar</button>
            
            </form>
        </div>
    )
}

export default AgregarProducto