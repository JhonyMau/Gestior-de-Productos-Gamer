import React, { useEffect,useState } from 'react'
import clienteAxios from '../components/axios/ClienteAxios'
import axios from 'axios'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

function EditarProducto(){
    const navigate = useNavigate();
    // HOOKS
    const[codigo, setCodigo]=useState('')
    const[nombre, setNombre]=useState('')
    const[categoria, setCategoria]=useState('')
    const[precio, setPrecio]=useState('')
    const[descripcion, setDescripcion]=useState('')
    const [imagen, setImagen] = useState('')
    const [file, setFile] = useState('')


    const params=useParams()
    const codigoAnterior=params.codigoproducto

    let producto = {
        codigoAnterior: codigoAnterior
    }
    useEffect(()=>{
        axios.post('https://gestordeproductosgaming-api.onrender.com/api/producto/infoaeditar', producto)
        .then(res=>{
            const dataproducto =res.data
            setCodigo(dataproducto.codigo)
            setNombre(dataproducto.nombre)
            setCategoria(dataproducto.categoria)
            setPrecio(dataproducto.precio)
            setDescripcion(dataproducto.descripcion)
            setImagen(dataproducto.file)
        })
    }, [])

    function editProducto(){

        let producto = {
            codigoAnterior: codigoAnterior,
            codigo: codigo,
            nombre: nombre,
            categoria: categoria,
            precio: precio,
            descripcion: descripcion,
            imagen: imagen,
            file: file
        }

        clienteAxios.post('https://gestordeproductosgaming-api.onrender.com/api/producto/editarProducto', producto)
        .then(res => {
            Swal.fire({
                title: 'Producto',
                text: 'Producto Actualizado',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#F66A0D'
            })
            .then(response =>{
                navigate('/listaproductos')
            })
        })

    }

    return(
        <>
        <Header></Header>
        <div className='container pt-5 cont-fondo'>
            <h3>Editar producto codigo '{params.codigoproducto}'</h3>

            <form className='mt-5'>

                <div className="mb-3">
                    <label className="form-label">Codigo</label>
                    <input type="text" className="form-control" value={codigo} onChange={(e)=>{setCodigo(e.target.value)}}/>
                </div>
                <div className="mb-3 cont-input-imagen">
                    <div>
                        <label className="form-label">Imagen</label>
                        <input type="file" className='form-control' onChange={(e) => {setFile(e.target.files[0])}}/>
                    </div>
                    <img src={ imagen ? "https://gestordeproductosgaming-api.onrender.com/"+imagen : "https://gestordeproductosgaming-api.onrender.com/imagen_por_defecto.jpg" }></img>
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
                <button onClick={editProducto} type="button" className="btn-editar-pr">Editar</button>
            
            </form>
        </div>
        </>
    )
}

export default EditarProducto