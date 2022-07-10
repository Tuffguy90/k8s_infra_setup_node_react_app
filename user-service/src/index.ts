import express from "express"
import { json } from "body-parser"
import axios from "axios"
import cors from "cors"
import "dotenv/config"
const config = require("../config.json")
const app = express()
const AUTH_HOST = config[process.env.ENV]?.AUTH_HOST
app.use(json())
app.use(cors())
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Helouser</h1>")
})
app.get("/fire", (req, res) => {
  axios
    .post(`${AUTH_HOST}/event`, {
      test: "data1",
    })
    .then(({ data }) => {
      console.log("event fired and response ", data)
      return res.status(200).json(data)
    })
    .catch((err) => {
      console.log("axios error", err)
      return res.status(500).json(err)
    })
})
app.listen(3001, () => {
  console.log(AUTH_HOST)
  console.log("user Service running on port 3001")
})
