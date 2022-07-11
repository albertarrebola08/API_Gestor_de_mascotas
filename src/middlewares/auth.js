
const m_usuarios = require('../modelos/m_usuarios')
const jwt = require('jsonwebtoken')



const auth = async (req,res,next)=>{
    //capturamos el token
    
    

    //desencriptamos el token
    const SECRETO = process.env.SECRETO 
    console.log(process.env.SECRETO)
    try{
        if(req.headers.authorization){
            var token = req.headers.authorization.split(' ')[1]
        }else{
            res.status(400).json({
                mensaje:'No tienes permisos'
            })
        }
        const tokenVerificado = jwt.verify(token, SECRETO)
        

        //buscamos en la bd el usuario con el id
        const usuarioEncontrado = await m_usuarios.findById(tokenVerificado.data.userID)
        
        req.query.userID = tokenVerificado.data.userID
        req.query.roles = tokenVerificado.data.roles

        next()
    }catch (err){
        res.status(500).json({
            err:'El error es :' + err,
            mensaje:'El token no es válido'
        })
    }
    
    
  
    
}
module.exports = auth


