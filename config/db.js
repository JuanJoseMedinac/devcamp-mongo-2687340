const mongoose = require ('mongoose')
const colors = require('colors')

const conectarDB = async () => {
  const conn = await  mongoose.connect('mongodb://127.0.0.1:27017/devcamp-ptech')

  console.log("mongodb conectado".bgBlue.bgRed)
}

module.exports = conectarDB

/*funcion para conexion a bd
const connectDB = async() =>{
    //crear el objeto de conexion
 const conn = await mongoose.connect( process.env.MONGO_URL )
 console.log (`mongodb conectado en el host: ${conn.connection.host}`.bgMagenta.green)

}

module.exports = connectDB*/