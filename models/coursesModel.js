const mongoose = require('mongoose')
//definir el schema
//plano gral de todo bootcamp

const coursesSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, "Titulo Requerido"],
        maxlength: [30, "Titulo muy largo"],
        minlength: [10, "Titulo muy corto"]
    },
    description:{
        type: String,
        required: [true, "Descripcion requerida"],
        minlength: [10, "Descripcion muy corta"]
    },
    weeks:{
        type: Number,
        required: [true, "requerido"],
        max: [9, "Semana maxima"],
        
    },
    enroll_cost:{
        type:  Number ,
        required: [true, "pago requerido"]
    },
    minimum_skill:{
        type:  [String] ,
        enum: ["Beginner", "Intermediate", "Advanced", "Expert"]
    },
   
})



//exportacion del modelo
const coursesModel = mongoose.model("cursos", coursesSchema)

module.exports = coursesModel
 