const express = require('express')
const { json, urlencoded } = express
const morgan = require("morgan")
require("dotenv").config().parsed
const env = process.env
const dba = require("./libs/dba")

dba.connect()

const { main, todo, saludo } = require('./views')

const app_jP79 = express()

// Middlewares
app_jP79.use(morgan("dev"))
app_jP79.use(json())
app_jP79.use(urlencoded({ extended: true }))

app_jP79.use('/', main)
app_jP79.use('/api/todo', todo)
app_jP79.use('/api/saludo', saludo)

app_jP79.listen(env.PORT, env.IP, () => {
    console.log(`Backend Escuchando en el Puerto: ${env.PORT}`)
})