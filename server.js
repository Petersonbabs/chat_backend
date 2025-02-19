const express = require("express")
const {createServer} = require("node:http")
const {Server} = require("socket.io")
const cors = require("cors");

const app = express()
const server = createServer(app)

app.use(cors({
    origin: ["http://localhost:5173", "https://chat-sqi.vercel.app"],
    methods: ["GET", "POST"]
}));

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "https://chat-sqi.vercel.app"]
    }
})

const PORT = 4005

server.listen(PORT, ()=>{
    console.log(`listening to server on port `);
})

// app.get('/', (req, res)=>)

io.on("connection", (socket)=>{    
    console.log(socket.id + " just connected")

    socket.on("sendMessage", (message)=>{
        console.log(`${socket.id}: ${message}`);
        io.emit("receiveMessage", message) // broadcast all sockets
    })

    socket.on("disconnect", ()=>{
        console.log(socket.id + " disconnected");
        
    })
})