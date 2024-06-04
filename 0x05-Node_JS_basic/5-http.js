// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    try {
      const filePath = process.argv[2];
      const studentsList = await countStudents(filePath);
      res.write(`${studentsList}\n`);
    } catch (err) {
      res.write(`${err.message}`);
    }

    res.end();
  } else {
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
