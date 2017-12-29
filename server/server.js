require('./config/config.js')
const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const indexPath = publicPath + '/index.html';
const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New client connected to server');

  socket.emit('newMessage', generateMessage('Mr. Server', 'You have just joined the chat!'));

  socket.broadcast.emit('newMessage', generateMessage('Mr. Server', 'A new user joined the chat!'));

  socket.on('createMessage', (message) => {
    console.log('Client created an email: ', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected from server');
  });
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
