const Routes = require("express").Router()
const c_todo = require("../../controllers/c_todo")

Routes.get('/', (req, res) => {
    console.log(req.headers["accept-language"])
    const header = req.headers["user-agent"]
    const hst = header.split(" ")
    const browser = hst.filter(words => words)
    browser.toString().includes("Chrome") ? res.send("Bienvenido") : res.send("Este Sitio Requiere de Safari")
})

Routes.get("/all", async (req, res) => {
    res.json(await c_todo.all())
})

Routes.post("/add", async (req, res) => {
    res.json(await c_todo.add(req.body))
})

module.exports = Routes