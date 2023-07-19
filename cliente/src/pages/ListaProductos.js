import React, { useEffect, useState } from 'react'
import ProductoIndividual from '../components/ProductoIndividual'
import axios from 'axios'

function ListaProductos(){

    const[dataProductos, setDataProductos] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/producto/obtenerproductos')
        .then(res=>{
            console.log(res.data)

            setDataProductos(res.data)
        })
    }, [])

    let listaProductos = dataProductos.map(producto =>{
        return(
            <ProductoIndividual key={producto._id} producto={producto}></ProductoIndividual>
        )
    })


    return(

        <div className='container'>
            <h3 className='mt-4 mb-4'>Lista de productos</h3>

            <div className='cards'>
                {listaProductos}
            </div>
        </div>
    )
}

export default ListaProductos