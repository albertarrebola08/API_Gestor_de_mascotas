const m_usuarios = require('../modelos/m_usuarios')



module.exports = {
    leerUsuarios : async(req,res) => {
        try{
            const verlistaUsuarios = await m_usuarios.find()
            res.json(verlistaUsuarios)
         }catch{ 
            res.json({
               error:error,
               mensaje: 'Oh no se ha podido realizar la peticion a la BD'
            })
         }
    },
    borrarUsuarioId : async(req,res) => {
        try{
            const id = req.params.id
            const usuarioEncontrado = await m_usuarios.findByIdAndDelete(id)
            res.json(usuarioEncontrado)
         }catch{ 
            res.json({
               error:error,
               mensaje: 'Oh no se ha podido realizar la peticion a la BD'
            })
         }
    },

}