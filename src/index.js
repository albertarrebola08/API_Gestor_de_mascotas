const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const dotenv = require('dotenv')
const r_usuarios = require('./rutas/r_usuarios')
const r_mascotas = require('./rutas/r_mascotas')
const r_registro = require('./rutas/r_registro')
const r_login = require('./rutas/r_login')
const r_upload = require('./rutas/r_upload')



dotenv.config()


//conexion base de datos 
const db = require('./database.js')

//verificar conexion con bd
db.on('error', function (err) {
    console.log('Se ha producido un error al conectar con la base de datos: ' + err.message);
})
db.on('connected', function () {
    console.log('La base de datos se ha conectado con éxito');
})







const app = express()
app.use(cors())

//parseadores
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//middleware
app.use('/api/usuarios', r_usuarios)
app.use('/api/mascotas', r_mascotas)
app.use('/api/registro', r_registro)
app.use('/api/login', r_login)
app.use('/api/upload', r_upload)



app.get('/', (req, res) => {
    res.send('Aqui estamos en la ruta principal');
})

//levanto server
const PORT = process.env.PORT
app.listen(PORT, (req, res) => {
    console.log('Escuchando en el puerto: ',PORT);


})