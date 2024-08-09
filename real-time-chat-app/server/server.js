const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors= require('cors')

const app = express();

app.use(cors({
    origin: '*'
}));

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: '*',
    }
});

// do something wheneve a new client is connected
io.on('connection', (socket) => {
    console.log('New user connected');

    // when a client sends a message, emit it to the client side(handled there)
    socket.on('sendMessage', (message) => {
        io.emit('message', message);
    });
  
    // on disconnect message..
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});