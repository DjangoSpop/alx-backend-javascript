const http = require('http');
const app = require('../4-http');

describe('HTTP server', () => {
  let server;

  beforeAll(() => {
    server = app.listen(1245);
  });

  afterAll(() => {
    server.close();
  });

  test('should respond with "Hello Holberton School!" for any endpoint', (done) => {
    const options = {
      hostname: 'localhost',
      port: 1245,
      path: '/any/endpoint',
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk.toString();
      });
      res.on('end', () => {
        expect(data).toEqual('Hello Holberton School!');
        done();
      });
    });

    req.on('error', (err) => {
      console.error(`Error: ${err.message}`);
    });

    req.end();
  });
});
