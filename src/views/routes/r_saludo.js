const Routes = require("express").Router()

Routes.get('/', (req, res) => {
    res.send("Hola Soy un Saludo")
})

module.exports = Routes