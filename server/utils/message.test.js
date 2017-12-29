const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate a new message', () => {
    let message = generateMessage('User', 'Message');
    expect(message).toInclude({
      from: 'User',
      text: 'Message'
    });
    expect(message.createdAt).toExist();
    expect(message.createdAt).toBeA('number');
  });
});
