const express = require('express')
const app = express()
const cors = require('cors')

//Importar conexion MongoDB
const archivoBD = require('./conexion')

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())

//Importacion del archivo de rutas y modelo producto
const rutaproducto = require('./rutas/producto')



app.use('/api/producto',rutaproducto)

app.get('/', (req, res) => {
    res.send('Bienvenidos!!!!')
})


//Configurar server basico
app.listen(5000, function(){
    console.log('Servidor corriendo')
})