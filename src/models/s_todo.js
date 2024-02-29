const { Schema, model } = require("mongoose")

const todoSchema = new Schema({
    titulo: String,
    descripcion: String,
    responsable: String,
    tiempo: String,
    inicio: String,
    fin: String,
    prioridad: Number,
    comentario: String,
    estado: String,
    programacion: String,
    date_record: String
})

module.exports = model('Todo', todoSchema)