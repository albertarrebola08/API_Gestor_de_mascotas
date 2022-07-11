const express = require('express')

const r_registro = express.Router()

const {nuevoUsuario} = require('../controladores/c_registro')


//añadimos un registro mediante POST
r_registro.post('/',nuevoUsuario)







module.exports = r_registro