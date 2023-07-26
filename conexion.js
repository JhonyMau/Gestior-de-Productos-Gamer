const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://JhonyMau:44444444@gestordeproductos.sgbxy.mongodb.net/?retryWrites=true&w=majority');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexion correcta a MongoDB')})
objetobd.on('error', ()=>{console.log('Error en la conexion a MongoDB')})

module.exports = mongoose