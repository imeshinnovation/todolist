const express = require('express')
require("dotenv").config().parsed
const env = process.env

const { main, todo, saludo } = require('./views')

const app_jP79 = express()

app_jP79.use('/', main)
app_jP79.use('/api/todo', todo)
app_jP79.use('/api/saludo', saludo)

app_jP79.listen(env.PORT, env.IP, () => {
    console.log(`Example app listening on port ${env.PORT}`)
})