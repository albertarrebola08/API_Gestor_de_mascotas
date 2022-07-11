const express = require('express')

const {leerMascotas,anyadirMascota,leerMascotaId,editarMascotaId,borrarMascotaId} = require('../controladores/c_mascotas')

const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')

const r_mascotas = express.Router()





//peticion get
r_mascotas.get('/', leerMascotas)

//peticion post
r_mascotas.post('/',auth, rol(['registrado','admin']) ,anyadirMascota)

//leer mascota con id (get)
r_mascotas.get('/:id',auth, rol(['admin']),leerMascotaId)

//modificar mascota con id (put)
r_mascotas.put('/:id',auth, rol(['admin']),editarMascotaId)

//borrar mascota con id (delete)
r_mascotas.delete('/:id',auth, rol(['admin']),borrarMascotaId)

module.exports = r_mascotas

