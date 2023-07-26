import React, { useEffect, useState } from 'react'
import ProductoIndividual from '../components/ProductoIndividual'
import axios from 'axios'
import Header from '../components/Header'

function ListaProductos(){

    const[dataProductos, setDataProductos] = useState([])

    useEffect(()=>{
        axios.get('https://gestordeproductosgaming-api.onrender.com/api/producto/obtenerproductos')
        .then(res=>{
            setDataProductos(res.data)
        })
    }, [])

    let listaProductos = dataProductos.map(producto =>{
        return(
            <ProductoIndividual key={producto._id} producto={producto}></ProductoIndividual>
        )
    })


    return(
        <>
        <Header></Header>
        <div className='container cont-fondo'>
            <h3 className='pt-4 pb-4'>Lista de productos</h3>

            <div className='cards'>
                {listaProductos}
            </div>
        </div>
        </>
    )
}

export default ListaProductos