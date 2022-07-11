
const rol = (arrayRoles)=>{
    console.log(arrayRoles)
    return(
        (req,res,next) => {
            console.log('roles de req.query.roles: ',req.query.roles)
            //miramos si el usuario tiene los roles apropiados
            var permiso = false
            //recorremos roles del usuario
            req.query.roles.forEach(rol => {
                //si uno de estos roles esta dentro de los roles de los endpoints...
                if(arrayRoles.includes(rol)){
                    console.log('Tienes permisos (rol) para hacer esto')
                   
                    permiso = true
                }
            })
                if(permiso){
                    next()
                }
                else{
                    res.status(400).json({
                        mensaje: 'No tienes el rol necesario para hacer esto'
                    })
                }
            })
            
        }
    
module.exports = rol