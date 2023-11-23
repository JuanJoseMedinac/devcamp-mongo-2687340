const mongoose = require('mongoose')
//definir el schema
//plano gral de todo bootcamp

const bootcampSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "nombre requerido"],
        unique: [true, "nombre requerido"]
    },
    phone:{
        type: Number,
        required: [true, "telefono requerido"],
        max: [9999999999, "telefono muy largo"]
    },
    address:{
        type: String,
        required: [true, "direccion requerida"],
        maxlength: [50, "direccion muy larga"],
        minlength: [10, "direccion muy corta"]
    },
    topics:{
        type: [ String ],
        enum: ["AI", "Backend", "Frotend", "Devops"]
    },
    createdAt: Date
})

//exportacion del modelo
const bootcampModel = mongoose.model("Bootcamp", bootcampSchema)

module.exports = bootcampModel
 