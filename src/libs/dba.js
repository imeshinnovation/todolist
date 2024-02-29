const mongoose = require("mongoose")
require("dotenv").config().parsed
const env = process.env

const URI = `mongodb://${env.DB_USER}:${env.DB_PASSWD}@${env.DB_SERVER}:${env.DB_PORT}/${env.DBASE}?authSource=admin`

const dba = {
    connect: () => {
        mongoose.connect(URI).then(()=> console.log('Conexión Exitosa')).catch((err) => console.log('Error en la Conexión:', err))
    }
}

module.exports = dba