const socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('newMessage', function (message) {
  const messages = document.querySelector('#messages');
  const newMessage = document.createElement('p');
  const messageText = document.createTextNode(message.from + ': "' + message.text + '"');
  newMessage.appendChild(messageText);
  messages.appendChild(newMessage);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
