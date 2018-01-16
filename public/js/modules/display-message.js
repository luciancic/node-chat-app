const displayMessage = function(message) {
  const messages = document.querySelector('#messages');
  const newMessage = document.createElement('p');
  const messageText = document.createTextNode(`${message.from}: "${message.text}"`);

  newMessage.appendChild(messageText);
  messages.appendChild(newMessage);
}
