const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

// controladores
const { guardarUsuario, mostrarUsuarios, editarUsuario, eliminarUsuario } = require('./controllers/User.controller.js') 

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

async function DBconnection() {
  try {
    await mongoose.connect('mongodb://localhost:27017/api')
    console.log('>>> Conectado a la base de datos')
  } catch (error) {
    console.log('Error al conectarse a la base de datos: '+ error)
  }
}

DBconnection()

/* app.get('/usuarios', (req, res) => res.send('Hola Mundo'))
app.get('/tareas', (req, res) => res.send('Tareas desde el servidor')) */

app.post('/usuarios', guardarUsuario)
app.get('/usuarios', mostrarUsuarios)
app.put('/usuarios/:id', editarUsuario)
app.delete('/usuarios/:id', eliminarUsuario)

app.listen(port, () => console.log('Servidor ejecutandose'))