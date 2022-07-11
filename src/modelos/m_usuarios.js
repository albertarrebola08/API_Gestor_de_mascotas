const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nombre:String,
    user:String,
    pass:String,
    roles:[String]
})

//creamos el modelo
const m_usuarios = mongoose.model('usuarios', usuarioSchema)

module.exports = m_usuarios