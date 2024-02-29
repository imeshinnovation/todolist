const todo = require("../models/s_todo")
const { dateRecord } = require("../libs/helpers")

// READ
const all = async () => {
    return await todo.find({}).sort({ prioridad: 1, programacion: 1 }).lean()
}

const one = async (body) => {
    return await todo.findOne({ _id: body.id })
}

// CREATE

const add = async (body) => {
    body.date_record = dateRecord()
    return await todo.create(body)
}

// UPDATE

const upd = async (body) => {
    body.date_record = dateRecord()
    return await todo.updateOne({ _id: body.id }, { $set: body })
}

// DELETE

const del = async (body) => {
    return await todo.deleteOne({ _id: body.id })
}

module.exports = { all, add, upd, del, one }