const Routes = require("express").Router()

Routes.get('/', (req, res) => {
    res.send("Hola Mundo")
})

module.exports = Routes