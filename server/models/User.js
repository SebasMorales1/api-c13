const mongoose = require('mongoose')

const User = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },

  apellido: {
    type: String,
    required: true,
    trim: true
  },

  edad: {
    type: Number,
    required: true
  },

  fecha_nacimiento: {
    type: Date,
    //default: Date.now()
  }
})

module.exports = mongoose.model('Usuario', User)