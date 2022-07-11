
const express = require('express');
const {leerUsuarios,borrarUsuarioId} = require('../controladores/c_usuarios')
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')
const r_usuarios = express.Router()

//llamar a los diferentes controladores para

//leer todos los usuarios (get)
r_usuarios.get('/',auth, rol(['admin']),leerUsuarios)

//borrar un unico usuario con el id (delete)
r_usuarios.delete('/:id',auth, rol(['admin']), borrarUsuarioId)

//

module.exports = r_usuarios