const http  = require("http")
const app = require("./index")
const port  = process.env.PORT || 3000


//createServer
const server = http.createServer(app)


server.listen(port , () => {
    console.log("server is listing on port 8000")
})