import React from 'react'
import { Link } from 'react-router-dom'

function Landing(){
    return(
        <div className='container cont-portada'>

            <div className='borde'>
                <div className='cont-info'>
                    <h2>BIENVENIDOS AL GESTOR DE PRODUCTOS GAMING</h2>
                    <p>Bienvenido a nuestra pagina para gestionar los ultimo en productos de tecnologoia y gaming, 
                        aqui encontraras una lista completa de productos categorizados y con todos sus detalles, precio 
                        y descripcion</p>
                </div>
                <div className='cont-lista'>
                    <img src='portatilg.png'></img>
                    <Link to="/listaproductos"><li>Ingresar</li></Link>
                </div>
            </div>


            {/* <h3 className='mt-3'>Portada de la pagina</h3>
            <img src='vandal.png'></img> */}
        </div>
    )
}

export default Landing