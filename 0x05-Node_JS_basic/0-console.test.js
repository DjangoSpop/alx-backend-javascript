// 0-console.test.js
const displayMessage = require('./0-console');

test('should display the correct message', () => {
  const logSpy = jest.spyOn(console, 'log');
  const message = 'Hello, World!';

  displayMessage(message);

  expect(logSpy).toHaveBeenCalledWith(message);
  logSpy.mockRestore();
});
