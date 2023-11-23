const express = require('express')
const coursesModel = require('../models/coursesModel')
const {default: mongoose} = require('mongoose')
//definir ruteador
const router = express.Router()



//definir rurtas de cursos
router.get('/', async (req, res) =>{
    //seleccionar todos los cursos en la colexion
    try {
        const cursos= 
            await coursesModel.find()
            if(cursos.length ===0){ 
                 res.
                    status(400).
                    json({
                        success: false,
                        msg:"no hay cursos en la collection merlina"
                    })
            }else{
                res.
                    status(200).
                    json({
                        success: true,
                        data:cursos
                    }) 
            }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
            
        })
    }
   
})

//seleccionar bootcamp por id
router.get('/:id', async (req,res) => {
    try {
        //recoger el parametro id de la url
    cursosid =req.params.id
    if(!mongoose.Types.ObjectId.isValid(cursosid)){
        res.status(400).json({
            success: false,
            msg: "el id no es valido"
        })
    }else{
        //selecionar el bootcamp por id
        selected_cursos = await coursesModel.findById(cursosid)
        if(selected_cursos){

            res.status(200).json({
                    success:true,
                    result:selected_cursos
                })
        }else{
            res.status(400).json({
                succces:false,
                msg:`no se encontro el bootcamp Merlina ${cursosid}`
            })
        }
    }
    //enviar respuesta
    } catch (error) {
        res.status(error.status).json(
        {
            success: false,
            msg: error.message
        })
    }

})


//crear cursos
 router.post('/', async(req, res) =>{
    try {
        const newBootcamp = await coursesModel.create(req.body)
        res.status(201).json({
            success: true,
            result: newBootcamp
        })   
    } catch (error) {
        res.status(500).json({
            succces:false,
            msg: error.message
        })
    }
 })

router.put('/:id', async(req, res)=>{
    try {
        //recoger el parametro id de la url
    cursosid =req.params.id
    if(!mongoose.Types.ObjectId.isValid(cursosid)){
        res.status(400).json({
            success: false,
            msg: "el id no es valido"
        })
    }else{
        //selecionar el bootcamp por id
        selected_cursos = await coursesModel.findByIdAndUpdate(cursosid,
                                                                 req.body,
                                                                {
                                                                    new: true
                                                                })
        if(selected_cursos){

            res.status(200).json({
                    success:true,
                    result:selected_cursos
                })
        }else{
            res.status(400).json({
                succces:false,
                msg:`no se encontro el bootcamp Merlina ${cursosid}`
            })
        }
    }
    //enviar respuesta
    } catch (error) {
        res.status(error.status).json(
        {
            success: false,
            msg: error.message
        })
    }
})

router.delete("/:id", async(req, res)=>{
    try {
        //recoger el parametro id de la url
    cursosid =req.params.id
    if(!mongoose.Types.ObjectId.isValid(cursosid)){
        res.status(400).json({
            success: false,
            msg: "el id no es valido"
        })
    }else{
        //selecionar el bootcamp por id
        selected_cursos = await coursesModel.findByIdAndDelete(cursosid,
                                                                 req.body,
                                                                {
                                                                    new: true
                                                                })
        if(selected_cursos){

            res.status(200).json({
                    success:true,
                    result:selected_cursos
                })
        }else{
            res.status(400).json({
                succces:false,
                msg:`no se encontro el bootcamp Merlina ${cursosid}`
            })
        }
    }
    //enviar respuesta
    } catch (error) {
        res.status(error.status).json(
        {
            success: false,
            msg: error.message
        })
    }
})


module.exports = router