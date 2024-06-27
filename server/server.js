const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

socket.emit("message", "Hello world, this is a message");

io.on("connection", (socket) => {
  console.log("A Client Connected");
  socket.on("message", (message) => {
    console.log("Recieved message From Client", message);
  });
});

io.on("connection", (socket) => {
  socket.on("chatMessage", (message) => {
    console.log("Recieved a message");
    io.emit("chatMessage", message);
  });
});

io.on("connection", (socket) => {
  socket.on("joinRoom", (room) => {
    socket.join(room);
    socket.emit("JoinedRoom", `You have joined a room ${room}`);
  });

  socket.on("messageToRoom", (data) => {
    const { room, message } = data;
    io.to(room).emit("message", message);
  });
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
