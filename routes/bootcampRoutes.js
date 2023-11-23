const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const {default: mongoose} = require('mongoose')
//definir ruteador
const router = express.Router()



//definir rurtas de bootcamps
router.get('/', async (req, res) =>{
    //seleccionar todos los bootcamps en la colexion
    try {
        const bootcamps= 
            await bootcampModel.find()
            if(bootcamps.length ===0){
                 res.
                    status(400).
                    json({
                        success: false,
                        msg:"no hay bootcamps en la collection merlina"
                    })
            }else{
                res.
                    status(200).
                    json({
                        success: true,
                        data:bootcamps
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
    bootcampsid =req.params.id
    if(!mongoose.Types.ObjectId.isValid(bootcampsid)){
        res.status(400).json({
            success: false,
            msg: "el id no es valido"
        })
    }else{
        //selecionar el bootcamp por id
        selected_bootcamp = await bootcampModel.findById(bootcampsid)
        if(selected_bootcamp){

            res.status(200).json({
                    success:true,
                    result:selected_bootcamp
                })
        }else{
            res.status(400).json({
                succces:false,
                msg:`no se encontro el bootcamp Merlina ${bootcampsid}`
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


//crear bootcamps
 router.post('/', async(req, res) =>{
    try {
        const newBootcamp = await bootcampModel.create(req.body)
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
    bootcampsid =req.params.id
    if(!mongoose.Types.ObjectId.isValid(bootcampsid)){
        res.status(400).json({
            success: false,
            msg: "el id no es valido"
        })
    }else{
        //selecionar el bootcamp por id
        selected_bootcamp = await bootcampModel.findByIdAndUpdate(bootcampsid,
                                                                 req.body,
                                                                {
                                                                    new: true
                                                                })
        if(selected_bootcamp){

            res.status(200).json({
                    success:true,
                    result:selected_bootcamp
                })
        }else{
            res.status(400).json({
                succces:false,
                msg:`no se encontro el bootcamp Merlina ${bootcampsid}`
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
    bootcampsid =req.params.id
    if(!mongoose.Types.ObjectId.isValid(bootcampsid)){
        res.status(400).json({
            success: false,
            msg: "el id no es valido"
        })
    }else{
        //selecionar el bootcamp por id
        selected_bootcamp = await bootcampModel.findByIdAndDelete(bootcampsid,
                                                                 req.body,
                                                                {
                                                                    new: true
                                                                })
        if(selected_bootcamp){

            res.status(200).json({
                    success:true,
                    result:selected_bootcamp
                })
        }else{
            res.status(400).json({
                succces:false,
                msg:`no se encontro el bootcamp Merlina ${bootcampsid}`
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