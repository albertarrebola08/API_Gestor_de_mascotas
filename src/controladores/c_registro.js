
const m_usuarios = require('../modelos/m_usuarios')

const bcrypt = require('bcrypt') 

module.exports = {
    nuevoUsuario : async(req,res) => {
        //encriptamos la contrasenya
        const contraseñaEncriptada = await bcrypt.hash(req.body.pass, 10)
        bcrypt.hash(req.body.pass, 10, function(err,hash) {

        })
        usuario = new m_usuarios({
            nombre: req.body.nombre,
            user: req.body.user,
            pass: contraseñaEncriptada,
            roles: ['registrado']
        })
    try {
        const usuarioGuardado =  await usuario.save()
        res.json({
            usuario:usuarioGuardado,
            mensaje:'Estas en el controlador de c_registro'
        })
    }catch(err) {
        res.status(400).json({
            error:err,
            mensaje:'Error al registrar el usuario'
        })
    }

    
    }
}