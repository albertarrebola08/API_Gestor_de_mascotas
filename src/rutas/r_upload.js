const express = require('express');
const upload = require('../middlewares/uploadFile')
const r_upload = express.Router()

const {subirArchivo,borrarArchivoId} = require('../controladores/c_upload')

//subir archivo mediante POST
r_upload.post('/', upload,subirArchivo)

//borrar un archivo concreto con id mediante DELETE y el param (url)
r_upload.delete('/:id',borrarArchivoId)

module.exports = r_upload