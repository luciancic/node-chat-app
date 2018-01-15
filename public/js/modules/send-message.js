const messageButton = document.querySelector('#message-send');
const messageInput = document.querySelector('#message-input');

messageButton.onclick = function(e) {
  e.preventDefault();
  socket.emit('createMessage', {from: 'someone', text: messageInput.value});

  messageInput.value = '';
};
