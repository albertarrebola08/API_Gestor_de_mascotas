const fs = require('fs-extra')

module.exports = {
    subirArchivo : async(req,res) =>{
        const archivo = req.body
        res.json({
            mensaje: 'Estás subiendo un archivo mediante POST',
            archivo:archivo
        })
    },
    borrarArchivoId :  async (req,res) =>{
        const archivo = req.params.id
        try {
            await fs.remove('archivos/'+archivo)
            console.log('success!')
             res.json({
                mensaje: 'OK '+ archivo +' ha sido borrado'
            })
        } catch (error) {
         res.json({
             mensaje: 'No va borrar archivos',
             error:'El error es este: ', error
         })
        }    
    }
}