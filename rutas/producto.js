const express = require('express')
const router = express.Router()

const multer = require('multer')
const sharp = require('sharp')

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const path = require('path')
const fs = require('fs')

const eschemaproducto = new eschema({
    codigo: String,
    nombre: String,
    categoria: String,
    precio: Number,
    descripcion: String,
    file: String
})

const ModeloProducto = mongoose.model('productos', eschemaproducto)

const storage = multer.diskStorage({

    destination: path.join(__dirname, '../uploads/'),
    filename: (req, file, cb) => {
        if(file){
            const ext = file.originalname.split('.').pop()
            cb(null, `${Date.now()}.${ext}`)
        }
    }
})

const upload = multer({ storage })

const helperImg = (filePath, filename, size = 900) => {
    return sharp(filePath)
    .resize(size)
    .toFile(`./cliente/public/uploads/${filename}`)
}

router.get('/obtenerproductos', async (req, res) =>{

    const productos = await ModeloProducto.find()
    res.send(productos)
})

router.post('/agregarproducto', upload.single('file'), (req, res) =>{
    
    let fileFinal = ""

    if(req.file){
        fileFinal = req.file.filename
    }
    
    const nuevoproducto = new ModeloProducto({
        codigo:req.body.codigo,
        nombre:req.body.nombre,
        categoria:req.body.categoria,
        precio:req.body.precio,
        descripcion:req.body.descripcion,
        file: fileFinal
    })
    
    nuevoproducto.save()

    res.send('Producto Agregado')
})

router.post('/infoaeditar', async (req, res)=>{
    const productos = await ModeloProducto.findOne({codigo: req.body.codigoAnterior})
    res.send(productos)
})

router.post('/editarproducto',upload.single('file'), async (req, res) =>{

    let fileFinal = req.body.imagen

    if(req.file){
        fileFinal = req.file.filename
    }

    await ModeloProducto.findOneAndUpdate({codigo: req.body.codigoAnterior},{
        codigo:req.body.codigo,
        nombre:req.body.nombre,
        categoria:req.body.categoria,
        precio:req.body.precio,
        descripcion:req.body.descripcion,
        file:fileFinal
    })

        res.send('Producto actualizado!')
})

router.post('/borrarproducto', async (req, res) =>{

    await ModeloProducto.findOneAndDelete({codigo: req.body.codigo})

    res.send('Producto Eliminado')
})

module.exports = router