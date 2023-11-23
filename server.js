// dependencias de proyecto
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
//dependencia de conexion
const connectarDB = require('./config/db.js')
//dependencias de las rutas 
const bootcampRoutes = require('./routes/bootcampRoutes.js')
const cursosRoutes = require('./routes/cursosRoutes.js')
// configurar dotenv
dotenv.config({
    path : './config/.env'
})
//conexion a base de datos mongo
connectarDB()

//crear objeto de app servidor express
const app = express()
//habilitar express para recibir body en forma json
app.use(express.json())
//establecer rutas de proyecto
app.use('/app/v1/bootcamps', bootcampRoutes )
app.use('/app/v1/cursos', cursosRoutes )
// crear el servidor de aplicaciones
app.listen( process.env.PORT, () => {
  console.log(`servidor ejecutando en puerto MERLINA ${process.env.PORT}`.bgCyan.yellow.underline)
})