process.stdout.write('Welcome to Holberton School, what is your name?\n');
// Arrow function
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});
// Arrow function
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
module.exports = process;
