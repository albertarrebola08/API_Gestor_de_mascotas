
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const m_usuarios = require('../modelos/m_usuarios')

const SECRETO = process.env.SECRETO || 'PEPINILLO'

module.exports = {
    anyadeDatosLogin : async(req, res) => {
        const user =  req.body.user
        const pass = req.body.pass

        //conectamos con la base de datos para buscar usuario
        try{
            //obtenemos el usuario con el user enviado

            const usuarioEncontrado = await m_usuarios.findOne({"user":user})
            //si la contraseña es igual...
            console.log(user,pass)
        
            if(bcrypt.compareSync(pass, usuarioEncontrado.pass)){
                //generar un token
               const token = await jwt.sign(
                    {
                        data: {
                            userID: usuarioEncontrado._id,
                            roles:usuarioEncontrado.roles,
                            user:usuarioEncontrado.user
                        } //datos que queremos encriptar
                    },
                    SECRETO, //palabra secreta para hacer la encriptación
                    {expiresIn:60 * 60} //una hora antes de caducar
                )

                res.status(200).json({
                    token,
                    userID: usuarioEncontrado._id,
                    user:usuarioEncontrado.user,
                    mensaje:'token OK',
                    rol:usuarioEncontrado.roles
    
                })
            }else{
                res.status(400).json({
                    mensaje:'La contraseña no es correcta'
                })
            }

        }catch(err){
            res.json({
                error:'EL ERROR ES' + err,
                mensaje:'Usuario no encontrado'
            })
        }
    }
}