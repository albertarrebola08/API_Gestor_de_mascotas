// Cargamos la libreria multer para gestionar subidas de archivos
const multer = require('multer')



//***********  MULTER ******************/
//definimos el nombre de los archivos y donde (ruta) se van a subir
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'archivos/')
    },
    filename:  (req, file, cb)=> {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[1])
    }
})

//Creamos el objeto multer con la ubicación y nombre (storage)
var upload = multer({ storage: storage })















module.exports = upload.single('foto')

