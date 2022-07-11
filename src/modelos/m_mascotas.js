const mongoose = require('mongoose')

const mascotaSchema = new mongoose.Schema({
    nombre:String,
    descripcion:String
})

//creamos el modelo
const m_mascotas = mongoose.model('mascotas', mascotaSchema)

module.exports = m_mascotas