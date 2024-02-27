const Routes = require("express").Router()

Routes.get('/', (req, res) => {
    console.log(req.headers["accept-language"])
    const header = req.headers["user-agent"]
    const hst = header.split(" ")
    const browser = hst.filter(words => words)
    browser.toString().includes("Chrome") ? res.send("Bienvenido") : res.send("Este Sitio Requiere de Safari")
})

module.exports = Routes