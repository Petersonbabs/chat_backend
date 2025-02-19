const express = require("express")
const {createServer} = require("node:http")
const {Server} = require("socket.io")

const app = express()
const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

const PORT = 4005

server.listen(PORT, ()=>{
    console.log(`listening to server on port `);
})

// app.get('/', (req, res)=>)

io.on("connection", (socket)=>{    
    console.log(socket.id + " just connected")
})