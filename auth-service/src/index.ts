import express from "express"
import { json } from "body-parser"
import cors from "cors"
const app = express()

app.use(json())
app.use(cors())
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Helo</h1>")
})
app.get("/auth", (req, res) => {
  return res.status(200).send("<h1>Helo auth</h1>")
})
app.get("/fire", (req, res) => {
  return res.status(200).send("<h1>Helo 222</h1>")
})
app.post("/event", (req, res) => {
  return res.status(200).json({
    message: "Success",
    data: req.body.test,
  })
})
app.listen(3002, () => {
  console.log("v2")
  console.log("Auth Service running on port 3002")
})
