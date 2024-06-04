process.stdout.write('Welcome to Holberton School, what is your name?\n');

const handleInput = (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
  process.stdin.removeListener('data', handleInput);
};

process.stdin.on('data', handleInput);