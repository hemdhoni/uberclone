const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const promClient = require("prom-client") //metrics collections
const app  = express()
const cookieParser = require("cookie-parser")
const dbconnect = require("./db/db")
const userRoutes = require("./routes/user.routes")


const cors = require("cors")

const collectDefaultMetrics = promClient.collectDefaultMetrics
collectDefaultMetrics({ register: promClient.register })

dbconnect() //db connection
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get("/" , (req,res) => {
    res.send("Hello World !")
})

app.get("/metrics" ,async  (req,res) => {
    res.setHeader("Content-Type" , promClient.register.contentType)
    const metrics = await promClient.register.metrics()
    res.send(metrics)
})

app.use("/users" , userRoutes)


module.exports = app