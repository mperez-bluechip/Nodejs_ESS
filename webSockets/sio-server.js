var express = require('express'),
    http = require('http'),
    app = express(),
    server = http.createServer(app).listen(3000),
    io = require('socket.io')(server);

app.use(express.static("./public"));

io.on("connection", function(socket){
  socket.on("chat", function(message){
    socket.broadcast.emit("message", message);
  });
  socket.emit("message", "Welcome to Cyber Chat");
});

console.log("Starting Socket App - http://localhost:3000");
