// mongodb+srv://albertarrebola8:trebla8@cluster0.nkzvv.mongodb.net/bd_app_mascotas?retryWrites=true&w=majority

const mongoose = require('mongoose')


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nkzvv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri,{
    useNewUrlParser:true, useUnifiedTopology:true
})

const db = mongoose.connection


module.exports = db