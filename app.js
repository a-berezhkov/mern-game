const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("port") || 5000;

app.use(express.json({ extended: true }))

app.use("/api/auth", require("./routes/auth.routes"));


const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
  cors: {
    origin: "*",
  }
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    console.log('message: ' + msg);
  });

});

server.listen(3002, () => {
  console.log('listening on *:3002');
});

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}...`)
    );
  } catch (error) {
    console.log("Server error", error.message);
    process.exit(1);
  }
}

start();
