const express = require('express');
const m_mascotas = require('../modelos/m_mascotas')

module.exports = {  
   leerMascotas : async (req,res)=>{
      //leer de la base de datos
      try{
         const verlistaMascotas = await m_mascotas.find()
         res.json(verlistaMascotas)
         console.log(verlistaMascotas)
      }catch{ 
         res.json({
            error:error,
            mensaje: 'Oh no se ha podido realizar la peticion a la BD'
         })
      }
      
   },

   anyadirMascota : async (req,res)=>{
      const mascota = new m_mascotas({
         nombre:req.body.nombre,
         descripcion:req.body.descripcion
      })

      try{
         const mascotaGuardada = await mascota.save()
         res.json(mascotaGuardada)
      }catch{ 
         res.json({
            error:error,
            mensaje: 'Oh no se ha podido realizar la peticion a la BD'
         })
      }
   },
   leerMascotaId : async(req,res)=>{
      
      try{
         const id = req.params.id
         const mascotaEncontrada = await m_mascotas.findById(id)
         res.json(mascotaEncontrada)
      }catch{ 
         res.json({
            error:error,
            mensaje: 'Oh no se ha podido realizar la peticion a la BD'
         })
      }
   },
   editarMascotaId : async(req,res)=>{
      
      try{
         const id = req.params.id
         const mascotaEncontrada = await m_mascotas.findById(id)
         res.json(mascotaEncontrada)
      }catch{ 
         res.json({
            error:error,
            mensaje: 'Oh no se ha podido realizar la peticion a la BD'
         })
      }
   },
   borrarMascotaId : async (req,res)=>{
      try{
         const id = req.params.id
         const mascotaEncontrada = await m_mascotas.findByIdAndDelete(id)
         res.json(mascotaEncontrada)
      }catch{ 
         res.json({
            error:error,
            mensaje: 'Oh no se ha podido realizar la peticion a la BD'
         })
      }

   }
}
     



