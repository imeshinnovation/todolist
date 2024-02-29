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

Routes.get("/one/:id?", async (req, res) => {
    res.json(await c_todo.one(req.params))
})

Routes.post("/add", async (req, res) => {
    res.json(await c_todo.add(req.body))
})

Routes.delete("/del", async (req, res) => {
    res.json(await c_todo.del(req.body))
})

Routes.put("/upd", async (req, res) => {
    res.json(await c_todo.upd(req.body))
})

module.exports = Routes