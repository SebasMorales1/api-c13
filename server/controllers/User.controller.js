const UserModel = require('../models/User.js')

async function guardarUsuario(req, res) {
  try {
    const data = req.body

    const newUsuario = new UserModel({
      nombre: data.nombre,
      apellido: data.apellido,
      edad: data.edad,
      fecha_nacimiento: data.fecha_nacimiento
    })

    await newUsuario.save()

    res.json({ message: 'Usuario creado exitosamente' })
  } catch (error) {
    console.log('Error al crear un nuevo usuario: ' + error)
  }
}

async function mostrarUsuarios(_, res) {
  try {
    const users = await UserModel.find()

    res.json({ usuarios: users })
  } catch (error) {
    console.log('Error al consultar los usuarios: ' + error)
  }
}

async function editarUsuario(req, res) {
  try {
    const { id } = req.params

    await UserModel.findByIdAndUpdate(id, req.body)

    res.json({ message: 'Usuario editado correctamente' })
  } catch (error) {
    console.log('Error al editar un usuario: ' + error)
  }
}

async function eliminarUsuario(req, res) {
  try {
    const { id } = req.params

    await UserModel.findByIdAndDelete(id)

    res.json({ message: 'Ususario eliminado exitosamente' })
  } catch (error) {
    console.log('Error al eliminar un usuario: ' + error)
  }
}

module.exports = { guardarUsuario, mostrarUsuarios, editarUsuario, eliminarUsuario }